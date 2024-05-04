import { Test, TestingModule } from '@nestjs/testing';
import { DetailsStandartController } from './details-standart.controller';

describe('DetailsStandartController', () => {
  let controller: DetailsStandartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailsStandartController],
    }).compile();

    controller = module.get<DetailsStandartController>(DetailsStandartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
