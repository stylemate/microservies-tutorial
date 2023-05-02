import {
  Entity,
  PrimaryKey,
  PrimaryKeyProp,
  PrimaryKeyType,
} from '@mikro-orm/core';

@Entity()
export class User {
  [PrimaryKeyProp]: 'placeId';
  [PrimaryKeyType]: string;

  @PrimaryKey({ columnType: 'uuid' })
  userId!: string;
}
