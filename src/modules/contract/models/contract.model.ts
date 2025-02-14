import { prop } from '@rawmodel/core';
import { integerParser, stringParser } from '@rawmodel/parsers';
import { DbTables, PopulateFrom, SerializeFor } from '../../../config/types';
import { AdvancedSQLModel } from '../../../lib/base-models/advanced-sql.model';
import { PoolConnection } from 'mysql2/promise';

/**
 * List of contract IDs.
 */
export enum ContractId {
  FPMM_FACTORY = 1,
  ORACLE = 2
}

/**
 * Contract model.
 */
export class Contract extends AdvancedSQLModel {
  /**
   * Contract's outcome table.
   */
  public tableName = DbTables.CONTRACT;

  /**
   * Contract name.
   */
  @prop({
    parser: {
      resolver: stringParser()
    },
    serializable: [SerializeFor.USER, SerializeFor.SELECT_DB, SerializeFor.UPDATE_DB, SerializeFor.INSERT_DB],
    populatable: [PopulateFrom.DB, PopulateFrom.USER]
  })
  public name: string;

  /**
   * Contract address.
   */
  @prop({
    parser: {
      resolver: stringParser()
    },
    serializable: [SerializeFor.USER, SerializeFor.SELECT_DB, SerializeFor.INSERT_DB],
    populatable: [PopulateFrom.DB, PopulateFrom.USER]
  })
  public contractAddress: string;

  /**
   * Last processed block.
   */
  @prop({
    parser: { resolver: integerParser() },
    populatable: [PopulateFrom.DB],
    serializable: [SerializeFor.USER, SerializeFor.SELECT_DB, SerializeFor.INSERT_DB, SerializeFor.UPDATE_DB]
  })
  public lastProcessedBlock: number;

  /**
   * Last processed block.
   */
  @prop({
    parser: { resolver: integerParser() },
    populatable: [PopulateFrom.DB],
    serializable: [SerializeFor.USER, SerializeFor.SELECT_DB, SerializeFor.INSERT_DB, SerializeFor.UPDATE_DB]
  })
  public parseBlockSize: number;

  /**
   * Updates last processed block.
   * @param lastProcessedBlock New last processed block.
   * @param conn Pool connection.
   */
  public async updateLastProcessedBlock(lastProcessedBlock: number, conn?: PoolConnection) {
    await this.db().paramExecute(
      `
        UPDATE ${DbTables.CONTRACT}
        SET lastProcessedBlock = @lastProcessedBlock
        WHERE id = @contractId
      `,
      {
        contractId: this.id,
        lastProcessedBlock: (this.lastProcessedBlock = lastProcessedBlock)
      },
      conn
    );
  }
}
