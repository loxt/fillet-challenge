import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { validateOrReject } from 'class-validator';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    try {
      const createUser = Object.assign(new User(), createUserInput);

      if (createUser.password === createUser.confirmPassword) {
        await validateOrReject(createUser);

        createUser.password = await bcrypt.hash(createUser.password, 10);

        return this.userRepository.save(createUser);
      }
    } catch (e) {
      return e.message;
    }
  }

  async findAll() {
    return this.userRepository.find({
      select: ['id', 'firstName', 'lastName', 'phone', 'email'],
    });
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ id: id });
    delete user.password;
    return user;
  }
}
