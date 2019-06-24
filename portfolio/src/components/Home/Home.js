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
    fontSize: '25px',
    maxWidth: '50%',
    paddingLeft: '20rem',
    marginTop: '5rem'
  },
  h2Drive: {
    fontFamily: 'Open Sans',
    fontSize: '25px',
    maxWidth: '50%',
    paddingLeft: '20rem'
  },
  font: {
    fontSize: '20px',
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
    position: 'fixed',
    maxWidth: '200px',
    maxHeight: '400px',
    display: 'block',
    left: '55rem',
    top: '5rem'
  },
  logo: {
    position: 'fixed',
    display: 'block',
    left: '59.6rem',
    top: '32rem'
  }
};

class Home extends Component {
  render () {
    return (
      <>
        <Jumbotron style={styles.background}>
          <img src={images[0]} style={styles.image} alt='' />
          <div style={styles.logo}>
            <SocialIcon url='https://www.linkedin.com/in/iyad-eddie-kader' target='_blank' />
          </div>
          <h1 style={styles.h1}>Experience</h1>
          <p style={styles.font}>Web developer with experience in development of full stack applications with experience in <strong>HTML5, CSS3, React, Node, MySQL, and MongoDB.</strong> Certified from the University of California Division of Continued Education.</p>
          <h1 style={styles.h2Drive}>My drive</h1>
          <p style={styles.font}>Since I was a kid I always loved learning new things. From football to dirt bikes, to cars and fishing just to name a few. I had many great teacher's. Thankfully over the year's I was able to do the same to those around me. Whether it would be teaching them , empathizing, with them, or just help solve their problems. There was always a joy in it! In turn I learned much from those very people. One of them being my cousin who introduced me to software. He showed me a website he had built that was helping hundreds of people all over the world. I was already intrigued from the beginning, but to see the benefit it was providing people and the community it formed, I was game. So I took the keyboard and started my journey to take my problem solving skills worldwide. Now I am seeking to leverage my cogent, technical, and professional communicative skills to learn and grow in the new role as a web developer.</p>
        </Jumbotron>
      </>
    );
  }
}

export default Home
;
