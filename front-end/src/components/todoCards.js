import React from 'react';

function ToDoCard({ id, task, status, created, index, deleteTask }) {
   
    return (
        <li key={id}>
            <p>{index + 1}</p>
            <p>{task}</p>
            <p>{status}</p>
            <p>{created}</p>
            <button onClick={() => deleteTask(id)}>DELETE</button>
        </li>
    );
};

export default ToDoCard;
