import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  userHello() {
    return {
      message: 'hello from userService',
    };
  }
}
