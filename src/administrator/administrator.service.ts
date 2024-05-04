import { Injectable } from '@nestjs/common';
import { Administrator } from '../entities/Administrator';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '@nestjs-library/crud';
import { AuthService } from '../jwts/auth.service';

@Injectable()
export class AdministratorService {
    async update(administrator: Administrator) {
        console.log('update admin', administrator);
        await this.repository.save(administrator)
        return await this.repository.findOne({ where: { idAdministrator: administrator.idAdministrator} })
    }
  
    async login(administrator: Administrator) {
        let admin: Administrator = await this.repository.findOne({
            where: { email: administrator.email }
        });
        if(admin.password !== administrator.password) throw new Error(`Invalid password or mail`)
        console.log("hita ",admin)
        administrator = admin;
        return this.authService.generateJwtTokenAdmin(administrator);
    }

    async signin(administrator: Administrator){
        await this.repository.save(administrator);
        console.log("ok")
        return this.authService.generateJwtTokenAdmin(administrator);
    }

    async verify(token: string){
        const { email, password} = await  this.authService.verifyJwtToken(token);
        return await this.repository.findOne({ where: { email: email, password: password } });
    }

    constructor(
        @InjectRepository(Administrator) private readonly repository: Repository<Administrator>,
        private readonly authService: AuthService
    ) {
    }
}
