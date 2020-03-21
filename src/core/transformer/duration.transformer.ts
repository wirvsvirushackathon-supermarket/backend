import { Duration } from 'luxon';
import { ValueTransformer } from 'typeorm';

export class DurationTransformer implements ValueTransformer {
  public from(value: string): Duration {
    return Duration.fromISO(value);
  }

  public to(value: Duration): string {
    return value.toISO();
  }
}
