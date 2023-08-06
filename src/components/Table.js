import { Fragment, useState } from 'react';
import Button from '../UI/Button/Button';

const Table = (props) => {
  const [array, setArray] = useState(props.arr);
  const [positions, setPositions] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  let timeout = 800;
 
  const setButton = (id, letter) => {
    array.map((obj => {
      if(obj.id === id){
          obj.letter = letter;
      }
      return setArray([...array]);
    }));
  }

  const removeAtList = (id) => {
    const index = positions.indexOf(id);
    if(index > -1){
      positions.splice(index, 1);
    }
    setPositions([...positions]);
  }

  const player2 = () => {   
    if(!props.gameFinished){
    const rand = positions[Math.floor(positions.length * Math.random())];
    removeAtList(rand);
    setButton(rand, 'O');
    }
  }

  const reset = (value) =>{
    props.setGameFinished(true);
    if(value !== 'X'){
      props.winner('AI');
    }
  }

const checkWinning = (array, value) => {
      //a vertical wins
    if(
    array[0].letter === value && 
    array[1].letter === value && 
    array[2].letter === value){
      return reset(value);
    } else if(
    array[3].letter === value && 
    array[4].letter === value && 
    array[5].letter === value){
      return reset(value);
    } else if(
    array[6].letter === value && 
    array[7].letter === value && 
    array[8].letter === value){
      return reset(value);
    } 

      //a horizontal wins
      if(
        array[0].letter === value && 
        array[3].letter === value && 
        array[6].letter === value){
          return reset(value);
        } else if(
        array[1].letter === value && 
        array[4].letter === value && 
        array[7].letter === value){
          return reset(value);
        } else if(
        array[2].letter === value && 
        array[5].letter === value && 
        array[8].letter === value){
          return reset(value);
        } 

    //a cross wins
    if(
      array[2].letter === value && 
      array[4].letter === value && 
      array[6].letter === value){
        return reset(value);
      } else if(
      array[0].letter === value && 
      array[4].letter === value && 
      array[8].letter === value){
        return reset(value);
      } 

      let checkboard = !array.some(element => element.letter === '');
      if(checkboard){
        props.setDraw(true);
      }
      
}

  const clickhandler = (e, id) => {
      props.setGameTurn(true);
      if(e.target.innerHTML !== 'O'){
        setButton(id, "X");
        checkWinning(array, 'X');
        removeAtList(id);
      }
      
        setTimeout(() => {
          props.setGameTurn(false);
          player2();
          checkWinning(array, 'O');
          timeout = 0;
        }, timeout);
}

    return array.map((item) => {
        return(
        <Fragment key={item.id}>
        <Button disabled={props.gameTurn} value={item.letter} clickHandler={(e) => clickhandler(e, item.id)}/>
        </Fragment>
        )
    });
  
}

export default Table;