import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'john',
      password: 'john',
    },
    {
      username: 'eddy',
      password: 'john',
    },
    {
      username: 'tom',
      password: 'john',
    },
    {
      username: 'robert',
      password: 'robert',
    },
    {
      username: 'margot',
      password: 'margot',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
