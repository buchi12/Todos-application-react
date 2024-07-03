# Todo List Application

This is a simple Todo List application built using React. It allows users to add, complete, and remove tasks. The application stores tasks in local storage to preserve the state across browser sessions and includes an edited `reducex` file for state management.

## Features

- Add new tasks
- Mark tasks as completed
- Edit tasks
- Remove tasks
- Persist tasks using local storage
- Basic styling for a clean and intuitive user interface

## Project Structure

```
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── App.js
│   │   ├── TodoList.js
│   │   └── TodoItem.js
│   ├── reducers
│   │   └── reducex.js
│   ├── styles
│   │   └── styles.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Components

### App Component

This is the main component of the application. It manages the state of the tasks using `reducex` and local storage. It renders the `TodoList` component.

### TodoList Component

This component receives the list of tasks from the `App` component and renders each task using the `TodoItem` component.

### TodoItem Component

This component represents an individual task. It displays the task name and includes buttons to mark the task as completed, edit the task, or remove the task.

## Reducers

### reducex.js

This file contains the reducer functions used to manage the state of the tasks. It handles actions such as adding, editing, completing, and removing tasks.

## Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/todo-list.git
```

2. Navigate to the project directory:

```sh
cd todo-list
```

3. Install the dependencies:

```sh
npm install
```

## Usage

1. Start the development server:

```sh
npm start
```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
