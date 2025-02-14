import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IValidationOptions, VALIDATION_OPTIONS_KEY } from '../decorators/validation.decorator';
import { IRequest } from '../interfaces/i-request';
import { ModelValidationException, ValidationException } from '../lib/exceptions/exceptions';
import { ValidatorErrorCode } from '../config/types';

@Injectable()
export class ValidationGuard implements CanActivate {
  constructor(@Inject(Reflector.name) private readonly reflector: Reflector) {}

  public async canActivate(execCtx: ExecutionContext): Promise<boolean> {
    const options = this.reflector.getAllAndMerge(VALIDATION_OPTIONS_KEY, [execCtx.getHandler(), execCtx.getClass()]) as any as IValidationOptions;
    const request = execCtx.switchToHttp().getRequest<IRequest>();
    const data = request[options.validateFor];

    const dto = new (options.dto as any)({}, request.context).populate(data, options.populateFrom);

    if (!options.skipValidation) {
      try {
        await dto.validate();
      } catch (error) {
        await dto.handle(error);
      }

      if (!dto.isValid()) {
        throw new ModelValidationException(dto, ValidatorErrorCode);
      }
    }

    request[options.validateFor] = dto;
    return true;
  }
}
