import { Entity, ManyToOne, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';
import { AppUser } from './AppUser';
import { Provider } from './Provider';

@Entity()
export class SocialToken {

  [OptionalProps]?: 'createdAt' | 'isDeleted';

  @PrimaryKey({ columnType: 'text' })
  socialTokenId!: string;

  @ManyToOne({ entity: () => Provider, fieldName: 'provider', onUpdateIntegrity: 'cascade', primary: true })
  provider!: Provider;

  @ManyToOne({ entity: () => AppUser, fieldName: 'user_id', onUpdateIntegrity: 'cascade', primary: true })
  userId!: AppUser;

  @Property({ columnType: 'text' })
  accessToken!: string;

  @Property({ columnType: 'text', nullable: true })
  refreshToken?: string;

  @Property({ length: 6, nullable: true })
  expiresAt?: Date;

  @Property({ length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt!: Date;

  @Property({ length: 6, nullable: true })
  updatedAt?: Date;

  @Property({ default: false })
  isDeleted: boolean = false;

}
