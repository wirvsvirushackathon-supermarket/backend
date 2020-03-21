import { DateTime } from 'luxon';
import { ValueTransformer } from 'typeorm';

export class DateTimeTransformer implements ValueTransformer {
  public from(value: Date): DateTime {
    return DateTime.fromJSDate(value);
  }

  public to(value: DateTime): string {
    return value.toUTC().toSQL();
  }
}
