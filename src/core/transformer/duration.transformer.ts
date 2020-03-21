import { Duration } from 'luxon';
import { ValueTransformer } from 'typeorm';

export class DurationTransformer implements ValueTransformer {
  public from(value: object): Duration {
    return Duration.fromObject(value);
  }

  public to(value: Duration): string {
    return value.toISO();
  }
}
