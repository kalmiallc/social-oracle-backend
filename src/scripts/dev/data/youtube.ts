import { ResolutionType } from '../../../modules/prediction-set/models/prediction-set.model';

export const youtube = [
  {
    question: "Will PewDiePie's YouTube channel hit 120 million subscribers by the end of December 2025?",
    description: "Prediction about the subscriber count of PewDiePie's YouTube channel.",
    generalResolutionDef: `This market will resolve to 'Yes' if PewDiePie's channel reaches 120,000,000 subscribers by December 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if PewDiePie's YouTube channel shows a subscriber count of 120,000,000 or more by 23:59 ET on December 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is https://www.youtube.com/user/PewDiePie.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-12-24T23:59:59Z'),
    resolutionTime: new Date('2026-01-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'youtube',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/youtube.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  },
  {
    question: "Will MrBeast's latest video reach 250 million views by the end of July 2025?",
    description: "Prediction about the view count on MrBeast's latest YouTube video.",
    generalResolutionDef: `This market will resolve to 'Yes' if MrBeast's latest video reaches 250,000,000 views by July 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the video shows a view count of 250,000,000 or more by 23:59 ET on July 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is the YouTube video URL: https://www.youtube.com/watch?v=NDsO1LT_0lw.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-07-24T23:59:59Z'),
    resolutionTime: new Date('2025-08-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'youtube',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/youtube.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  },
  {
    question: "Will T-Series's YouTube channel surpass 300 million subscribers by the end of 2025?",
    description: "Prediction about the subscriber count of T-Series's YouTube channel.",
    generalResolutionDef: `This market will resolve to 'Yes' if T-Series's channel reaches 300,000,000 subscribers by December 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the channel shows a subscriber count of 300,000,000 or more by 23:59 ET on December 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is https://www.youtube.com/user/tseries.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-12-24T23:59:59Z'),
    resolutionTime: new Date('2026-01-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'youtube',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/youtube.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  },
  {
    question: "Will a major music artist's YouTube video exceed 200 million views within 48 hours by the end of August 2025?",
    description: "Prediction about the performance of a major music artist's YouTube video in its first 48 hours.",
    generalResolutionDef: `This market will resolve to 'Yes' if any major music artist's video reaches 200,000,000 views within 48 hours of release by August 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the specified video shows a view count of 200,000,000 or more within 48 hours of its release by 23:59 ET on August 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is YouTube view count data.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-08-24T23:59:59Z'),
    resolutionTime: new Date('2025-09-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'youtube',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/youtube.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  },
  {
    question: 'Will YouTube officially launch a new Shorts monetization program by the end of November 2025?',
    description: 'Prediction about whether YouTube will introduce a new monetization feature for Shorts.',
    generalResolutionDef: `This market will resolve to 'Yes' if YouTube announces and launches a new Shorts monetization program by November 30, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the new Shorts monetization program is officially launched by 23:59 ET on November 30, 2025. Otherwise, it will resolve to 'No'. The resolution source is an official YouTube announcement.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-11-23T23:59:59Z'),
    resolutionTime: new Date('2025-12-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'youtube',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/youtube.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  },
  {
    question: "Will YouTube's trending video of the week reach 50 million views by the end of May 2025?",
    description: "Prediction about the view count of YouTube's trending video of the week.",
    generalResolutionDef: `This market will resolve to 'Yes' if the trending video shows a view count of 50,000,000 or more by May 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the trending video's view count is 50,000,000 or more by 23:59 ET on May 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is YouTube's trending data.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-05-24T23:59:59Z'),
    resolutionTime: new Date('2025-06-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'youtube',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/youtube.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  },
  {
    question:
      'Will a YouTube livestream event hosted by a major esports organization attract over 1 million concurrent viewers by the end of October 2025?',
    description: 'Prediction about the concurrent viewer count of a YouTube livestream event hosted by a major esports organization.',
    generalResolutionDef: `This market will resolve to 'Yes' if the livestream event reaches 1,000,000 concurrent viewers by October 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the livestream event shows a concurrent viewer count of 1,000,000 or more by 23:59 ET on October 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is YouTube livestream data.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-10-24T23:59:59Z'),
    resolutionTime: new Date('2025-11-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'youtube',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/youtube.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  },
  {
    question: 'Will the most viewed YouTube video of 2025 reach 2 billion views by the end of December 2025?',
    description: 'Prediction about whether the top trending YouTube video of 2025 will achieve 1 billion views.',
    generalResolutionDef: `This market will resolve to 'Yes' if the most viewed YouTube video of 2025 reaches 1,000,000,000 views by December 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the top trending YouTube video of 2025 shows a view count of 1,000,000,000 or more by 23:59 ET on December 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is YouTube's trending data.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-12-24T23:59:59Z'), // one week before the deadline
    resolutionTime: new Date('2026-01-07T23:59:59Z'), // one week after the deadline
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'youtube',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/youtube.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  }
];
