import React, { useState } from "react";
import AddToDo from "../AddToDo/AddToDo";
import ToDo from "../ToDo/ToDo";

export default function ToDoList({ filter }) {
  const [toDos, setToDos] = useState([
    { text: "study", id: 123, status: "active" },
    { text: "grocery shopping", id: 124, status: "active" },
  ]);

  const handleAdd = (todo) => setToDos([...toDos, todo]);
  const handleDelete = (todo) =>
    setToDos(toDos.filter((t) => todo.id !== t.id));
  const handleUpdate = (todo) =>
    setToDos(toDos.map((t) => (t.id === todo.id ? todo : t)));
  const filterdToDos = filteredToDos(toDos, filter);

  return (
    <section>
      <ul>
        {filterdToDos.map((todo) => (
          <ToDo
            key={todo.id}
            toDo={todo}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
      <AddToDo onAdd={handleAdd} />
    </section>
  );
}
function filteredToDos(todos, filter) {
  if (filter === "all") {
    return todos;
  } else {
    return todos.filter((t) => t.status === filter);
  }
}
