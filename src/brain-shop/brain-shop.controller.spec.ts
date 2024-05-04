import { Test, TestingModule } from '@nestjs/testing';
import { BrainShopController } from './brain-shop.controller';

describe('BrainShopController', () => {
  let controller: BrainShopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrainShopController],
    }).compile();

    controller = module.get<BrainShopController>(BrainShopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
