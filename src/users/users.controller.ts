import { Crud, CrudController, CrudService } from '@nestjs-library/crud';
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { Users } from '../entities/Users';
import { UsersService } from './users.service';

@Crud({entity: Users})
@Controller('users')
export class UsersController implements CrudController<Users>{
    constructor(public readonly crudService: UsersService, public readonly userService: UsersService){

    }

    @Get("/count")
    async count(){
        return { count: await this.crudService.countUser()};
    }

    @Post('/login')
    async login(@Body() user: Users){
        try{
            return {
                status: 200,
                data: await this.userService.login(user)
            };
        }catch(e){
            console.log(e);
            return {
                status: 500,
                data: e.message
            }
        }
    }

    @Post('/sign')
    async sign(@Body() user: Users){
        try{
            return {
                status: 200,
                data: await this.userService.signin(user)
            };
        }catch(e){
            return {
                status: 500,
                data: e.detail
            }
        }
    }

    @Get()
    async findAll(): Promise<Users[]> {
        return this.crudService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Users> {
        return this.crudService.findById(id);
    }

    @Post()
    async create(@Body() user: Users): Promise<Users> {
        return this.crudService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updatedUser: Users): Promise<Users> {
        return this.crudService.update(id, updatedUser);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.crudService.delete(id);
    }
}

