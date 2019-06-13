import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'reactstrap';
//components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';
import { grey } from '@material-ui/core/colors';
import color from '@material-ui/core/colors/brown';

class App extends Component {
  render() {
    return (
      <>
      <Router>
          <div>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/project' component={Projects} />
      <Route path='/contact' component={Contact} />
      </div>
      </Router>
      </>
    );
  }
}

export default App;
