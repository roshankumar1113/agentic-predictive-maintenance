import { useEffect, useState } from "react";

export default function PredictiveInsights() {
  const [pulse, setPulse] = useState(false);

  // Simulated AI heartbeat
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => !p);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fade-up glow-hover bg-[#16272e] border-l-4 border-cyan-400 
      rounded-2xl p-6 h-full flex flex-col justify-between relative overflow-hidden"
    >
      {/* AI Neural Glow */}
      <div
        className={`absolute -top-12 -right-12 w-40 h-40 rounded-full 
        bg-cyan-400/10 blur-3xl transition-opacity duration-700
        ${pulse ? "opacity-100" : "opacity-40"}`}
      />

      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-cyan-300 mb-1 flex items-center gap-2">
          🧠 Predictive Insights
          <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full tracking-wide">
            LIVE AI
          </span>
        </h3>

        <p className="text-xs text-gray-400 mb-4">
          Multivariate anomaly detection
        </p>

        {/* Insights */}
        <ul className="text-sm text-gray-200 space-y-4">
          <Insight label="Engine Vibration Anomaly" level={78} />
          <Insight label="Battery Health Degradation" level={64} />
          <Insight label="Brake Wear Prediction" level={52} />
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-5 text-xs text-gray-400 flex justify-between items-center">
        <span>Diagnosis Agent</span>
        <span className="text-cyan-300">Real-time inference</span>
      </div>
    </div>
  );
}

/* 🔹 Animated Insight Bar */
function Insight({ label, level }) {
  return (
    <li>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-300">{label}</span>
        <span className="text-cyan-300">{level}%</span>
      </div>

      <div className="h-2 bg-[#0b1f26] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500
          transition-all duration-700 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </li>
  );
}
