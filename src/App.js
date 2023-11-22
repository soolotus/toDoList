import "./App.css";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";
import { useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header filter={filter} filters={filters} onFilterChange={setFilter} />
      <ToDoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
