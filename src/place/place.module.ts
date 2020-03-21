import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceResolver } from './graphql/place.resolver';
import { Place } from './model/place.model';
import { PlaceService } from './service/place.service';

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  providers: [PlaceService, PlaceResolver],
  exports: [TypeOrmModule],
})
export class PlaceModule {}
