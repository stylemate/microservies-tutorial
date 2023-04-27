import { Entity, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class SkippedStock {

  [OptionalProps]?: 'createdAt';

  @PrimaryKey({ columnType: 'text' })
  cik!: string;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

}
