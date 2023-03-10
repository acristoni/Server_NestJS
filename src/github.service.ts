import { Injectable } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';
import { userDetailsDTO } from './dtos/userDetails.dto';
import { RepositoryDTO } from './dtos/userRepositories.dto';
import { userDTO, usersListDto } from './dtos/usersList.dto';

@Injectable()
export class GitHubService {
  constructor(private readonly octokitService: OctokitService) {}

  async getUserList(since: number): Promise<usersListDto> {
    const pageSize = 30;

    try {
      const response = await this.octokitService.request(
        'GET /users{?since,per_page}',
        {
          since: since,
          per_page: pageSize,
        },
      );

      const arrayUsers = [];

      response.data.map((user) => {
        const userData: userDTO = {
          login: user.login,
          id: user.id,
        };

        arrayUsers.push(userData);
      });

      const userListResponse: usersListDto = {
        usersList: arrayUsers,
        pageSize: pageSize,
        page: parseInt(since.toString()),
      };
      return userListResponse;
    } catch (error) {
      throw Error('Internal Server Error');
    }
  }

  async getUserRepositories(
    username: string,
  ): Promise<RepositoryDTO[] | string> {
    try {
      const response = await this.octokitService.request(
        'GET /users/{username}/repos{?type,sort,direction,per_page,page}',
        { username: username },
      );

      if (response.data.length > 0) {
        const arrayRepositories = [];

        response.data.map((repository) => {
          const repositoryData: RepositoryDTO = {
            id: repository.id,
            name: repository.name,
            URL: repository.html_url,
          };

          arrayRepositories.push(repositoryData);
        });
        return arrayRepositories;
      }

      return 'User without repositories';
    } catch (error) {
      throw Error('Internal Serve Error');
    }
  }

  async getUserDetails(username: string): Promise<userDetailsDTO> {
    try {
      const response = await this.octokitService.request(
        'GET /users/{username}',
        { username: username },
      );

      const details: userDetailsDTO = {
        id: response.data.id,
        login: response.data.login,
        URL: response.data.url,
        crationAccoutDate: response.data.created_at,
      };
      return details;
    } catch (err) {
      throw Error('Internal Serve Error');
    }
  }
}
