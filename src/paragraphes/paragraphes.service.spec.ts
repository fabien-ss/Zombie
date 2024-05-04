import { Test, TestingModule } from '@nestjs/testing';
import { ParagraphesService } from './paragraphes.service';

describe('ParagraphesService', () => {
  let service: ParagraphesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParagraphesService],
    }).compile();

    service = module.get<ParagraphesService>(ParagraphesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
