import React, { Component } from 'react';
import VetCard from './components/VetCard';
import SneakCard from './components/SneakCard/SneakCard';
import Home from '../Home/Home';
import Jumbo from '../Jumbotron/Jumbotron';
const styles = {

  layout: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '30px',
    margin: '0, auto'
  }
};

class Projects extends Component {
  render () {
    return (
      <>
        <Jumbo />
        <div style={styles.layout}>
          <VetCard />
          <SneakCard />
        </div>

      </>
    );
  }
}

export default Projects;
