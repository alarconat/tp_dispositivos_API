import { Homework } from "../models/Homework.js";

export const getHomeworks = async (req, res) => {
    try {
        const homeworks = await Homework.findAll();
        res.status(200).json(homeworks);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tareas', error });
    }
}

export const getHomeworkById = async (req, res) => {
    try {
        const { id } = req.params;
        const homework = await Homework.findByPk(id);

        if (!homework) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        res.status(200).json(homework);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener la tarea', error });
    }
}

export const createHomework = async (req, res) => {
    try {
        const { description, end_date, subject_id, status_id, priority_id } = req.body;

        if (!description || !delivery_date || !subject_id || !status_id || !priority_id || !end_date) {
            return res.status(400).json({ message: 'description, delivery_date, subject_id, status_id, priority_id and end_date are required' });
        }

        const newHomework = await Homework.create({ description, end_date, subject_id, status_id, priority_id });

        res.status(201).json({ message: 'Tarea creada exitosamente', homework: newHomework });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear la tarea', error });
    }
}

export const updateHomework = async (req, res) => {
    try {
        const { id } = req.params;
        const { description, end_date, subject_id, status_id, priority_id } = req.body;

        if (!description || !end_date || !subject_id || !status_id || !priority_id) {
            return res.status(400).json({ message: 'description, end_date, subject_id, status_id and priority_id are required' });
        }

        const homework = await Homework.findByPk(id);

        if (!homework) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        homework.description = description;
        homework.end_date = end_date;
        homework.subject_id = subject_id;
        homework.status_id = status_id;
        homework.priority_id = priority_id
        await homework.save();
        res.status(200).json({ message: 'Tarea actualizada exitosamente', homework });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tarea', error });
    }
}

export const deleteHomework = async (req, res) => {
    try {
        const { id } = req.params;
        const homework = await Homework.findByPk(id);

        if (!homework) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        await homework.destroy();
        res.status(200).json({ message: 'Tarea eliminada exitosamente' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tarea', error });
    }
}