import { Order } from "src/order/entities/order.entity";
import { DataSource } from "typeorm";
import { Inject } from "@nestjs/common";

export const orderProvider = [
    {
        provide: 'ORDER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Order),
        inject: ['DATA_SOURCE'],
    },
]