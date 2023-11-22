import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./ToDo.module.css";
export default function ToDo({ toDo, onDelete, onUpdate }) {
  const { id, text, status } = toDo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...toDo, status });
  };
  return (
    <li className={styles.todo}>
      <input
        id={id}
        type="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
        className={styles.checkbox}
      />

      <label
        className={styles.text}
        htmlFor={id}
        style={
          status === "completed" ? { textDecorationLine: "line-through" } : {}
        }
      >
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={() => onDelete(toDo)}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
