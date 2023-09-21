import './App.css';
import Board from './components/Board';
import Board2 from './components/Board2';
import Board3 from './components/Board3';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <h1 className='app__title'>Minesweeper</h1>
          <Nav />
          <Routes>
            <Route path='/board' element={<Board />}/>
            <Route path='/board2' element={<Board2 />}/>
            <Route path='/board3' element={<Board3 />}/>

          </Routes>
        
        </BrowserRouter>
      </div>
  );
}

export default App;
