import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import InvoiceDetails from "./pages/InvoiceDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/invoices/699f614b8a2f2d2b42468379" />}
        />
        <Route path="/invoices/:id" element={<InvoiceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
