import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '123456',
                database: 'camera_store',
                entities: [__dirname + '/../**/*.entity{.ts,.js}',],
                synchronize: true,
                dropSchema: false,
                logging: false,
            });
            return dataSource.initialize();
        }
    }
]