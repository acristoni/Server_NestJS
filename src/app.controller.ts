import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  usersList(@Query('since') since: string): string {
    return this.appService.getUserList(since);
  }

  @Get('/:username/details')
  userDetails(@Param('username') username: string): string {
    return this.appService.getUserRepositories(username);
  }

  @Get('/:username/repos')
  userRepositories(@Param('username') username: string): string {
    return this.appService.getUserDetails(username);
  }
}
