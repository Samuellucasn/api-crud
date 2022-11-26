import { Sequelize } from 'sequelize'

const dbName = process.env.DATABASE_NAME as string
const dbUser = process.env.DATABASE_USER as string

export const sequelize = new Sequelize(
    dbName,
    dbUser,
    process.env.DATABASE_PASSWORD, 
    {
        dialect: 'mysql',
        host: process.env.DATABASE_HOST
    }
);
