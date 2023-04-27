import { Entity, ManyToOne, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';
import { Stock } from './Stock';

@Entity()
export class StockFormerName {

  [OptionalProps]?: 'createdAt' | 'isDeleted';

  @PrimaryKey({ columnType: 'uuid' })
  stockFormerNameId!: string;

  @ManyToOne({ entity: () => Stock, fieldName: 'stock_id', onUpdateIntegrity: 'cascade' })
  stockId!: Stock;

  @Property({ columnType: 'text' })
  name!: string;

  @Property({ columnType: 'date', nullable: true })
  from?: string;

  @Property({ columnType: 'date', nullable: true })
  to?: string;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

  @Property({ length: 6, nullable: true })
  updatedAt?: Date;

  @Property({ default: false })
  isDeleted: boolean = false;

}
