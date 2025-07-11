import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getWhatsUp(): string {
    return 'Whats up!';
  }
}
