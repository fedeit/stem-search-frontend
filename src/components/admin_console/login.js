import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './bootstrap.min.css';

class LoginAdmin extends Component {
    render() {
        return  <div>
                    <Helmet>
                        <title>Login - Brand</title>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" />
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" />
                    </Helmet>

                    <body className="bg-gradient-primary">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-9 col-lg-12 col-xl-10">
                                    <div class="card shadow-lg o-hidden border-0 my-5">
                                        <div class="card-body p-0">
                                            <div class="row">
                                                <div class="col-lg-6 d-none d-lg-flex">
                                                    <img class="flex-grow-1 bg-login-image" src="assets/img/engineer.jpg" />
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="p-5">
                                                        <div class="text-center">
                                                            <h4 class="text-dark mb-4">Welcome Back!</h4>
                                                        </div>
                                                        <form class="user">
                                                            <div class="form-group"><input class="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" /></div>
                                                            <div class="form-group"><input class="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password" /></div>
                                                            <div class="form-group">
                                                                <div class="custom-control custom-checkbox small">
                                                                    <div class="form-check"><input class="form-check-input custom-control-input" type="checkbox" id="formCheck-1" /><label class="form-check-label custom-control-label" for="formCheck-1">Remember Me</label></div>
                                                                </div>
                                                            </div><button class="btn btn-primary btn-block text-white btn-user" type="submit">Login</button>
                                                            <hr />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
                        <script src="assets/js/script.min.js"></script>
                    </body>

                    </div>;
    }
}

export default LoginAdmin;
