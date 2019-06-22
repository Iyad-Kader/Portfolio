import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  center: {
    textAlign: 'center'
  },
  font: {
    fontSize: '20px',
    outline: 'none',
    color: '#000000',
    padding: '1rem',
    marginRight: '10rem',
    marginLeft: '10rem'
  }
};


class Navigation extends Component {

  render() {
    return(
      <>
      <div>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button className='homeBtn' style={styles.font} color="inherit">About Me</Button>
          </Link>
          <Link to='project' style={{ textDecoration: 'none' }}>
            <Button className='projectsBtn' style={styles.font} color="inherit">Project's</Button>
          </Link>
          <Link to='contact' style={{ textDecoration: 'none' }}>
            <Button className='contactBtn' style={styles.font} color="inherit">Contact</Button>
          </Link>
      </div>

      
      </>
    );
  };
};

export default Navigation;