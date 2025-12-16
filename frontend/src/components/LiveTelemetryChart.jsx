import { useEffect, useState } from "react";

export default function LiveTelemetry() {
  const [load, setLoad] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad(prev => (prev > 85 ? 55 : prev + 5));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fade-up glow-hover bg-[#16272e] border-l-4 border-blue-400 
      rounded-xl p-6 h-full flex flex-col justify-between">

      <div>
        <h3 className="text-lg font-semibold text-blue-300 mb-3">
          📡 Live Telemetry
        </h3>

        <ul className="text-sm text-gray-300 space-y-2">
          <li>• Engine Temp: 92°C (Normal)</li>
          <li>• RPM Stability: Stable</li>
          <li>• Battery Voltage: 12.4V</li>
        </ul>
      </div>

      {/* Animated Load Bar */}
      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Engine Load</span>
          <span>{load}%</span>
        </div>

        <div className="h-2 bg-[#0b1f26] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-700"
            style={{ width: `${load}%` }}
          />
        </div>

        <p className="text-xs text-gray-400 mt-2">
          Data Agent · Streaming signals
        </p>
      </div>
    </div>
  );
}
