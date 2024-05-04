import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Standart } from '../entities/Standart';

@Injectable()
export class StandartService {
    constructor(@InjectRepository(Standart) private readonly standartRepository: Repository<Standart>) {}

    async findAll({ page = 1, limit = 10 }): Promise<Standart[]> {
        const skip = (page - 1) * limit;
        return this.standartRepository.find({
            skip,
            take: limit,
        });
    }

    async findOne(id: string): Promise<Standart> {
        return this.standartRepository.findOne({ where: { idStandart: id}});
    }

    async create(standart: Standart): Promise<Standart> {
        return this.standartRepository.save(standart);
    }

    async update(id: string, updatedStandart: Standart): Promise<Standart> {
        const standart = await this.standartRepository.findOne({where: { idStandart: id}});
        if (!standart) {
            throw new Error('Standart not found');
        }
        Object.assign(standart, updatedStandart);
        return this.standartRepository.save(standart);
    }

    async remove(id: string): Promise<void> {
        await this.standartRepository.delete(id);
    }
}
