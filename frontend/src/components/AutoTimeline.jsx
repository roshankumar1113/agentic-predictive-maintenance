import { useEffect, useState } from "react";

const events = [
  "Telemetry Agent: Data received",
  "Diagnosis Agent: Anomaly detected",
  "Scheduling Agent: Slot identified",
  "Voice Agent: Customer notified",
  "UEBA: Behavior validated"
];

export default function AutoTimeline() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setList(prev => [...prev, events[i]]);
      i++;
      if (i >= events.length) clearInterval(t);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#16272e] rounded-xl p-6 space-y-2 fade-up">
      {list.map((e, i) => (
        <p key={i} className="text-sm text-gray-300">
          • {e}
        </p>
      ))}
    </div>
  );
}
