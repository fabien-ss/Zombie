import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsQuizzService } from './questions-quizz.service';

describe('QuestionsQuizzService', () => {
  let service: QuestionsQuizzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionsQuizzService],
    }).compile();

    service = module.get<QuestionsQuizzService>(QuestionsQuizzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
