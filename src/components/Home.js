import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import MainSection from './MainSection';

class Home extends Component {
    render() {
        return  <div className="App-Home">
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                    <title>Home - STEM Search</title>
                </Helmet>
                    <MainSection hideStats="false"/>
                    <section id="who-we-are">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="p-5">
                                        <img className="rounded-circle img-fluid" src="assets/img/01.jpg" alt="Description1" />
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <div className="p-5">
                                        <h2 className="display-4">For those about to rock...</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-1">
                                    <div className="p-5"><img className="rounded-circle img-fluid" src="assets/img/02.jpg" alt="Description1" /></div>
                                </div>
                                <div className="col-lg-6 order-lg-2">
                                    <div className="p-5">
                                        <h2 className="display-4">We salute you!</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                    <div className="p-5"><img className="rounded-circle img-fluid" src="assets/img/03.jpg" alt="Description1" /></div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <div className="p-5">
                                        <h2 className="display-4">Let there be rock!</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Newsletter />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
                </div>;
    }
}

export default Home;

