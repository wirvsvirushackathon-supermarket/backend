import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Booking } from '../model/booking.model';
import { BookingService } from '../service/booking.service';
import { CreateBookingInput } from './dto/create-booking-input';
import { UpdateBookingInput } from './dto/update-booking-input';

@Resolver(of => Booking)
export class BookingResolver {
  constructor(private readonly bookingService: BookingService) {}

  @Query(returns => [Booking])
  bookings(): Promise<Booking[]> {
    return this.bookingService.findAll();
  }

  @Query(returns => Booking)
  async booking(@Args({ name: 'id', type: () => Int }) id: number) {
    const booking = await this.bookingService.findById(id);
    if (!booking) {
      throw new NotFoundException(id);
    }
    return booking;
  }

  @Mutation(returns => Booking)
  async createBooking(
    @Args('createBookingInput') args: CreateBookingInput,
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
