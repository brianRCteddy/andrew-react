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
		this.setState(
			(prevState, prevProps) => {
				return { value: prevState.value + prevProps.increment };
			},
			() => console.log(this.state.value)
		);
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
