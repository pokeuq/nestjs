import {
  Catch,
  HttpException,
  Logger,
  type ArgumentsHost,
  type ExceptionFilter,
} from '@nestjs/common';

@Catch()
export class AllExeptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExeptionsFilter.name); // логи в формате неста
  catch(exception: unknown, host: ArgumentsHost) {
    const context = host.switchToHttp();

    const response = context.getResponse();

    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;

    const message =
      exception instanceof HttpException
        ? exception.message
        : 'Internal server error';

    this.logger.error(message);

    response.status(status).json({
      status,
      message,
      timestamp: new Date().toISOString(),
      path: context.getRequest().url,
    });
  }
}
