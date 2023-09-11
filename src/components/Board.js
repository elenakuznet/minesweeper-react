import { useEffect, useState } from "react";
import createBoard from "../util/createBoard";
import Cell from "./Cell";

const Board = () => {
    const [grid, setGrid] = useState([]);

    useEffect(() => {
        function freshBoard() {
            const newBoard = createBoard(5, 5, 10);
            setGrid(newBoard.board);
        }
        freshBoard();
    }, []);

    const updateFlag = (e, x, y) => {
        e.preventDefault();
        let newGrid = JSON.parse(JSON.stringify(grid));
        console.log(newGrid[x][y])
        newGrid[x][y].flagged = true;
        setGrid(newGrid);
        console.log('Right click');
    }

    // if (!grid.board) {
    //     return <div>Loading</div>
    // }

    return grid.map(singleRow=>{
        return (
            <div style={{display: "flex"}}>
            { singleRow.map(singleBlock => {
            return <Cell details={singleBlock} updateFlag={updateFlag} />
            })} 
            </div>
        ) 
    });
};

export default Board;