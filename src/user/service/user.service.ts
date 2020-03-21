import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(booking: Partial<User>) {
    return this.userRepository.save(this.userRepository.create(booking));
  }

  update(booking: Partial<User>) {
    return this.userRepository.save(this.userRepository.create(booking));
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findById(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }
}
