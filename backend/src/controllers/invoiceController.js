import Invoice from "../models/Invoice.js";
import InvoiceLine from "../models/InvoiceLine.js";
import Payment from "../models/Payment.js";

export const getInvoiceDetails = async (req, res) => {
  const { id } = req.params;

  const invoice = await Invoice.findById(id);
  if (!invoice) return res.status(404).json({ message: "Invoice not found" });

  const lines = await InvoiceLine.find({ invoiceId: id });
  const payments = await Payment.find({ invoiceId: id });

  res.json({
    invoice,
    lines,
    payments,
  });
};

export const addPayment = async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;

  if (amount <= 0)
    return res.status(400).json({ message: "Amount must be greater than 0" });

  const invoice = await Invoice.findById(id);
  if (!invoice) return res.status(404).json({ message: "Invoice not found" });

  if (amount > invoice.balanceDue)
    return res.status(400).json({ message: "Overpayment not allowed" });

  const payment = await Payment.create({
    invoiceId: id,
    amount,
  });

  invoice.amountPaid += amount;
  invoice.balanceDue = invoice.total - invoice.amountPaid;

  if (invoice.balanceDue === 0) {
    invoice.status = "PAID";
  }

  await invoice.save();

  res.json(payment);
};

export const archiveInvoice = async (req, res) => {
  const { id } = req.params;
  await Invoice.findByIdAndUpdate(id, { isArchived: true });
  res.json({ message: "Archived" });
};

export const restoreInvoice = async (req, res) => {
  const { id } = req.params;
  await Invoice.findByIdAndUpdate(id, { isArchived: false });
  res.json({ message: "Restored" });
};
