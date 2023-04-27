import { Entity, OptionalProps, PrimaryKey, Property, Unique } from '@mikro-orm/core';

@Entity()
export class Insider {

  [OptionalProps]?: 'createdAt' | 'isDeleted';

  @PrimaryKey({ columnType: 'uuid' })
  insiderId!: string;

  @Unique({ name: 'insider_cik_key' })
  @Property({ columnType: 'int8' })
  cik!: string;

  @Property({ columnType: 'text' })
  name!: string;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

  @Property({ length: 6, nullable: true })
  updatedAt?: Date;

  @Property({ default: false })
  isDeleted: boolean = false;

}
