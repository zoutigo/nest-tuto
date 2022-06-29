import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostumersController } from './costumers/controllers/costumers/costumers.controller';
import { CostumersModule } from './costumers/costumers.module';
import { ValidateBehaviourMiddleware } from './globalMiddlewares/validate-behaviour.middleware';
import { HousesModule } from './houses/houses.module';
import entities from './typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CostumersModule,
    HousesModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'zoutigo',
      password: 'valery54',
      database: 'nest_tutorial_db',
      entities,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateBehaviourMiddleware).forRoutes(CostumersController);
  }
}
