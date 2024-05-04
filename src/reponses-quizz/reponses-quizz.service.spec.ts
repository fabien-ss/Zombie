import { Test, TestingModule } from '@nestjs/testing';
import { ReponsesQuizzService } from './reponses-quizz.service';

describe('ReponsesQuizzService', () => {
  let service: ReponsesQuizzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReponsesQuizzService],
    }).compile();

    service = module.get<ReponsesQuizzService>(ReponsesQuizzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
