import { Test, TestingModule } from '@nestjs/testing';
import { ReponsesQuestionController } from './reponses-question.controller';

describe('ReponsesQuestionController', () => {
  let controller: ReponsesQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReponsesQuestionController],
    }).compile();

    controller = module.get<ReponsesQuestionController>(ReponsesQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
