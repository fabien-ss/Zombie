import { Test, TestingModule } from '@nestjs/testing';
import { StandartService } from './standart.service';

describe('StandartService', () => {
  let service: StandartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StandartService],
    }).compile();

    service = module.get<StandartService>(StandartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
