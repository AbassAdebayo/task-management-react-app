import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://localhost:7130/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleUpdateStatus = async (taskId, newStatus) => {
    try {
      await axios.put(`https://localhost:7130/tasks/${taskId}`, { status: newStatus });
      fetchTasks(); // Refresh the task list after updating status
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`https://localhost:7130/tasks/${taskId}`);
      fetchTasks(); // Refresh the task list after deletion
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => handleUpdateStatus(task.id, 'In Progress')}>Mark In Progress</button>
            <button onClick={() => handleUpdateStatus(task.id, 'Completed')}>Mark Completed</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

