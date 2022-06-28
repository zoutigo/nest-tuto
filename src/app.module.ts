import { Module } from '@nestjs/common';
import { CostumersModule } from './costumers/costumers.module';
import { HousesModule } from './houses/houses.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CostumersModule, HousesModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
