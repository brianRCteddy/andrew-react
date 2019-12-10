import React from 'react';
import './CardList.css';

const CardList = (props) => {
	console.log(props);
	return <div className="cardList">{props.children}</div>;
};

export default CardList;
