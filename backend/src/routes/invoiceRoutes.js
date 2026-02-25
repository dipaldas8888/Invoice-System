import express from "express";
import {
  createInvoice,
  getInvoiceDetails,
  addInvoiceLine,
  addPayment,
  archiveInvoice,
  restoreInvoice,
} from "../controllers/invoiceController.js";

const router = express.Router();

router.post("/", createInvoice);
router.get("/:id", getInvoiceDetails);
router.post("/:id/lines", addInvoiceLine);

router.post("/:id/payments", addPayment);
router.post("/:id/archive", archiveInvoice);
router.post("/:id/restore", restoreInvoice);

export default router;
