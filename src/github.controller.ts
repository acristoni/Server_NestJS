import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GitHubService } from './github.service';
import { userDetailsDTO } from './dtos/userDetails.dto';
import { RepositoryDTO } from './dtos/userRepositories.dto';
import { usersListDto } from './dtos/usersList.dto';

@ApiTags('List of users, user detail and user repositories')
@Controller('/api/users')
export class GitHubController {
  constructor(private readonly gitHubService: GitHubService) {}

  @Get()
  usersList(@Query('since') since: number): Promise<usersListDto> {
    return this.gitHubService.getUserList(since);
  }

  @Get('/:username/details')
  userDetails(@Param('username') username: string): Promise<userDetailsDTO> {
    return this.gitHubService.getUserDetails(username);
  }

  @Get('/:username/repos')
  userRepositories(
    @Param('username') username: string,
  ): Promise<RepositoryDTO[] | string> {
    return this.gitHubService.getUserRepositories(username);
  }
}
