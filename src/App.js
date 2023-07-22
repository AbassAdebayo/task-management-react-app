// import React from 'react';
// import TaskList from './components/TaskList';
// import CreateTask from './components/CreateTask';
// import GetTaskById from './components/GetTaskById';
// import './App.css';


// function App() {
//   return (
//     <div>
//       <h1>Task Management App</h1>
//       <TaskList />
//       <CreateTask />
//       <GetTaskById />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import GetTaskById from './components/GetTaskById';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="mb-4">Task Management App</h1>
          <TaskList />
          <CreateTask />
          <GetTaskById />
        </div>
      </div>
    </div>
  );
}

export default App;

