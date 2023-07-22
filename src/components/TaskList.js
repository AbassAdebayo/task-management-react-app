import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const fetchAllTasks = async () => {
    try {
      const response = await axios.get('https://localhost:7130/api/task');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <button onClick={fetchAllTasks}>Fetch All Tasks</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>Title: <strong>{task.title}</strong></p>
            <p>Description: {task.description}</p>
            <p>Status: {task.status}</p>
            <p>CreatedAt: {task.createdAt}</p>
            <p>UpdatedAt: {task.updatedAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;




