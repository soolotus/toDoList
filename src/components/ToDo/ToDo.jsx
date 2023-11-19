import React from "react";

export default function ToDo({ toDo }) {
  return (
    <li>
      <input id={toDo.id} type="checkbox" />
      <label htmlFor={toDo.id}>{toDo.text}</label>
    </li>
  );
}
