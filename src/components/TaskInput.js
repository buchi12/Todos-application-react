import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
    const [task, setTask] = useState(''); // State to hold the current input value
    const dispatch = useDispatch();

    // Handle adding a new task
    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask(task));
            setTask(''); // Clear the input field after adding the task
        }
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
