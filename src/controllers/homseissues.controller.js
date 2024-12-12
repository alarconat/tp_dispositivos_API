import {Homeissue} from '../models/Homeissue.js';

export const getHomeissues = async (req, res) => {
    try {
        const homeissues = await Homeissue.findAll();
        res.status(200).json(homeissues);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los problemas de casa', error });
    }
}

export const getHomeissueById = async (req, res) => {
    try {
        const { id } = req.params;
        const homeissue = await Homeissue.findByPk(id);

        if (!homeissue) {
            return res.status(404).json({ message: 'Problema de casa no encontrado' });
        }

        res.status(200).json(homeissue);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener el problema de casa', error });
    }
}

export const createHomeissue = async (req, res) => {
    try {
        const { description, start_date, end_date, status_id } = req.body;

        if (!description || !status_id || !start_date || !end_date) {
            return res.status(400).json({ message: 'Description, status_id, start_date and end_date are required' });
        }

        const newHomeissue = await Homeissue.create({ description, start_date, end_date, status_id });

        res.status(201).json({ message: 'Problema de casa creado exitosamente', homeissue: newHomeissue });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el problema de casa', error });
    }
}

export const updateHomeissue = async (req, res) => {
    try {
        const { id } = req.params;
        const { description, start_date, end_date, status_id  } = req.body;

        if (!description || !status_id || !start_date || !end_date) {
            return res.status(400).json({ message: 'Description, status_id, start_date and end_date are required' });
        }

        const homeissue = await Homeissue.findByPk(id);

        if (!homeissue) {
            return res.status(404).json({ message: 'Problema de casa no encontrado' });
        }

        homeissue.description = description;
        homeissue.status_id = status_id;
        homeissue.start_date = start_date;
        homeissue.end_date = end_date;

        await homeissue.save();

        res.status(200).json({ message: 'Problema de casa actualizado exitosamente', homeissue });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el problema de casa', error });
    }
}

export const deleteHomeissue = async (req, res) => {
    try {
        const { id } = req.params;
        const homeissue = await Homeissue.findByPk(id);

        if (!homeissue) {
            return res.status(404).json({ message: 'Problema de casa no encontrado' });
        }

        await homeissue.destroy();

        res.status(200).json({ message: 'Problema de casa eliminado exitosamente' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar el problema de casa', error });
    }
}