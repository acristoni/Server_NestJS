import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { GitHubModule } from '../src/github.module';
import {
  mockUserDetail,
  mockUserList,
  mockUserRepositories,
} from './utils/controller.mock';

describe('GitHubController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [GitHubModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/users?since=number (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/users?since=1')
      .expect(200)
      .expect(mockUserList);
  });
  it('/:username/details (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/users/acristoni/details')
      .expect(200)
      .expect(mockUserDetail);
  });
  it('/:username/repos (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/users/acristoni/repos')
      .expect(200)
      .expect(mockUserRepositories);
  });
});
