import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
export const Purchase = sequelize.define('purchases', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATE
    },
    amount: {
        type: DataTypes.DECIMAL
    },
    brand_id: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: true
});
