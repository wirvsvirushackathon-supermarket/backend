import { DateTime } from 'luxon';
import { ValueTransformer } from 'typeorm';

export class DateTimeTransformer implements ValueTransformer {
  public from(value: string): DateTime {
    return DateTime.fromSQL(value);
  }

  public to(value: DateTime): string {
    return value.toSQL();
  }
}
