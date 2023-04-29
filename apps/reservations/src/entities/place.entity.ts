import { Entity, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Place {
  @PrimaryKey({ columnType: 'uuid' })
  placeId!: string;
}
