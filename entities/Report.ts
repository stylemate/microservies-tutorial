import { Entity, ManyToOne, OptionalProps, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Form } from './Form';
import { Insider } from './Insider';
import { InsiderTitle } from './InsiderTitle';
import { Stock } from './Stock';

@Entity()
export class Report {

  [OptionalProps]?: 'createdAt' | 'isDeleted';

  @PrimaryKey({ columnType: 'uuid' })
  reportId!: string;

  @ManyToOne({ entity: () => Stock, fieldName: 'stock_id', onUpdateIntegrity: 'cascade' })
  stockId!: Stock;

  @ManyToOne({ entity: () => Insider, fieldName: 'insider_id', onUpdateIntegrity: 'cascade' })
  insiderId!: Insider;

  @ManyToOne({ entity: () => InsiderTitle, fieldName: 'insider_title', onUpdateIntegrity: 'cascade' })
  insiderTitle!: InsiderTitle;

  @ManyToOne({ entity: () => Form, fieldName: 'form', onUpdateIntegrity: 'cascade' })
  form!: Form;

  @Property({ columnType: 'date' })
  reportedDate!: string;

  @Property({ columnType: 'date' })
  filedDate!: string;

  @Unique({ name: 'report_primary_document_location_key' })
  @Property({ columnType: 'text' })
  primaryDocumentLocation!: string;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

  @Property({ length: 6, nullable: true })
  updatedAt?: Date;

  @Property({ default: false })
  isDeleted: boolean = false;

}
