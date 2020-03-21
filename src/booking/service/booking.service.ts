import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from '../model/booking.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
  ) {}

  create(booking: Partial<Booking>) {
    return this.bookingRepository.save(this.bookingRepository.create(booking));
  }

  update(booking: Partial<Booking>) {
    return this.bookingRepository.save(this.bookingRepository.create(booking));
  }

  findAll(): Promise<Booking[]> {
    return this.bookingRepository.find();
  }

  findById(id: number): Promise<Booking> {
    return this.bookingRepository.findOne(id);
  }
}
