import { Role } from './../../role/entities/role.entity';
import { IsEmail, IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateUserDto { 
    @IsString()
    @IsNotEmpty()
    name: string; 

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}