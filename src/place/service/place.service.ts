import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from '../model/place.model';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,
  ) {}

  create(place: Partial<Place>) {
    return this.placeRepository.save(this.placeRepository.create(place));
  }

  update(place: Partial<Place>) {
    return this.placeRepository.save(this.placeRepository.create(place));
  }

  findAll(): Promise<Place[]> {
    return this.placeRepository.find();
  }

  findById(id: number): Promise<Place> {
    return this.placeRepository.findOne(id);
  }

  findByPlaceId(placeId: number): Promise<Place> {
    return this.placeRepository.findOne({ where: { placeId } });
  }
}
