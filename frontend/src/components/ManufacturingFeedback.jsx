import { useEffect, useState } from "react";

export default function ManufacturingFeedback() {
  const [capaCreated, setCapaCreated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCapaCreated(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fade-up glow-hover bg-gradient-to-br from-[#1f1c0d] to-[#141206]
      border-l-4 border-yellow-400 rounded-xl p-6 h-full flex flex-col justify-between"
    >
      {/* HEADER */}
      <div>
        <h3 className="text-lg font-semibold text-yellow-300 flex items-center gap-2">
          🏭 Manufacturing Feedback
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        </h3>

        <p className="text-xs text-gray-400 mt-1">
          Closed-loop quality intelligence
        </p>
      </div>

      {/* ISSUE SUMMARY */}
      <div className="mt-4 text-sm text-gray-200 space-y-2">
        <p>• Recurrent brake wear detected</p>
        <p>
          • Affected Batch:
          <span className="text-yellow-300 font-medium"> B23</span>
        </p>
        <p>
          • Pattern: High-frequency failure across service centers
        </p>
      </div>

      {/* RCA + CAPA */}
      <div className="mt-4 space-y-2 text-sm">
        <p className="text-gray-400">
          Root Cause Analysis:
        </p>
        <p className="text-gray-200">
          Tolerance deviation in brake pad material composition
        </p>

        <p className="text-gray-400 mt-2">
          Corrective Action:
        </p>

        {capaCreated ? (
          <span className="inline-block text-xs px-2 py-1 rounded bg-green-500/20 text-green-300">
            CAPA Ticket Auto-Created ✔
          </span>
        ) : (
          <span className="inline-block text-xs px-2 py-1 rounded bg-yellow-500/20 text-yellow-300 animate-pulse">
            Creating CAPA Ticket…
          </span>
        )}
      </div>

      {/* FOOTER */}
      <div className="mt-4 flex justify-between items-center text-xs text-gray-400">
        <span>RCA / CAPA Agent</span>
        <span>Manufacturing Loop Active</span>
      </div>
    </div>
  );
}
