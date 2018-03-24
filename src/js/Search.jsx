import React, { Component } from "react";
import ShowCard from "./ShowCard";
import preload from "../../data.json";

class Search extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		searchTerm: "this is some sort of debug statement"
	// 	};

	// 	// this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	// }
	// handleSearchTermChange(event) {
	// 	this.setState({ searchTerm: event.target.value });
	// }

	state = {
		searchTerm: ""
	};

	handleSearchTermChange = event => {
		this.setState({ searchTerm: event.target.value });
	};

	render() {
		return (
			<div className="search">
				{/* <pre>
					<code>{JSON.stringify(preload, null, 4)}</code>
				</pre> */}
				<header>
					<h1>svideo</h1>
					<input
						onChange={this.handleSearchTermChange}
						value={this.state.searchTerm}
						type="text"
						placeholder="Search"
					/>
				</header>
				<div>
					{preload.shows
						.filter(
							show =>
								`${show.title} ${show.description}`
									.toUpperCase()
									.indexOf(this.state.searchTerm.toUpperCase()) >= 0
						)
						.map(show => <ShowCard key={show.imdbID} {...show} />)}
				</div>
			</div>
		);
	}
}

// const Search = () => (
// 	<div className="search">
// 		{/* <pre>
// 			<code>{JSON.stringify(preload, null, 4)}</code>
// 		</pre> */}
// 		<header>
// 			<h1>Video Service</h1>
// 			<input type="text" placeholder="Search" />
// 		</header>
// 		<div>{preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}</div>
// 	</div>
// );

export default Search;