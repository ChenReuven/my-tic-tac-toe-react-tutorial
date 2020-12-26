import React from "react";
import "../styles.css";
import "./cell.css";

const Cell = ({ value, onClick }: any) => (
  <button
    className={
      value === "X"
        ? "x-square square"
        : value === "O"
        ? "o-square square"
        : "square"
    }
    onClick={onClick}
  >
    {value}
  </button>
);

export default Cell;
