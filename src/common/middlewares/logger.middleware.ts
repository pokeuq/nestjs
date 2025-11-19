import type { NextFunction, Request, Response } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`response... ${req.method} ${req.url}`);
  next();
}
