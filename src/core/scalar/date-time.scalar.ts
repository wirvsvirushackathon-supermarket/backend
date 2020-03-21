import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';
import { DateTime } from 'luxon';

@Scalar('DateTime', type => DateTime)
export class DateTimeScalar implements CustomScalar<string, DateTime> {
  description = 'Date custom scalar type';

  parseValue(value: string): DateTime {
    return DateTime.fromISO(value); // value from the client
  }

  serialize(value: DateTime): string {
    return value.toISO(); // value sent to the client
  }

  parseLiteral(ast: any): DateTime {
    if (ast.kind === Kind.STRING) {
      return DateTime.fromISO(ast.value);
    }
    return null;
  }
}
