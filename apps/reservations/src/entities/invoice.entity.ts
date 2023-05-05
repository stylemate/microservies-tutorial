import { Entity, PrimaryKey, PrimaryKeyProp, PrimaryKeyType } from '@mikro-orm/core';

@Entity()
export class Invoice {
  [PrimaryKeyProp]: 'invoiceId';
  [PrimaryKeyType]: string;

  @PrimaryKey({ columnType: 'uuid', defaultRaw: 'gen_random_uuid()' })
  invoiceId!: string;
}
