import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import { getByKeywords, getByCategory } from '../api/axios_mongodb.js';
import MainSection from './MainSection';
import Helmet from 'react-helmet';

let stopwords = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']

function remove_stopwords(str) {
    let res = []
    let words = str.split(' ')
    for(let i=0;i<words.length;i++) {
       let word_clean = words[i].split(".").join("")
       if(!stopwords.includes(word_clean)) {
           res.push(word_clean)
       }
    }
    return(res.join(' '))
}  

class Search extends Component {
	constructor(props) {
		super(props);
		var parsed = queryString.parse(this.props.location.search);
		if (typeof parsed.query !== 'undefined') {
			var result = getByKeywords(remove_stopwords(parsed.query));
			result.then(this.updateResults.bind(this))
		} else if (typeof parsed.category !== "undefined") {
			var result = getByCategory(parsed.category);
			result.then(this.updateResults.bind(this));
			parsed.query = parsed.category;
		}
		this.state = {query: parsed.query};
	}

	updateResults(response) {
		this.setState({results: response.data});
	}

	componentDidMount() {
		this.scrollToResults();
	}

	scrollToResults() {
	    this.el.scrollIntoView({ behavior: 'smooth' });
	}

	render() {
		const items = [];
		if (this.state.results != null) {
			if (this.state.results.data.length == 0) {
				items.push(<div class="col-sm-6 col-md-4 item"><h3>No results for your search parameters, try something different!</h3></div>);
			}
			for (let i = 0; i < this.state.results.data.length; i++) {
				let data = this.state.results.data[i];
				data.category = data.category.charAt(0).toUpperCase() + data.category.slice(1);
				items.push(<div class="col-sm-6 col-md-4 item">
					        	<a href="#">
					        		<img class="img-fluid" src={data.imgLink} />
					        	</a>
					            <h3 className="name" style={{margin: '20px 0px 0px'}, {fontSize: '23px'}}> {data.title} </h3>
					            <h6 className="name" style={{margin: '0px'}, {fontSize: '15px'}}>{data.location} - {data.organization} - {data.category}</h6>
					            <p className="description">{data.shortdescription}</p>
					            <Link className="action" to={{pathname: "/opportunity", search: "?id=" + data.id}}><i class="fa fa-arrow-circle-right"></i></Link>
					    	</div>);
			}
		}
		return <div>
					<Helmet>
						<title>STEM Search - {this.state.query}</title>
					</Helmet>
                    <MainSection hideStats="true" query={this.state.query} />
				    <div class="article-list">
				        <div class="container">
				            <div class="intro">
				                <h2 class="text-center">Your results</h2>
				                <p class="text-center">Here&#39;s some activities and opportunities you could be interested in! Discover more using the filter section on the right.</p>
				            </div>
				            <div ref={el => { this.el = el; }} class="row articles">
				            	{items}
						    </div>
					    </div>
				    </div>
				    <Newsletter />
			    </div>
	}
}

export default Search;