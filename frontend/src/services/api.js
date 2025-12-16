import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const fetchPredictiveInsights = () =>
  API.get("/predictive-insights");

export const fetchServiceRecommendation = () =>
  API.get("/service-recommendation");

export const fetchUebaAlerts = () =>
  API.get("/ueba-alerts");

export const fetchManufacturingFeedback = () =>
  API.get("/manufacturing-feedback");
