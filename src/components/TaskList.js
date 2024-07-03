import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTaskCompletion } from '../redux/actions';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks); // Get tasks from Redux store
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(null); // Track which task is being edited
    const [currentTask, setCurrentTask] = useState(''); // Track the current task text being edited

    // Handle deleting a task
    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id));
    };

    // Handle starting the edit of a task
    const handleEditTask = (id, text) => {
        setIsEditing(id);
        setCurrentTask(text);
    };

    // Handle saving the edited task
    const handleSaveTask = (id) => {
        if (currentTask.trim()) {
            dispatch(editTask(id, currentTask));
            setIsEditing(null);
            setCurrentTask('');
        }
    };

    // Handle toggling the completion state of a task
    const handleToggleCompletion = (id) => {
        dispatch(toggleTaskCompletion(id));
    };

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} className={task.completed ? 'completed' : ''}>
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggleCompletion(task.id)}
                    />
                    {isEditing === task.id ? (
                        <>
                            <input
                                type="text"
                                value={currentTask}
                                onChange={(e) => setCurrentTask(e.target.value)}
                                className="edit-input"
                            />
                            <button onClick={() => handleSaveTask(task.id)}>Save</button>
                        </>
                    ) : (
                        <>
                            {task.text}
                            <div>
                                <button onClick={() => handleEditTask(task.id, task.text)}>Edit</button>
                                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
