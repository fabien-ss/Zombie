import { Test, TestingModule } from '@nestjs/testing';
import { ChapitreService } from './chapitre.service';

describe('ChapitreService', () => {
  let service: ChapitreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChapitreService],
    }).compile();

    service = module.get<ChapitreService>(ChapitreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
