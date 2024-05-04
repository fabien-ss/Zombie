import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Users } from '../entities/Users';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CrudService } from '@nestjs-library/crud';

@Injectable()
export class AuthentificationService extends  CrudService<Users>{

    
}
