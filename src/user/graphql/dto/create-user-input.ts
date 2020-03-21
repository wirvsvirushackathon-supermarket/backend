import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  uuid: string;

  @Field()
  surname: string;

  @Field()
  lastname: string;
}
