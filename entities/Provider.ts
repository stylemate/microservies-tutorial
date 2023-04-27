import { Entity, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Provider {

  @PrimaryKey({ length: 20 })
  provider!: string;

}
