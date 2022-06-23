import { Controller, Get } from '@nestjs/common';
import { HousesService } from 'src/houses/services/houses/houses.service';

@Controller('houses')
export class HousesController {
  constructor(private housesService: HousesService) {}

  @Get()
  getHouse() {
    return this.housesService.findHouse();
  }
}
