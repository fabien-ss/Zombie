import { Test, TestingModule } from '@nestjs/testing';
import { UsersChapitreService } from './users-chapitre.service';

describe('UsersChapitreService', () => {
  let service: UsersChapitreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersChapitreService],
    }).compile();

    service = module.get<UsersChapitreService>(UsersChapitreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
