import { Test, TestingModule } from '@nestjs/testing';
import { StandartController } from './standart.controller';

describe('StandartController', () => {
  let controller: StandartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StandartController],
    }).compile();

    controller = module.get<StandartController>(StandartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
