import { Test, TestingModule } from '@nestjs/testing';
import { StandartUserService } from './standart-user.service';

describe('StandartUserService', () => {
  let service: StandartUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StandartUserService],
    }).compile();

    service = module.get<StandartUserService>(StandartUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
