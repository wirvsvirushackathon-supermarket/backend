import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../model/user.model';

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
    @Args('createBookingInput') args: CreateUserInput,
  ): Promise<Booking> {
    return await this.bookingService.create(args);
  }

  @Mutation(returns => Booking)
  async updateBooking(
    @Args('updateBookingInput') args: UpdateBookingInput,
  ): Promise<Booking> {
    return await this.bookingService.update(args);
  }
}
