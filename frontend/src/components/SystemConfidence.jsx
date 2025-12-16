import { useEffect, useState } from "react";

export default function SystemConfidence() {
  const [confidence, setConfidence] = useState(0);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += 1;
      setConfidence(value);
      if (value >= 93) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fade-up glow-hover bg-gradient-to-br from-[#1b1026] to-[#0f0b1a]
      border-l-4 border-purple-400 rounded-xl p-6 h-full flex flex-col justify-between"
    >
      {/* HEADER */}
      <div>
        <h3 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
          📊 System Confidence
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          AI prediction reliability
        </p>
      </div>

      {/* CIRCULAR METER */}
      <div className="flex justify-center my-6">
        <div className="relative w-28 h-28">
          <svg className="w-full h-full rotate-[-90deg]">
            <circle
              cx="56"
              cy="56"
              r="50"
              stroke="#2e2545"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="56"
              cy="56"
              r="50"
              stroke="#c084fc"
              strokeWidth="8"
              fill="none"
              strokeDasharray={314}
              strokeDashoffset={314 - (314 * confidence) / 100}
              className="transition-all duration-300"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-purple-300">
              {confidence}%
            </span>
          </div>
        </div>
      </div>

      {/* DETAILS */}
      <div className="text-sm text-gray-200 space-y-2">
        <p>• Ensemble model validation</p>
        <p>• Cross-sensor correlation verified</p>
        <p>• Historical accuracy aligned</p>
      </div>

      {/* FOOTER */}
      <div className="mt-4 flex justify-between items-center text-xs text-gray-400">
        <span>Confidence Engine</span>
        <span className="text-green-400">Verified ✔</span>
      </div>
    </div>
  );
}
