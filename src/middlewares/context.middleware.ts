import { Context } from '../context';
import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { MySql } from '../lib/database/mysql';
import { IRequest } from '../interfaces/i-request';

/**
 * Returns a middleware which creates a context.
 */
@Injectable()
export class ContextMiddleware implements NestMiddleware {
  constructor(
    @Inject('MYSQL_DB')
    private mysql: MySql
  ) {}

  use(req: IRequest, res, next) {
    let requestId = null;
    try {
      requestId = JSON.parse(decodeURI(req.headers['x-apigateway-context'] as string))?.awsRequestId;
    } catch (err) {}

    req.context = new Context(requestId);
    req.context.setMySql(this.mysql);
    next();
  }
}
