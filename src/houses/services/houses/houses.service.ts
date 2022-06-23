import { Injectable } from '@nestjs/common';

@Injectable()
export class HousesService {
  findHouse() {
    return {
      name: 'maison du louvre',
      city: 'madrid',
      country: 'france',
      id: 1,
    };
  }
}
