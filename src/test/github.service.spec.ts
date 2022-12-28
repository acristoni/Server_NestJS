import { Test, TestingModule } from '@nestjs/testing';
import { OCTOKIT, OctokitService } from 'nestjs-octokit';
import {
  mockUserDetail,
  mockUserDetailFromGitHub,
  mockUserRepositories,
  mockUserRepositoriesFromGitHub,
  mockUsersListResponse,
  mockUsersListResponseFromGitHub,
  mockUserZeroRepositoriesFromGitHub,
} from '../../test/utils/service.mock';
import { GitHubService } from '../github.service';

describe('UsersService', () => {
  let service: GitHubService;
  let octokitService: OctokitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GitHubService,
        OctokitService,
        {
          provide: OCTOKIT,
          useValue: {
            request: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<GitHubService>(GitHubService);
    octokitService = module.get<OctokitService>(OctokitService);
  });

  describe('GitHubService', () => {
    describe('Users list service', () => {
      it('Should return a user list', async () => {
        jest
          .spyOn(octokitService, 'request')
          .mockReturnValue(Promise.resolve(mockUsersListResponseFromGitHub));

        expect(await service.getUserList(1)).toStrictEqual(
          mockUsersListResponse,
        );
      });
      it('Should return a error message', async () => {
        try {
          jest.spyOn(octokitService, 'request').mockRejectedValue(Error);
          expect(await service.getUserList(1)).toStrictEqual(
            mockUsersListResponse,
          );
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
        }
      });
    });

    describe('User detail service', () => {
      it('Should return details from a chosen user', async () => {
        jest
          .spyOn(octokitService, 'request')
          .mockReturnValue(Promise.resolve(mockUserDetailFromGitHub));

        expect(await service.getUserDetails('acristoni')).toStrictEqual(
          mockUserDetail,
        );
      });
      it('Should return a error message', async () => {
        try {
          jest.spyOn(octokitService, 'request').mockRejectedValue(Error);
          expect(await service.getUserDetails('acristoni')).toStrictEqual(
            mockUserDetail,
          );
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
        }
      });
    });
    describe('User repositories service', () => {
      it('Should return all public repositories from a chosen user', async () => {
        jest
          .spyOn(octokitService, 'request')
          .mockReturnValue(Promise.resolve(mockUserRepositoriesFromGitHub));

        expect(await service.getUserRepositories('acristoni')).toStrictEqual(
          mockUserRepositories,
        );
      });

      it('Should return message if user has no repository', async () => {
        jest
          .spyOn(octokitService, 'request')
          .mockReturnValue(Promise.resolve(mockUserZeroRepositoriesFromGitHub));

        expect(await service.getUserRepositories('acristoni')).toBe(
          'User without repositories',
        );
      });
      it('Should return a error message', async () => {
        try {
          jest.spyOn(octokitService, 'request').mockRejectedValue(Error);
          expect(await service.getUserRepositories('acristoni')).toStrictEqual(
            mockUserRepositories,
          );
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
        }
      });
    });
  });
});
