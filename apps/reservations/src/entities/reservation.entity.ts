import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './user.entity';
import { Place } from './place.entity';
import { Invoice } from './invoice.entity';

@Entity()
export class Reservation {
  @PrimaryKey({ columnType: 'uuid' })
  reservationId!: string;

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
  timestamp!: Date;

  @Property({ columnType: 'date' })
  startDate!: string;

  @Property({ columnType: 'date' })
  endDate!: string;
}
