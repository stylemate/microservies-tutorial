import { Entity, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Milestone {

  [OptionalProps]?: 'createdAt' | 'done' | 'ticker';

  @PrimaryKey({ columnType: 'text' })
  cik!: string;

  @Property({ columnType: 'text', default: '' })
  ticker!: string;

  @Property({ default: false })
  done: boolean = false;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

}
