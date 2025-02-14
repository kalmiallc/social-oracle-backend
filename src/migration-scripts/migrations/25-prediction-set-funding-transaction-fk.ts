import { DbTables } from '../../config/types';

const FK_PREDICTION_SET_FUNDING_TRANSACTION_PREDICTION_SET_ID = 'fk_prediction_set_funding_transaction__prediction_set_id';
const FK_PREDICTION_SET_FUNDING_TRANSACTION_USER_ID = 'fk_prediction_set_funding_transaction__user_id';

export async function upgrade(queryFn: (query: string, values?: any[]) => Promise<any[]>): Promise<void> {
  await queryFn(`
  ALTER TABLE \`${DbTables.PREDICTION_SET_FUNDING_TRANSACTION}\`
    ADD CONSTRAINT \`${FK_PREDICTION_SET_FUNDING_TRANSACTION_PREDICTION_SET_ID}\`
      FOREIGN KEY (\`prediction_set_id\`)
      REFERENCES \`${DbTables.PREDICTION_SET}\` (\`id\`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
    ADD CONSTRAINT \`${FK_PREDICTION_SET_FUNDING_TRANSACTION_USER_ID}\`
      FOREIGN KEY (\`user_id\`)
      REFERENCES \`${DbTables.USER}\` (\`id\`)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
  `);
}

export async function downgrade(queryFn: (query: string, values?: any[]) => Promise<any[]>): Promise<void> {
  await queryFn(`
    ALTER TABLE \`${DbTables.PREDICTION_SET_FUNDING_TRANSACTION}\` 
      DROP CONSTRAINT \`${FK_PREDICTION_SET_FUNDING_TRANSACTION_PREDICTION_SET_ID}\`,
      DROP CONSTRAINT \`${FK_PREDICTION_SET_FUNDING_TRANSACTION_USER_ID}\`
  `);
}
