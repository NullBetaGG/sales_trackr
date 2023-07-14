import axios from "axios";

export const api = axios.create({
  baseURL: "https://dev-sales-tracker.onrender.com/api/v1",
});
