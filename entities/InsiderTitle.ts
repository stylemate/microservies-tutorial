import { Entity, ManyToOne, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';
import { Insider } from './Insider';
import { Stock } from './Stock';

@Entity()
export class InsiderTitle {

  [OptionalProps]?: 'createdAt' | 'isDeleted';

  @PrimaryKey({ columnType: 'uuid' })
  insiderTitleId!: string;

  @ManyToOne({ entity: () => Insider, fieldName: 'insider_id', onUpdateIntegrity: 'cascade' })
  insiderId!: Insider;

  @ManyToOne({ entity: () => Stock, fieldName: 'stock_id', onUpdateIntegrity: 'cascade' })
  stockId!: Stock;

  @Property({ columnType: 'text' })
  insiderTitle!: string;

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
