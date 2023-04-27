import { Module } from '@nestjs/common';
import {
  ConfigService,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';

import * as Joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
      }),
    }),
  ],
  providers: [ConfigService],
  //re-export itself
  exports: [ConfigService],
})
export class ConfigModule {}
