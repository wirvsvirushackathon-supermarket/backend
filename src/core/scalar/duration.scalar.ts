import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';
import { Duration } from 'luxon';

@Scalar('Duration', type => Duration)
export class DurationScalar implements CustomScalar<string, Duration> {
  description = 'Date custom scalar type';

  parseValue(value: string): Duration {
    return Duration.fromISO(value); // value from the client
  }

  serialize(value: Duration): string {
    return value.toISO(); // value sent to the client
  }

  parseLiteral(ast: any): Duration {
    if (ast.kind === Kind.STRING) {
      return Duration.fromISO(ast.value);
    }
    return null;
  }
}
