import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function ToDo({ toDo, onDelete }) {
  return (
    <li>
      <input id={toDo.id} type="checkbox" />
      <label htmlFor={toDo.id}>{toDo.text}</label>
      <span>
        <button onClick={() => onDelete(toDo)}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
