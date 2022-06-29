import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateBehaviourMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Validate behaviour');

    const { behaviour } = req.headers;
    if (!behaviour)
      return res.status(403).send({ error: 'no behaviour provided' });

    next();
  }
}
