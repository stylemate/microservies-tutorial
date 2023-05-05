import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager } from '@mikro-orm/core';
import { User } from './entities/user.entity';
import * as bcryptjs from 'bcryptjs';
@Injectable()
export class UsersService {
  constructor(private readonly em: EntityManager) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.em.create(User, {
      ...createUserDto,
      // putting a property after the spread object overrides it. order matters
      password: await bcryptjs.hash(createUserDto.password, 10),
    });
    await this.em.persistAndFlush(user);
    return user;
  }

  // passport local strategy
  async verifyUser(email: string, password: string): Promise<User> {
    const user = await this.em.findOne(User, { email });
    if (user) {
      const IsPasswordValid = await bcryptjs.compare(password, user.password);
      if (IsPasswordValid) {
        return user;
      }
    }

    throw new UnauthorizedException('Invalid Credentials');
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
