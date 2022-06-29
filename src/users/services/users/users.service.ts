import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { User as UserEntity } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { SerializedUser, User } from 'src/users/types';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
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

  createUser(user: CreateUserDto) {
    const password = encodePassword(user.password);
    const newUser = this.userRepository.create({ ...user, password });

    return this.userRepository.save(newUser);
  }
}
