import { Entity, ManyToOne, OptionalProps, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Exchange } from './Exchange';
import { Sic } from './Sic';

@Entity()
export class Stock {

  [OptionalProps]?: 'createdAt' | 'isDeleted';

  @PrimaryKey({ columnType: 'uuid' })
  stockId!: string;

  @Unique({ name: 'stock_order_key' })
  @Property()
  order!: number;

  @Unique({ name: 'stock_cik_key' })
  @Property({ columnType: 'int8' })
  cik!: string;

  @ManyToOne({ entity: () => Sic, fieldName: 'sic', onUpdateIntegrity: 'cascade', onDelete: 'set null', nullable: true })
  sic?: Sic;

  @Property({ columnType: 'text' })
  name!: string;

  @Property({ length: 14 })
  ticker!: string;

  @ManyToOne({ entity: () => Exchange, fieldName: 'exchange', onUpdateIntegrity: 'cascade', onDelete: 'set null', nullable: true })
  exchange?: Exchange;

  @Property({ length: 4, nullable: true })
  fiscalYearEnd?: string;

  @Property({ columnType: 'int8', nullable: true })
  marketCapitalization?: string;

  @Property({ columnType: 'int8', nullable: true })
  sharesIssued?: string;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

  @Property({ length: 6, nullable: true })
  updatedAt?: Date;

  @Property({ default: false })
  isDeleted: boolean = false;

}
