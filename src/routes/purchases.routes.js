import { Router } from "express";
import { getPurchases, getPurchaseById, createPurchase, updatePurchase, deletePurchase } from "../controllers/purchases.controller.js";

const router = Router();

router.get("/purchases", getPurchases);
router.get("/purchases/:id", getPurchaseById);
router.post("/purchases", createPurchase);
router.put("/purchases/:id", updatePurchase);
router.delete("/purchases/:id", deletePurchase);

export default router;
