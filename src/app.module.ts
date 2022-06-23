import { Module } from '@nestjs/common';
import { CostumersModule } from './costumers/costumers.module';
import { HousesModule } from './houses/houses.module';

@Module({
  imports: [CostumersModule, HousesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
