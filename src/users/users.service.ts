import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) 
    private usersRepository: Repository<User>)
    {}
    
  create(createUserDto: CreateUserDto) {
    const newUser = new User(createUserDto.id, createUserDto.name, createUserDto.ci);
    return this.usersRepository.save(newUser);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser = new User(id, updateUserDto.name, updateUserDto.ci);
    await this.usersRepository.update(id, updateUser);
    return this.usersRepository.findOne(id);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
