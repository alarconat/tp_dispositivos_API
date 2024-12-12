import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import {Exam} from './Exam.js';
import { Homework } from './Homework.js';

export const Subject = sequelize.define('subjects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING
    }
},
{
    timestamps: true
});
