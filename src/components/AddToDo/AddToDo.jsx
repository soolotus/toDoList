import React, { useState } from "react";
import uuid from "react-uuid";
import styles from "./AddToDo.module.css";

export default function AddToDo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuid(), text, status: "active" });
    setText("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add ToDo"
        value={text}
        onChange={handleChange}
        className={styles.input}
      />
      <button className={styles.button}>ADD</button>
    </form>
  );
}
