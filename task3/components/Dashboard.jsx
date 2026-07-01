import React, { useState } from 'react';

function Dashboard() {
    // Demanded State: Tracks modal visibility using slide naming terms
    const [showModal, setShowModal] = useState(false);

    // MISSING STATE 1: To store the list of tasks
    const [tasks, setTasks] = useState([]);

    // MISSING STATE 2: To track the current input value
    const [taskTitle, setTaskTitle] = useState('');

    // MISSING LOGIC: Function to handle task creation
    const handleCreateTask = () => {
        if (!taskTitle.trim()) return; // Prevent empty tasks

        // Add new task to the array
        setTasks([...tasks, { id: Date.now(), title: taskTitle }]);

        // Reset input field and close modal
        setTaskTitle('');
        setShowModal(false); 
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', minHeight: '100vh' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>IssueFlow Dashboard</h1>
                {/* DEMANDED IMPLEMENTATION: Call setShowModal(true) on click */}
                <button
                    onClick={() => setShowModal(true)} 
                    style={{ padding: '10px 20px', background: 'black', color: 'white', cursor: 'pointer', border: 'none', borderRadius: '4px' }}
                >
                    + New Task
                </button>
            </header>

            {/* List area to view added tasks */}
            <main style={{ marginTop: '20px' }}>
                {tasks.map(task => (
                    <div key={task.id} style={{ padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '4px' }}>
                        {task.title}
                    </div>
                ))}
            </main>

            {/* Modal Box Conditional Rendering */}
            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', width: '400px' }}>
                        <h3>Create a New Task</h3>
                        
                        <input
                            type="text"
                            placeholder="Task title..."
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            style={{ width: '100%', padding: '10px', margin: '15px 0', boxSizing: 'border-box' }}
                        />

                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                            {/* DEMANDED IMPLEMENTATION: Call setShowModal(false) on click */}
                            <button
                                onClick={() => {
                                    setShowModal(false); 
                                    setTaskTitle(''); // Clear input text
                                }}
                                style={{ padding: '10px', cursor: 'pointer', background: '#eee', border: 'none', borderRadius: '4px' }}
                            >
                                Cancel
                            </button>

                            {/* CONNECTED BUTTON: Saves task details */}
                            <button
                                onClick={handleCreateTask}
                                style={{ padding: '10px', cursor: 'pointer', background: 'blue', color: 'white', border: 'none', borderRadius: '4px' }}
                            >
                                Save Task
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
