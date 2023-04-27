import { Entity, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Form {

  [OptionalProps]?: 'createdAt' | 'isDeleted';

  @PrimaryKey({ length: 8 })
  form!: string;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

  @Property({ length: 6, nullable: true })
  updatedAt?: Date;

  @Property({ default: false })
  isDeleted: boolean = false;

}
