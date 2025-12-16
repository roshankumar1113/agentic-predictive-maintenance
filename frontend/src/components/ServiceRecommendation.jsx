import { useState } from "react";
import AppointmentModal from "./AppointmentModal";

export default function ServiceRecommendation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fade-up glow-hover bg-[#16272e] border-l-4 border-green-400 
        rounded-xl p-6 h-full flex flex-col justify-between">

        <div>
          <h3 className="text-lg font-semibold text-green-300 mb-3">
            🛠 Service Recommendation
          </h3>
          <p className="text-sm text-gray-300">Service required within</p>
          <p className="text-xl text-green-400 font-bold mt-1">7 Days</p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-cyan-500 hover:bg-cyan-400 text-black py-2 rounded-lg font-semibold"
        >
          Confirm Appointment
        </button>

        <p className="text-xs text-gray-400 mt-3">
          Scheduling Agent · Autonomous
        </p>
      </div>

      <AppointmentModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
