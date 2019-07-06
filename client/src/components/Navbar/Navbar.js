import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = {
  font: {
    fontSize: '15px',
    outline: 'none',
    color: '#8C001A',
    paddingTop: '1.5rem',
    marginLeft: '2rem',
    textDecoration: 'none',
    textAlign: 'right'
  },
  position: {
    backgroundColor: '#ffffff',
    width: '100%',
    top: '',
    paddingTop: ''
  },
  h1: {
    paddingTop: '1rem',
    fontSize: '25px',
    position: 'relative',
    left: '1rem',
    color: '#8C001A'
  }
};

class Navigation extends Component {
  render () {
    return (
      <div style={styles.position}>

     
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button className='projectsBtn' style={styles.font} color='inherit'>Portfolio</Button>
        </Link>
        <Link to='contact' style={{ textDecoration: 'none' }}>
          <Button className='contactBtn' style={styles.font} color='inherit'>Technology</Button>
        </Link>
        <Link to='contact' style={{ textDecoration: 'none' }}>
          <Button className='contactBtn' style={styles.font} color='inherit'>Contact</Button>
        </Link>
        <Link to='contact' style={{ textDecoration: 'none' }}>
          <Button className='contactBtn' style={styles.font} color='inherit'>Resume</Button>
        </Link>
      </div>
    );
  }
}

export default Navigation;
