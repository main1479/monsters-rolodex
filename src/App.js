import React, { Component } from 'react';
import http from './services/httpService';
import users from './services/fakeUsers';
import CardList from './components/card-list/cardList';
import SearchBox from './components/searchBox/search';

class App extends Component {
	state = { monsters: users, searchQuery: '' };

	async componentDidMount() {
		const monsters = await http.get('https://jsonplaceholder.typicode.com/users');
		this.setState({ monsters });
	}

	searchQueryChange = (e) => {
		e.preventDefault();
		this.setState({ searchQuery: e.target.value });
	};

	render() {
		const { monsters, searchQuery } = this.state;
		const filtered = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
		return (
			<div className="container">
				<h1 className="heading">Monsters Rolodex</h1>
				<SearchBox value={searchQuery} onChange={this.searchQueryChange} placeholder="Search Monsters..."/>
				<CardList monsters={filtered} />
			</div>
		);
	}
}

export default App;
