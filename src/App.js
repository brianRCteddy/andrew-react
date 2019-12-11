import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 69
		};
	}

	handleChange = () => {
		this.setState({ value: this.state.value + 1 });
		console.log(this.state);
	};

	render() {
		return (
			<div className="App">
				<h1>React</h1>
				<p>{this.state.value}</p>
				<button onClick={this.handleChange}>Click</button>
			</div>
		);
	}
}

export default App;
