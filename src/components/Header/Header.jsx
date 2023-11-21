import React from "react";
import { HiMoon } from "react-icons/hi";

export default function Header({ filter, filters, onFilterChange }) {
  return (
    <header>
      <button>
        <HiMoon />
      </button>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
