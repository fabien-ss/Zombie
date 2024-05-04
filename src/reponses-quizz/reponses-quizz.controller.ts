import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ReponsesQuizzService } from './reponses-quizz.service';
import { ReponsesQuizz } from '../entities/ReponsesQuizz';

@Controller('reponses-quizz')
export class ReponsesQuizzController {
  constructor(private readonly reponsesQuizzService: ReponsesQuizzService) {}

  @Get()
  async findAll(): Promise<ReponsesQuizz[]> {
    return this.reponsesQuizzService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ReponsesQuizz> {
    return this.reponsesQuizzService.findOne(+id);
  }

  @Post()
  async create(@Body() reponseQuizzData: Partial<ReponsesQuizz>): Promise<ReponsesQuizz> {
    return this.reponsesQuizzService.create(reponseQuizzData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() reponseQuizzData: Partial<ReponsesQuizz>,
  ): Promise<ReponsesQuizz> {
    return this.reponsesQuizzService.update(+id, reponseQuizzData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.reponsesQuizzService.remove(+id);
  }
}
