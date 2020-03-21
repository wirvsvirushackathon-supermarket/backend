import { Field, InputType } from '@nestjs/graphql';
import { Duration } from 'luxon';

@InputType()
export class UpdatePlaceInput {
  @Field()
  placeId: string;

  @Field()
  name: string;

  @Field()
  slotCount: number;

  @Field()
  slotSize: Duration;
}
