export default function StatCard({ title, value, color }) {
  return (
    <div style={{ ...card, borderLeft: `6px solid ${color}` }}>
      <h4>{title}</h4>
      <h2 style={{ color }}>{value}</h2>
    </div>
  );
}

const card = {
  background: "rgba(255,255,255,0.12)",
  padding: "20px",
  borderRadius: "14px",
  width: "220px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
};
