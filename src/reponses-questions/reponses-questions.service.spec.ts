import { Test, TestingModule } from '@nestjs/testing';
import { ReponsesQuestionsService } from './reponses-questions.service';

describe('ReponsesQuestionsService', () => {
  let service: ReponsesQuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReponsesQuestionsService],
    }).compile();

    service = module.get<ReponsesQuestionsService>(ReponsesQuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
