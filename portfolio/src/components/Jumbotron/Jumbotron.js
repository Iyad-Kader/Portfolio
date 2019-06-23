import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import { width } from '@material-ui/system';

const images = [
  require('../../assets/profilePic.jpg')
];

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
    marginTop: '-1rem',
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
  image: {
    maxWidth: '100%',
    maxHeight: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
  }
};

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron style={styles.background}>
        <h2 className='display-3' align='left' style={styles.h1}>Hi, Im Iyad Kader - a full stack developer who like's to solve problem's.</h2>
        <h4 align='left' style={styles.h4}>(you can call me <strong>Eddie</strong>)</h4>

        {/* <img src={images[0]} style={styles.image} alt='' /> */}

        {/* <p align='center' className='lead' style={styles.font}>Entry level web developer with experience in development of full stack applications and dynamic web pages with 1 year of experience in React, JavaScript, JQuery, Node, Express, SQL, and No SQL. Certified from the University of California Division of continued education. Seeking to leverage my cogent, technical, and professional communicative skills to learn and grow in the new role as a web developer. </p> */}

        <p align='left' style={styles.font}>Take a look at my project's</p>
        {/* <Link to='project'>
          <p align='center' className='lead'>
            <Button style={styles.font} color='primary'>See project's</Button>
          </p>
        </Link> */}
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
