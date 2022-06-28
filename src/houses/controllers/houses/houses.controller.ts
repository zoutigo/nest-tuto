import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateHouseDto } from 'src/houses/dtos/CreateHouse.dto';
import { HousesService } from 'src/houses/services/houses/houses.service';

@Controller('houses')
export class HousesController {
  constructor(private housesService: HousesService) {}

  @Get(':id')
  // @HttpCode(200)
  getHouseById(@Param('id', ParseIntPipe) id: number) {
    const house = this.housesService.findHouseById(id);

    if (!house)
      throw new HttpException('House not found', HttpStatus.BAD_REQUEST);
    return house;
  }

  // @Get()
  // getHouse() {
  //   return this.housesService.findHouse();
  // }

  @Get()
  getAllHouse() {
    return this.housesService.getHouses();
  }

  @Post('create')
  createHouse(@Body() createHouseDto: CreateHouseDto) {
    this.housesService.createHouse(createHouseDto);
  }
}
