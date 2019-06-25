import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  render () {
    return (
      <div>

        <Router>

          <Navbar />
          <Route exact path='/' component={Projects} />
          <Route path='/about' component={Home} />
          <Route path='/contact' component={Contact} />
        </Router>

      </div>
    );
  }
}

export default App;
