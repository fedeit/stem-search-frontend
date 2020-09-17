import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		let query = "";
		if (typeof props.query !== "undefined") {
			query = props.query;
		}
		this.state = {query: query, queryLink: {pathname: "/search", search: "?query="}};
	}

	searchInputChanged(event) {
		this.setState({
			query: event.target.value,
			queryLink: {
				pathname: "/search",
				search: "?query=" + event.target.value
			}
		});
	}

	render() {
		return <nav className="navbar navbar-light navbar-expand navigation-clean-search">
				    <div className="container"><button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggler"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
				        <div className="collapse navbar-collapse" id="navcol-1">
				            <ul className="nav navbar-nav"></ul>
				            <form className="form-inline mr-auto" style={{width: '100%'}} action="search">
				                <div className="form-group" style={{width: '100%'}}>
					                <label htmlFor="search-field">
					                	<i className="fa fa-search"></i>
					                </label>
					                <input 	onChange={this.searchInputChanged.bind(this)}
					                		name="query"
				                			className="form-control search-field"
				                			id="search-field" style={{width: '90%'}}
				                			placeholder="biochemistry summer camp in oxford..."
				                			value={this.state.query} />
				                </div>
				            </form>
				            <Link className="btn btn-light action-button" role="button" to={this.state.queryLink}>Search</Link></div>
				    </div>
				</nav>;
	}
}

export default SearchBar;