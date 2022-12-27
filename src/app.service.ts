import { Injectable } from '@nestjs/common';
import { userDetailsDTO } from './models/dto/userDetails.dto';
import { userRepositoriesDTO } from './models/dto/userRepositories.dto';
import { usersListDto } from './models/dto/usersList.dto';

@Injectable()
export class AppService {
  getUserList(since: string) {
    return since;
  }

  getUserRepositories(username: string) {
    return username;
  }

  getUserDetails(username: string) {
    return username;
  }
}
