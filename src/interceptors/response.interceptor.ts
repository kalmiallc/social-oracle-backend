import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';

import { map, Observable } from 'rxjs';
import { IRequest } from '../interfaces/i-request';
import { AdvancedSQLModel } from '../lib/base-models/advanced-sql.model';
import { SerializeFor } from '../config/types';

/**
 * API response type definition.
 */
export interface ApiResponse {
  id: string;
  status: number;
  data?: any;
  meta?: any;
}

/**
 * Response interceptor used for formatting every response from the API.
 */
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(async (data) => {
        const req = context.switchToHttp().getRequest<IRequest>();
        const res = context.switchToHttp().getResponse<IRequest>() as any;
        const isAdmin = false; //req.context.isAuthenticated() && (await req.context.hasRole(DefaultUserRole.SUPER_ADMIN));

        const response: ApiResponse = {
          id: req?.context?.requestId,
          status: res.statusCode
        };

        let responseData = data;
        if (data?.meta && data?.data) {
          responseData = data.data;
          response.meta = data.meta;
        }

        if (responseData instanceof AdvancedSQLModel) {
          response.data = isAdmin ? responseData.serialize(SerializeFor.ADMIN) : responseData.serialize(SerializeFor.USER);
        } else if (Array.isArray(responseData)) {
          response.data = responseData.map((d) =>
            d instanceof AdvancedSQLModel
              ? {
                  ...d.serialize(SerializeFor.USER),
                  ...(isAdmin ? d.serialize(SerializeFor.ADMIN) : {})
                }
              : d
          );
        } else {
          response.data = responseData;
        }

        return response;
      })
    );
  }
}
