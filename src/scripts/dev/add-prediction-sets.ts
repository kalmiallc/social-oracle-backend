import { addPredictionSet } from '../../lib/blockchain';
import { Outcome } from '../../modules/prediction-set/models/outcome.model';
import { PredictionSet } from '../../modules/prediction-set/models/prediction-set.model';
import { PredictionSetService } from '../../modules/prediction-set/prediction-set.service';
import { createContext } from './context';
import { github } from './data/github';
import { instagram } from './data/instagram';
import { linkedin } from './data/linkedin';
import { x } from './data/x';
import { youtube } from './data/youtube';

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const processPredictionSet = async () => {
  const context = await createContext();
  const service = new PredictionSetService();

  let predictionSets = [...github, ...instagram, ...linkedin, ...x, ...youtube];
  predictionSets = shuffleArray(predictionSets);

  for (const data of predictionSets) {
    try {
      const ps = new PredictionSet(data, context);
      ps.outcomes = data.predictionOutcomes.map((d) => new Outcome(d, context));

      // Create prediction set.
      const predictionSet = await service.createPredictionSet(ps, [], context);

      // Add prediction set to blockchain.
      await addPredictionSet(predictionSet, context);
    } catch (error) {
      console.log(error);
    }
  }
};

processPredictionSet()
  .then(() => {
    console.log('Complete!');
    process.exit(0);
  })
  .catch(console.error);
