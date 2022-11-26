import { DataTypes } from 'sequelize'
import { sequelize } from './db'

export const itemsModel = sequelize.define("items", {
    id: { //especificar id no sequelize não é necessário
        type: DataTypes.INTEGER,
        autoIncrement: true, //auto incrementa inteiros na coluna
        allowNull: false, //não aceita nulo
        primaryKey: true //chave primaria da coluna
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})