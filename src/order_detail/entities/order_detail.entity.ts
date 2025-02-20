import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
@Entity({ name: 'order_detail' })
export class OrderDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column()
    price: string;
    
    @ManyToOne(() => Order, order => order.orderDetails)
    order: Order;
    
    @ManyToOne(() => Product, product => product.orderDetails)
    product: Product;
}
