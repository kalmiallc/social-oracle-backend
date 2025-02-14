# Social Oracle - Backend

| Stage | Status | URL | 
| ----- | ------ | ---- |
| DEV | ![Build dev]() |  |


## Features:
* Create and manage new prediction markets
* Workers to process the creation of new prediction markets on chain
* Workers to process the finalization of prediction markets using Flare Data Connector and Flare JsonApi verifier server
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
API_HOST=
API_PORT=
API_HOST_TEST=
API_PORT_TEST=
APP_URL=
APP_ENV=
APP_SECRET=
LOG_TARGET=
LOG_LEVEL=
DEFAULT_PAGE_SIZE=
DEFAULT_CACHE_TTL=
REDIS_URL=
AWS_REGION=
AWS_SECRETS_ID=
AWS_KEY=
AWS_SECRET=
AWS_WORKER_LAMBDA_NAME=
AWS_WORKER_SQS_URL=
MYSQL_HOST=
MYSQL_DATABASE=
MYSQL_PASSWORD=
MYSQL_PORT=
MYSQL_USER=
MYSQL_HOST_TEST=
MYSQL_DATABASE_TEST=
MYSQL_PASSWORD_TEST=
MYSQL_PORT_TEST=
MYSQL_USER_TEST=
PREDICTION_SET_MINIMAL_DATA_SOURCES=
SLACK_WEBHOOK_URL=
ORACLE_CONTRACT=
JSON_VERIFIER_CONTRACT=
COLLATERAL_TOKEN_CONTRACT=
CONDITIONAL_TOKEN_CONTRACT=
FPMM_FACTORY_CONTRACT=
SIGNER_PRIVATE_KEY=
FPMM_PARSE_BLOCK_SIZE=
FPMM_FACTORY_PARSE_BLOCK_SIZE=
FPMM_BLOCK_CONFIRMATIONS=
FPMM_FACTORY_BLOCK_CONFIRMATIONS=
RPC_URL=
FLARE_DATA_AVAILABILITY_URL=
FLARE_DATA_AVAILABILITY_API_KEY=
FLARE_CONTRACT_REGISTRY_ADDRESS=
FLARE_ATTESTATION_PROVIDER_URL=
FLARE_ATTESTATION_PROVIDER_API_KEY=
```

3. Run:

```
npm run start
```