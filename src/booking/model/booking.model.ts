import { Field, ObjectType } from '@nestjs/graphql';
import { DateTime, Duration } from 'luxon';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../core/model/base.model';
import { DateTimeTransformer } from '../../core/transformer/date-time.transformer';
import { DurationTransformer } from '../../core/transformer/duration.transformer';
import { Place } from '../../place/model/place.model';

@Entity()
@ObjectType()
export class Booking extends BaseModel {
  @Column('timestamp', {
    transformer: new DateTimeTransformer(),
  })
  @Field()
  start: DateTime;

  @Column('interval', {
    transformer: new DurationTransformer(),
  })
  @Field()
  duration: Duration;

  @ManyToOne(
    () => Place,
    (place: Place) => place.bookings,
    { nullable: false, lazy: true },
  )
  @Field(type => Place)
  place: Place;
}
