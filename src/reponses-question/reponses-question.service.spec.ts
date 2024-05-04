import { Test, TestingModule } from '@nestjs/testing';
import { ReponsesQuestionService } from './reponses-question.service';

describe('ReponsesQuestionService', () => {
  let service: ReponsesQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReponsesQuestionService],
    }).compile();

    service = module.get<ReponsesQuestionService>(ReponsesQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
