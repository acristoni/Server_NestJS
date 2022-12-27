import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  usersList(@Query('since') since: number): string {
    console.log(since);
    return this.appService.getHello();
  }

  @Get('/:username/details')
  userDetails(@Param('username') username: string): string {
    console.log(username);
    return this.appService.getHello();
  }

  @Get('/:username/repos')
  userRepositories(@Param('username') username: string): string {
    console.log(username);
    return this.appService.getHello();
  }
}
