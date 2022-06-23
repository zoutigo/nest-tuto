import { Injectable } from '@nestjs/common';

@Injectable()
export class HousesService {
  houses = [
    {
      name: 'maison du louvre',
      city: 'madrid',
      country: 'france',
      id: 1,
    },
    {
      name: 'macadam',
      city: 'nancy',
      country: 'spain',
      id: 2,
    },
    {
      name: 'Brocoli',
      city: 'porto',
      country: 'portugal',
      id: 3,
    },
    {
      name: 'maison du louvre',
      city: 'madrid',
      country: 'france',
      id: 4,
    },
  ];
  findHouse() {
    return {
      name: 'maison du louvre',
      city: 'madrid',
      country: 'france',
      id: 1,
    };
  }

  findHouseById(id: number) {
    return this.houses.find((house) => house.id === id);
  }
}
