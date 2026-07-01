import React from "react";


const issueData = [
  {
    id: 1,
    title: "Initialize Vite App",
    priority: "High",
    status: "Done",
  },
  {
    id: 2,
    title: "Build Sidebar Component",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Deploy to Vercel",
    priority: "Low",
    status: "Pending",
  },
];


function TaskCard({ title, priority, status }) {
  return (
    <div
      className="task-card"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px 0",
      }}
    >
      <h3>{title}</h3>
      <p>
        <strong>Priority:</strong> {priority}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
    </div>
  );
}


function App() {
  return (
   <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Task Dashboard</h1>

      {issueData.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          priority={task.priority}
          status={task.status}
        />
      ))}
    </div>
  );
}

export default App;
