import React, { Component } from 'react';
import MainSection from './MainSection';
import Newsletter from './Newsletter';
import Helmet from 'react-helmet';
import {Link} from 'react-router-dom';
let categoriesTypes = ['medicine', 'technology', 'biochemistry', 'chemistry', 'stem', 'computer science', 'mathematics']

class Categories extends Component {

	render() {
		var list = []
		for (var i = categoriesTypes.length - 1; i >= 0; i--) {
			let name = categoriesTypes[i].charAt(0).toUpperCase() + categoriesTypes[i].slice(1);
			list.push(<div><Link to={'/search?category=' + categoriesTypes[i]} >{name}</Link><br/></div>);
		}
		return <div>
					<Helmet>
						<title>STEM Search - Categories</title>
					</Helmet>
                    <MainSection hideStats="true" />
				    <div class="article-list">
				        <div class="container">
				            <div class="intro">
				                <h2 class="text-center">Your results</h2>
				                {list}
				            </div>
					    </div>
				    </div>
				    <Newsletter />
			    </div>;
	}
}

export default Categories;