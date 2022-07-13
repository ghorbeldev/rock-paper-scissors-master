import React from 'react';
import './gun.scss';
const Gun = ({ color, name, Icon, handleClick }) => {
	return (
		<div className='gun' style={{ '--color': color }} onClick={handleClick}>
			<div className='gun__content'>
				<Icon />
			</div>
		</div>
	);
};

export default Gun;
