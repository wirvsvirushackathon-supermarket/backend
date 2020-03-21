import { Field, ObjectType } from '@nestjs/graphql';
import { Duration } from 'luxon';
import { Column, Entity } from 'typeorm';
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

  @Column('interval', {
    transformer: new DurationTransformer(),
  })
  @Field()
  slotSize: Duration;
}
