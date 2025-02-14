import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService {
  /**
   * Returns base API information.
   */
  getRoot() {
    return {
      name: 'Social Oracle API',
      description: 'Social Oracle is a decentralized prediction market platform where users can bet on real world social events.',
      uptime: process.uptime()
    };
  }
}
