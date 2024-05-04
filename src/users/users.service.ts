import { CrudService } from '@nestjs-library/crud';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/Users';
import { Repository } from 'typeorm';
import { AuthService } from '../jwts/auth.service';

@Injectable()
export class UsersService extends CrudService<Users>
  
{

    constructor(@InjectRepository(Users) repository: Repository<Users>,
        private readonly authService: AuthService) {
        super(repository);
    }

    async countUser() {
        return (await this.repository.find()).length;
    }

    async findUserByEmail(user: Users) {
        return await this.repository.findOneBy(user);
    }

    async getUser(id: string): Promise<Users> {
        let idUser = (id);
        return await this.repository.findOne({
            where: { idUser }
        })
    }

    find() {
        return this.repository.find()
    }

    addUser(user: Users) {
        this.repository.save(user);
    }

    async login(user: Users) {
        let users = await this.repository.findOneBy(user);
        if (users.userPassword !== user.userPassword) throw new Error(`User ${user.userName} does not exist`);
        return this.authService.generateJwtToken(users);
    }

    async signin(user: Users) {
        await this.repository.save(user);
        return this.authService.generateJwtToken(user);
    }

    async verify(token: string) {
        const { userMail, userPassword } = await this.authService.verifyJwtToken(token);
        return await this.repository.findOne({ where: { userMail: userMail, userPassword: userPassword } });
    }


    async findAll(): Promise<Users[]> {
        return this.repository.find();
    }

    async findById(id: string): Promise<Users> {
        return this.repository.findOne({ where: { idUser: id } });
    }

    async create(user: Users): Promise<Users> {
        return this.repository.save(user);
    }

    async update(id: string, updatedUser: Users): Promise<Users> {
        await this.repository.update(id, updatedUser);
        return this.repository.findOne({ where: { idUser: id } });
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
