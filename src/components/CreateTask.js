// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateTask = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newTask = {
//       title,
//       description,
//     };
//     axios.post('https://localhost:7130/api/task/createtask', newTask)
//       .then((response) => {
//         console.log('Task created:', response.data);
//        //
//       })
//       .catch((error) => {
//         console.error('Error creating task:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Create Task</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
//         </div>
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;


import React, { useState } from 'react';
import axios from 'axios';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddTask = async () => {
    try {
      const response = await axios.post('https://localhost:7130/api/task/createtask', {
        title: title,
        description: description,
        status: 'Pending',
      });
      console.log('Task added successfully:', response.data);
      setTitle('');
      setDescription('');
      setSuccessMessage('Task added successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Hide the success message after 3 seconds
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>Add New Task</h2>
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control mb-3"
            placeholder="Enter Task Title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control mb-3"
            placeholder="Enter Task Description"
            rows={3}
          />
          <button onClick={handleAddTask} className="btn btn-primary">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;

