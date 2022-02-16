import React, { useEffect, useState } from 'react';
import ToDoCard from '../components/todoCards';
import fetchUtils from '../utils/fetch';
import FormTasks from './FormTasks';

function Tasks() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetchUtils(setTodos);
    }, []);

    const deleteTask = (id) => {
        fetch(`http://localhost:3001/${id}`, {
            method: 'DELETE',
        }).then(() => fetchUtils(setTodos));
    }

    const newTask = (forms) => {
        fetch(`http://localhost:3001/post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(forms)
        }).then(() => fetchUtils(setTodos));
    }

    return (
        <div>
            <FormTasks newTask={newTask}/>
            <ul>
                {todos.length === 0
                    ? <>Está Vazio por Aqui!!!</>
                    : todos.map(({ _id, task, status, created }, index) => (
                        <ToDoCard
                            key={index}
                            index={index}
                            id={_id}
                            task={task}
                            status={status}
                            created={created}
                            deleteTask={deleteTask}
                        />
                    ))}
            </ul>
        </div>
    );
};

export default Tasks;
