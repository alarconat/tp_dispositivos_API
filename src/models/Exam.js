import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
export const Exam = sequelize.define('exams', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATE
    },
    subject_id: {
        type: DataTypes.INTEGER,
    },
}, {
    timestamps: true
});
