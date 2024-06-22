import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ToDo App</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
