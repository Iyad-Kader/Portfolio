import React, { Component } from 'react';
import VetCard from './components/VetCard';
import SneakCard from './components/SneakCard/SneakCard';
import { Jumbotron, Button } from 'reactstrap';

const styles = {
  h1: {
    marginLeft: '5rem',
    fontSize: '20px',
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    paddingTop: '5rem'
  },
  h4: {
    fontSize: '15px',
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    marginTop: '-0.5rem',
    marginLeft: '6rem'
  },
  font: {
    fontSize: '17px',
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    marginLeft: '7rem',
    paddingTop: '2rem',
    paddingBottom: '2rem'
  },
  background: {
    backgroundColor: '#ffffff'
  },
  layout: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '30px',
    margin: '0, auto',
    backgroundColor: 'rgba(66, 6, 6, 0.781)'
  }
};

class Projects extends Component {
  render () {
    return (
      <>
        <Jumbotron style={styles.background}>
          <h2 className='display-3' align='left' style={styles.h1}>Hi, Im Iyad Kader - a full stack developer who like's to solve problem's.</h2>
          <h4 align='left' style={styles.h4}>(you can call me <strong>Eddie</strong>)</h4>
          <p align='left' style={styles.font}>Take a look at my project's</p>
        </Jumbotron>
        <div style={styles.layout}>
          <VetCard />
          <SneakCard />
        </div>

      </>
    );
  }
}

export default Projects;
