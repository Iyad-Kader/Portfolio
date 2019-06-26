import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = {
  font: {
    fontSize: '15px',
    outline: 'none',
    color: '#8C001A',
    paddingTop: '1.5rem',
    marginLeft: '3rem',
    textDecoration: 'none'
  },
  position: {
    position: 'fixed',
    backgroundColor: '#ffffff',
    width: '100%',
    top: '-1rem',
    paddingTop: '1rem',
    padding: '1rem'
  }
};

class Navigation extends Component {
  render () {
    return (
      <div style={styles.position}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button className='projectsBtn' style={styles.font} color='inherit'>Work</Button>
        </Link>
        <Link to='/about' fontSize='4px' style={{ textDecoration: 'none' }}>
          <Button className='homeBtn' style={styles.font} color='inherit'>About Me</Button>
        </Link>
        <Link to='contact' style={{ textDecoration: 'none' }}>
          <Button className='contactBtn' style={styles.font} color='inherit'>Contact</Button>
        </Link>
      </div>
    );
  }
}

export default Navigation;
