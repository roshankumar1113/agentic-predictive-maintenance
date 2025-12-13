import { useState } from "react";
import axios from "axios";
import StatCard from "./StatCard";
import ActivityLog from "./ActivityLog";

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [logs, setLogs] = useState([]);

  const runAnalysis = async () => {
    setLogs([]);
    setLogs(l => [...l, "📊 Data Analysis Agent processing records"]);

    const res = await axios.post("http://127.0.0.1:8000/predict", {
      vehicle_id: "HM001",
      age_years: 4,
      mileage_km: 60000,
      last_service_days: 280,
      dtc_count: 5,
      complaints: 3,
      warranty_claims: 2
    });

    setLogs(l => [...l, "🤖 Diagnosis Agent running ML model"]);

    if (res.data.status === "CRITICAL") {
      setLogs(l => [
        ...l,
        "📞 Voice Agent contacted customer",
        "📅 Scheduling Agent booked service",
        "🏭 Manufacturing RCA updated"
      ]);
    }

    setResult(res.data);
  };

  return (
    <div style={page}>
      <div style={cardRow}>
        <StatCard title="Vehicle ID" value="HM001" color="#00c6ff" />
        <StatCard
          title="Health Status"
          value={result ? result.status : "—"}
          color={result?.status === "CRITICAL" ? "#ff4d4d" : "#00ff99"}
        />
        <StatCard
          title="Failure Risk"
          value={result ? `${(result.risk * 100).toFixed(1)}%` : "—"}
          color="#ffaa00"
        />
      </div>

      <button style={button} onClick={runAnalysis}>
        Run Predictive Analysis
      </button>

      <ActivityLog logs={logs} />
    </div>
  );
}

const page = {
  padding: "40px"
};

const cardRow = {
  display: "flex",
  gap: "20px",
  marginBottom: "30px"
};

const button = {
  padding: "14px 26px",
  fontSize: "16px",
  borderRadius: "12px",
  border: "none",
  background: "#00c6ff",
  cursor: "pointer",
  fontWeight: "bold"
};
    