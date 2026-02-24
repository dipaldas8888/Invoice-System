import express from "express";
import {
  getInvoiceDetails,
  addPayment,
  archiveInvoice,
  restoreInvoice,
} from "../controllers/invoiceController.js";

const router = express.Router();

router.get("/:id", getInvoiceDetails);
router.post("/:id/payments", addPayment);
router.post("/:id/archive", archiveInvoice);
router.post("/:id/restore", restoreInvoice);

export default router;
