import React, { useState } from "react";
import AddToDo from "../AddToDo/AddToDo";
import ToDo from "../ToDo/ToDo";
import uuid from "react-uuid";

export default function ToDoList() {
  const [toDo, setToDo] = useState([
    { text: "study", id: uuid(), done: false },
    { text: "grocery shopping", id: uuid(), done: false },
  ]);
  return (
    <section>
      <ul>
        {toDo.map((todo) => (
          <ToDo key={todo.id} toDo={todo} />
        ))}
      </ul>
      <AddToDo />
    </section>
  );
}
