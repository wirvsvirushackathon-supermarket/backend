import { Field, InputType } from '@nestjs/graphql';
import { DateTime, Duration } from 'luxon';

@InputType()
export class UpdateBookingInput {
  @Field()
  start: DateTime;

  @Field()
  duration: Duration;
}
