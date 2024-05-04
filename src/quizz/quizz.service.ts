import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quizz } from '../entities/Quizz';

@Injectable()
export class QuizzService {
  constructor(
    @InjectRepository(Quizz)
    private readonly quizzRepository: Repository<Quizz>,
  ) {}

  async findAll(): Promise<Quizz[]> {
    return await this.quizzRepository.find();
  }

  async findOne(id: number): Promise<Quizz> {
    return await this.quizzRepository.findOne({ where: { idQuizz: id } });
  }

  async create(quizzData: Partial<Quizz>): Promise<Quizz> {
    const quizz = this.quizzRepository.create(quizzData);
    return await this.quizzRepository.save(quizz);
  }

  async update(id: number, quizzData: Partial<Quizz>): Promise<Quizz> {
    await this.quizzRepository.update(id, quizzData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.quizzRepository.delete(id);
  }
}
