import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetailsChapitre } from '../entities/DetailsChapitre';
import { Chapitre } from '../entities/Chapitre';
import { ParagraphesService } from '../paragraphes/paragraphes.service';

@Injectable()
  export class DetailsChapitreService {
    async getDetailsByIdChapitre(id: number) {
      let chapitre: DetailsChapitre[] = await this.detailsChapitreRepository.find({
        where: { idChapitre: id}});
      
      // Filter out details with matching chapter ID
//      chapitre = chapitre.filter(detail => detail.idChapitre == id);
        
      return chapitre; 
    }
    
  constructor(
    @InjectRepository(DetailsChapitre)
    private readonly detailsChapitreRepository: Repository<DetailsChapitre>,
    private readonly paragrapheService: ParagraphesService
  ) {}

  async findAll(): Promise<DetailsChapitre[]> {
    return await this.detailsChapitreRepository.find();
  }

  async findOne(id: number): Promise<DetailsChapitre> {
    return await this.detailsChapitreRepository.findOne({ where: { idChapitre: id}});
  }

  async create(detailsChapitreData: Partial<DetailsChapitre>): Promise<DetailsChapitre> {
    const detailsChapitre = this.detailsChapitreRepository.create(detailsChapitreData);
    return await this.detailsChapitreRepository.save(detailsChapitre);
  }

  async update(id: number, detailsChapitreData: Partial<DetailsChapitre>): Promise<DetailsChapitre> {
    await this.detailsChapitreRepository.update(id, detailsChapitreData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.detailsChapitreRepository.delete(id);
  }
}
