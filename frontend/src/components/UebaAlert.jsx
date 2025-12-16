import { useEffect, useState } from "react";

const uebaEvents = [
  "Abnormal agent behavior detected",
  "Unauthorized API access blocked",
  "Policy violation attempt mitigated",
  "Agent privilege escalation prevented",
];

export default function UebaAlert() {
  const [events, setEvents] = useState([]);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const event =
        uebaEvents[Math.floor(Math.random() * uebaEvents.length)];

      setEvents((prev) => [
        { text: event, time: new Date().toLocaleTimeString() },
        ...prev.slice(0, 2),
      ]);

      setPulse((p) => !p);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fade-up glow-hover bg-gradient-to-br from-[#2a1717] to-[#1b0f0f]
      border-l-4 border-red-500 rounded-xl p-6 h-full flex flex-col justify-between`}
    >
      {/* HEADER */}
      <div>
        <h3 className="text-lg font-semibold text-red-400 flex items-center gap-2">
          🔐 UEBA Security Alert
          <span
            className={`w-2 h-2 rounded-full ${
              pulse ? "bg-red-500" : "bg-red-300"
            } animate-pulse`}
          />
        </h3>

        <p className="text-xs text-red-300 mt-1">
          Policy enforcement active
        </p>
      </div>

      {/* LIVE EVENTS */}
      <div className="mt-4 space-y-2 text-sm text-gray-200">
        {events.length === 0 && (
          <p className="text-gray-400">
            Monitoring agent behavior...
          </p>
        )}

        {events.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-white/10 pb-1"
          >
            <span>• {item.text}</span>
            <span className="text-xs text-gray-400">
              {item.time}
            </span>
          </div>
        ))}
      </div>

      {/* AGENT STATUS */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-gray-400">
          UEBA Agent · Real-time monitoring
        </p>

        <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-300">
          ACTIVE
        </span>
      </div>
    </div>
  );
}
