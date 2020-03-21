import { Field, ObjectType } from '@nestjs/graphql';
import { DateTime, Duration } from 'luxon';
import { Column, Entity, OneToMany } from 'typeorm';
import { Booking } from '../../booking/model/booking.model';
import { BaseModel } from '../../core/model/base.model';
import { DateTimeTransformer } from '../../core/transformer/date-time.transformer';
import { DurationTransformer } from '../../core/transformer/duration.transformer';

@Entity()
@ObjectType()
export class Place extends BaseModel {
  @Column('text')
  @Field()
  placeId: string;

  @Column('text')
  @Field()
  name: string;

  @Column('timestamp', {
    transformer: new DateTimeTransformer(),
  })
  @Field()
  openingTime: DateTime;

  @Column('timestamp', {
    transformer: new DateTimeTransformer(),
  })
  @Field()
  closingTime: DateTime;

  @Column('integer')
  @Field()
  slotCount: number;

  @Column('interval', {
    transformer: new DurationTransformer(),
  })
  @Field()
  slotSize: Duration;

  @OneToMany(
    () => Booking,
    (booking: Booking) => booking.place,
    { lazy: true },
  )
  @Field(type => [Booking])
  public bookings: Booking[];
}
