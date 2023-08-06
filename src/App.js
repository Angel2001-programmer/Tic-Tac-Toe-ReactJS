import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import Modal from './UI/Modal/Modal';

function App() {
  let arr = [
    {
    letter: '',
    id: 0
  },

  {
    letter: '',
    id: 1
  },

    {
      letter: '',
      id: 2
    },
    {
      letter: '',
      id: 3
    },
    {
      letter: '',
      id: 4
    },
    {
      letter: '',
      id: 5
    },
    {
      letter: '',
      id: 6
    },
    {
      letter: '',
      id: 7
    },
    {
      letter: '',
      id: 8
    },
  ]
  let model = null;
  let playerTurn = null;
  let aiTurn = null;
  const [userName, setUserName] = useState('');
  const [gameName, setGameName] = useState('');
  const [winner, setWinner] = useState('');
  const [gameFinished, setgameFinished] = useState(false);
  const [firstStart, setFirstStart] = useState(false);
  const [gameTurn, setGameTurn] = useState(false);
  const [draw, setDraw] = useState(false);

const RestartGame = () => {
  setgameFinished(false);
  setDraw(false);
  window.location.reload();
}

const enteredUserName = (e) => {
  setUserName(e.target.value);
}

  const validation = () => {
    let hasNumber = /\d/;
    if(userName.trim().length !== 0 && !hasNumber.test(userName)){
      setGameName(userName);
      return setFirstStart(true);
    } else {
      return alert('Name must not have numbers or be empty.');
    }
  }

  if(!firstStart){
    model = <Modal>
      <h5 className="win">Choose your Name</h5>
      <input name='userName' type='text' value={userName} onChange={enteredUserName} required></input>
      <button type='button' className="button" onClick={validation}>Start Game</button>
      </Modal>
  }

  if(gameFinished){

    if(winner === ''){
      setWinner(userName);
    }
    model = <Modal>
      <h5 className="win">{winner} has won!</h5>
      <p className="text">GAME OVER</p>
      <button onClick={RestartGame} className="button">Restart</button>
      </Modal>
  }

  if(!gameTurn){
    playerTurn = <h4>{gameName} is Playing</h4>
  } else {
    aiTurn = <h4>AI is Playing</h4>
  }

  if(draw){
    model = <Modal>
    <p className="text">Draw!</p>
    <button onClick={RestartGame} className="button">Restart</button>
    </Modal>
  }

  return (
    <div className='main'>
      {playerTurn}
      {model}
      <div className='Table'>
      <Table 
      arr={arr} 
      gameFinished={gameFinished} 
      setGameFinished={setgameFinished} 
      winner={setWinner} 
      gameTurn = {gameTurn}
      setGameTurn={setGameTurn}
      setDraw={setDraw}
      />
      </div>
      <div className='player'>
        {aiTurn}
      </div>
      </div>
  );
}

export default App;
