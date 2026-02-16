import React, { useState, useEffect } from 'react';

const TaskItem = ({ task, onDelete, onComplete, onExpire }) => {
    const [timeLeft, setTimeLeft] = useState('');

    useEffect(() => {
        const calculateTimeLeft = () => {
            const deadline = new Date(`${task.date}T${task.time}`);
            const now = new Date();
            const difference = deadline - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            } else {
                onExpire(task.id);
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, [task, onExpire]);

    return (
        <div className="task-item glass-panel">
            <div className="task-content">
                <h3>{task.task}</h3>
                <div className="task-meta">
                    <p className="due-date">Due: {task.date} at {task.time}</p>
                    <p className="timer">⏳ {timeLeft}</p>
                </div>
            </div>
            <div className="task-actions">
                <button onClick={() => onComplete(task.id)} className="action-btn complete-btn" title="Mark as Completed">
                    ✅
                </button>
                <button onClick={() => onDelete(task.id)} className="action-btn delete-btn" title="Delete">
                    🗑️
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
