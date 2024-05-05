import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersQuizz } from '../entities/UsersQuizz';
import { ReponsesQuizzService } from '../reponses-quizz/reponses-quizz.service';
import { Connection } from 'typeorm';

@Injectable()
export class UsersQuizzService {
  constructor(
    @InjectRepository(UsersQuizz)
    private readonly usersQuizzRepository: Repository<UsersQuizz>,
    private reponseQuizzService: ReponsesQuizzService,
    private readonly connection: Connection,
  ) {}

  async findAll(): Promise<UsersQuizz[]> {
    return await this.usersQuizzRepository.find();
  }

  async findOne(id: number): Promise<UsersQuizz> {
    return await this.usersQuizzRepository.findOne({ where: {id: id} });
  }

  async create(usersQuizzData: Partial<UsersQuizz>): Promise<UsersQuizz> {
    const usersQuizz = this.usersQuizzRepository.create(usersQuizzData);
    return await this.usersQuizzRepository.save(usersQuizz);
  }

  async update(id: number, usersQuizzData: Partial<UsersQuizz>): Promise<UsersQuizz> {
    await this.usersQuizzRepository.update(id, usersQuizzData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersQuizzRepository.delete(id);
  }

  // start
  async calculScore(jsonObject) {
    try {
        let score = 0;

        if (!Array.isArray(jsonObject.data)) {
          throw new Error('jsonObject.data is not an array');
        }
    
        const scorePromises = jsonObject.data.map(oneData => 
          this.reponseQuizzService.getScore(oneData.idQuestion, oneData.estVraie, oneData.idReponse, jsonObject.idUser)
         );
        const scores = await Promise.all(scorePromises);
        score = scores.reduce((acc, curr) => acc + curr, 0);         
    
        const usersQuizz = new UsersQuizz();
        usersQuizz.idQuizz = jsonObject.idQuizz;
        usersQuizz.idUser = jsonObject.idUser;
        usersQuizz.score = score;
    
        console.log(usersQuizz);
        const result = await this.create(usersQuizz);
        console.log('Create operation result:', result);
        
    } catch (error) {
      console.error("CalculScore in users-quizz-services: ", error);
      console.log("CalculScore in users-quizz-services: ", error);
    }
  }

  async getScoreForQuizz(idUser: number, idQuizz: number): Promise<UsersQuizz> {
    try {
      // const reponses = await this.usersQuizzRepository.find({
      //   where: { idUser: idUser, idQuizz: idQuizz },
      //   order: { id: 'DESC' },
      //   take: 1
      // });
      const reponses = await this.connection.query('SELECT * FROM `users_quizz` `usersQuizz` WHERE `usersQuizz`.`id_quizz` = ? AND `usersQuizz`.`id_user` = ? ORDER BY id DESC LIMIT 1;', [idQuizz, idUser]); // Exécutez la requête SQL brute

      console.log(reponses);
      if(!reponses){
        return null;
      }
      return reponses[0];

    } catch (error) {
      console.error("Error User-Quizz-Service: ", error);
      console.log("Error User-Quizz-Service: ", error);
    }
  }
}
