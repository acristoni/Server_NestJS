import { Test, TestingModule } from '@nestjs/testing';
import { OCTOKIT, OctokitService } from 'nestjs-octokit';
import { Octokit } from 'octokit';
import {
  mockUserDetail,
  mockUserList,
  mockUserRepositories,
} from '../../test/utils/controller.mock';
import { GitHubController } from '../github.controller';
import { GitHubService } from '../github.service';

describe('GitHubController', () => {
  let gitHubController: GitHubController;
  let gitHubService: GitHubService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GitHubController],
      providers: [
        GitHubService,
        OctokitService,
        {
          provide: OCTOKIT,
          useValue: new Octokit(),
        },
      ],
    }).compile();

    gitHubController = app.get<GitHubController>(GitHubController);
    gitHubService = app.get<GitHubService>(GitHubService);
  });

  describe('GitHubController', () => {
    it('Shold return a users list', async () => {
      jest
        .spyOn(gitHubService, 'getUserList')
        .mockReturnValue(Promise.resolve(mockUserList));

      expect(await gitHubController.usersList('1')).toBe(mockUserList);
    });

    it('Shold return a user detail', async () => {
      jest
        .spyOn(gitHubService, 'getUserDetails')
        .mockReturnValue(Promise.resolve(mockUserDetail));

      expect(await gitHubController.userDetails('acristoni')).toBe(
        mockUserDetail,
      );
    });
    it('Shold return a user repositories list', async () => {
      jest
        .spyOn(gitHubService, 'getUserRepositories')
        .mockReturnValue(Promise.resolve(mockUserRepositories));

      expect(await gitHubController.userRepositories('acristoni')).toBe(
        mockUserRepositories,
      );
    });
  });
});
