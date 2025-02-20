import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';

export enum PaymentStatus {
    PENDING = "pending",
    PROCESSING = "processing",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
    CANCELLED = "cancelled",
  }

@Entity({ name: 'payments' })
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    payment_date: string;

    @Column()
    payment_method: string;   

    @Column()
    payment_status: string;

    @ManyToOne(() => Order, order => order.payments)
    order: Order;

}
