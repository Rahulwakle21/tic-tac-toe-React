import { useState } from "react";

const initialBoard = ()=> Array(9).fill(null)
const useTictacToe =()=>{
    const[board,setBoard] = useState(initialBoard)

    const[xNext,setXNext] = useState(true);

    const winningPatter =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const calculateWinner =(currentBoard)=>{
        for(let i=0; i<winningPatter.length;i++){
            const[a,b,c] = winningPatter[i]
            if(currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                return currentBoard[a]
            }
        }
        return null;
    }

    const handleClick =(index)=>{

        const winner = calculateWinner(board)
        console.log(winner)
        if(winner || board[index]) return
    
        const newBoard = [...board]
        newBoard[index] = xNext ? 'X' : 'O'
        setBoard(newBoard)
        setXNext(!xNext)
    }

    const getStatusMessage =()=>{

        const winner =  calculateWinner(board);
        if(winner)    return `Player ${winner} Wins`;
        if(!board.includes(null)) return "Its a Draw";
            
        return `Player ${xNext ? "X" : "O"} Turn`;
    }

    const resetGame =()=>{
        setBoard(initialBoard());
        setXNext(true);
    }

    return {board,handleClick,calculateWinner,getStatusMessage,resetGame}
   
 
}

export default useTictacToe;