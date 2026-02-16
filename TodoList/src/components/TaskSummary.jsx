import React from 'react';

const TaskSummary = ({ completedTasks, failedTasks }) => {
    return (
        <div className="task-summary glass-panel">
            <h2>History</h2>
            <div className="summary-grid">
                <div className="summary-column completed">
                    <h3>✅ Completed ({completedTasks.length})</h3>
                    {completedTasks.length === 0 && <p className="empty-text">No tasks completed yet.</p>}
                    <ul className="summary-list">
                        {completedTasks.map(task => (
                            <li key={task.id} className="summary-item">
                                <span>{task.task}</span>
                                <span className="summary-date">{task.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="summary-column failed">
                    <h3>❌ Failed ({failedTasks.length})</h3>
                    {failedTasks.length === 0 && <p className="empty-text">No failed tasks. Keep it up!</p>}
                    <ul className="summary-list">
                        {failedTasks.map(task => (
                            <li key={task.id} className="summary-item">
                                <span>{task.task}</span>
                                <span className="summary-date">{task.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TaskSummary;
