import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

// Import components
import Home from './components/Home';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Categories from './components/Categories';
import LoginAdmin from './components/admin_console/login';
import OpportunitiesList from './components/admin_console/opportunities';
import Activity from './components/admin_console/activity';

function App() {
  return (
          <Router>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/categories' component={Categories} />
              <Route path='/search' component={Search} />
              <Route path='/admin/login' component={LoginAdmin} />
              <Route path='/admin/list' component={OpportunitiesList} />
              <Route path='/admin/detail' component={Activity} />
            </Switch>
            <Footer />
          </Router>
  );
}

export default App;
