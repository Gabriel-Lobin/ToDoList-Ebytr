import React, { useState } from 'react';

const INITIAL_STATE = {
    task: '',
    status: 'Em Andamento',
};

const FormTasks = ({ newTask }) => {
    const [forms, setForms] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForms({
            ...forms,
            [name]: value,
        });
    };

    return (
        <div>
            <form>
                <label htmlFor="taskId">
                    <input value={forms.task} onChange={handleChange} type="text" name="task" id="taskId" placeholder="Task" />
                </label>
                <label htmlFor="statusId">
                    <select value={forms.status} onChange={handleChange} name="status" id="statusId">
                        <option value="Em Andamento">Em Andamento</option>
                        <option value="Finalizado">Finalizado</option>
                    </select>
                </label>
                <button type="button" onClick={() => {
                    newTask(forms)
                    setForms(INITIAL_STATE)
                }}>Adicionar Task</button>
            </form>
        </div>
    );
};

export default FormTasks;
