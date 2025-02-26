import { addPredictionSet } from '../../lib/blockchain';
import { Outcome } from '../../modules/prediction-set/models/outcome.model';
import { PredictionSet } from '../../modules/prediction-set/models/prediction-set.model';
import { PredictionSetService } from '../../modules/prediction-set/prediction-set.service';
import { createContext } from './context';
import { singleMarketData } from './data/single-market';

const processPredictionSet = async () => {
  const context = await createContext();

  try {
    const service = new PredictionSetService();

    const ps = new PredictionSet(singleMarketData, context);
    ps.outcomes = singleMarketData.predictionOutcomes.map((d) => new Outcome(d, context));

    // Create prediction set.
    const predictionSet = await service.createPredictionSet(ps, [], context);

    // Add prediction set to blockchain.
    await addPredictionSet(predictionSet, context);
  } catch (error) {
    console.log(error);
  }
};

processPredictionSet()
  .then(() => {
    console.log('Complete!');
    process.exit(0);
  })
  .catch(console.error);
