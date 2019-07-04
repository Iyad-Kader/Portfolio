import React, { Component } from 'react';
// import PictureSlide from './components/Carousel'
// import Parallax from '../Parallax/Parallax';
import { Jumbotron, Button } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { typography } from '@material-ui/system';
import './style.css'

const images = [
  require('../../assets/profilePic.jpg')
];

const styles = {
  img: {
    width: '250px',
    float: 'right',
    marginRight: '2rem',
    marginBottom: '1rem'
  },
  icons: {
    float: 'right',
    position: 'relative',
    top: '32rem',
    left: '12em',
    padding: '1rem',
    margin: '0.5rem'
  },
  font: {
    fontSize: '25px',
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    marginLeft: '2rem',
    wordSpacing: '5px'
  },
  experienceH1: {
    marginTop: '6rem',
    padding: '1.5rem',
    textAlign: 'center'
  },
  aboutH1: {
    marginTop: '2rem',
    padding: '1.5rem',
    textAlign: 'center',
    position: 'relative',
    left: '-3.5rem'
  }
};

class Home extends Component {
  render() {
    return (
        <div>

          <Typography>
            <img src={images[0]} alt='' style={styles.img} />


            <div>
            <SocialIcon id='logo' style={styles.icons} url='https://www.linkedin.com/in/iyad-eddie-kader' target='_blank' />
              <SocialIcon id='logo' style={styles.icons} url='https://github.com/Iyad-Kader' target='_blank' />
            </div>
            <div style={styles.font}>
              <h1 style={styles.experienceH1} id='h1'>Experience</h1>
              <p id='p'>Web developer with experience in development of full stack applications with experience in <strong>HTML5, CSS3, JavaScript, React, Node, MySQL, and MongoDB.</strong> Certified from the University of California Division of Continued Education.</p>
              </div>
              <div style={styles.font}>
              <h1 style={styles.aboutH1} id='h1'>About Me</h1>
              <p id='p'>I am a full stack developer based in Irvine, California. I have always had a drive for software development since I was a kid and my cousin introduced me to computer's. I love to learn new thing's and solve difficult problem's. I am seeking to leverage my cogent, technical, and professional communicative skills to learn and grow in the new role as a web developer. </p>
            
            </div>
          </Typography>
        </div>



    );
  }
}

export default Home
  ;
