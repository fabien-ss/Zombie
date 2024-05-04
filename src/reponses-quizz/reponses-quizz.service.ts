import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReponsesQuizz } from '../entities/ReponsesQuizz';
import { QuestionsQuizzService } from '../questions-quizz/questions-quizz.service';

@Injectable()
export class ReponsesQuizzService {
  constructor(
    @InjectRepository(ReponsesQuizz)
    private readonly reponsesQuizzRepository: Repository<ReponsesQuizz>,
    private questionsQuizzService: QuestionsQuizzService,
  ) {}

  async findAll(): Promise<ReponsesQuizz[]> {
    return await this.reponsesQuizzRepository.find();
  }

  async findOne(id: number): Promise<ReponsesQuizz> {
    return await this.reponsesQuizzRepository.findOne({ where: { id: id } });
  }

  async create(reponseQuizzData: Partial<ReponsesQuizz>): Promise<ReponsesQuizz> {
    const reponseQuizz = this.reponsesQuizzRepository.create(reponseQuizzData);
    return await this.reponsesQuizzRepository.save(reponseQuizz);
  }

  async update(id: number, reponseQuizzData: Partial<ReponsesQuizz>): Promise<ReponsesQuizz> {
    await this.reponsesQuizzRepository.update(id, reponseQuizzData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.reponsesQuizzRepository.delete(id);
  }

  // start 
  async getScore(idQuestion: number, estVraie: boolean, idReponse: number, idUser: number) { 

    try {
      const reponsesQuizz = new ReponsesQuizz();
      reponsesQuizz.idQuestion = idQuestion;
      reponsesQuizz.idUser = idUser;
      reponsesQuizz.idReponse = idReponse;
      
      const question = await this.questionsQuizzService.findOne(idQuestion);
      this.create(reponsesQuizz);
      console.log(question);
      let score = 0;

      if(estVraie){
        if(question.estDifficile){
          score = 2*5;
        } else {
          score = 5;
        }
      }
      console.log(score+" for "+estVraie);
      
      return score;
    } catch (error) {
      console.error("Error CalculScore in responses-quizz-service: ", error);
      console.log("Error CalculScore in responses-quizz-service: ", error);
    }
  }
}
