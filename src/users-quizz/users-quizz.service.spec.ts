import { Test, TestingModule } from '@nestjs/testing';
import { UsersQuizzService } from './users-quizz.service';

describe('UsersQuizzService', () => {
  let service: UsersQuizzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersQuizzService],
    }).compile();

    service = module.get<UsersQuizzService>(UsersQuizzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
