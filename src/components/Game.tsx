import React, { useState } from "react";
import Board from "./Board";
import calculateWinner from "../services/TicTacTocUtils";

const Game = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(cells);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const handleCellClick = (i: number) => {
    if (calculateWinner(cells) || cells[i]) {
      return;
    }
    cells[i] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board cells={cells} onClick={(i: number) => handleCellClick(i)} />
      </div>
      <div className={winner ? "game-info winner" : "game-info"}>
        <div>Status = {status}</div>
      </div>
    </div>
  );
};

export default Game;
