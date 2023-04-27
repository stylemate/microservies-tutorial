import { Entity, ManyToOne, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';
import { Stock } from './Stock';

@Entity()
export class StockDifferentTicker {

  [OptionalProps]?: 'createdAt' | 'isDeleted';

  @PrimaryKey({ columnType: 'uuid' })
  stockDifferentTickerId!: string;

  @ManyToOne({ entity: () => Stock, fieldName: 'stock_id', onUpdateIntegrity: 'cascade' })
  stockId!: Stock;

  @Property({ length: 14 })
  ticker!: string;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

  @Property({ length: 6, nullable: true })
  updatedAt?: Date;

  @Property({ default: false })
  isDeleted: boolean = false;

}
