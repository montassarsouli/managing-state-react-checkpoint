import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask, deleteTask } from "../redux/tasksSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, name, description }));
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(task.id));
    }
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggle}
          className="mr-2"
        />
        {isEditing ? (
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded p-1"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded p-1"
            ></textarea>
          </div>
        ) : (
          <div className={task.isDone ? "line-through" : ""}>
            <div className="font-bold">{task.name}</div>
            <div>{task.description}</div>
          </div>
        )}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleEdit}
          className="bg-green-500 text-white px-2 py-1 rounded"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
