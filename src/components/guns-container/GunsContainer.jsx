import React from 'react';
import './guns-container.scss';
const GunsContainer = props => {
	return <div className='guns'>{props.children}</div>;
};

export default GunsContainer;
