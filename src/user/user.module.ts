import { Global, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Global()
@Module({
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
