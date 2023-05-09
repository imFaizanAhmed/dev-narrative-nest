import { Test, TestingModule } from '@nestjs/testing';
import { UserGraphqlResolver } from './user-graphql.resolver';
import { UserGraphqlService } from './user-graphql.service';

describe('UserGraphqlResolver', () => {
  let resolver: UserGraphqlResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserGraphqlResolver, UserGraphqlService],
    }).compile();

    resolver = module.get<UserGraphqlResolver>(UserGraphqlResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
