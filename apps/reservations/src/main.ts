import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  app.use(morgan('tiny'));
  await app.listen(3000);
}
bootstrap();
