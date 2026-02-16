import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onComplete, onExpire }) => {
    if (tasks.length === 0) {
        return (
            <div className="empty-state glass-panel">
                <p>No active tasks. Add one above!</p>
            </div>
        );
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onComplete={onComplete}
                    onExpire={onExpire}
                />
            ))}
        </div>
    );
};

export default TaskList;
