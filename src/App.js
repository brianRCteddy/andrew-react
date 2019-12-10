import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [
				{
					name: 'Dracula',
					id: '2wq'
				},
				{
					name: 'Frakenstein',
					id: 'ffe'
				},
				{
					name: 'Zombie',
					id: 'ppo21'
				}
			]
		};
	}
	render() {
		return (
			<div className="App">
				{this.state.monsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
