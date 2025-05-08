import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
import Employee  from '../models/employee';
import dotenv from 'dotenv'

dotenv.config();
const sequelize = new Sequelize({
    dialect: PostgresDialect,
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PASSWORD,
    database:process.env.POSTGRES_DB,
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
    models: [Employee]
});

export default sequelize;