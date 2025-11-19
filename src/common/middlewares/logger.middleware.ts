import { Injectable, type NestMiddleware } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`response... ${req.method} ${req.url}`);
    next();
  }
}

// for main.ts
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`response... ${req.method} ${req.url}`);
  next();
}
