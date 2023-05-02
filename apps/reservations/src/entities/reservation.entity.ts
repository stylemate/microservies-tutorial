import {
  Entity,
  ManyToOne,
  PrimaryKey,
  PrimaryKeyProp,
  PrimaryKeyType,
  Property,
} from '@mikro-orm/core';
import { User } from './user.entity';
import { Place } from './place.entity';
import { Invoice } from './invoice.entity';

@Entity()
export class Reservation {
  // Type only works fine, but both just in case
  [PrimaryKeyProp]: 'reservationId';
  [PrimaryKeyType]: string;

  @PrimaryKey({ columnType: 'uuid', defaultRaw: 'gen_random_uuid()' })
  reservationId: string;

  @ManyToOne({
    entity: () => User,
    fieldName: 'userId',
    onUpdateIntegrity: 'cascade',
    onDelete: 'set null',
    nullable: true,
  })
  userId?: string;

  @ManyToOne({
    entity: () => Place,
    fieldName: 'placeId',
    onUpdateIntegrity: 'cascade',
    onDelete: 'set null',
    nullable: true,
  })
  placeId?: string;

  @ManyToOne({
    entity: () => Invoice,
    fieldName: 'invoiceId',
    onUpdateIntegrity: 'cascade',
    onDelete: 'set null',
    nullable: true,
  })
  invoiceId?: string;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  timestamp: Date;

  @Property({ columnType: 'date', nullable: true })
  startDate?: string;

  @Property({ columnType: 'date', nullable: true })
  endDate?: string;
}
