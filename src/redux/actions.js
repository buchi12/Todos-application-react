export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK_COMPLETION = 'TOGGLE_TASK_COMPLETION';

// Action to add a new task
export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

// Action to delete a task by ID
export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id,
});

// Action to edit a task by ID
export const editTask = (id, updatedTask) => ({
    type: EDIT_TASK,
    payload: { id, updatedTask },
});

// Action to toggle the completion state of a task by ID
export const toggleTaskCompletion = (id) => ({
    type: TOGGLE_TASK_COMPLETION,
    payload: id,
});
