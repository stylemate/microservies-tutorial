import { EntityGenerator } from '@mikro-orm/entity-generator';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';

const config: MikroOrmModuleSyncOptions = {
  entities: [
    './dist/apps/reservations/apps/reservations/src/entities',
    './dist/apps/reservations/apps/auth/src/users/entities',
  ],
  entitiesTs: [
    './apps/reservations/src/entities',
    './apps/auth/src/users/entities',
  ],
  // autoLoadEntities: true,
  // extensions: [EntityGenerator],
  dbName: 'postgres',
  type: 'postgresql',
  clientUrl: process.env.DATABASE_URL,
};
export default config;
