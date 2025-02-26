import { prop } from '@rawmodel/core';
import { integerParser, stringParser } from '@rawmodel/parsers';
import { presenceValidator } from '@rawmodel/validators';
import { PopulateFrom, ValidatorErrorCode } from '../../../config/types';
import { ModelBase } from '../../../lib/base-models/base';

export class GithubLinkDto extends ModelBase {
  @prop({
    parser: { resolver: stringParser() },
    populatable: [PopulateFrom.USER],
    validators: [
      {
        resolver: presenceValidator(),
        code: ValidatorErrorCode.GITHUB_LINK_DTO_USERNAME_NOT_PRESENT
      }
    ]
  })
  public username: string;

  @prop({
    parser: { resolver: integerParser() },
    populatable: [PopulateFrom.USER],
    validators: [
      {
        resolver: presenceValidator(),
        code: ValidatorErrorCode.GITHUB_LINK_DTO_ID_NOT_PRESENT
      }
    ]
  })
  public id: number;
}
