import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ReponsesQuestions } from '../entities/ReponsesQuestions';
import { ReponsesQuestionsService } from './reponses-question.service';

@Controller('reponses-questions')
export class ReponsesQuestionsController {
  constructor(private readonly reponsesQuestionsService: ReponsesQuestionsService) {}

  @Get()
  async findAll(): Promise<ReponsesQuestions[]> {
    return this.reponsesQuestionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ReponsesQuestions> {
    return this.reponsesQuestionsService.findOne(+id);
  }

  @Post()
  async create(@Body() reponsesQuestionsData: Partial<ReponsesQuestions>): Promise<ReponsesQuestions> {
    return this.reponsesQuestionsService.create(reponsesQuestionsData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() reponsesQuestionsData: Partial<ReponsesQuestions>,
  ): Promise<ReponsesQuestions> {
    return this.reponsesQuestionsService.update(+id, reponsesQuestionsData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.reponsesQuestionsService.remove(+id);
  }
}
