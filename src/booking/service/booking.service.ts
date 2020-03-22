import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DateTime, Duration } from 'luxon';
import { Repository } from 'typeorm';
import { Booking } from '../model/booking.model';
import { generateCode } from './code.function';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
  ) {}

  create(booking: Partial<Booking>) {
    booking.code = generateCode();
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

  findAvailableSlots(
    placeId: number,
    slotSize: Duration,
    startTime: DateTime,
  ): Promise<number> {
    // This is wrong just playground for checking if query works, as I understand we need list of slots somewhere else and not this query.
    // Still missing to substract from slotCount
    // OVERLAPS doesn't work, would be better if we work just with Time everywhere and forgetting about dates
    console.log(placeId);
    const result = this.bookingRepository.query(
      `select count(*) from booking where (start, duration) OVERLAPS (to_timestamp('$1','YYYY-MM-DD HH24:MI:SS'), $2);`,
      [startTime.toFormat('yyyy-MM-dd HH:mm:ss'), slotSize.toFormat('HH:mm')],
    );
    return result;
  }
}
