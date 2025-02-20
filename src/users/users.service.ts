import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from 'src/role/entities/role.entity';

@Injectable()
export class UsersService { 
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }

    async findAll() {
        return await this.userRepository.find();
    }

    async getUserById(id: number) {
        const user = this.userRepository.findOne({ where: { id: id }, relations: ["role"] });
        if (!user) throw new NotFoundException('User Not Found')
        return user
    }

    async create(createUserDto: CreateUserDto) {
        const newUser = {
            ...createUserDto,
        }
        await this.userRepository.save(newUser)
        return newUser
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        const user = await this.getUserById(id);
        if (!user) {
            throw new NotFoundException('User Not Found')
        }
        const updatedUser = {
            ...updateUserDto,
        };
        await this.userRepository.update(id, updatedUser);
        return user;
    }

    async delete(id: number) {
        const user = await this.getUserById(id);
        if (!user) {
            throw new NotFoundException('User Not Found');
        }
        await this.userRepository.delete(id);
        return user;
    }
}
