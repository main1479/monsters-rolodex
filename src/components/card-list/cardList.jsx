import React from 'react';
import Card from '../card/card';
import './cardList.css';

const CardList = (props) => {
	return (
		<div className="card__list">
			{props.monsters.map((monster) => (
				<Card key={monster.id} monster={monster} />
			))}
		</div>
	);
};

export default CardList;
