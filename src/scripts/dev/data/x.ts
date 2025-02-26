import { ResolutionType } from '../../../modules/prediction-set/models/prediction-set.model';

export const x = [
  {
    question: "Will Elon Musk's X post hit 5 million likes by the end of April 2025?",
    description: "Prediction about the like count of Elon Musk's recent X post.",
    generalResolutionDef: `This market will resolve to 'Yes' if Elon Musk's X post reaches 5,000,000 likes by April 30, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the X post shows a like count of 5,000,000 or more by 23:59 ET on April 30, 2025. Otherwise, it will resolve to 'No'. The resolution source is the official X post URL: https://x.com/elonmusk/status/1894545949973770684",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-04-23T23:59:59Z'),
    resolutionTime: new Date('2025-05-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'x',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/x.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.pn' }
    ]
  },
  {
    question: "Will X's official account reach 80 million followers by the end of July 2025?",
    description: "Prediction about the follower count of X's official account.",
    generalResolutionDef: `This market will resolve to 'Yes' if X's official account reaches 80,000,000 followers by July 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the official X account shows a follower count of 80,000,000 or more by 23:59 ET on July 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is the official X account URL: https://x.com/X.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-07-24T23:59:59Z'),
    resolutionTime: new Date('2025-08-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'x',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/x.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.pn' }
    ]
  },
  {
    question: 'Which hashtag will trend more by the end of 2025: #Bitcoin or #Ethereum?',
    description: 'Prediction about the trending popularity of the hashtags #Bitcoin and #Ethereum on X.',
    generalResolutionDef: `This market will resolve to '#Bitcoin' if cumulative engagement for posts with #Bitcoin exceeds that for #Ethereum by December 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to '#Bitcoin' if cumulative engagement (likes, retweets, and comments) for posts using #Bitcoin is higher than that for #Ethereum by 23:59 ET on December 31, 2025. Otherwise, it will resolve to '#Ethereum'. The resolution sources are the X analytics for the respective hashtags.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-12-24T23:59:59Z'),
    resolutionTime: new Date('2026-01-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'x',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/x.png',
    predictionOutcomes: [
      { name: '#Bitcoin', imgUrl: 'https://example.com/bitcoin.png' },
      { name: '#Ethereum', imgUrl: 'https://example.com/ethereum.png' }
    ]
  },
  {
    question: 'Will a verified X post by Taylor Swift hit 3 million retweets by the end of May 2025?',
    description: 'Prediction about the retweet count of a verified X post by Taylor Swift.',
    generalResolutionDef: `This market will resolve to 'Yes' if a verified X post by Taylor Swift reaches 3,000,000 retweets by May 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the post shows a retweet count of 3,000,000 or more by 23:59 ET on May 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is the official X post URL: https://x.com/taylorswift13/status/1781171613058097619.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-05-24T23:59:59Z'),
    resolutionTime: new Date('2025-06-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'x',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/x.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.pn' }
    ]
  },
  {
    question: 'Will X launch a new content monetization feature by the end of September 2025?',
    description: 'Prediction about whether X will introduce a new feature for content monetization.',
    generalResolutionDef: `This market will resolve to 'Yes' if X officially launches a new content monetization feature by September 30, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the new feature is officially launched by 23:59 ET on September 30, 2025. Otherwise, it will resolve to 'No'. The resolution source is an official X announcement.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-09-23T23:59:59Z'),
    resolutionTime: new Date('2025-10-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'x',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/x.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.pn' }
    ]
  },
  {
    question: 'Will the number of suspended accounts on X exceed 500,000 by the end of November 2025?',
    description: 'Prediction about the total number of suspended accounts on X.',
    generalResolutionDef: `This market will resolve to 'Yes' if the number of suspended accounts on X exceeds 500,000 by November 30, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the reported number of suspended accounts exceeds 500,000 by 23:59 ET on November 30, 2025. Otherwise, it will resolve to 'No'. The resolution source is an official X transparency report.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-11-23T23:59:59Z'),
    resolutionTime: new Date('2025-12-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'x',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/x.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.pn' }
    ]
  },
  {
    question: "Will X's trending topics list include a crypto-related topic by the end of August 2025?",
    description: "Prediction about whether a crypto-related topic will appear on X's trending topics list.",
    generalResolutionDef: `This market will resolve to 'Yes' if any crypto-related topic appears in X's trending topics list by August 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if a crypto-related hashtag or topic is listed in the trending topics by 23:59 ET on August 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is X's trending topics data.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-08-24T23:59:59Z'),
    resolutionTime: new Date('2025-09-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'x',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/x.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.pn' }
    ]
  },
  {
    question: 'Will the number of verified accounts on X reach 1 million by the end of December 2025?',
    description: 'Prediction about the total number of verified accounts on X.',
    generalResolutionDef: `This market will resolve to 'Yes' if the number of verified accounts on X reaches 1,000,000 by December 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the verified account count is 1,000,000 or more by 23:59 ET on December 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is X's official verification statistics.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-12-24T23:59:59Z'),
    resolutionTime: new Date('2026-01-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'x',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/x.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.pn' }
    ]
  }
];
