import React, { Component } from 'react';
import { subscribeNewsletter } from '../api/axios_newsletter.js';


class Newsletter extends Component {
	subscribe() {
		if (this.validateEmail(this.state.email)) {
			let res = subscribeNewsletter(this.state.email);
			res.then(function (response) {
				console.log(response);
        	})
		}
	}

	validateEmail(email) {
	    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}

	updateEmail(event) {
		this.setState({email: event.target.value});
	}

	render() {
		return <div className="newsletter-subscribe">
				    <div className="container">
				        <div className="intro">
				            <h1 className="text-center">Subscribe for our Newsletter</h1>
				            <p className="text-center">If you subscribe to our newsletter we will send you some of the top opportunities in the STEM fields for people between 12 and 22.</p>
				        </div>
				        <form className="form-inline">
				            <div className="form-group"><input onChange={this.updateEmail.bind(this)} className="form-control" type="email" name="email" placeholder="Your Email" /></div>
				            <div className="form-group"><button onClick={this.subscribe.bind(this)} className="btn btn-info" style={{backgroundColor: 'rgb(241,166,78)'}}>Subscribe </button></div>
				        </form>
				    </div>
				</div>;
	}
}

export default Newsletter;