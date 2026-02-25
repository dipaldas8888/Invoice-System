import { useState } from "react";

function PaymentModal({ isOpen, onClose, onSubmit }) {
  const [amount, setAmount] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!amount) return;
    onSubmit(Number(amount));
    setAmount("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Add Payment</h2>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
