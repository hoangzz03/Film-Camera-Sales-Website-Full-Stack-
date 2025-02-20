import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { ProductCategory } from "src/product_category/entities/product_category.entity";

export class CreateProductDto {
        @IsNotEmpty()
        @IsString()
        name: string;
    
        @IsNotEmpty()
        @IsString()
        image: string;
    
        @IsNotEmpty()
        @IsString()
        desc: string;
    
        @IsNotEmpty()
        @IsString()
        price: string;
    
        @IsNotEmpty()
        @IsNumber()
        quantity: number;
}
