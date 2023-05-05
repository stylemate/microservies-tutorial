import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager } from '@mikro-orm/core';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly em: EntityManager) {}
  async create(createUserDto: CreateUserDto) {
    const user = this.em.create(User, createUserDto);
    await this.em.persistAndFlush(user);
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
