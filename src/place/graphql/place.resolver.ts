import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Place } from '../model/place.model';
import { PlaceService } from '../service/place.service';
import { CreatePlaceInput } from './dto/create-place-input';
import { UpdatePlaceInput } from './dto/update-place-input';

@Resolver(of => Place)
export class PlaceResolver {
  constructor(private readonly placeService: PlaceService) {}

  @Query(returns => [Place])
  places(): Promise<Place[]> {
    return this.placeService.findAll();
  }

  @Query(returns => Place)
  async place(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args({ name: 'placeId', type: () => Int }) placeId: number,
  ) {
    let place;
    if (id) {
      place = await this.placeService.findById(id);
      if (place && place.placeId !== place) {
        throw new InternalServerErrorException(
          id,
          `Requested id:${id} does not match requested placeId:${placeId}`,
        );
      }
    } else if (placeId) {
      place = await this.placeService.findByPlaceId(id);
    }

    if (!place) {
      throw new NotFoundException(id);
    }
    return place;
  }

  @Mutation(returns => Place)
  async createPlace(
    @Args('createPlaceInput') args: CreatePlaceInput,
  ): Promise<Place> {
    return await this.placeService.create(args);
  }

  @Mutation(returns => Place)
  async updatePlace(
    @Args('updatePlaceInput') args: UpdatePlaceInput,
  ): Promise<Place> {
    return await this.placeService.update(args);
  }
}
