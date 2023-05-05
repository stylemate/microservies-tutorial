import {
  Entity,
  PrimaryKey,
  PrimaryKeyProp,
  PrimaryKeyType,
  Property,
} from '@mikro-orm/core';

@Entity()
export class User {
  [PrimaryKeyProp]: 'userId';
  [PrimaryKeyType]: string;

  @PrimaryKey({ columnType: 'uuid', defaultRaw: 'gen_random_uuid()' })
  userId: string;

  @Property({ columnType: 'varchar', length: 254 })
  email: string;

  @Property({ columnType: 'text' })
  password: string;
}
