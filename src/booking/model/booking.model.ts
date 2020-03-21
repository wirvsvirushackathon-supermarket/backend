import { Field, ObjectType } from '@nestjs/graphql';
import { DateTime, Duration } from 'luxon';
import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../core/model/base.model';
import { DateTimeTransformer } from '../../core/transformer/date-time.transformer';
import { DurationTransformer } from '../../core/transformer/duration.transformer';

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
}
