import { CrudService } from '@nestjs-library/crud';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StandartUser } from 'src/entities/StandartUser';
import { Repository } from 'typeorm';

@Injectable()
export class StandartUserService extends CrudService<StandartUser>{
    constructor(@InjectRepository(StandartUser) repository: Repository<StandartUser>){
        super(repository)
    }
}
