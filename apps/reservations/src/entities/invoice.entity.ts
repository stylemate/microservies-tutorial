import { Entity, PrimaryKey, PrimaryKeyProp, PrimaryKeyType } from '@mikro-orm/core';

@Entity()
export class Invoice {
  [PrimaryKeyProp]: 'invoiceId';
  [PrimaryKeyType]: string;

  @PrimaryKey({ columnType: 'uuid' })
  invoiceId!: string;
}
