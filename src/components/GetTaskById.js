import React, { useState } from 'react';
import axios from 'axios';

const TaskDetail = () => {
  const [taskId, setTaskId] = useState('');
  const [task, setTask] = useState(null);
  const [newStatus, setNewStatus] = useState(''); // Initialize with an empty string
  //const history = useHistory(); // Get the history object from react-router-dom

  const handleFetchTask = async () => {
    try {
      const response = await axios.get(`https://localhost:7130/api/task/${taskId}`);
      setTask(response.data); // Set the fetched task data
    } catch (error) {
      console.error('Error fetching task:', error);
    }
  };

  const handleUpdateStatus = async () => {
    try {
      await axios.put(`https://localhost:7130/api/task/${taskId}`, { status: newStatus });
      console.log('Task status updated successfully.');
      // Fetch the task again to update the displayed status
      handleFetchTask();
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const handleDeleteTask = async () => {
    try {
      await axios.delete(`https://localhost:7130/api/task/${taskId}`);
      console.log('Task deleted successfully.');
      setTask(null); // Clear the task details from the component after deletion
      //history.push('/'); // Redirect to the homepage after successful deletion
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  
  const statusOptions = ['In Progress', 'Pending', 'Completed'];

  return (
    <div>
      <h2>Task Detail</h2>
      <input type="text" value={taskId} onChange={(e) => setTaskId(e.target.value)} />
      <button onClick={handleFetchTask}>Fetch Task</button>
      {task ? ( // Check if task data is available
        <div>
          <p>Task ID: {task.id}</p>
          <p>Title: {task.title}</p>
          <p>Description: {task.description}</p>
          <p>Status: {task.status}</p>
          <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
            <option value="">Select Status</option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <button onClick={handleUpdateStatus}>Update Status</button>
          <button onClick={handleDeleteTask}>Delete Task</button>
        </div>
      ) : (
        <p>No task data available</p>
      )}
    </div>
  );
};

export default TaskDetail;

