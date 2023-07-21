import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const TaskDetail = () => {
  const { taskId } = useParams();
  const history = useHistory();

  const [task, setTask] = useState({});

  useEffect(() => {
    axios.get(`https://localhost:7130/api/task/${taskId}`) // Replace with your API URL
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => {
        console.error('Error fetching task details:', error);
      });
  }, [taskId]);

  const handleStatusUpdate = (status) => {
    axios.put(`https://localhost:7130/api/Task/${taskId}/status`, `"${status}"`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }) // Replace with your API URL
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => {
        console.error('Error updating task status:', error);
      });
  };

  const handleDelete = () => {
    axios.delete(`https://localhost:7130/api/Task/${taskId}`) // Replace with your API URL
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
      });
  };

  return (
    <div>
      <h1>Task Detail</h1>
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <p>Description: {task.description}</p>
      <button onClick={() => handleStatusUpdate('In Progress')}>Set In Progress</button>
      <button onClick={() => handleStatusUpdate('Completed')}>Set Completed</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskDetail;
