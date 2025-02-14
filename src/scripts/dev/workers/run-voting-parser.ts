import { exit } from 'process';
import { WorkerDefinition } from '../../../lib/worker/serverless-workers';
import { VotingParserWorker } from '../../../workers/voting-parser.worker';
import { WorkerName } from '../../../workers/worker-executor';
import { createContext } from '../context';

(async () => {
  const start = new Date();
  const context = await createContext();

  const wd = new WorkerDefinition(null, WorkerName.VOTING_PARSER);
  const workerExecute = new VotingParserWorker(wd, context);
  await workerExecute.execute();

  const end = new Date();
  console.log('Duration: ', (end.getTime() - start.getTime()) / 1000, 's');

  await context.mysql.close();
  exit(0);
})().catch(async (err) => {
  console.log(err);
  exit(1);
});
