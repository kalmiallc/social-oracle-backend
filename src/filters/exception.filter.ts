import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { CodeException, ModelValidationException } from '../lib/exceptions/exceptions';
import { SystemErrorCode } from '../config/types';

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
  catch(error: any, host: ArgumentsHost) {
    const exceptionCtx = host.switchToHttp();
    const res = exceptionCtx.getResponse<Response>();
    const request = exceptionCtx.getRequest<Request>() as any;

    // NOTE: Should use writeLog
    // writeLog(
    //   LogType.ERROR,
    //   'Error occured',
    //   'exception.filter.ts',
    //   'ExceptionsFilter',
    //   error,
    // );
    console.error(error, 'exception.filter.ts');
    if (error.details) {
      console.error(error.details, 'exception.filter.ts');
    }

    if (error instanceof CodeException) {
      if (error?.options?.details) {
        console.error(error.options.details, 'exception.filter.ts');
      }

      res.status(error.getStatus()).json({
        id: request?.context?.requestId,
        status: error.getStatus(),
        code: error.getResponse()['code'] || error.getResponse()['statusCode'],
        message: error.message,
        path: request.url,
        timestamp: new Date().toISOString()
      });
    } else if (error instanceof ModelValidationException) {
      res.status(error.getStatus()).json({
        id: request?.context?.requestId,
        status: error.getStatus(),
        model: error.modelName,
        errors: error.errors,
        path: request.url,
        timestamp: new Date().toISOString()
      });
    } else {
      if (error.status == 422) {
        //Validation errors received from microservice - handled in @kalmia-monitor/lib base-service
        res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
          id: request?.context?.requestId,
          code: error.code || SystemErrorCode.MICROSERVICE_SYSTEM_ERROR,
          message: error.message,
          errors: error.errors,
          path: request.url,
          timestamp: new Date().toISOString()
        });
      } else {
        res.status(error.status || HttpStatus.INTERNAL_SERVER_ERROR).json({
          id: request?.context?.requestId,
          code: error.code || SystemErrorCode.UNHANDLED_SYSTEM_ERROR,
          message: error.message,
          path: request.url,
          timestamp: new Date().toISOString()
        });
      }
    }
  }
}
