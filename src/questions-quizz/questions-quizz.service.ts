import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Connection } from 'typeorm';

import { QuestionsQuizz } from '../entities/QuestionsQuizz';
@Injectable()
export class QuestionsQuizzService {
  async getQuestionsByIdQuizz(arg0: number): Promise<QuestionsQuizz[] | PromiseLike<QuestionsQuizz[]>> {
    //throw new Error('Method not implemented.');
     return await this.questionsQuizzRepository.find({ where: { idQuizz: arg0 }});
  }
  constructor(
    @InjectRepository(QuestionsQuizz)
    private readonly questionsQuizzRepository: Repository<QuestionsQuizz>,
    private readonly connection: Connection,
  ) {}

  async findAll(): Promise<QuestionsQuizz[]> {
    return await this.questionsQuizzRepository.find();
  }

  async findOne(id: number): Promise<QuestionsQuizz> {
    return await this.questionsQuizzRepository.findOne({ where: { idQuestionsQuizz: id } });
  }

  async create(questionsQuizzData: Partial<QuestionsQuizz>): Promise<QuestionsQuizz> {
    const questionsQuizz = this.questionsQuizzRepository.create(questionsQuizzData);
    return await this.questionsQuizzRepository.save(questionsQuizz);
  }

  async update(id: number, questionsQuizzData: Partial<QuestionsQuizz>): Promise<QuestionsQuizz> {
    await this.questionsQuizzRepository.update(id, questionsQuizzData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.questionsQuizzRepository.delete(id);
  }

  async getRandomQuestionsQuizz(id_quizz: number): Promise<QuestionsQuizz[]> {
    try {
        const nonDifficultQuestions = await this.connection.query('SELECT * FROM `questions_quizz` `questionsQuizz` WHERE `questionsQuizz`.`id_quizz` = ? AND `questionsQuizz`.`est_difficile` = 0 ORDER BY RAND() ASC LIMIT 2;', [id_quizz]);
        const difficultQuestion = await this.connection.query('SELECT * FROM `questions_quizz` `questionsQuizz` WHERE `questionsQuizz`.`id_quizz` = ? AND `questionsQuizz`.`est_difficile` = 1 ORDER BY RAND() ASC LIMIT 1;', [id_quizz]);

            // console.log(difficultQuestion);

            const questions = [...nonDifficultQuestions,...difficultQuestion];
            // console.log(questions);

            if(!questions){
                return null;
            }
            return questions;
        } catch (error) {
            console.error("Error getRandomQuestionsQuizz in questions-quizz.service: ", error);
            console.log("Error getRandomQuestionsQuizz in questions-quizz.service: ", error);
        }
    }
}
