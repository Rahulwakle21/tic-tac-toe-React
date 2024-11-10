import React, { useState } from "react";
import useTictacToe from "../customHook/use-TickToe";

const TicToe = () => {
  const { board, getStatusMessage, resetGame, handleClick } =   useTictacToe();
 

  return (
    <div>
      <h1 style={{ textAlign: "center" , marginBottom:"4%"}}>Tic - Toc - Toe Game</h1>
      <div className="game">
        <div className="status">
        {getStatusMessage()}
         <button onClick={resetGame}>Reset Game</button>
        </div>

        <div className="board">
          {board.map((b, index) => {
            return (
              <button
                className="cell"
                key={index}
                onClick={() => handleClick(index)}
                disabled={b !== null}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TicToe;
