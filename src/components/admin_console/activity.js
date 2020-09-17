import React, { Component } from 'react';
import './bootstrap.min.css';
import { Helmet } from 'react-helmet';
import {getById} from '../../api/axios_mongodb';
import queryString from 'query-string';

class Activity extends Component {
	constructor(props) {
		super(props);
		var parsed = queryString.parse(this.props.location.search);
		this.state = {id: parsed.id, isNew: parsed.new};
		if (parsed.new){
			this.state.actionPath = "https://stem-search-server.herokuapp.com/query/newActivity";
		} else {
			this.state.actionPath = "https://stem-search-server.herokuapp.com/query/activity";
		}
	}

	componentDidMount() {
		this.generateAgeRange();
		if (!this.state.isNew) {
			getById(this.state.id).then(this.updateFields.bind(this));
		}
	}

	updateFields(response) {
		this.setState(response.data.data);
	}

	generateAgeRange() {
		let list = [];
		for (var i = 12; i <= 24; i++) {
		    list.push(<option value={i}>{i} yo</option>);
		}
		this.setState({ageRange: list});
	}

	render() {
		let username = 'Federico';
		return <>
				<Helmet>
				    <title>Profile - Brand</title>
				    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" />
				    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" />
				</Helmet>
				    <div id="wrapper">
				        <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-danger p-0">
				            <div className="container-fluid d-flex flex-column p-0">
				                <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
				                    <div className="sidebar-brand-text mx-3"><span>Stem search</span></div>
				                </a>
				                <hr className="sidebar-divider my-0" />
				                <ul className="nav navbar-nav text-light" id="accordionSidebar">
				                    <li className="nav-item" role="presentation"><a className="nav-link" href="list"><i className="fas fa-table"></i><span>Opportunities</span></a></li>
				                    <li className="nav-item" role="presentation"></li>
				                </ul>
				                <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
				            </div>
				        </nav>
				        <div className="d-flex flex-column" id="content-wrapper">
				            <div id="content">
				                <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
				                    <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
				                        <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
				                            <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
				                                <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
				                            </div>
				                        </form>
				                        <ul className="nav navbar-nav flex-nowrap ml-auto">
				                            <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><i className="fas fa-search"></i></a>
				                                <div className="dropdown-menu dropdown-menu-right p-3 animated--grow-in" role="menu" aria-labelledby="searchDropdown">
				                                    <form className="form-inline mr-auto navbar-search w-100">
				                                        <div className="input-group">
				                                        <input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
				                                            <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
				                                        </div>
				                                    </form>
				                                </div>
				                            </li>
				                            <div className="d-none d-sm-block topbar-divider"></div>
				                            <li className="nav-item dropdown no-arrow" role="presentation">
				                                <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#"><span className="d-none d-lg-inline mr-2 text-gray-600 small">{username}</span><img className="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg" /></a>
				                                    <div
				                                        className="dropdown-menu shadow dropdown-menu-right animated--grow-in" role="menu"><a className="dropdown-item" role="presentation" href="#"><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</a><a className="dropdown-item" role="presentation" href="#"><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</a>
				                                        <a
				                                            className="dropdown-item" role="presentation" href="#"><i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity log</a>
				                                            <div className="dropdown-divider"></div><a className="dropdown-item" role="presentation" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a></div>
				                    </div>
				                    </li>
				                    </ul>
				            </div>
				            </nav>
				            <div className="container-fluid">
				            	<form method="POST" action={this.state.actionPath}>
				            		<input name="_id" hidden value={this.state.id}/>
					                <h3 className="text-dark mb-4">Activity</h3>
					                <div className="row mb-3">
					                    <div className="col-lg-4">
					                        <div className="card mb-3">
					                            <div className="card-body text-center shadow"><img className="mb-3 mt-4" src="assets/img/oxford.jpg" width="100%" />
					                                <div className="mb-3">
					                                	<button className="btn btn-primary btn-sm" type="button">Change Photo</button>
														<input className="form-control" type="text" placeholder="www.something.com/img.jpg" name="imgLink" value={this.state.imgLink} />
					                                </div>
					                            </div>
					                        </div>
					                        <div className="card shadow mb-4">
					                            <div className="card-header py-3">
					                                <h6 className="text-primary font-weight-bold m-0">Publication Info</h6>
					                            </div>
					                            <div className="card-body">
					                                <h4 className="small font-weight-bold">Status</h4>
					                                <select style={{width: '100%'}}>
						                                <optgroup label="Post status">
							                                <option value="1">Published</option>
							                                <option value="0">Unpublished</option>
							                                <option value="3">Draft</option>
						                                </optgroup>
					                                </select>
					                                </div>
					                        </div>
					                    </div>
					                    <div className="col-lg-8">
					                        <div className="row">
					                            <div className="col">
					                                <div className="card shadow mb-3">
					                                    <div className="card-header py-3">
					                                        <p className="text-primary m-0 font-weight-bold">General</p>
					                                    </div>
					                                    <div className="card-body">
				                                            <div className="form-row">
				                                                <div className="col">
				                                                    <div className="form-group"><label htmlFor="title"><strong>Activity Title</strong></label><input className="form-control" type="text" placeholder="Robotics Summer Camp" name="title" value={this.state.title} /></div>
				                                                </div>
				                                                <div className="col">
				                                                    <div className="form-group"><label htmlFor="organization"><strong>Organization</strong></label><input className="form-control" type="text" placeholder="Oxford Royal Academy" name="organization" value={this.state.organization} /></div>
				                                                </div>
				                                            </div>
				                                            <div className="form-row">
				                                                <div className="col">
				                                                    <div className="form-group"><label htmlFor="location"><strong>Location</strong></label><input className="form-control" type="text" placeholder="Oxford, UK" name="location" value={this.state.location} /></div>
				                                                </div>
				                                                <div className="col">
				                                                    <div className="form-group"><label htmlFor="category"><strong>Category</strong></label>
					                                                    <select className="form-control" name="category">
					                                                    	<optgroup label="Category">
					                                                    		<option value="technology" >Technology</option>
						                                                    	<option value="engineering">Engineering</option>
				                                                    		</optgroup>
			                                                    		</select>
		                                                    		</div>
				                                                </div>
				                                            </div>
				                                            <div className="form-row">
				                                                <div className="col">
				                                                    <div className="form-group"><label htmlFor="endyear"><strong>End Year</strong></label><input className="form-control" type="text" placeholder="Summer 2021" name="endyear" value={this.state.endyear} /></div>
				                                                </div>
				                                                <div className="col">
				                                                    <div className="form-group"><label htmlFor="deadline"><strong>Deadline</strong></label><input className="form-control" type="date" value={this.state.deadline} name="deadline" /></div>
				                                                </div>
				                                            </div>
				                                            <div className="form-row">
				                                                <div className="col">
				                                                    <div className="form-group"><label htmlFor="link"><strong>Link</strong></label><input className="form-control" type="text" placeholder="www.google.com" name="link" value={this.state.link} /></div>
				                                                </div>
				                                                <div className="col">
				                                                    <div className="form-group"><label htmlFor="minage"><strong>Age Lowerbound</strong></label>
				                                                    <select className="form-control" name="fromAge">
				                                                    	<optgroup label="From Age">
				                                                    		{this.state.ageRange}
				                                                    	</optgroup>
			                                                    	</select></div>
				                                                </div>
				                                                <div className="col">
				                                                    <div className="form-group"><label htmlFor="maxage"><strong>Age Upperbound</strong></label>
				                                                    <select className="form-control" name="toAge">
				                                                    	<optgroup label="To Age">
				                                                    		{this.state.ageRange}
			                                                    		</optgroup>
		                                                    		</select>
	                                                    		</div>
				                                                </div>
				                                            </div>
					                                    </div>
					                                </div>
					                                <div className="card shadow">
					                                    <div className="card-header py-3">
					                                        <p className="text-primary m-0 font-weight-bold">Description</p>
					                                    </div>
					                                    <div className="card-body">
				                                            <div className="form-group"><label htmlFor="shortdescription"><strong>Short Description</strong></label><textarea name="shortdescription" className="form-control" required="" maxLength="150" value={this.state.shortdescription} />
				                                                <p>Up to 150 words</p>
				                                            </div>
				                                            <div className="form-group"><label htmlFor="fulldescription"><strong>Full Description</strong></label><textarea name="fulldescription" className="form-control" required="" maxLength="500" value={this.state.fulldescription} />
				                                                <p>Up to 500 words</p>
				                                            </div>
				                                            <div className="form-group"><label htmlFor="orgdescription"><strong>Organization Description</strong></label><textarea name="orgdescription" className="form-control" required="" maxLength="250" value={this.state.orgdescription} />
				                                                <p>Up to 250 words</p>
				                                            </div>
				                                            <div className="form-group"><button className="btn btn-primary btn-sm" type="submit">Save</button></div>
					                                    </div>
					                                </div>
					                            </div>
					                        </div>
					                    </div>
					                </div>
				                </form>
				            </div>
				        </div>
				        <footer className="bg-white sticky-footer">
				            <div className="container my-auto">
				                <div className="text-center my-auto copyright"><span>Copyright © STEM Search 2020</span></div>
				            </div>
				        </footer>
				    </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a></div>
				    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
				    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
				    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
				    <script src="assets/js/script.min.js"></script>
				</>;

	}
}

export default Activity;