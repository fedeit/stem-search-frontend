import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var whiteText = {
    color: 'white'
}

class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom" style={{color: 'rgb(245,246,248)'}, {backgroundColor: 'rgb(218,221,225)'}}>
                    <div className="container"><a className="navbar-brand" href="/">STEM Search</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item" role="presentation"><Link style={whiteText} className="nav-link" to="categories">Categories</Link></li>
                                <li className="nav-item" role="presentation"><Link style={whiteText} className="nav-link" to="#">Sign Up</Link></li>
                                <li className="nav-item" role="presentation"><Link style={whiteText} className="nav-link" to="#">Log In</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>;
    }
}

export default Navbar;