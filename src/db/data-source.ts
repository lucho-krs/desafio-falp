import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User, Address } from '../entities';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "falpDB",
    synchronize: true,
    logging: false,
    entities: [User, Address],
    migrations: [],
    subscribers: [],
})