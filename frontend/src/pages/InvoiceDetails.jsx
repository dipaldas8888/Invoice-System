import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInvoice, addPayment, addInvoiceLine } from "../api/invoiceApi";
import PaymentModal from "../components/PaymentModal";
import AddLineModal from "../components/AddLineModal";

function InvoiceDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openLineModal, setOpenLineModal] = useState(false);

  const fetchInvoice = async () => {
    const res = await getInvoice(id);
    setData(res.data);
  };

  useEffect(() => {
    fetchInvoice();
  }, []);

  const handleAddPayment = async (amount) => {
    await addPayment(id, amount);
    setOpenModal(false);
    fetchInvoice();
  };
  const handleAddLine = async (lineData) => {
    await addInvoiceLine(id, lineData);
    setOpenLineModal(false);
    fetchInvoice();
  };

  if (!data) return <p className="p-10">Loading...</p>;

  const { invoice, lines, payments } = data;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow">
        {/* 🔹 HEADER */}
        <div className="flex justify-between items-start border-b pb-6 mb-6">
          <div>
            <h1 className="text-2xl font-bold">
              Invoice #{invoice.invoiceNumber}
            </h1>
            <p className="text-gray-600 mt-1">
              Customer: {invoice.customerName}
            </p>
            <p className="text-sm text-gray-500">
              Issue: {new Date(invoice.issueDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">
              Due: {new Date(invoice.dueDate).toLocaleDateString()}
            </p>
          </div>

          <span
            className={`px-4 py-1 rounded-full text-sm font-semibold ${
              invoice.status === "PAID"
                ? "bg-green-100 text-green-600"
                : "bg-yellow-100 text-yellow-600"
            }`}
          >
            {invoice.status}
          </span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Line Items</h2>
          <button
            onClick={() => setOpenLineModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add Line
          </button>
        </div>

        <h2 className="text-lg font-semibold mb-3">Line Items</h2>

        <table className="w-full border-collapse mb-6">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-3">Description</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Unit Price</th>
              <th className="p-3">Line Total</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((line) => (
              <tr key={line._id} className="border-t">
                <td className="p-3">{line.description}</td>
                <td className="p-3">{line.quantity}</td>
                <td className="p-3">₹{line.unitPrice}</td>
                <td className="p-3 font-medium">₹{line.lineTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mb-8">
          <div className="w-80 space-y-2">
            <div className="flex justify-between">
              <span>Total</span>
              <span>₹{invoice.total}</span>
            </div>
            <div className="flex justify-between">
              <span>Amount Paid</span>
              <span className="text-green-600">₹{invoice.amountPaid}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Balance Due</span>
              <span className="text-red-600">₹{invoice.balanceDue}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Payments</h2>
            <button
              onClick={() => setOpenModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Add Payment
            </button>
          </div>

          {payments.length === 0 ? (
            <p className="text-gray-500">No payments yet.</p>
          ) : (
            payments.map((p) => (
              <div
                key={p._id}
                className="flex justify-between bg-gray-50 p-3 rounded mb-2"
              >
                <span>{new Date(p.paymentDate).toLocaleDateString()}</span>
                <span className="font-medium text-green-600">₹{p.amount}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <PaymentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleAddPayment}
      />
      <AddLineModal
        isOpen={openLineModal}
        onClose={() => setOpenLineModal(false)}
        onSubmit={handleAddLine}
      />
    </div>
  );
}

export default InvoiceDetails;
