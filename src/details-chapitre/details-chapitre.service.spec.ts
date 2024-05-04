import { Test, TestingModule } from '@nestjs/testing';
import { DetailsChapitreService } from './details-chapitre.service';

describe('DetailsChapitreService', () => {
  let service: DetailsChapitreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailsChapitreService],
    }).compile();

    service = module.get<DetailsChapitreService>(DetailsChapitreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
