import { ResolutionType } from '../../../modules/prediction-set/models/prediction-set.model';

export const linkedin = [
  {
    question: "Will LinkedIn's official company page hit 50k followers by the end of June 2025?",
    description: "Prediction about the follower count of LinkedIn's official company page.",
    generalResolutionDef: `This market will resolve to 'Yes' if LinkedIn's official company page reaches 50,000 followers by June 30, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the official LinkedIn company page shows a follower count of 50,000 or more by 23:59 ET on June 30, 2025. Otherwise, it will resolve to 'No'. The resolution source is https://www.linkedin.com/company/linkedin.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-06-23T23:59:59Z'), // one week before deadline
    resolutionTime: new Date('2025-07-07T23:59:59Z'), // one week after deadline
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'linkedin',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/linkedin.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  },
  {
    question: "Will Gary Vaynerchuk's LinkedIn post on digital marketing hit 10k likes by the end of April 2025?",
    description: "Prediction about the like count of Gary Vaynerchuk's LinkedIn post on digital marketing.",
    generalResolutionDef: `This market will resolve to 'Yes' if Gary Vaynerchuk's LinkedIn post on digital marketing reaches 10,000 likes by April 30, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the post shows a like count of 10,000 or more by 23:59 ET on April 30, 2025. Otherwise, it will resolve to 'No'. The resolution source is the LinkedIn post URL: https://www.linkedin.com/posts/garyvaynerchuk_you-can-only-go-hard-if-you-love-what-you-activity-7300530074041176064-nlwb?utm_source=share&utm_medium=member_desktop&rcm=ACoAACLMbg8B8VCDpNmcXYwFSppVYMaQzwtev-g.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-04-23T23:59:59Z'),
    resolutionTime: new Date('2025-05-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'linkedin',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/linkedin.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  },
  {
    question: "Will Melinda Gates' LinkedIn post on women in tech get over 20k reactions by the end of May 2025?",
    description: "Prediction about the reaction count of Melinda Gates' LinkedIn post on women in tech.",
    generalResolutionDef: `This market will resolve to 'Yes' if Melinda Gates' LinkedIn post on women in tech reaches 20,000 reactions by May 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the post shows a reaction count of 20,000 or more by 23:59 ET on May 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is the LinkedIn post URL: https://www.linkedin.com/posts/melindagates_my-advice-to-young-women-in-tech-activity-6866426266552213504-NpKL?utm_source=share&utm_medium=member_desktop&rcm=ACoAACLMbg8B8VCDpNmcXYwFSppVYMaQzwtev-g.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-05-24T23:59:59Z'),
    resolutionTime: new Date('2025-06-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'linkedin',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/linkedin.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  },
  {
    question: "Will Tesla's LinkedIn page reach 15 million followers by the end of December 2025?",
    description: "Prediction about the follower count of Tesla's LinkedIn page.",
    generalResolutionDef: `This market will resolve to 'Yes' if Tesla's LinkedIn page reaches 15 million followers by December 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the LinkedIn page shows a follower count of 15 million or more by 23:59 ET on December 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is the LinkedIn page URL: https://www.linkedin.com/company/tesla-motors.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-12-24T23:59:59Z'),
    resolutionTime: new Date('2026-01-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'linkedin',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/linkedin.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  },
  {
    question: "Will Harvard Business Review's top LinkedIn article receive 5k shares by the end of August 2025?",
    description: "Prediction about the share count of Harvard Business Review's top LinkedIn article.",
    generalResolutionDef: `This market will resolve to 'Yes' if Harvard Business Review's top LinkedIn article receives 5,000 shares by August 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the article shows a share count of 5,000 or more by 23:59 ET on August 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is the LinkedIn article URL: https://www.linkedin.com/posts/harvard-business-review_research-gender-pay-gaps-shrink-when-companies-activity-7300471161887309825-nSSd?utm_source=share&utm_medium=member_desktop&rcm=ACoAACLMbg8B8VCDpNmcXYwFSppVYMaQzwtev-g.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-08-24T23:59:59Z'),
    resolutionTime: new Date('2025-09-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'linkedin',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/linkedin.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  },
  {
    question: 'Which influencer will have a post with more engagement by the end of July 2025: Satya Nadella or Bill Gates?',
    description: 'Prediction about the comparative engagement of posts by Satya Nadella and Bill Gates on LinkedIn.',
    generalResolutionDef: `This market will resolve to 'Satya Nadella' if his LinkedIn post shows more engagement than Bill Gates' post by July 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Satya Nadella' if his post shows higher engagement than Bill Gates' post by 23:59 ET on July 31, 2025. Otherwise, it will resolve to 'Bill Gates'. The resolution sources are the respective LinkedIn Profiles.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-07-24T23:59:59Z'),
    resolutionTime: new Date('2025-08-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'linkedin',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/linkedin.png',
    predictionOutcomes: [
      {
        name: 'Satya Nadella',
        imgUrl:
          'https://media.licdn.com/dms/image/v2/C5603AQHHUuOSlRVA1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1579726625483?e=1746057600&v=beta&t=5PaCFTSZ5mrqysAHWG6MJUKLD6Fe0XqJFr6qf-DPU-c'
      },
      {
        name: 'Bill Gates',
        imgUrl:
          'https://media.licdn.com/dms/image/v2/D5603AQF-RYZP55jmXA/profile-displayphoto-shrink_800_800/B56ZRi8g.aGsAc-/0/1736826818808?e=1746057600&v=beta&t=xe6NWXoJ-0DLjbKou59ezBOLxRSmq6I5BiLdRdAplak'
      }
    ]
  },
  {
    question: 'Will a LinkedIn Live event hosted by Microsoft attract over 20k viewers by the end of September 2025?',
    description: 'Prediction about the viewer count for a LinkedIn Live event hosted by Microsoft.',
    generalResolutionDef: `This market will resolve to 'Yes' if the LinkedIn Live event hosted by Microsoft attracts 20,000 or more viewers by September 30, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the event shows a viewer count of 20,000 or more by 23:59 ET on September 30, 2025. Otherwise, it will resolve to 'No'. The resolution source is the LinkedIn Live event page.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-09-23T23:59:59Z'),
    resolutionTime: new Date('2025-10-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'linkedin',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/linkedin.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  },
  {
    question: "Will LinkedIn's new AI-powered job matching feature be used by over 1 million users by the end of November 2025?",
    description: "Prediction about the adoption of LinkedIn's new AI-powered job matching feature.",
    generalResolutionDef: `This market will resolve to 'Yes' if LinkedIn's new AI-powered job matching feature is used by 1,000,000 or more users by November 30, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the feature shows a user count of 1,000,000 or more by 23:59 ET on November 30, 2025. Otherwise, it will resolve to 'No'. The resolution source is LinkedIn's feature analytics page.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-11-23T23:59:59Z'),
    resolutionTime: new Date('2025-12-07T23:59:59Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'linkedin',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/linkedin.png',
    predictionOutcomes: [
      { name: 'Yes', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/yes.svg' },
      { name: 'No', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/no.svg' },
      { name: 'Maybe', imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/maybe.png' }
    ]
  }
];
