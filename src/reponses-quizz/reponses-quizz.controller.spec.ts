import { Test, TestingModule } from '@nestjs/testing';
import { ReponsesQuizzController } from './reponses-quizz.controller';

describe('ReponsesQuizzController', () => {
  let controller: ReponsesQuizzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReponsesQuizzController],
    }).compile();

    controller = module.get<ReponsesQuizzController>(ReponsesQuizzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
