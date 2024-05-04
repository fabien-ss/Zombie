import { Test, TestingModule } from '@nestjs/testing';
import { StandartUserController } from './standart-user.controller';

describe('StandartUserController', () => {
  let controller: StandartUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StandartUserController],
    }).compile();

    controller = module.get<StandartUserController>(StandartUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
