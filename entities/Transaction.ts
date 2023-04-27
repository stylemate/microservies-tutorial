import { Entity, ManyToOne, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';
import { Report } from './Report';
import { Stock } from './Stock';
import { TransactionCode } from './TransactionCode';

@Entity()
export class Transaction {

  [OptionalProps]?: 'createdAt' | 'isDeleted';

  @PrimaryKey({ columnType: 'uuid' })
  transactionId!: string;

  @ManyToOne({ entity: () => Report, fieldName: 'report_id', onUpdateIntegrity: 'cascade' })
  reportId!: Report;

  @ManyToOne({ entity: () => Stock, fieldName: 'stock_id', onUpdateIntegrity: 'cascade' })
  stockId!: Stock;

  @ManyToOne({ entity: () => TransactionCode, fieldName: 'transaction_code', onUpdateIntegrity: 'cascade', onDelete: 'set null', nullable: true })
  transactionCode?: TransactionCode;

  @Property()
  isAcquired!: boolean;

  @Property()
  isDerivative!: boolean;

  @Property({ columnType: 'date' })
  occurredAt!: string;

  @Property({ columnType: 'numeric', nullable: true })
  amount?: string;

  @Property({ columnType: 'numeric', nullable: true })
  price?: string;

  @Property({ columnType: 'numeric', nullable: true })
  securitiesAfterTransaction?: string;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

  @Property({ length: 6, nullable: true })
  updatedAt?: Date;

  @Property({ default: false })
  isDeleted: boolean = false;

}
