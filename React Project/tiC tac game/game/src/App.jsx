import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] !== null) {
      alert("🫥 Cell already occupied!");
      return;
    }
    if (winner !== null) {
      alert("Game is over!");
      return;
    }

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === "X" ? "O" : "X");
  };

  const checkWins = (p) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winPatterns.some((pattern) =>
      pattern.every((index) => board[index] === p)
    );
  };

  useEffect(() => {
    const xWon = checkWins("X");
    const oWon = checkWins("O");

    if (xWon) {
      setWinner("X");
    } else if (oWon) {
      setWinner("Y");
    }
  }, [board]);

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <p>Turn: {player}</p>

      <div className="board">
        {board.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="cell"
          >
            {item}
          </button>
        ))}
      </div>

      {winner && <p>Winner: <span>{winner}</span></p>}
    </div>
  );
}

export default App;
