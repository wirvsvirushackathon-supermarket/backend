import { Field, ObjectType } from '@nestjs/graphql';
import { Duration } from 'luxon';
import { Column, Entity, OneToMany } from 'typeorm';
import { Booking } from '../../booking/model/booking.model';
import { BaseModel } from '../../core/model/base.model';
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

  @Column('integer')
  @Field()
  slotCount: number;

  @Column('text', {
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
