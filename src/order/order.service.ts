import { Order } from 'src/order/entities/order.entity';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class OrderService {
  constructor(
    @Inject('ORDER_REPOSITORY')
    private orderRepository: Repository<Order>,
  ) { }
  async findAll() {
    return await this.orderRepository.find();
  }
  async getOrderById(id: number) {
    const order = this.orderRepository.findOne({ where: { id: id } });
    if (!order) throw new NotFoundException('Order Not Found')
    return order
  }
  async create(createOrderDto: CreateOrderDto) {
    const newOrder = {
      ...createOrderDto,
    }
    await this.orderRepository.save(newOrder)
    return newOrder
  }
  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.getOrderById(id);
    if (!order) {
      throw new NotFoundException('Order Not Found')
    }
    const updatedOrder = {
      ...updateOrderDto,
    };
    await this.orderRepository.update(id, updatedOrder);
    return order;
  }
  async delete(id: number) {
      const order = await this.getOrderById(id);
      if (!order) {
          throw new NotFoundException('Order Not Found');
      }
      await this.orderRepository.delete(id);
      return order;
  }
}
