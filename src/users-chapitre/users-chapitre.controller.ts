import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersChapitreService } from './users-chapitre.service';
import { UsersChapitre } from '../entities/UsersChapitre';

@Controller('users-chapitre')
export class UsersChapitreController {
  constructor(private readonly usersChapitreService: UsersChapitreService) {}

  @Get()
  async findAll(): Promise<UsersChapitre[]> {
    return this.usersChapitreService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UsersChapitre> {
    return this.usersChapitreService.findOne(+id);
  }

  @Post()
  async create(@Body() usersChapitreData: Partial<UsersChapitre>): Promise<UsersChapitre> {
    return this.usersChapitreService.create(usersChapitreData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() usersChapitreData: Partial<UsersChapitre>,
  ): Promise<UsersChapitre> {
    return this.usersChapitreService.update(+id, usersChapitreData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersChapitreService.remove(+id);
  }
}
