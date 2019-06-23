import React from 'react';
// import PictureSlide from './components/Carousel'
// import Parallax from '../Parallax/Parallax';
import { Jumbotron, Button } from 'reactstrap';

const images = [
  require('../../assets/profilePic.jpg')
];

const styles = {
  h1: {
    fontFamily: 'Open Sans',
    fontSize: '25px',
    position: 'relative',
    bottom: '21rem',
    maxWidth: '50%',
    paddingLeft: '20rem'
  },
  font: {
    fontSize: '20px',
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    position: 'relative',
    bottom: '22rem',
    maxWidth: '50%',
    paddingLeft: '5rem'
  },
  background: {
    backgroundColor: '#ffffff'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '400px',
    marginLeft: 'auto',
    // marginRight: 'auto',
    display: 'block',
    paddingRight: '15rem'
  }
};

function Home (props) {
  const { classes } = props;
  return (
    <div>
      <Jumbotron style={styles.background}>
        {/* <h2 className='display-3' align='left' style={styles.h1}>Hi, Im Iyad Kader - a full stack developer who like's to solve problem's.</h2>
        <h4 align='left' style={styles.h4}>(you can call me <strong>Eddie</strong>)</h4> */}

        <img src={images[0]} style={styles.image} alt='' />
        <h1 style={styles.h1}>Experience</h1>
        <p style={styles.font}>Web developer with experience in development of full stack applications with experience in <strong>HTML5, CSS3, React, JavaScript, Node, Express, MySQL, and MongoDB.</strong> Certified from the University of California Division of continued education. Seeking to leverage my cogent, technical, and professional communicative skills to learn and grow in the new role as a web developer. </p>

        {/* <p align='left' style={styles.font}>Take a look at my project's</p> */}
        {/* <Link to='project'>
      <p align='center' className='lead'>
        <Button style={styles.font} color='primary'>See project's</Button>
      </p>
    </Link> */}
      </Jumbotron>
    </div>
  );
}

export default Home
;
