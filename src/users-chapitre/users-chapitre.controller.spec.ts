import { Test, TestingModule } from '@nestjs/testing';
import { UsersChapitreController } from './users-chapitre.controller';

describe('UsersChapitreController', () => {
  let controller: UsersChapitreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersChapitreController],
    }).compile();

    controller = module.get<UsersChapitreController>(UsersChapitreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
