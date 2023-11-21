import React from "react";
import { FaTrashAlt, FaUnderline } from "react-icons/fa";

export default function ToDo({ toDo, onDelete, onUpdate }) {
  const { id, text, status } = toDo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...toDo, status });
  };
  return (
    <li>
      <input
        id={id}
        type="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />

      <label
        htmlFor={id}
        style={
          status === "completed" ? { textDecorationLine: "line-through" } : {}
        }
      >
        {text}
      </label>
      <span>
        <button onClick={() => onDelete(toDo)}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
