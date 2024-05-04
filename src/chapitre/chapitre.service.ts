import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chapitre } from '../entities/Chapitre';
@Injectable()
export class ChapitreService {
  constructor(
    @InjectRepository(Chapitre)
    private readonly chapitreRepository: Repository<Chapitre>,
  ) {}

  async findAll(): Promise<Chapitre[]> {
    return await this.chapitreRepository.find();
  }

  async findOne(id: number): Promise<Chapitre> {
    return await this.chapitreRepository.findOne({ where: { idChapitre: id}});
  }

  async create(chapitreData: Partial<Chapitre>): Promise<Chapitre> {
    const chapitre = this.chapitreRepository.create(chapitreData);
    return await this.chapitreRepository.save(chapitre);
  }

  async update(id: number, chapitreData: Partial<Chapitre>): Promise<Chapitre> {
    await this.chapitreRepository.update(id, chapitreData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.chapitreRepository.delete(id);
  }
}
