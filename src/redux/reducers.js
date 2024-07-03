import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK_COMPLETION } from './actions';

// Initialize state with tasks from localStorage if available
const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_TASK:
            newState = {
                ...state,
                tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }],
            };
            break;
        case DELETE_TASK:
            newState = {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
            };
            break;
        case EDIT_TASK:
            newState = {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? { ...task, text: action.payload.updatedTask } : task
                ),
            };
            break;
        case TOGGLE_TASK_COMPLETION:
            newState = {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                ),
            };
            break;
        default:
            newState = state;
    }
    // Update localStorage whenever the state changes
    localStorage.setItem('tasks', JSON.stringify(newState.tasks));
    return newState;
};

export default taskReducer;
