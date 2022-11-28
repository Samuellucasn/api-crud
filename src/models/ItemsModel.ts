import { DataTypes } from 'sequelize'
import { sequelize } from './db'

export const itemsModel = sequelize.define("items", {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true 
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})