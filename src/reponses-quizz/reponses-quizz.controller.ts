import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { QuestionsQuizz } from '../entities/QuestionsQuizz';
import { QuestionsQuizzService } from './reponses-quizz.service';


@Controller('questions-quizz')
export class QuestionsQuizzController {
  constructor(private readonly questionsQuizzService: QuestionsQuizzService) {}

  @Get()
  async findAll(): Promise<QuestionsQuizz[]> {
    return this.questionsQuizzService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<QuestionsQuizz> {
    return this.questionsQuizzService.findOne(+id);
  }

  @Post()
  async create(@Body() questionsQuizzData: Partial<QuestionsQuizz>): Promise<QuestionsQuizz> {
    return this.questionsQuizzService.create(questionsQuizzData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() questionsQuizzData: Partial<QuestionsQuizz>,
  ): Promise<QuestionsQuizz> {
    return this.questionsQuizzService.update(+id, questionsQuizzData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.questionsQuizzService.remove(+id);
  }
}
