import { NestFactory } from '@nestjs/core';
import { GitHubModule } from './github.module';

async function bootstrap() {
  const app = await NestFactory.create(GitHubModule);
  await app.listen(3001);
}
bootstrap();
