import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingResolver } from './graphql/booking.resolver';
import { Booking } from './model/booking.model';
import { BookingService } from './service/booking.service';

@Module({
  imports: [TypeOrmModule.forFeature([Booking])],
  providers: [BookingService, BookingResolver],
  exports: [TypeOrmModule],
})
export class BookingModule {}
