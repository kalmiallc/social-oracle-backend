import { ResolutionType } from '../../../modules/prediction-set/models/prediction-set.model';

export const singleMarketData = {
  question: 'Will GitHub aave-v3-core origin repository hit 1000 stars by the end of March?',
  description: 'Prediction about the star count of the aave-v3-core origin repository on GitHub.',
  generalResolutionDef: `This market will resolve to 'Yes' if the GitHub repository 'aave-v3-core' reaches 1000 stars by March 31, 2025.`,
  outcomeResolutionDef:
    "This market will resolve to 'Yes' if the GitHub repository 'aave-v3-core' shows a star count of 1000 or more by 23:59 ET on March 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is https://github.com/aave/aave-v3-core.",
  outcomePriceDef: 'The full outcome price always resolves to 100%.',
  startTime: new Date('2025-02-26T00:00:00Z'),
  endTime: new Date('2025-03-24T23:59:59Z'), // One week before the deadline
  resolutionTime: new Date('2025-04-07T23:59:59Z'), // At least one week after the deadline
  resolutionType: ResolutionType.MANUAL,
  consensusThreshold: 60,
  tags: 'github',
  imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/github.png',
  predictionOutcomes: [
    {
      name: 'Yes',
      imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg'
    },
    {
      name: 'No',
      imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg'
    },
    {
      name: 'Maybe',
      imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png'
    }
  ]
};
