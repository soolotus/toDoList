import React, { useState } from "react";
import AddToDo from "../AddToDo/AddToDo";
import ToDo from "../ToDo/ToDo";

export default function ToDoList() {
  const [toDos, setToDos] = useState([
    { text: "study", id: 123, status: "active" },
    { text: "grocery shopping", id: 124, status: "active" },
  ]);

  const handleAdd = (todo) => setToDos([...toDos, todo]);
  const handleDelete = (todo) =>
    setToDos(toDos.filter((t) => todo.id !== t.id));

  return (
    <section>
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} toDo={todo} onDelete={handleDelete} />
        ))}
      </ul>
      <AddToDo onAdd={handleAdd} />
    </section>
  );
}
