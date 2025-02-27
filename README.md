# Social Oracle - Backend

This repository contains source code for the Social Oracle application backend.

Pre-deployed application FE can be found [here.](https://d1fq8e8mhf6u5t.cloudfront.net)

**Social Oracle** is a decentralized prediction marketplace focused on social events and platform-based outcomes. It enables users to trade outcome shares (e.g., *Yes* or *No*) for events tied to platforms like LinkedIn, X (formerly Twitter), Twitch, LinkedIn, Youtube, IMDB, etc.  

## Social Oracle Repositories  

The complete application is divided into three repositories:  

- **Frontend (FE):** [https://github.com/kalmiallc/social-oracle-app](https://github.com/kalmiallc/social-oracle-app)  
- **Backend (BE):** [https://github.com/kalmiallc/social-oracle-backend](https://github.com/kalmiallc/social-oracle-backend)  
- **Smart Contracts (SC):** [https://github.com/kalmiallc/social-oracle-contracts](https://github.com/kalmiallc/social-oracle-contracts)  

A full description of the product, including functionality and usage, can be found in the repository of the **Frontend application**. 

**Tehnical description** can be read [here](./TehnicalDescription.md)

## Backend Features:
* Create and manage new prediction markets
* Workers to process the creation of new prediction markets on chain
* Indexers to obtain relevant prediction market events - prediction market funding, outcome buy/sell transactions, outcome chance changes

## Technologies
* Backend Framework: NestJS
* Database: MySQL
* Deployment: AWS


## Installation & local development

1. Install dependencies:

```
npm install
```

2. Create a .env file in the root directory and add the following variables:

```
APP_URL=
APP_ENV=local
APP_SECRET=

AWS_KEY=
AWS_SECRET=

AWS_WORKER_LAMBDA_NAME=
AWS_WORKER_SQS_URL=

MYSQL_HOST=
MYSQL_PORT=
MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_SSL_CA_FILE=

RPC_URL=
SIGNER_PRIVATE_KEY=

ORACLE_CONTRACT=
COLLATERAL_TOKEN_CONTRACT=
CONDITIONAL_TOKEN_CONTRACT=
FPMM_FACTORY_CONTRACT=
JSON_VERIFIER_CONTRACT=
TREASURY_ADDRESS=

GITHUB_AUTH=
```

3. Run:

Make shure the contracts are deployed. For the instructions refer to the Smart Contracts repositiory.
Make sure that the MySQL is running and accessible. 

To set the inital DB conditions:

```
npm run db-upgrade
```

Then start the node appliction.

```
npm run start
```

## Create new prediction markets

1. Make sure that this env variables are set:
```
MYSQL_HOST=
MYSQL_PORT=
MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_SSL_CA_FILE=

RPC_URL=
SIGNER_PRIVATE_KEY=

ORACLE_CONTRACT=
COLLATERAL_TOKEN_CONTRACT=
CONDITIONAL_TOKEN_CONTRACT=
FPMM_FACTORY_CONTRACT=
JSON_VERIFIER_CONTRACT=
TREASURY_ADDRESS=
```

2. Modify the market data in `./src/scripts/dev/data/single-market.ts`

```ts
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
```

3. Run create market script:
```
npm run create-prediction-market
```