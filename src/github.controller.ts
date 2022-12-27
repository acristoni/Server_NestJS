import { Controller, Get, Param, Query } from '@nestjs/common';
import { GitHubService } from './github.service';
import { userDetailsDTO } from './models/dto/userDetails.dto';

@Controller('/api/users')
export class GitHubController {
  constructor(private readonly gitHubService: GitHubService) {}

  @Get()
  usersList(@Query('since') since: string) {
    return this.gitHubService.getUserList(since);
  }

  @Get('/:username/details')
  userDetails(@Param('username') username: string): Promise<userDetailsDTO> {
    return this.gitHubService.getUserDetails(username);
  }

  @Get('/:username/repos')
  userRepositories(@Param('username') username: string) {
    return this.gitHubService.getUserRepositories(username);
  }
}
