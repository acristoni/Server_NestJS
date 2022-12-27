import { Test, TestingModule } from '@nestjs/testing';
import { GitHubController } from './github.controller';
import { GitHubService } from './github.service';

describe('GitHubController', () => {
  let gitHubController: GitHubController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GitHubController],
      providers: [GitHubService],
    }).compile();

    gitHubController = app.get<GitHubController>(GitHubController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(GitHubController.getHello()).toBe('Hello World!');
    });
  });
});
