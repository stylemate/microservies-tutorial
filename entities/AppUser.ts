import { Entity, ManyToOne, OptionalProps, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { TierList } from './TierList';

@Entity()
export class AppUser {

  [OptionalProps]?: 'createdAt' | 'emailVerified' | 'isActive' | 'isDeleted' | 'lastLoggedInAt' | 'tier';

  @PrimaryKey({ columnType: 'uuid' })
  mapUserId!: string;

  @Property({ columnType: 'text' })
  firstName!: string;

  @Property({ columnType: 'text' })
  lastName!: string;

  @Unique({ name: 'app_user_email_address_key' })
  @Property({ columnType: 'text' })
  emailAddress!: string;

  @Property({ columnType: 'text', nullable: true })
  password?: string;

  @ManyToOne({ entity: () => TierList, fieldName: 'tier', onUpdateIntegrity: 'cascade', default: 'FREE' })
  tier!: TierList;

  @Property({ default: true })
  isActive: boolean = true;

  @Property({ default: false })
  emailVerified: boolean = false;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  lastLoggedInAt!: Date;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

  @Property({ length: 6, nullable: true })
  updatedAt?: Date;

  @Property({ default: false })
  isDeleted: boolean = false;

}
