import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly users = [
        {
          userID: 1,
          username: 'dzencode',
          password: 'dzencode',
        },
        {
          userID: 2,
          username: 'dzencode2',
          password: 'dzencode2',
        },
        {
          userID: 3,
          username: 'dzencode3',
          password: 'dzencode3',
        },
      ];

      async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }
}


export type User = any;
