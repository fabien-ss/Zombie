import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quizz } from '../entities/Quizz';
import { QuestionsQuizzService } from '../questions-quizz/questions-quizz.service';
import { UsersChapitreService } from '../users-chapitre/users-chapitre.service';
import { UsersQuizzService } from '../users-quizz/users-quizz.service';
import { ReponsesQuestionsService } from '../reponses-question/reponses-question.service';
import { QuestionsQuizz } from '../entities/QuestionsQuizz';

@Injectable()
export class QuizzService {
  constructor(
    @InjectRepository(Quizz)
    private readonly quizzRepository: Repository<Quizz>,
    private questionsQuizzService: QuestionsQuizzService,
    private usersChapitreService: UsersChapitreService,
    private usersQuizzService: UsersQuizzService,
    private reponsesQuestionsService: ReponsesQuestionsService,
  ) {}

  async findAll(): Promise<Quizz[]> {
    return await this.quizzRepository.find();
  }

  async findOne(id: number): Promise<Quizz> {
    return await this.quizzRepository.findOne({ where: { idQuizz: id } });
  }

  async create(quizzData: Partial<Quizz>): Promise<Quizz> {
    const quizz = this.quizzRepository.create(quizzData);
    return await this.quizzRepository.save(quizz);
  }

  async update(id: number, quizzData: Partial<Quizz>): Promise<Quizz> {
    await this.quizzRepository.update(id, quizzData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.quizzRepository.delete(id);
  }

  async getQuizz(id_chapitre: number): Promise<Quizz> {
    return await this.quizzRepository.findOne({ where: { idChapitre: id_chapitre } });
  }

    async returnQuizz(id_user: number, id_chapitre: number): Promise<any> {
      const check = await this.usersChapitreService.checkChapitre(id_chapitre, id_user);
      if(check){
        const quizz = await this.getQuizz(id_chapitre);
        // Assuming this code is inside an async function
        const randomQuestions: QuestionsQuizz[] = await this.questionsQuizzService.getRandomQuestionsQuizz(quizz.idQuizz);
        const rep = [];
        if(Array.isArray(randomQuestions)){
          for(let questions of randomQuestions){
            rep.push({
              "questions": questions,
              "reponses" : await this.reponsesQuestionsService.findOneReponses(questions.idQuestionsQuizz)
            })
          }
  
          const result = {
            "quizz": rep,
            "note": await this.usersQuizzService.getScoreForQuizz(id_user, quizz.idQuizz)
          }
          return result;
        }
      }
      return null;
    }
}
