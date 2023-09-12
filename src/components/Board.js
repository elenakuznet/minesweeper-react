import { useEffect, useState } from "react";
import createBoard from "../util/createBoard";
import { revealed } from "../util/reveal";
import Cell from "./Cell";
import Timer from "./Timer";

const Board = () => {
    const [grid, setGrid] = useState([]);
    const [nonMineCount, setNonMineCount] = useState(0);
    const [mineLocation, setMineLocations] = useState([]);
    const [gameOver, setGameOver] = useState(false);


    // ComponentDidMount
    useEffect(() => {
        // Creating a board
        // function freshBoard() {
        //     const newBoard = createBoard(10, 10, 15);
        //     setNonMineCount(10*10 - 15);
        //     setMineLocations(newBoard.mineLocation);
        //     setGrid(newBoard.board);
        // }

        // Calling a function
        freshBoard();
    }, []);

    const freshBoard = () => {
        const newBoard = createBoard(10, 15, 15);
        setNonMineCount(10 * 15 - 15);
        setMineLocations(newBoard.mineLocation);
        setGrid(newBoard.board);
    };


    // On Right click / Flag Cell
    const updateFlag = (e, x, y) => {
        // to not have dropdown on right click
        e.preventDefault();

        // Deep copy of state
        let newGrid = JSON.parse(JSON.stringify(grid));
        console.log(newGrid[x][y])
        newGrid[x][y].flagged = true;
        setGrid(newGrid);
    };

    // Reveal Cell
    const revealCell = (x, y) => {
        if (grid[x][y].revealed || gameOver) {
            return;
        }
        let newGrid = JSON.parse(JSON.stringify(grid));
        if (newGrid[x][y].value === 'X') {
            alert('Mine found');
            for (let i = 0; i < mineLocation.length; i++) {
                newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed = true;
            }
            setGrid(newGrid);
            setGameOver(true);
        } else {
            let newRevealedBoard = revealed(newGrid, x, y, nonMineCount);
            // newGrid[x][y].revealed = true;
            setGrid(newRevealedBoard.arr);
            setNonMineCount(newRevealedBoard.newNonMinesCount);
            if (newRevealedBoard.newNonMinesCount === 0) {
                setGameOver(true);
            }
        }
    }

    return (
        <div>
            <p>{JSON.stringify(gameOver)}</p>
            <Timer />
            {/* <p>{nonMineCount}</p> */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                }}>
                {grid.map(singleRow=>{
                return (
                <div style={{display: "flex"}}>
                    {singleRow.map(singleBlock => {
                    return (
                        <Cell 
                            revealCell={revealCell} 
                            details={singleBlock} 
                            updateFlag={updateFlag} 
                        />
                        );
                    })} 
                </div>
                ) 
                })}
            </div>
            <button 
                onClick={freshBoard}
                className="restartBtn"
            >
            Restart game
            </button> 
        </div>
    ); 
};

export default Board;