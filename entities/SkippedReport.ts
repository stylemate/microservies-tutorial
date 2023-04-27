import { Entity, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class SkippedReport {

  [OptionalProps]?: 'createdAt';

  @PrimaryKey({ columnType: 'text' })
  url!: string;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

}
