import { useState } from 'react';
import Game from './components/game/Game';
import Gun from './components/gun/Gun';
import GunsContainer from './components/guns-container/GunsContainer';
import Header from './components/header/Header';
import guns from './config/guns';
import './scss/_globals.scss';
function App() {
	const [startGame, setStartGame] = useState(false);
	const [playerGun, setPlayerGun] = useState({});
	const [computerGun, setComputerGun] = useState({});
	return (
		<div className='App'>
			<Header />
			{startGame ? (
				<Game
					playerGun={playerGun}
					computerGun={computerGun}
					setPlayerGun={setPlayerGun}
					setComputerGun={setComputerGun}
					setStartGame={setStartGame}
				/>
			) : (
				<GunsContainer>
					{guns.map((gun, index) => (
						<Gun
							{...gun}
							handleClick={e => {
								setPlayerGun(gun);
								setStartGame(true);
								setComputerGun(guns[Math.floor(Math.random() * guns.length)]);
							}}
							key={index}
						/>
					))}
				</GunsContainer>
			)}
		</div>
	);
}

export default App;
