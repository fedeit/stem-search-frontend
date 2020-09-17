import React, { Component } from 'react';
import SearchBar from './SearchBar';

var tableBlockStyle = {
    fontSize: '50px',
    color: 'rgb(255,255,255)',
    width: '25%'};

var widthMax = {
    width: '100%'
};

class MainSection extends Component {
	constructor(props) {
		super(props);
        let query = "";
        if (typeof props.query !== "undefined") {
            query = props.query;
        }
		this.state = {query: query, hideStats: props.hideStats}
	}

	render() {
		let hidden = {
			display: (this.state.hideStats == "true" ? 'none' : 'block')
		}
		return <header className="masthead text-center text-white">
                        <div className="masthead-content">
                            <div className="container">
                                <h1 className="masthead-heading mb-0">STEM Search</h1>
                                <h2 className="masthead-subheading mb-0">Find the best activity for you</h2>
                                <SearchBar query={this.state.query}/>
                                <a className="btn btn-primary btn-xl rounded-pill mt-5" role="button" href="./#who-we-are">Learn More</a>
                                <div className="table-responsive" style={{padding: '20px', width: '100%'}} >
                                    <table className="table" style={ hidden }>
                                        <thead className="text-lowercase" style={widthMax}>
                                            <tr>
                                                <th style={tableBlockStyle}>10.000+ activities</th>
                                                <th style={tableBlockStyle}>50+ countries</th>
                                                <th style={tableBlockStyle}>100+ analysts</th>
                                                <th style={tableBlockStyle}>100.000+ users</th>
                                            </tr>
                                        </thead>
                                        <tbody style={widthMax}></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="bg-circle-1 bg-circle"></div>
                        <div className="bg-circle-2 bg-circle"></div>
                        <div className="bg-circle-3 bg-circle"></div>
                        <div className="bg-circle-4 bg-circle"></div>
                    </header>;
	}
}

export default MainSection;