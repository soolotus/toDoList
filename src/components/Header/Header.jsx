import React from "react";
import { HiMoon } from "react-icons/hi";
import styles from "./Header.module.css";

export default function Header({ filter, filters, onFilterChange }) {
  return (
    <header className={styles.header}>
      <button>
        <HiMoon />
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
