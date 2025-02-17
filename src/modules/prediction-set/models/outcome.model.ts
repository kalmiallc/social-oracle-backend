import { prop } from '@rawmodel/core';
import { integerParser, stringParser } from '@rawmodel/parsers';
import { presenceValidator } from '@rawmodel/validators';
import { PoolConnection } from 'mysql2/promise';
import { DbTables, PopulateFrom, SerializeFor, SqlModelStatus, ValidatorErrorCode } from '../../../config/types';
import { AdvancedSQLModel } from '../../../lib/base-models/advanced-sql.model';
import { OutcomeChance } from './outcome-chance.model';

/**
 * Prediction set outcome.
 */
export class Outcome extends AdvancedSQLModel {
  /**
   * Prediction set's outcome table.
   */
  public tableName = DbTables.OUTCOME;

  /**
   * Prediction set ID.
   */
  @prop({
    parser: { resolver: integerParser() },
    populatable: [PopulateFrom.DB],
    serializable: [SerializeFor.USER, SerializeFor.SELECT_DB, SerializeFor.INSERT_DB]
  })
  public prediction_set_id: number;

  /**
   * Outcome index.
   */
  @prop({
    parser: { resolver: integerParser() },
    populatable: [PopulateFrom.DB],
    serializable: [SerializeFor.USER, SerializeFor.SELECT_DB, SerializeFor.INSERT_DB]
  })
  public outcomeIndex: number;

  /**
   * Outcome on chain position ID.
   */
  @prop({
    parser: { resolver: stringParser() },
    populatable: [PopulateFrom.DB],
    serializable: [SerializeFor.USER, SerializeFor.SELECT_DB, SerializeFor.INSERT_DB, SerializeFor.UPDATE_DB]
  })
  public positionId: string;

  /**
   * Outcome name.
   */
  @prop({
    parser: {
      resolver: stringParser()
    },
    serializable: [SerializeFor.USER, SerializeFor.SELECT_DB, SerializeFor.UPDATE_DB, SerializeFor.INSERT_DB],
    populatable: [PopulateFrom.DB, PopulateFrom.USER],
    validators: [
      {
        resolver: presenceValidator(),
        code: ValidatorErrorCode.OUTCOME_NAME_NOT_PRESENT
      }
    ]
  })
  name: string;

  /**
   * Img URL.
   */
  @prop({
    parser: {
      resolver: stringParser()
    },
    serializable: [SerializeFor.USER, SerializeFor.SELECT_DB, SerializeFor.UPDATE_DB, SerializeFor.INSERT_DB],
    populatable: [PopulateFrom.DB, PopulateFrom.USER]
  })
  imgUrl: string;

  @prop({
    parser: { resolver: OutcomeChance },
    serializable: [SerializeFor.USER],
    populatable: [PopulateFrom.DB],
    defaultValue: () => null
  })
  latestChance: OutcomeChance;

  /**
   * Populated model by index and prediction set ID.
   * @param outcomeIndex Outcome index.
   * @param predictionSetId Prediction set ID.
   * @param conn Pool connection.
   * @param forUpdate Lock model for update.
   * @returns Populated model.
   */
  public async populateByIndexAndPredictionSetId(
    outcomeIndex: number,
    predictionSetId: number,
    conn?: PoolConnection,
    forUpdate = false
  ): Promise<this> {
    this.reset();

    const data = await this.getContext().mysql.paramExecute(
      `
        SELECT *
        FROM ${DbTables.OUTCOME}
        WHERE
          outcomeIndex = @outcomeIndex
          AND prediction_set_id = @predictionSetId
          AND status <> ${SqlModelStatus.DELETED}
        ${conn && forUpdate ? 'FOR UPDATE' : ''};
      `,
      {
        outcomeIndex,
        predictionSetId
      },
      conn
    );

    return data?.length ? this.populate(data[0], PopulateFrom.DB) : this.reset();
  }
}
