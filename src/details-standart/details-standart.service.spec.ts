import { Test, TestingModule } from '@nestjs/testing';
import { DetailsStandartService } from './details-standart.service';

describe('DetailsStandartService', () => {
  let service: DetailsStandartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailsStandartService],
    }).compile();

    service = module.get<DetailsStandartService>(DetailsStandartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
