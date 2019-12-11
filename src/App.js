import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBar from './components/searchbar/SearchBar';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
			response.json().then((users) => this.setState({ monsters: users }))
		);
	}

	handleChangeInput = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Monster Rolodex</h1>
				<SearchBar placeholder="Search here..." handleChange={this.handleChangeInput} />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
