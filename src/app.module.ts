import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { Booking } from './booking/model/booking.model';
import configuration from './config/configuration';
import { DateTimeScalar } from './core/scalar/date-time.scalar';
import { DurationScalar } from './core/scalar/duration.scalar';
import { Place } from './place/model/place.model';
import { PlaceModule } from './place/place.module';
import { User } from './user/model/user.model';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.user'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        entities: [Place, Booking, User],
        synchronize: true,
      }),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
    }),
    PlaceModule,
    BookingModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, DateTimeScalar, DurationScalar],
})
export class AppModule {}
