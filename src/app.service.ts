import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Form } from 'entities/Form';

@Injectable()
export class AppService {
  constructor(private readonly em: EntityManager) {}
  async getHello() {
    return await this.em.findAndCount(Form, {});
  }
}
