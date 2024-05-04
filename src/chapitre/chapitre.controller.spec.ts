import { Test, TestingModule } from '@nestjs/testing';
import { ChapitreController } from './chapitre.controller';

describe('ChapitreController', () => {
  let controller: ChapitreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChapitreController],
    }).compile();

    controller = module.get<ChapitreController>(ChapitreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
