import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersChapitre } from '../entities/UsersChapitre';

@Injectable()
export class UsersChapitreService {
  constructor(
    @InjectRepository(UsersChapitre)
    private readonly usersChapitreRepository: Repository<UsersChapitre>,
  ) {}

  async findAll(): Promise<UsersChapitre[]> {
    return await this.usersChapitreRepository.find();
  }

  async findOne(id: number): Promise<UsersChapitre> {
    return await this.usersChapitreRepository.findOne({ where: { id: id } });
  }

  async create(usersChapitreData: Partial<UsersChapitre>): Promise<UsersChapitre> {
    const usersChapitre = this.usersChapitreRepository.create(usersChapitreData);
    return await this.usersChapitreRepository.save(usersChapitre);
  }

  async update(id: number, usersChapitreData: Partial<UsersChapitre>): Promise<UsersChapitre> {
    await this.usersChapitreRepository.update(id, usersChapitreData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersChapitreRepository.delete(id);
  }

  async checkChapitre(id_chapitre: number, id_user: number): Promise<UsersChapitre> {
    try {
      const usersChapitre = await this.usersChapitreRepository.findOne({ where: { idChapitre: id_chapitre , idUser: id_user} });
      if(!usersChapitre){
        return null;
      }
      return usersChapitre;
    } catch (error) {
      console.error("UsersChapitre checkChapitre: ", error);
    }
  }
}
