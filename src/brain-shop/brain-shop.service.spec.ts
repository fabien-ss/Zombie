import { Test, TestingModule } from '@nestjs/testing';
import { BrainShopService } from './brain-shop.service';

describe('BrainShopService', () => {
  let service: BrainShopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrainShopService],
    }).compile();

    service = module.get<BrainShopService>(BrainShopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
