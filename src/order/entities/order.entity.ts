import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { OrderDetail } from 'src/order_detail/entities/order_detail.entity';
import { Payment } from 'src/payment/entities/payment.entity';
export enum OrderStatus {
    PENDING = "pending",
    PROCESSING = "processing",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
    CANCELLED = "cancelled",
  }
@Entity({ name: 'orders' })
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    totalPrice: string;
  
    @Column({
        type: "enum",
        enum: OrderStatus,
        default: OrderStatus.PENDING,
      })
      status: OrderStatus;

    @ManyToOne(() => User, user => user.orders)
    user: User;
    
    @OneToMany(() => OrderDetail, orderDetail => orderDetail.order)
    orderDetails: OrderDetail[];

    @OneToMany(() => Payment, payment => payment.order)
    payments: Payment[];
}
