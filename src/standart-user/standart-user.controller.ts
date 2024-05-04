import { Crud, CrudController } from '@nestjs-library/crud';
import { Controller } from '@nestjs/common';
import { Standart } from 'src/entities/Standart';
import { StandartUserService } from './standart-user.service';
import { StandartUser } from 'src/entities/StandartUser';

@Crud({entity: StandartUser})
@Controller('standart-user')
export class StandartUserController implements CrudController<StandartUser> {
    constructor(public readonly crudService: StandartUserService){

    }
}
