import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { NextFunction, Request, Response } from 'express';

import { CostumersController } from './controllers/costumers/costumers.controller';
import { ValidateAccountMiddleware } from './middlewares/validate-account.middleware';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { CostumersService } from './services/costumers/costumers.service';

@Module({
  controllers: [CostumersController],
  providers: [CostumersService],
})
export class CostumersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        ValidateCustomerMiddleware,
        ValidateAccountMiddleware,
        (req: Request, res: Response, next: NextFunction) => {
          console.log('last middleware');
          next();
        },
      )
      .exclude({
        path: '/costumers/:id',
        method: RequestMethod.POST,
      })
      .forRoutes(
        // {
        //   path: '/costumers/search/:id',
        //   method: RequestMethod.GET,
        // },
        // {
        //   path: '/costumers/:id',
        //   method: RequestMethod.GET,
        // },
        CostumersController,
      );
  }
}
