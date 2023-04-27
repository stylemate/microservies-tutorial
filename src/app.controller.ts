import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Form } from '../entities/Form';
import { EntityRepository } from '@mikro-orm/postgresql';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(Form)
    private readonly testRepository: EntityRepository<Form>,
  ) {}

  @Get()
  async getHello() {
    return await this.testRepository.findAll();
  }
}
