import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import { useState } from "react";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <Header filter={filter} filters={filters} onFilterChange={setFilter} />
      <ToDoList filter={filter} />
    </>
  );
}

export default App;
