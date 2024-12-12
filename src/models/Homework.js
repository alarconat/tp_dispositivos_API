import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

export const Homework = sequelize.define('homeworks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING
    },
    end_date: {
        type: DataTypes.DATE
    },
    subject_id: {
        type: DataTypes.INTEGER,
    },
    priority_id: {
        type: DataTypes.INTEGER,
    },
    status_id: {
        type: DataTypes.INTEGER,
    },

}, {
    timestamps: true
});


