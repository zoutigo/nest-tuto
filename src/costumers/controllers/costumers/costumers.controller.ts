import { Controller, Get } from '@nestjs/common';
import { CostumersService } from 'src/costumers/services/costumers/costumers.service';

@Controller('costumers')
export class CostumersController {
  constructor(private costumersService: CostumersService) {}
  @Get('')
  getCostumer() {
    return this.costumersService.findCostumer();
  }
}
