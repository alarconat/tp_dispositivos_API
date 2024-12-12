import { Purchase } from '../models/Purchase.js';

export const getPurchases = async (req, res) => {
    try {
        const purchases = await Purchase.find();
        res.json(purchases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getPurchaseById = async (req, res) => {
    try {
        const purchase = await Purchase.findById(req.params.id);
        res.json(purchase);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createPurchase = async (req, res) => {
    try {
        const purchase = new Purchase(req.body);
        await purchase.save();
        res.json(purchase);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updatePurchase = async (req, res) => {
    try {
        const purchase = await Purchase.findByIdAndUpdate(req
            .params.id, req.body, { new: true });
        res.json(purchase);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deletePurchase = async (req, res) => {
    try {
        const purchase = await Purchase.findByIdAndDelete(req.params.id);
        res.json(purchase);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}