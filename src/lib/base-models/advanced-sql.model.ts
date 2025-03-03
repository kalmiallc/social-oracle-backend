import { prop } from '@rawmodel/core';
import { dateParser, integerParser } from '@rawmodel/parsers';
import { presenceValidator } from '@rawmodel/validators';
import { PoolConnection } from 'mysql2/promise';
import { ErrorCode, PopulateFrom, SerializeFor, SqlModelStatus } from '../../config/types';
import { Context } from '../../context';
import { BaseSQLModel } from './base-sql.model';

/**
 * Common model related objects.
 */
export { prop };

export abstract class AdvancedSQLModel extends BaseSQLModel {
  /**
   * id
   */
  @prop({
    parser: { resolver: integerParser() },
    serializable: [SerializeFor.USER, SerializeFor.ADMIN, SerializeFor.SELECT_DB, SerializeFor.SERVICE, SerializeFor.WORKER],
    populatable: [PopulateFrom.DB]
  })
  public id: number;

  /**
   * status
   */
  @prop({
    parser: { resolver: integerParser() },
    populatable: [PopulateFrom.DB, PopulateFrom.ADMIN],
    serializable: [
      SerializeFor.USER,
      SerializeFor.ADMIN,
      SerializeFor.INSERT_DB,
      SerializeFor.UPDATE_DB,
      SerializeFor.SELECT_DB,
      SerializeFor.SERVICE
    ],
    validators: [
      {
        resolver: presenceValidator(),
        code: ErrorCode.STATUS_NOT_PRESENT
      }
    ],
    defaultValue: SqlModelStatus.ACTIVE,
    fakeValue() {
      return SqlModelStatus.ACTIVE;
    }
  })
  public status?: number;

  /**
   * Created at property definition.
   */
  @prop({
    parser: { resolver: dateParser() },
    serializable: [SerializeFor.USER, SerializeFor.ADMIN, SerializeFor.SELECT_DB],
    populatable: [PopulateFrom.DB]
  })
  public createTime?: Date;

  /**
   * Updated at property definition.
   */
  @prop({
    parser: { resolver: dateParser() },
    serializable: [SerializeFor.USER, SerializeFor.ADMIN, SerializeFor.SELECT_DB],
    populatable: [PopulateFrom.DB]
  })
  public updateTime?: Date;

  /**
   * User who created the object
   */
  @prop({
    serializable: [
      // SerializeFor.PROFILE,
      SerializeFor.ADMIN,
      SerializeFor.INSERT_DB
      // SerializeFor.SELECT_DB
    ],
    populatable: [PopulateFrom.DB]
  })
  public createUser?: number;

  /**
   * User who created the object
   */
  @prop({
    serializable: [
      // SerializeFor.PROFILE,
      SerializeFor.ADMIN,
      SerializeFor.INSERT_DB,
      SerializeFor.UPDATE_DB
      // SerializeFor.SELECT_DB
    ],
    populatable: [PopulateFrom.DB]
  })
  public updateUser?: number;

  /**
   * Advanced SQL model constructor.
   * @param data Model data.
   * @param context Application context.
   */
  public constructor(data: any, context?: Context) {
    super(data, context);
  }

  /**
   * Tells if the model represents a document stored in the database.
   * @returns Model existence status.
   */
  public exists(): boolean {
    return !!this.id;
  }

  /**
   * Tells if the model is enabled.
   * @returns Model status.
   */
  public isEnabled() {
    return this.status !== SqlModelStatus.DELETED;
  }

  /**
   * Populates model fields by loading the document with the provided id from the database.
   * @param id Document's ID.
   */
  public async populateById(id: number | string, conn?: PoolConnection, forUpdate = false): Promise<this> {
    if (!id) {
      throw new Error('ID should not be null');
    }

    if (!this.hasOwnProperty('id')) {
      throw new Error('Object does not contain id property');
    }

    this.reset();

    const data = await this.getContext().mysql.paramExecute(
      `
      SELECT *
      FROM \`${this.tableName}\`
      WHERE id = @id AND status <> ${SqlModelStatus.DELETED}
      ${conn && forUpdate ? 'FOR UPDATE' : ''};
      `,
      { id },
      conn
    );

    return data?.length ? this.populate(data[0], PopulateFrom.DB) : this.reset();
  }

  public async populateByName(name: string, conn?: PoolConnection, forUpdate = false): Promise<this> {
    if (!this.hasOwnProperty('name')) {
      throw new Error('Object does not contain name property');
    }

    if (!name) {
      return this.reset();
    }
    const data = await this.db().paramExecute(
      `
      SELECT *
      FROM ${this.tableName}
      WHERE name = @name
      ${conn && forUpdate ? 'FOR UPDATE' : ''}
    `,
      { name },
      conn
    );

    return data?.length ? this.populate(data[0], PopulateFrom.DB) : this.reset();
  }

  /**
   * Populates model fields by loading the document with the provided uuid from the database.
   * @param uuid Document's UUID.
   * @param uuid_property UUID property name.
   * @param conn Database connection.
   * @returns Populated model.
   */
  public async populateByUUID(
    uuid: string,
    uuid_property?: string, // Nullable because not needed in derived classes
    conn?: PoolConnection
  ): Promise<this> {
    if (!uuid || !uuid_property) {
      throw new Error(`uuid should not be null: ${uuid_property}: ${uuid}`);
    }

    const data = await this.getContext().mysql.paramExecute(
      `
        SELECT *
        FROM \`${this.tableName}\`
        WHERE ${uuid_property} = @uuid
        AND status <> ${SqlModelStatus.DELETED};
      `,
      { uuid },
      conn
    );

    return data?.length ? this.populate(data[0], PopulateFrom.DB) : this.reset();
  }

