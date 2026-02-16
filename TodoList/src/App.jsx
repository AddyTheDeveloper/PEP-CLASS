import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskSummary from './components/TaskSummary';
import Toast from './components/Toast';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, status: 'active' }]);
    showToast('Task added successfully!', 'success');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    showToast('Task deleted.', 'error');
  };

  const markAsCompleted = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: 'completed' } : task
    ));
    showToast('Task completed! Great job! 🎉', 'success');
  };

  const markAsFailed = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task && task.status !== 'failed') {
      setTasks(tasks.map(t =>
        t.id === id ? { ...t, status: 'failed' } : t
      ));
      showToast('Task expired.', 'error');
    }
  };

  const activeTasks = tasks.filter(task => task.status === 'active' || !task.status).sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateA - dateB;
  });

  const completedTasks = tasks.filter(task => task.status === 'completed');
  const failedTasks = tasks.filter(task => task.status === 'failed');

  return (
    <div className="app-container">
      <div className="glass-container">
        <h1 className="app-title">✨ Task Master</h1>
        <TaskForm onAddTask={addTask} />

        <TaskList
          tasks={activeTasks}
          onDelete={deleteTask}
          onComplete={markAsCompleted}
          onExpire={markAsFailed}
        />

        <TaskSummary
          completedTasks={completedTasks}
          failedTasks={failedTasks}
        />
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
    </div>
  );
}

export default App;
