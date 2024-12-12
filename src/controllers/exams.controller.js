import { Exam } from '../models/Exam.js';

export const getExams = async (req, res) => {
    try {
        const exams = await Exam.findAll();
        res.status(200).json(exams);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los exámenes', error });
    }
}

export const getExamById = async (req, res) => {
    try {
        const { id } = req.params;
        const exam = await Exam.findByPk(id);

        if (!exam) {
            return res.status(404).json({ message: 'Examen no encontrado' });
        }

        res.status(200).json(exam);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el examen', error });
    }
}

export const createExam = async (req, res) => {
    try {
        const { name, description, date, subject_id} = req.body;

        if (!name || !description || !date || !subject_id ) {
            return res.status(400).json({ message: 'Name, description, date, subject_id and student_id are required' });
        }

        const newExam = await Exam.create({ name, description, date, subject_id });

        res.status(201).json({ message: 'Examen creado exitosamente', exam: newExam });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el examen', error });
    }
}

export const updateExam = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, date, subject_id } = req.body;

        if (!name || !description || !date || !subject_id) {
            return res.status(400).json({ message: 'Name, description, date, subject_id are required' });
        }

        const exam = await Exam.findByPk(id);

        if (!exam) {
            return res.status(404).json({ message: 'Examen no encontrado' });
        }

        exam.name = name;
        exam.description = description;
        exam.date = date;
        exam.subject_id = subject_id;
        await exam.save();

        res.status(200).json(exam);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el examen', error });
    }
}

export const deleteExam = async (req, res) => {
    try {
        const { id } = req.params;
        const exam = await Exam.findByPk(id);

        if (!exam) {
            return res.status(404).json({ message: 'Examen no encontrado' });
        }

        await exam.destroy();
        res.status(200).json({ message: 'Examen eliminado' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar el examen', error });
    }
}