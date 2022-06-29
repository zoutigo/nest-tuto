import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CostumersController } from './costumers/controllers/costumers/costumers.controller';
import { CostumersModule } from './costumers/costumers.module';
import { ValidateBehaviourMiddleware } from './globalMiddlewares/validate-behaviour.middleware';
import { HousesModule } from './houses/houses.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CostumersModule, HousesModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateBehaviourMiddleware).forRoutes(CostumersController);
  }
}
