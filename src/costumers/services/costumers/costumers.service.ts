import { Injectable } from '@nestjs/common';

@Injectable()
export class CostumersService {
  findCostumer() {
    return {
      email: 'zoutigo@gmail.com',
      createdAt: new Date(),
      id: 1,
    };
  }
}
