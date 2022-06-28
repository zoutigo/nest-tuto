import { Injectable } from '@nestjs/common';
import { CreateHouseDto } from 'src/houses/dtos/CreateHouse.dto';
import { House } from 'src/houses/types/House';

@Injectable()
export class HousesService {
  private houses: House[] = [
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

  getHouses() {
    return this.houses;
  }

  createHouse(houseDto: CreateHouseDto) {
    this.houses.push(houseDto);
  }
}
