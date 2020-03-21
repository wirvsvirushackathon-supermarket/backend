import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceModule } from '../place/place.module';
import { PlaceService } from '../place/service/place.service';
import { UserService } from '../user/service/user.service';
import { UserModule } from '../user/user.module';
import { BookingResolver } from './graphql/booking.resolver';
import { Booking } from './model/booking.model';
import { BookingService } from './service/booking.service';

@Module({
  imports: [TypeOrmModule.forFeature([Booking]), PlaceModule, UserModule],
  providers: [BookingService, BookingResolver, PlaceService, UserService],
  exports: [TypeOrmModule],
})
export class BookingModule {}
