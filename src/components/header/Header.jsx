import React from 'react';
import { useSelector } from 'react-redux';
import './header.scss';
const Header = () => {
	const score = useSelector(state => state.counter.score);
	console.log(score);
	return (
		<div className='header'>
			<h1>rock paper scissors</h1>
			<div className='score'>
				<span>score</span>
				<h2>{score}</h2>
			</div>
		</div>
	);
};

export default Header;
