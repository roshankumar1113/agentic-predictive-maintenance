export default function ActivityLog({ logs }) {
  return (
    <div style={logBox}>
      <h3>🤖 Agent Activity Timeline</h3>
      {logs.length === 0 && <p>No activity yet</p>}
      {logs.map((log, i) => (
        <p key={i}>• {log}</p>
      ))}
    </div>
  );
}

const logBox = {
  background: "rgba(0,0,0,0.4)",
  padding: "25px",
  borderRadius: "14px",
  marginTop: "30px"
};
