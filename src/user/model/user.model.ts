import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany } from 'typeorm';
import { Booking } from '../../booking/model/booking.model';
import { BaseModel } from '../../core/model/base.model';

@Entity()
@ObjectType()
export class User extends BaseModel {
  @Column('text')
  @Field()
  uuid: string;

  @Column('text')
  @Field()
  surname: string;

  @Column('text')
  @Field()
  lastname: string;

  @OneToMany(
    () => Booking,
    (booking: Booking) => booking.user,
    { lazy: true },
  )
  @Field(type => [Booking])
  public bookings: Booking[];
}
