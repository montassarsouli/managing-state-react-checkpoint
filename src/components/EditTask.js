import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/tasksSlice";

const EditTask = ({ task, onClose }) => {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && description.trim()) {
      dispatch(editTask({ id: task.id, name, description }));
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
        className="border rounded p-2"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="border rounded p-2"
      ></textarea>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTask;
