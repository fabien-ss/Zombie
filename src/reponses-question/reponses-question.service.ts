import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReponsesQuestions } from '../entities/ReponsesQuestions';

@Injectable()
export class ReponsesQuestionsService {
  constructor(
    @InjectRepository(ReponsesQuestions)
    private readonly reponsesQuestionsRepository: Repository<ReponsesQuestions>,
  ) {}

  async findAll(): Promise<ReponsesQuestions[]> {
    return await this.reponsesQuestionsRepository.find();
  }

  async findOne(id: number): Promise<ReponsesQuestions> {
    return await this.reponsesQuestionsRepository.findOne( { where: { idReponsesQuestions: id}});
  }

  async create(reponsesQuestionsData: Partial<ReponsesQuestions>): Promise<ReponsesQuestions> {
    const reponsesQuestions = this.reponsesQuestionsRepository.create(reponsesQuestionsData);
    return await this.reponsesQuestionsRepository.save(reponsesQuestions);
  }

  async update(id: number, reponsesQuestionsData: Partial<ReponsesQuestions>): Promise<ReponsesQuestions> {
    await this.reponsesQuestionsRepository.update(id, reponsesQuestionsData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.reponsesQuestionsRepository.delete(id);
  }
}
