import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

export const Priority = sequelize.define('priorities', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});