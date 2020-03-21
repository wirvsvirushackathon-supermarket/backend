import { Field, Int, ObjectType } from 'type-graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export abstract class BaseModel {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;
}
