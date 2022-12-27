export class usersListDto {
  data: user[];
  pageSize: number;
  page: number;
}

class user {
  name: string;
  URL: string;
}
