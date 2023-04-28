import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule, ConfigModule } from '@app/common';

@Module({
  imports: [
    DatabaseModule,
    // ConfigModule,
    // MikroOrmModule.forRoot(),
    // MikroOrmModule.forFeature([Form])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
