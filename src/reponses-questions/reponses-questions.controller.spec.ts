import { Test, TestingModule } from '@nestjs/testing';
import { ReponsesQuestionsController } from './reponses-questions.controller';

describe('ReponsesQuestionsController', () => {
  let controller: ReponsesQuestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReponsesQuestionsController],
    }).compile();

    controller = module.get<ReponsesQuestionsController>(ReponsesQuestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
