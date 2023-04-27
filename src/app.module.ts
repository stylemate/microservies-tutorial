import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule, ConfigModule } from '@app/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Form } from '@app/common/database/entities/test.entity';

@Module({
  imports: [DatabaseModule, ConfigModule, MikroOrmModule.forFeature([Form])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
