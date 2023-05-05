import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'localStrategy') {
  constructor(private readonly usersService: UsersService) {
    // by default, username and password fields
    super({ usernameField: 'email' });
  }

  // when successfully returned, it will create 'user' property in request object
  async validate(email: string, password: string): Promise<User> {
    try {
      return await this.usersService.verifyUser(email, password);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
