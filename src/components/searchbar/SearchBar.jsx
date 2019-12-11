import React, { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		return (
			<div>
				<input
					type="search"
					placeholder="Search here..."
					onChange={(e) => {
						this.setState({ searchField: e.target.value });
					}}
				/>
			</div>
		);
	}
}