  /**
   * Saves model data in the database as a new document.
   */
  public async insert(strategy: SerializeFor = SerializeFor.INSERT_DB, conn?: PoolConnection, insertIgnore?: boolean): Promise<this> {
    this.createUser = this.getContext()?.user?.id;
    this.updateUser = this.getContext()?.user?.id;

    const serializedModel = this.serialize(strategy);
    let isSingleTrans = false;
    if (!conn) {
      isSingleTrans = true;
      conn = await this.getContext().mysql.start();
    }
    try {
      const createQuery = `
      INSERT ${insertIgnore ? 'IGNORE' : ''} INTO \`${this.tableName}\`
      ( ${Object.keys(serializedModel)
        .map((x) => `\`${x}\``)
        .join(', ')} )
      VALUES (
        ${Object.keys(serializedModel)
          .map((key) => `@${key}`)
          .join(', ')}
      )`;

      const response = await this.getContext().mysql.paramExecute(createQuery, serializedModel, conn);
      if (!this.id) {
        this.id = (response as any).insertId;
        if (!this.id) {
          const req = await this.getContext().mysql.paramExecute('SELECT last_insert_id() AS id;', null, conn);
          this.id = req[0].id;
        }
      }

      this.createTime = new Date();
      this.updateTime = this.createTime;
      if (isSingleTrans) {
        await this.getContext().mysql.commit(conn);
      }
    } catch (err) {
      if (isSingleTrans) {
        await this.getContext().mysql.rollback(conn);
      }
      throw new Error(err);
    }

    return this;
  }

  /**
   * Updates model data in the database.
   */
  public async update(strategy: SerializeFor = SerializeFor.UPDATE_DB, conn?: PoolConnection): Promise<this> {
    this.updateUser = this.getContext()?.user?.id;

    const serializedModel = this.serialize(strategy);

    // remove non-updatable parameters
    delete serializedModel.id;
    delete serializedModel.createTime;
    delete serializedModel.updateTime;

    let isSingleTrans = false;
    if (!conn) {
      isSingleTrans = true;
      conn = await this.getContext().mysql.start();
    }

    try {
      const createQuery = `
      UPDATE \`${this.tableName}\`
      SET
        ${Object.keys(serializedModel)
          .map((x) => `\`${x}\` = @${x}`)
          .join(',\n')}
      WHERE id = @id
      `;

      // re-set id parameter for where clause.
      serializedModel.id = this.id;

      await this.getContext().mysql.paramExecute(createQuery, serializedModel, conn);

      this.updateTime = new Date();
      if (isSingleTrans) {
        await this.getContext().mysql.commit(conn);
      }
    } catch (err) {
      if (isSingleTrans) {
        await this.getContext().mysql.rollback(conn);
      }
      throw new Error(err);
    }

    return this;
  }

  /**
   * Creates or updates model data in the database. Upsert can only be used if ID is present, otherwise INSERT will be called.
   * @param conn Pool connection if in transaction
   * @param forceUpsert Force duplicate check even if no ID on the model.
   * @param insertStrategy insert serialization strategy
   * @param updateStrategy update serialization strategy
   * @returns updated model
   */
  public async upsert(
    conn: PoolConnection,
    forceUpsert = false,
    insertStrategy: SerializeFor = SerializeFor.INSERT_DB,
    updateStrategy: SerializeFor = SerializeFor.UPDATE_DB
  ): Promise<any> {
    this.updateUser = this.getContext()?.user?.id;

    // if no id is known, call insert
    if (this.id === null || this.id === undefined) {
      this.createUser = this.getContext()?.user?.id;
      if (!forceUpsert) {
        try {
          return await this.insert(insertStrategy, conn);
        } catch (err) {
          console.error('Insert failed! Trying upsert instead.', err);
        }
      }
    }

    const response = await super.upsert(conn, forceUpsert, insertStrategy, updateStrategy);
    if (!this.id) {
      this.id = (response as any).insertId || null;
    }
    return this;
  }

  /**
   * Marks document in the database as deleted.
   */
  public async markDeleted(conn?: PoolConnection): Promise<this> {
    this.updateUser = this.getContext()?.user?.id;

    this.status = SqlModelStatus.DELETED;
    try {
      await this.update(SerializeFor.INSERT_DB, conn);
    } catch (err) {
      this.reset();
      throw err;
    }
    return this;
  }

  /*
   * Deletes document from the database
   */
  public async delete(conn?: PoolConnection): Promise<this> {
    let isSingleTrans = false;
    if (!conn) {
      isSingleTrans = true;
      conn = await this.getContext().mysql.start();
    }

    try {
      const createQuery = `
      DELETE FROM \`${this.tableName}\`
      WHERE id = @id
      `;

      await this.getContext().mysql.paramExecute(createQuery, { id: this.id }, conn);

      if (isSingleTrans) {
        await this.getContext().mysql.commit(conn);
      }
    } catch (err) {
      if (isSingleTrans) {
        await this.getContext().mysql.rollback(conn);
      }
      throw new Error(err);
    }

    return this;
  }

  /**
   *  reloads model from database
   */
  public async reload() {
    const id = this.id;
    this.reset();
    return await this.populateById(id);
  }
}
