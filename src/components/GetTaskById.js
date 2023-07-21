import React, { useState } from 'react';
import axios from 'axios';

const TaskDetail = () => {
  const [taskId, setTaskId] = useState('');
  const [task, setTask] = useState(null);

  const handleFetchTask = async () => {
    try {
      const response = await axios.get(`https://localhost:7130/tasks/${taskId}`);
      setTask(response.data);
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  };

  return (
    <div>
      <h2>Task Detail</h2>
      <input type="text" value={taskId} onChange={(e) => setTaskId(e.target.value)} />
      <button onClick={handleFetchTask}>Fetch Task</button>
      {task && (
        <div>
          <p>Id: {task.id}</p>
          <p>Title: {task.title}</p>
          <p>Description: {task.description}</p>
          <p>Status: {task.status}</p>
          <p>CreatedAt: {task.createdAt}</p>
          <p>UpdatedAt: {task.updatedAt}</p>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;
