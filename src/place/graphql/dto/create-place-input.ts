import { Field, InputType } from '@nestjs/graphql';
import { DateTime, Duration } from 'luxon';

@InputType()
export class CreatePlaceInput {
  @Field()
  placeId: string;

  @Field()
  name: string;

  @Field()
  openingTime: DateTime;

  @Field()
  closingTime: DateTime;

  @Field()
  slotCount: number;

  @Field()
  slotSize: Duration;
}
