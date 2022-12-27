import { Module } from '@nestjs/common';
import { OctokitModule } from 'nestjs-octokit';
import { GitHubController } from './github.controller';
import { GitHubService } from './github.service';
import { env } from 'process';

@Module({
  imports: [
    OctokitModule.forRoot({
      isGlobal: true,
      octokitOptions: {
        auth: env.GITHUB_TOKEN,
      },
    }),
  ],
  controllers: [GitHubController],
  providers: [GitHubService],
})
export class GitHubModule {}
