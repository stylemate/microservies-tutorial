import { EntityGenerator } from '@mikro-orm/entity-generator';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';

const config: MikroOrmModuleSyncOptions = {
  entities: ['./dist/entities'],
  entitiesTs: ['./entities'],
  // autoLoadEntities: true,
  extensions: [EntityGenerator],
  dbName: 'postgres',
  type: 'postgresql',
  clientUrl: process.env.DATABASE_URL,
};
export default config;
