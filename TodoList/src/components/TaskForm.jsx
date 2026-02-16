import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !date || !time) return;
    
    onAddTask({
      id: Date.now(),
      task,
      date,
      time,
      completed: false
    });

    setTask('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form glass-panel">
      <h2>New Task</h2>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="glass-input"
        required
      />
      <div className="input-group">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="glass-input"
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="glass-input"
          required
        />
      </div>
      <button type="submit" className="glass-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
