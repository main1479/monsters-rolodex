import React from 'react';
import './card.css';

const Card = ({ monster }) => {
	return (
		<div className="card">
			<img src={`https://robohash.org/${monster.id}?set=set3&size=180x180`} alt="monster" />
			<h3 className="card__title">{monster.name}</h3>
			<p className="p__text">{monster.email}</p>
		</div>
	);
};

export default Card;
