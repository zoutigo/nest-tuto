import { Injectable } from '@nestjs/common';

@Injectable()
export class CostumersService {
  users = [
    {
      email: 'sammy@gmail.com',
      createdAt: new Date(),
      id: 1,
    },
    {
      email: 'marina@gmail.com',
      createdAt: new Date(),
      id: 2,
    },
    {
      email: 'zoro@gmail.com',
      createdAt: new Date(),
      id: 3,
    },
  ];
  findCostumer() {
    return {
      email: 'zoutigo@gmail.com',
      createdAt: new Date(),
      id: 1,
    };
  }
  findCostumerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
