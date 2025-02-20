import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { orderProvider } from 'src/provider/orders.provider';
import { OrderController } from './order.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...orderProvider,
    OrderService
  ],
  controllers: [OrderController],
  exports: [],
})
export class OrderModule { }
