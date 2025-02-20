import { OrderStatus } from './../entities/order.entity';
import { IsEmail, IsNotEmpty, IsEnum, IsString, IsOptional, IsNumber } from "class-validator";
export class CreateOrderDto {
    @IsNotEmpty()
    @IsString()
    totalPrice: string;

    @IsEnum(OrderStatus)
    @IsOptional() // Mặc định là "pending" nếu không truyền vào
    status?: OrderStatus;
}
