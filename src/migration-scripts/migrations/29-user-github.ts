import { DbTables } from '../../config/types';

export const upgrade = async (queryFn: (query: string, values?: any[]) => Promise<any[]>): Promise<void> => {
  await queryFn(`
    ALTER TABLE \`${DbTables.USER}\` 
      ADD COLUMN \`githubId\` INT NULL UNIQUE AFTER \`referralId\`,
      ADD COLUMN \`githubUsername\` VARCHAR(200) NULL AFTER \`githubId\`,
      ADD COLUMN \`githubFollowers\` INT NULL AFTER \`githubUsername\`,
      ADD COLUMN \`githubContributions\` INT NULL AFTER \`githubFollowers\`
  `);
};

export const downgrade = async (queryFn: (query: string, values?: any[]) => Promise<any[]>): Promise<void> => {
  await queryFn(`
    ALTER TABLE \`${DbTables.USER}\` 
      DROP COLUMN \`githubId\`,
      DROP COLUMN \`githubUsername\`,
      DROP COLUMN \`githubFollowers\`,
      DROP COLUMN \`githubContributions\`
  `);
};
