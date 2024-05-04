import { Test, TestingModule } from '@nestjs/testing';
import { ParagraphesController } from './paragraphes.controller';

describe('ParagraphesController', () => {
  let controller: ParagraphesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParagraphesController],
    }).compile();

    controller = module.get<ParagraphesController>(ParagraphesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
