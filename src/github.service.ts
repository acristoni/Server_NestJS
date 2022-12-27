import { Injectable } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';
import { userDetailsDTO } from './models/dto/userDetails.dto';
import { userRepositoriesDTO } from './models/dto/userRepositories.dto';
import { usersListDto } from './models/dto/usersList.dto';

@Injectable()
export class GitHubService {
  constructor(private readonly octokitService: OctokitService) {}

  async getUserList(since: string): Promise<usersListDto> {
    const response = await this.octokitService.request(
      'GET /users{?since,per_page}',
      {
        since: since,
        per_page: 3,
      },
    );
    return response.data;
  }

  async getUserRepositories(username: string): Promise<userRepositoriesDTO> {
    const response = await this.octokitService.request(
      'GET /users/{username}/repos{?type,sort,direction,per_page,page}',
      { username: username },
    );
    return response.data;
  }

  async getUserDetails(username: string): Promise<userDetailsDTO> {
    const response = await this.octokitService.request(
      'GET /users/{username}',
      { username: username },
    );

    const details: userDetailsDTO = {
      id: response.data.id,
      name: response.data.name,
      login: response.data.login,
      URL: response.data.url,
      crationAccoutDate: response.data.created_at,
    };
    return details;
  }
}
