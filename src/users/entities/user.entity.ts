import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Role } from 'src/role/entities/role.entity';
import { Order } from 'src/order/entities/order.entity';
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, role => role.users)
  role: Role;

  @OneToMany(() => Order, order => order.user)
  orders: Order[];

}