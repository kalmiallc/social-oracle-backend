import { ResolutionType } from '../../../modules/prediction-set/models/prediction-set.model';

export const github = [
  {
    question: 'Will GitHub repository vercel/next.js hit 100k stars by the end of Q2 2025?',
    description: 'Prediction about the star count of the Next.js repository on GitHub.',
    generalResolutionDef: `This market will resolve to 'Yes' if the GitHub repository 'vercel/next.js' reaches 100k stars by June 30, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the GitHub repository 'vercel/next.js' shows a star count of 100,000 or more by 23:59 ET on June 30, 2025. Otherwise, it will resolve to 'No'. The resolution source is https://github.com/vercel/next.js.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-03-10T00:00:00Z'), // at least one week from start
    resolutionTime: new Date('2025-03-24T00:00:00Z'), // at least two weeks after endTime
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
  },
  {
    question: 'Will GitHub repository denoland/deno exceed 70k stars by the end of April 2025?',
    description: 'Prediction about the star count of the Deno repository on GitHub.',
    generalResolutionDef: `This market will resolve to 'Yes' if the GitHub repository 'denoland/deno' reaches 70k stars by April 30, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the GitHub repository 'denoland/deno' shows a star count of 70,000 or more by 23:59 ET on April 30, 2025. Otherwise, it will resolve to 'No'. The resolution source is https://github.com/denoland/deno.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-03-12T00:00:00Z'),
    resolutionTime: new Date('2025-03-26T00:00:00Z'),
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
  },
  {
    question: 'Which repository will have more stars by the end of 2025: sveltejs/svelte or vuejs/vue?',
    description: 'Prediction about the comparative star counts of the Svelte and Vue repositories on GitHub.',
    generalResolutionDef: `This market will resolve to 'Svelte' if the GitHub repository 'sveltejs/svelte' has more stars than 'vuejs/vue' by December 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Svelte' if the GitHub repository 'sveltejs/svelte' shows a higher star count than 'vuejs/vue' by 23:59 ET on December 31, 2025. Otherwise, it will resolve to 'Vue'. The resolution sources are https://github.com/sveltejs/svelte and https://github.com/vuejs/vue.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-03-15T00:00:00Z'),
    resolutionTime: new Date('2025-04-01T00:00:00Z'),
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'github',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/github.png',
    predictionOutcomes: [
      {
        name: 'Svelte',
        imgUrl: 'https://avatars.githubusercontent.com/u/23617963?s=200&v=4'
      },
      {
        name: 'Vue',
        imgUrl: 'https://avatars.githubusercontent.com/u/6128107?s=200&v=4'
      }
    ]
  },
  {
    question: 'Will GitHub repository tensorflow/tensorflow hit 200k stars by the end of 2025?',
    description: 'Prediction about the star count of the TensorFlow repository on GitHub.',
    generalResolutionDef: `This market will resolve to 'Yes' if the GitHub repository 'tensorflow/tensorflow' reaches 200k stars by December 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the GitHub repository 'tensorflow/tensorflow' shows a star count of 200,000 or more by 23:59 ET on December 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is https://github.com/tensorflow/tensorflow.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-03-18T00:00:00Z'),
    resolutionTime: new Date('2025-04-05T00:00:00Z'),
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
  },
  {
    question: 'Will GitHub repository openai/whisper receive 50k stars by July 2025?',
    description: 'Prediction about the star count of the OpenAI Whisper repository on GitHub.',
    generalResolutionDef: `This market will resolve to 'Yes' if the GitHub repository 'openai/whisper' reaches 50k stars by July 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the GitHub repository 'openai/whisper' shows a star count of 50,000 or more by 23:59 ET on July 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is https://github.com/openai/whisper.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-03-22T00:00:00Z'),
    resolutionTime: new Date('2025-04-10T00:00:00Z'),
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
  },
  {
    question: 'Will GitHub repository kubernetes/kubernetes hit 150k stars by the end of 2025?',
    description: 'Prediction about the star count of the Kubernetes repository on GitHub.',
    generalResolutionDef: `This market will resolve to 'Yes' if the GitHub repository 'kubernetes/kubernetes' reaches 150k stars by December 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Yes' if the GitHub repository 'kubernetes/kubernetes' shows a star count of 150,000 or more by 23:59 ET on December 31, 2025. Otherwise, it will resolve to 'No'. The resolution source is https://github.com/kubernetes/kubernetes.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-03-25T00:00:00Z'),
    resolutionTime: new Date('2025-04-12T00:00:00Z'),
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
  },
  {
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
  },
  {
    question: 'Which of the open source LLMs will have the most stars by the end of 2025?',
    description: 'Prediction about the popularity of LLMs',
    generalResolutionDef: `This market will resolve to 'Llama 3' if the GitHub repository 'meta-llama/llama3' reaches more stars than 'deepseek-ai/DeepSeek-R1' by December 31, 2025.`,
    outcomeResolutionDef:
      "This market will resolve to 'Llama 3' if the GitHub repository 'meta-llama/llama3' reaches more stars than 'deepseek-ai/DeepSeek-R1' by December 31, 2025. Otherwise, it will resolve to 'DeepSeek-R1'. The resolution source is https://github.com/meta-llama/llama3 and https://github.com/deepseek-ai/DeepSeek-R1.",
    outcomePriceDef: 'The full outcome price always resolves to 100%.',
    startTime: new Date('2025-02-26T00:00:00Z'),
    endTime: new Date('2025-12-24T23:59:59Z'), // One week before the deadline
    resolutionTime: new Date('2026-01-07T23:59:59Z'), // At least one week after the deadline
    resolutionType: ResolutionType.MANUAL,
    consensusThreshold: 60,
    tags: 'github',
    imgUrl: 'https://d1fq8e8mhf6u5t.cloudfront.net/images/categories/github.png',
    predictionOutcomes: [
      {
        name: 'Llama 3',
        imgUrl: 'https://avatars.githubusercontent.com/u/153379578?s=200&v=4'
      },
      {
        name: 'DeepSeek-R1',
        imgUrl: 'https://avatars.githubusercontent.com/u/148330874?s=200&v=4'
      }
    ]
  }
];
