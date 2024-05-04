import { Test, TestingModule } from '@nestjs/testing';
import { UsersQuizzController } from './users-quizz.controller';

describe('UsersQuizzController', () => {
  let controller: UsersQuizzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersQuizzController],
    }).compile();

    controller = module.get<UsersQuizzController>(UsersQuizzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
