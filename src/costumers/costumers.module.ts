import { Module } from '@nestjs/common';
import { CostumersController } from './controllers/costumers/costumers.controller';
import { CostumersService } from './services/costumers/costumers.service';

@Module({
  controllers: [CostumersController],
  providers: [CostumersService],
})
export class CostumersModule {}
