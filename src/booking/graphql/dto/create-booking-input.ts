import { Field, InputType } from '@nestjs/graphql';
import { DateTime, Duration } from 'luxon';

@InputType()
export class CreateBookingInput {
  @Field()
  start: DateTime;

  @Field()
  duration: Duration;
}
