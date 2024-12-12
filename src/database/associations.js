import { Homework } from "../models/Homework.js";
import { Priority } from "../models/Priority.js";
import { Status } from "../models/Status.js";
import { Subject } from "../models/Subject.js";
import { Homeissue } from "../models/Homeissue.js";
import { Brand } from "../models/Brand.js";
import { Purchase } from "../models/Purchase.js";
import { Exam } from "../models/Exam.js";



Brand.hasMany(Purchase, { foreignKey: 'brand_id' });
Purchase.belongsTo(Brand, { foreignKey: 'brand_id' });

Exam.belongsTo(Subject, { foreignKey: 'subject_id' });
Subject.hasMany(Exam, { foreignKey: 'subject_id' });

// Relación con Status
Homeissue.belongsTo(Status, { foreignKey: 'status_id' });
Status.hasMany(Homeissue, { foreignKey: 'status_id' });

// Relación con Subject
Homework.belongsTo(Subject, { foreignKey: 'subject_id' });
Subject.hasMany(Homework, { foreignKey: 'subject_id' });

// Relación con Priority
Homework.belongsTo(Priority, { foreignKey: 'priority_id' });
Priority.hasMany(Homework, { foreignKey: 'priority_id' });

// Relación con Status
Homework.belongsTo(Status, { foreignKey: 'status_id' });
Status.hasMany(Homework, { foreignKey: 'status_id' });

// Relación con Priority
Homework.belongsTo(Priority, { foreignKey: 'priority_id' });
Priority.hasMany(Homework, { foreignKey: 'priority_id' });

// Relación con Brand
Purchase.belongsTo(Brand, { foreignKey: 'brand_id' });
Brand.hasMany(Purchase, { foreignKey: 'brand_id' });

// Relación con Homeissues
Status.hasMany(Homeissue, { foreignKey: 'status_id' });
Homeissue.belongsTo(Status, { foreignKey: 'status_id' });

// Relación con Homework
Status.hasMany(Homework, { foreignKey: 'status_id' });
Homework.belongsTo(Status, { foreignKey: 'status_id' });


Subject.hasMany(Exam, { foreignKey: 'subject_id' });
Exam.belongsTo(Subject, { foreignKey: 'subject_id' });

Homework.belongsTo(Subject, { foreignKey: 'subject_id' });
Subject.hasMany(Homework, { foreignKey: 'subject_id' });