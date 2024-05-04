import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersQuizzService } from './users-quizz.service';
import { UsersQuizz } from '../entities/UsersQuizz';

@Controller('users-quizz')
export class UsersQuizzController {
  constructor(private readonly usersQuizzService: UsersQuizzService) {}

  @Get()
  async findAll(): Promise<UsersQuizz[]> {
    return this.usersQuizzService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UsersQuizz> {
    return this.usersQuizzService.findOne(+id);
  }

  @Post()
  async create(@Body() usersQuizzData: Partial<UsersQuizz>): Promise<UsersQuizz> {
    return this.usersQuizzService.create(usersQuizzData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() usersQuizzData: Partial<UsersQuizz>,
  ): Promise<UsersQuizz> {
    return this.usersQuizzService.update(+id, usersQuizzData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersQuizzService.remove(+id);
  }

  @Post("/reponseQuizz")
  async addResponseQuizz(@Body() jsonObject: any): Promise<void> {
    return this.usersQuizzService.calculScore(jsonObject);
  }
}
