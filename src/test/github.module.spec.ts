import { Test } from '@nestjs/testing';
import { GitHubModule } from '../github.module';
import { OctokitModule } from 'nestjs-octokit';
import { GitHubController } from '../github.controller';
import { GitHubService } from '../github.service';

describe('GitHubModule', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [GitHubModule],
    }).compile();

    expect(module).toBeDefined();
    expect(module.get(OctokitModule)).toBeInstanceOf(OctokitModule);
    expect(module.get(GitHubService)).toBeInstanceOf(GitHubService);
    expect(module.get(GitHubController)).toBeInstanceOf(GitHubController);
  });
});
