import { EntityGenerator } from '@mikro-orm/entity-generator';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        // entities: ['./libs/common/src/database/entities'],
        // entitiesTs: ['./libs/common/src/database/entities'],
        autoLoadEntities: true,
        // discovery: {
        //   warnWhenNoEntities: false,
        // },
        // extensions: [EntityGenerator],
        dbName: 'postgres',
        type: 'postgresql',
        clientUrl: configService.get('DATABASE_URL'),
      }),
    }),
  ],
})
export class DatabaseModule {}
