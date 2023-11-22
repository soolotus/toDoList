import React, { useEffect, useState } from "react";
import AddToDo from "../AddToDo/AddToDo";
import ToDo from "../ToDo/ToDo";
import styles from "./ToDoList.module.css";

export default function ToDoList({ filter }) {
  const [toDos, setToDos] = useState(readTodosFromLocalStorage);

  const handleAdd = (todo) => setToDos([...toDos, todo]);
  const handleDelete = (todo) =>
    setToDos(toDos.filter((t) => todo.id !== t.id));
  const handleUpdate = (todo) =>
    setToDos(toDos.map((t) => (t.id === todo.id ? todo : t)));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  }, [toDos]);

  const filterdToDos = filteredToDos(toDos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
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

function readTodosFromLocalStorage() {
  console.log("readTodosFromLocalStorage");
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function filteredToDos(todos, filter) {
  if (filter === "all") {
    return todos;
  } else {
    return todos.filter((t) => t.status === filter);
  }
}
