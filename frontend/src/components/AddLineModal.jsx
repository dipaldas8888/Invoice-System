import { useState } from "react";

function AddLineModal({ isOpen, onClose, onSubmit }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!description || quantity <= 0 || unitPrice <= 0) return;

    onSubmit({
      description,
      quantity: Number(quantity),
      unitPrice: Number(unitPrice),
    });

    setDescription("");
    setQuantity("");
    setUnitPrice("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Add Line Item</h2>

        <input
          type="text"
          placeholder="Description"
          className="w-full border p-2 rounded mb-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          className="w-full border p-2 rounded mb-3"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <input
          type="number"
          placeholder="Unit Price"
          className="w-full border p-2 rounded mb-4"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
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

export default AddLineModal;
