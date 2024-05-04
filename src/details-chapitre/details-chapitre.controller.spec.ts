import { Test, TestingModule } from '@nestjs/testing';
import { DetailsChapitreController } from './details-chapitre.controller';

describe('DetailsChapitreController', () => {
  let controller: DetailsChapitreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailsChapitreController],
    }).compile();

    controller = module.get<DetailsChapitreController>(DetailsChapitreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
