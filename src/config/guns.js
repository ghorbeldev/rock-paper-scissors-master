import variables from '../scss/abstracts/_variables.scss';
import { ReactComponent as Paper } from '../assets/images/icon-paper.svg';
import { ReactComponent as Rock } from '../assets/images/icon-rock.svg';
import { ReactComponent as Scissors } from '../assets/images/icon-scissors.svg';
const guns = [
	{
		color: variables.paper,
		name: 'paper',
		Icon: Paper,
	},
	{
		color: variables.scissors,
		name: 'scissors',
		Icon: Scissors,
	},
	{
		color: variables.rock,
		name: 'rock',
		Icon: Rock,
	},
];
export default guns;
