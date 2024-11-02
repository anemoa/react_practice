import React from 'react'
import Board from './Board'
import { useState } from 'react';
import { calculateWinner } from '../helpers';

const Game = () => {

	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = () => {

	}

	const jumpTo = () => {

	}

	const renderMoves = () => {
		
	}



  return (
	<div>
		<Board onClick={handleClick}/>
	</div>
  )
}

export default Game