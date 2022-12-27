import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GitHubController } from './github.controller';
import { GitHubService } from './github.service';

@Module({
  imports: [HttpModule],
  controllers: [GitHubController],
  providers: [GitHubService],
})
export class GitHubModule {}
