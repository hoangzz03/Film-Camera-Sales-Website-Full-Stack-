import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductCategoryModule } from './product_category/product_category.module';
import { RoleModule } from './role/role.module';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order_detail/order_detail.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [UsersModule, ProductCategoryModule, RoleModule, ProductsModule, OrderModule, OrderDetailModule, PaymentModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
