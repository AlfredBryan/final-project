import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Accomodation from './components/Accomodation/Accomodation';
import Blog from './components/Blog/Blog';
import Elemests from './components/Elemests/Elemests';
import Contact from './components/Contact/Contact';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/accomodation" component={Accomodation} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/blog" component={Blog} />
        <Route path="/elemests" component={Elemests} />
        <Route path="/contact" component={Contact} />
        </div>
        </Router>
    );
  }
}

export default App;
