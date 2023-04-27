import { Entity, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class TransactionCode {

  [OptionalProps]?: 'createdAt' | 'isDeleted';

  @PrimaryKey({ length: 2 })
  transactionCode!: string;

  @Property({ columnType: 'text' })
  codeDescription!: string;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

  @Property({ length: 6, nullable: true })
  updatedAt?: Date;

  @Property({ default: false })
  isDeleted: boolean = false;

}
