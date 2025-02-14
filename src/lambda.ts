import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import type { Context } from 'aws-lambda';
import { createServer, proxy, Response } from 'aws-serverless-express';
import * as express from 'express';
import { Server } from 'http';
import { AppModule } from './app.module';
import { ExceptionsFilter } from './filters/exception.filter';
import { ResponseInterceptor } from './interceptors/response.interceptor';

/**
 * Cached server.
 */
let cachedServer: Server;

/**
 * Bootstraps the module.
 * @param module Module to bootstrap.
 * @returns HTTP server.
 */
export async function bootstrapModule(module: any) {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);

  const app = await NestFactory.create(module, adapter, { rawBody: true });
  app.enableCors({ origin: '*' }); // TODO: Enable CORS!
  app.useGlobalFilters(new ExceptionsFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.init();
  return createServer(expressApp);
}

/**
 * Bootstraps the application.
 * @returns Bootstrapped module.
 */
export async function bootstrap() {
  return bootstrapModule(AppModule);
}

/**
 * Lambda handler.
 * @param event Lambda event.
 * @param context Application context.
 * @returns Lambda response.
 */
export async function handler(event: any, context: Context): Promise<Response> {
  if (!cachedServer) {
    cachedServer = await bootstrap();
  }
  return proxy(cachedServer, event, context, 'PROMISE').promise;
}
