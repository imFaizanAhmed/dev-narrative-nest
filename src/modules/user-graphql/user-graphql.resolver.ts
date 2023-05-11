import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserGraphqlService } from './user-graphql.service';
import { CreateUserGraphqlInput } from './dto/create-user-graphql.input';
import { UpdateUserGraphqlInput } from './dto/update-user-graphql.input';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';

@Resolver('UserGraphql')
// @Roles(Role.Admin)
export class UserGraphqlResolver {
  constructor(private readonly userGraphqlService: UserGraphqlService) {}

  @Mutation('createUserGraphql')
  create(
    @Args('createUserGraphqlInput')
    createUserGraphqlInput: CreateUserGraphqlInput,
  ) {
    return this.userGraphqlService.create(createUserGraphqlInput);
  }

  @Query('userGraphql')
  findAll() {
    return this.userGraphqlService.findAll();
  }

  @Query('login')
  login(@Args('email') email: string, @Args('password') password: string) {
    return this.userGraphqlService.findOne(email, password);
  }

  @Mutation('signin')
  async signin(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return await this.userGraphqlService.signin({
      firstName,
      lastName,
      email,
      password,
    });
  }

  @Mutation('updateUserGraphql')
  update(
    @Args('updateUserGraphqlInput')
    updateUserGraphqlInput: UpdateUserGraphqlInput,
  ) {
    return this.userGraphqlService.update(
      updateUserGraphqlInput.id,
      updateUserGraphqlInput,
    );
  }

  @Mutation('removeUserGraphql')
  remove(@Args('id') id: number) {
    return this.userGraphqlService.remove(id);
  }
}
