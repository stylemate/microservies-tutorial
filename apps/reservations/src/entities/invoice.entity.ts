import { Entity, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Invoice {
  @PrimaryKey({ columnType: 'uuid' })
  invoiceId!: string;
}
