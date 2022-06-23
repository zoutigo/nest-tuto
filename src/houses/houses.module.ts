import { Module } from '@nestjs/common';
import { HousesController } from './controllers/houses/houses.controller';
import { HousesService } from './services/houses/houses.service';

@Module({
  controllers: [HousesController],
  providers: [HousesService]
})
export class HousesModule {}
