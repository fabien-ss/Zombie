import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Paragraphes } from '../entities/Paragraphes';

@Injectable()
export class ParagraphesService {
  constructor(
    @InjectRepository(Paragraphes)
    private readonly paragraphesRepository: Repository<Paragraphes>,
  ) {}

  async findAll(): Promise<Paragraphes[]> {
    return await this.paragraphesRepository.find();
  }

  async findOne(id: number): Promise<Paragraphes> {
    return await this.paragraphesRepository.findOne({ where: {idParagraphes : id}});
  }

  async create(paragraphesData: Partial<Paragraphes>): Promise<Paragraphes> {
    const paragraphes = this.paragraphesRepository.create(paragraphesData);
    return await this.paragraphesRepository.save(paragraphes);
  }

  async update(id: number, paragraphesData: Partial<Paragraphes>): Promise<Paragraphes> {
    await this.paragraphesRepository.update(id, paragraphesData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.paragraphesRepository.delete(id);
  }
}