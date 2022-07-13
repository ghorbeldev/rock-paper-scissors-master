import React from 'react';
import { useDispatch } from 'react-redux';
import Gun from '../gun/Gun';
import { increment } from '../store/counterSlice';
import './game.scss';
const Game = props => {
	const dispatch = useDispatch();
	const replay = () => {
		props.setPlayerGun({});
		props.setComputerGun({});
		props.setStartGame(false);
	};
	const chooseWinner = (playerGun, computerGun) => {
		if (playerGun === computerGun) return 'DRAW';
		else if (playerGun === 'paper') {
			if (computerGun === 'rock') {
				dispatch(increment());
				return 'YOU WIN';
			}
			return 'YOU LOSE';
		} else if (playerGun === 'scissors') {
			if (computerGun === 'paper') {
				dispatch(increment());
				return 'YOU WIN';
			}
			return 'YOU LOSE';
		} else if (playerGun === 'rock') {
			if (computerGun === 'scissors') {
				dispatch(increment());
				return 'YOU WIN';
			}
			return 'YOU LOSE';
		} else {
			return 'error';
		}
	};
	console.log(props.playerGun);
	console.log(props.computerGun);
	return (
		<div className='game-container'>
			<div className='player'>
				<h3>You Picked:</h3>
				<Gun {...props.playerGun} />
			</div>
			<div className='box'>
				<div className='result'>
					{chooseWinner(props.playerGun.name, props.computerGun.name)}
				</div>
				<button className='replay' onClick={replay}>
					PLAY AGAIN
				</button>
			</div>
			<div className='computer'>
				<h3>Computer Picked:</h3>
				<Gun {...props.computerGun} />
			</div>
		</div>
	);
};

export default Game;
