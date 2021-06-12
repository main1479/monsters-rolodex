import React from 'react';
import './search.css'

const SearchBox = (props) => {
	return (
		<input
			type="search"
			value={props.value}
			onChange={props.onChange}
			placeholder={props.placeholder}
			className="search"
		/>
	);
};

export default SearchBox;
