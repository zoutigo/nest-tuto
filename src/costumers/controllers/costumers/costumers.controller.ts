import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/costumers/dtos/CreateCutomer.dto';
import { CostumersService } from 'src/costumers/services/costumers/costumers.service';

@Controller('costumers')
export class CostumersController {
  constructor(private costumersService: CostumersService) {}

  @Get(':id')
  getCostumerById(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const costumer = this.costumersService.findCostumerById(id);
    if (!costumer) return res.status(400).send({ msg: 'Costumer not found' });
    return res.send(costumer);
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const costumer = this.costumersService.findCostumerById(id);
    if (!costumer)
      throw new HttpException('Customer Not Found', HttpStatus.BAD_REQUEST);
    return costumer;
  }

  // @Get('')
  // getCostumer() {
  //   return this.costumersService.findCostumer();
  // }

  @Get('')
  getAllCustomers() {
    return this.costumersService.getCustomers();
  }

  @Post('create')
  createCostumer(@Body() createCustomerDto: CreateCustomerDto) {
    this.costumersService.createCostumer(createCustomerDto);
  }
}
