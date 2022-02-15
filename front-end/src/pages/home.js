import React, { useEffect, useState } from 'react';
import ToDoCard from '../components/todoCards';
import fetchUtils from '../utils/fetch';

function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetchUtils(setTodos);
    }, []);

    const deleteTask = (id) => {
        fetch(`http://localhost:3001/${id}`, {
            method: 'DELETE',
        }).then(() => fetchUtils(setTodos));
    }

    return (
        <div>
            <ul>
                {todos.length === 0
                    ? <></>
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

export default Home;
