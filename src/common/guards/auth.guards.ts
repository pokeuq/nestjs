import {
  type CanActivate,
  type ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // для начала нужно получить сам запрос
    const request = context.switchToHttp().getRequest();

    const token = request.headers['authorization'];

    if (!token || !token.startsWith('Bearer ')) {
      throw new UnauthorizedException('Вы не авторизованы');
    }

    return true;
  }
}
