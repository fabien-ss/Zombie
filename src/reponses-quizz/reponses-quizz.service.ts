import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReponsesQuizz } from '../entities/ReponsesQuizz';

@Injectable()
export class ReponsesQuizzService {
  constructor(
    @InjectRepository(ReponsesQuizz)
    private readonly reponsesQuizzRepository: Repository<ReponsesQuizz>,
  ) {}

  async findAll(): Promise<ReponsesQuizz[]> {
    return await this.reponsesQuizzRepository.find();
  }

  async findOne(id: number): Promise<ReponsesQuizz> {
    return await this.reponsesQuizzRepository.findOne({ where: { id: id } });
  }

  async create(reponseQuizzData: Partial<ReponsesQuizz>): Promise<ReponsesQuizz> {
    const reponseQuizz = this.reponsesQuizzRepository.create(reponseQuizzData);
    return await this.reponsesQuizzRepository.save(reponseQuizz);
  }

  async update(id: number, reponseQuizzData: Partial<ReponsesQuizz>): Promise<ReponsesQuizz> {
    await this.reponsesQuizzRepository.update(id, reponseQuizzData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.reponsesQuizzRepository.delete(id);
  }
}
