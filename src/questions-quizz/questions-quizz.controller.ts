import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { QuestionsQuizz } from '../entities/QuestionsQuizz';
import { QuestionsQuizzService } from './questions-quizz.service';

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
  async create(@Body() questionsQuizzData: QuestionsQuizz): Promise<QuestionsQuizz> {
    return this.questionsQuizzService.create(questionsQuizzData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() questionsData: Partial<QuestionsQuizz>,
  ): Promise<QuestionsQuizz> {
    return this.questionsQuizzService.update(+id, questionsData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.questionsQuizzService.remove(+id);
  }

  // start
  @Get('randomQuestions/:id_quizz')
  async getQuestions(@Param('id_quizz') id_quizz: string): Promise<QuestionsQuizz> {
    return this.questionsQuizzService.getRandomQuestionsQuizz(+id_quizz);
  }
}
