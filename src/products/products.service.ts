import { Product } from './entities/product.entity';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductCategory } from 'src/product_category/entities/product_category.entity';
import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>
  ) { };
  async findAll() {
    return await this.productRepository.find();
  }
  async getProductById(id: number) {
    const product = this.productRepository.find({ where: { id: id } });
    if (!product) throw new NotFoundException('product not found')
    return product
  }
  async create(createProductDto: CreateProductDto) {
    const newProduct = {
      ...createProductDto
    }
    await this.productRepository.save(newProduct)
    return newProduct;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.getProductById(id);
        if (!product) {
            throw new NotFoundException('product not found')
        }
        await this.productRepository.update(id, updateProductDto);
        return product;
  }

  async remove(id: number) {
    const product = await this.getProductById(id);
        if (!product) {
            throw new NotFoundException('product not found');
        }
        await this.productRepository.delete(id);
        return product;
  }
}
