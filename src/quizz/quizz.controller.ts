import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { QuizzService } from './quizz.service';
import { Quizz } from '../entities/Quizz';

@Controller('quizz')
export class QuizzController {
  constructor(private readonly quizzService: QuizzService) {}

  @Get()
  async findAll(): Promise<Quizz[]> {
    return this.quizzService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Quizz> {
    return this.quizzService.findOne(+id);
  }

  @Post()
  async create(@Body() quizzData: Partial<Quizz>): Promise<Quizz> {
    return this.quizzService.create(quizzData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() quizzData: Partial<Quizz>,
  ): Promise<Quizz> {
    return this.quizzService.update(+id, quizzData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.quizzService.remove(+id);
  }
}
