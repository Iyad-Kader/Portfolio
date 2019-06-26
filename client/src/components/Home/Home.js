import React, { Component } from 'react';
// import PictureSlide from './components/Carousel'
// import Parallax from '../Parallax/Parallax';
import { Jumbotron, Button } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

const images = [
  require('../../assets/profilePic.jpg')
];

const styles = {
  h1: {
    fontFamily: 'Open Sans',
    fontSize: '35px',
    maxWidth: '50%',
    paddingLeft: '23rem',
    marginTop: '5rem',
    paddingBottom: '1rem'
  },
  h2Drive: {
    fontFamily: 'Open Sans',
    fontSize: '35px',
    maxWidth: '50%',
    paddingLeft: '23.5rem',
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  font: {
    fontSize: '25px',
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    maxWidth: '50%',
    paddingLeft: '5rem'
  },
  background: {
    backgroundColor: '#ffffff',
    paddingBottom: '10rem'
  },
  image: {
    maxWidth: '200px',
    maxHeight: '400px',
  },
  imageDiv: {
    position: 'relative',
    left: '67rem',
    top: '10rem'
  },
  logos: {
    position: 'relative',
    top: '15rem',
    right: '11rem',
    margin: '1rem'
  },
  divImg: {
    marginTop: '-25rem'
  }
};

class Home extends Component {
  render () {
    return (
      <div id='jumbotronHome'>
        <Jumbotron style={styles.background}>
          <div style={styles.imageDiv}id='profileImgLogo'>
          <img src={images[0]} alt='' style={styles.image}/>
            <SocialIcon style={styles.logos}url='https://www.linkedin.com/in/iyad-eddie-kader' target='_blank' />
            <SocialIcon style={styles.logos} url='https://github.com/Iyad-Kader' target='_blank'/>
          </div>
          <div style={styles.divImg}>
          <h1 id='h1' style={styles.h1}>Experience</h1>
          <p id='p' style={styles.font}>Web developer with experience in development of full stack applications with experience in <strong>HTML5, CSS3, React, Node, MySQL, and MongoDB.</strong> Certified from the University of California Division of Continued Education.</p>
          <h1 id='h1' style={styles.h2Drive}>About Me</h1>
          <p id='p' style={styles.font}>I am a full stack developer based in Irvine, California. I have always had a drive for software development since I was a kid and my cousin introduced me to computer's. I love to learn new thing's and solve difficult problem's. I am seeking to leverage my cogent, technical, and professional communicative skills to learn and grow in the new role as a web developer. </p>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Home
;
