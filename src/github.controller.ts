import { Controller, Get, Param, Query } from '@nestjs/common';
import { GitHubService } from './github.service';

@Controller('/api/users')
export class GitHubController {
  constructor(private readonly GitHubService: GitHubService) {}

  @Get()
  usersList(@Query('since') since: string): string {
    return this.GitHubService.getUserList(since);
  }

  @Get('/:username/details')
  userDetails(@Param('username') username: string): string {
    return this.GitHubService.getUserRepositories(username);
  }

  @Get('/:username/repos')
  userRepositories(@Param('username') username: string): string {
    return this.GitHubService.getUserDetails(username);
  }
}
