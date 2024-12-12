import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import {Homeissue} from './Homeissue.js';
import {Homework} from './Homework.js';

export const Status = sequelize.define('statuses', {
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

