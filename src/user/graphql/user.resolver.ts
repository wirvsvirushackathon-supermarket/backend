import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { generateCode } from '../../booking/service/code.function';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { CreateUserInput } from './dto/create-user-input';
import { UpdateUserInput } from './dto/update-user-input';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => User)
  async user(@Args({ name: 'id', type: () => Int }) id: number) {
    const user = await this.userService.findById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Mutation(returns => User)
  async createUser(
    @Args('createUserInput') args: CreateUserInput,
  ): Promise<User> {
    const uuid = generateCode();
    const newUser: User = { ...args, uuid };
    return await this.userService.create(newUser);
  }

  @Mutation(returns => User)
  async updateUser(
    @Args('updateUserInput') args: UpdateUserInput,
  ): Promise<User> {
    return await this.userService.update(args);
  }
}
