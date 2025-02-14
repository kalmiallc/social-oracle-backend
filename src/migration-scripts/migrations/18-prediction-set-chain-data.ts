import { DbTables, SqlModelStatus } from '../../config/types';

export async function upgrade(queryFn: (query: string, values?: any[]) => Promise<any[]>): Promise<void> {
  await queryFn(`
  CREATE TABLE IF NOT EXISTS \`${DbTables.PREDICTION_SET_CHAIN_DATA}\` (
    \`id\` INT NOT NULL AUTO_INCREMENT,
    \`prediction_set_id\` INT NOT NULL,
    \`questionId\` VARCHAR(66) NOT NULL UNIQUE,
    \`conditionId\` VARCHAR(66) NOT NULL UNIQUE,
    \`txHash\` VARCHAR(66) NULL,
    \`contractAddress\` VARCHAR(42) NULL UNIQUE,
    \`lastProcessedBlock\` INT NULL,
    \`parseBlockSize\` INT NULL,
    \`status\` INT NOT NULL DEFAULT '${SqlModelStatus.ACTIVE}',
    \`createTime\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    \`createUser\` INT NULL,
    \`updateTime\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    \`updateUser\` INT NULL,
    PRIMARY KEY (\`id\`));
  `);
}

export async function downgrade(queryFn: (query: string, values?: any[]) => Promise<any[]>): Promise<void> {
  await queryFn(`
    DROP TABLE IF EXISTS \`${DbTables.PREDICTION_SET_CHAIN_DATA}\`;
  `);
}
