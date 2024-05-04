import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersQuizz } from '../entities/UsersQuizz';

@Injectable()
export class UsersQuizzService {
  constructor(
    @InjectRepository(UsersQuizz)
    private readonly usersQuizzRepository: Repository<UsersQuizz>,
  ) {}

  async findAll(): Promise<UsersQuizz[]> {
    return await this.usersQuizzRepository.find();
  }

  async findOne(id: number): Promise<UsersQuizz> {
    return await this.usersQuizzRepository.findOne({ where: {id: id} });
  }

  async create(usersQuizzData: Partial<UsersQuizz>): Promise<UsersQuizz> {
    const usersQuizz = this.usersQuizzRepository.create(usersQuizzData);
    return await this.usersQuizzRepository.save(usersQuizz);
  }

  async update(id: number, usersQuizzData: Partial<UsersQuizz>): Promise<UsersQuizz> {
    await this.usersQuizzRepository.update(id, usersQuizzData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersQuizzRepository.delete(id);
  }
}
