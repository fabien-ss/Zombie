import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { QuestionsQuizz } from '../entities/QuestionsQuizz';
@Injectable()
export class QuestionsQuizzService {
  constructor(
    @InjectRepository(QuestionsQuizz)
    private readonly questionsQuizzRepository: Repository<QuestionsQuizz>,
  ) {}

  async findAll(): Promise<QuestionsQuizz[]> {
    return await this.questionsQuizzRepository.find();
  }

  async findOne(id: number): Promise<QuestionsQuizz> {
    return await this.questionsQuizzRepository.findOne({ where: { idQuestionsQuizz: id } });
  }

  async create(questionsQuizzData: Partial<QuestionsQuizz>): Promise<QuestionsQuizz> {
    const questionsQuizz = this.questionsQuizzRepository.create(questionsQuizzData);
    return await this.questionsQuizzRepository.save(questionsQuizz);
  }

  async update(id: number, questionsQuizzData: Partial<QuestionsQuizz>): Promise<QuestionsQuizz> {
    await this.questionsQuizzRepository.update(id, questionsQuizzData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.questionsQuizzRepository.delete(id);
  }
}
