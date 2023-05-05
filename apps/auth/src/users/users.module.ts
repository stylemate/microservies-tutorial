import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from '@app/common';

@Module({
  // needs to be containerized to connect to database
  // should i import database module at auth level or submodule level?
  imports: [DatabaseModule],
  // local.strategy.ts needs to verify users, so UsersService is made available
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
