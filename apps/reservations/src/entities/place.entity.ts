import {
  Entity,
  PrimaryKey,
  PrimaryKeyProp,
  PrimaryKeyType,
} from '@mikro-orm/core';

@Entity()
export class Place {
  [PrimaryKeyProp]: 'placeId';
  [PrimaryKeyType]: string;

  @PrimaryKey({ columnType: 'uuid', defaultRaw: 'gen_random_uuid()' })
  placeId!: string;
}
