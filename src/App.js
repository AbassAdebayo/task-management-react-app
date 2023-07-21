import React from 'react';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import GetTaskById from './components/GetTaskById';
import './App.css';


function App() {
  return (
    <div>
      <h1>Task Management App</h1>
      <TaskList />
      <CreateTask />
      <GetTaskById />
    </div>
  );
}

export default App;
