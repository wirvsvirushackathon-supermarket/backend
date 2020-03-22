import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field()
  uuid: string;

  @Field()
  surname: string;

  @Field()
  name: string;
}
