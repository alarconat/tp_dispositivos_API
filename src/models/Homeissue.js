import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Homeissue = sequelize.define(
  "homeissues",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING
    },
    status_id: {
      type: DataTypes.INTEGER
    },
    start_date: {
      type: DataTypes.DATE
    },
    end_date: {
      type: DataTypes.DATE
    }
  },
  {
    timestamps: true
  }
);
