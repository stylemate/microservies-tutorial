import { Entity, ManyToOne, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';
import { AppUser } from './AppUser';
import { Stock } from './Stock';

@Entity()
export class Subscription {

  [OptionalProps]?: 'createdAt' | 'isDeleted';

  @PrimaryKey({ columnType: 'uuid' })
  subscriptionId!: string;

  @ManyToOne({ entity: () => AppUser, fieldName: 'app_user_id', onUpdateIntegrity: 'cascade' })
  appUserId!: AppUser;

  @ManyToOne({ entity: () => Stock, fieldName: 'stock_id', onUpdateIntegrity: 'cascade' })
  stockId!: Stock;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

  @Property({ length: 6, nullable: true })
  updatedAt?: Date;

  @Property({ default: false })
  isDeleted: boolean = false;

}
