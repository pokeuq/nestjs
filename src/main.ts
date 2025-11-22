import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { logger } from './common/middlewares/logger.middleware';
import { AuthGuard } from './common/guards/auth.guards';
import { ResponseInterseptor } from './common/interseptors/response.interseptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new AuthGuard());
  app.useGlobalInterceptors(new ResponseInterseptor());

  app.use(logger); // add logger

  await app.listen(3000);
}
bootstrap();
