import React, { useState } from "react";
import uuid from "react-uuid";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add ToDo"
        value={text}
        onChange={handleChange}
      />
      <button>ADD</button>
    </form>
  );
}
