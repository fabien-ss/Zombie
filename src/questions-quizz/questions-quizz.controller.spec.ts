import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsQuizzController } from './questions-quizz.controller';

describe('QuestionsQuizzController', () => {
  let controller: QuestionsQuizzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionsQuizzController],
    }).compile();

    controller = module.get<QuestionsQuizzController>(QuestionsQuizzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
