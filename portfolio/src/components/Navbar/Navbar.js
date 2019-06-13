import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';


const styles = {
  size: {
    padding: '0.5rem'
  },
  font: {
    fontSize: '20px',
    outline: 'none',
    color: '#FFFFFF',
    padding: '1rem'
  },
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
  background: '#ffffff'
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar color="primary" style={styles.size} position="static">
        <Toolbar>
          <Typography variant="h4" color="inherit" className={classes.grow}>
            <div align="center">
              <Link to='/' style={{ textDecoration: 'none' }}>
                <Button style={styles.font} color="white">About</Button>
              </Link>
              <Link to='project' style={{ textDecoration: 'none' }}>
                <Button style={styles.font} color="white">Project's</Button>
              </Link>
              <Link to='contact' style={{ textDecoration: 'none' }}>
                <Button style={styles.font} color="white">Contact</Button>
              </Link>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
