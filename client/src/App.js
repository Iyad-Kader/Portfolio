import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.main = React.createRef();
  }
  renderMain() {
    return (
      <div>
        <Projects />
        <Contact />
      </div>
    );
  }
  handleScroll = e => {
    e.preventDefault();
    const main = this.main.current;
    window.scrollTo({
      top: main.offsetTop,
      left: 0,
      behavior: "instant"
    });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div>
              
                
              
            </div>
            <Switch>
              <Route exact path='/' component={() => this.renderMain()} />
              <Route path='/about' onClick={this.handleScroll} />
              <Route path='/contact' component={Contact} />
            </Switch>
            </div>
        </Router>
      </div>
        );
      }
    }
    
    
    
    
    
    
    
// class App extends Component {
//   render () {
//     return (
//       <div>

//         <Router>

//           <Navbar />
//           <Route exact path='/' component={Projects} />
//           <Route path='/about' component={Home} />
//           <Route path='/contact' component={Contact} />
//         </Router>

//       </div>
//     );
//   }
// }

// export default App;
