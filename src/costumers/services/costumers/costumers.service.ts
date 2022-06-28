import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/costumers/dtos/CreateCutomer.dto';
import { Customer } from 'src/costumers/types/Customer';

@Injectable()
export class CostumersService {
  private customers: Customer[] = [
    {
      email: 'sammy@gmail.com',
      name: 'sammy',
      id: 1,
    },
    {
      email: 'marina@gmail.com',
      name: 'marina',
      id: 2,
    },
    {
      email: 'zoro@gmail.com',
      name: 'zoro',
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
    return this.customers.find((user) => user.id === id);
  }

  createCostumer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
