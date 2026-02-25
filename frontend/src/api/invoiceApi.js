import axios from "axios";

const API = "http://localhost:8080/api/invoices";

export const getInvoice = (id) => axios.get(`${API}/${id}`);
export const addPayment = (id, amount) =>
  axios.post(`${API}/${id}/payments`, { amount });

export const addInvoiceLine = (id, lineData) =>
  axios.post(`${API}/${id}/lines`, lineData);
