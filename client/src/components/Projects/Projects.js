import React, { Component } from 'react';
import VetCard from './components/VetCard';
import SneakCard from './components/SneakCard/SneakCard';
import AboutCard from './components/AboutCard/';
import InfoCard from './components/InfoCard';
import TechCard from './components/TechCard';
import { Jumbotron, Button } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import { Divider } from '@material-ui/core';



const images = [
  require('../../assets/profilePic.jpg')
];

class Projects extends Component {
  render() {
    return (
      <>
        <Jumbotron id='jumb' style={styles.background}>
          <img src={images[0]} alt='' style={styles.img} />
          <h2 className='display-3' align='left' style={styles.h1}><strong>Welcome, my name is Iyad Kader and I am a Full-Stack developer.</strong> </h2>
          <div>
            <SocialIcon id='logo' style={styles.icons} url='https://www.linkedin.com/in/iyad-eddie-kader' target='_blank' />
            <SocialIcon id='logo' style={styles.icons} url='https://github.com/Iyad-Kader' target='_blank' />
            <SocialIcon id='logo' style={styles.icons} url='https://www.dropbox.com/s/zczycuj9ajuqbxp/Iyad%20Kader%20Resume%20%281%29.pdf?dl=0' target='_blank' />
          </div>
        </Jumbotron>

        <div style={styles.aboutInfoCards}>
          <AboutCard />
          <InfoCard />
        </div>
        <div>
          <div>
            <h1 style={styles.projectHeader}>Technology</h1>
          </div>
          <TechCard/>
        </div>
        <div>
          <h1 style={styles.projectHeader} >Featured Project's</h1>
        </div>
        <div style={styles.layout}>
          <VetCard />
          <SneakCard />
        </div>
        <div>
          <h1 style={styles.projectHeader}>Contact Me</h1>
        </div>
      </>
    );
  }
}

const styles = {
  h1: {
    fontSize: '30px',
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    paddingTop: '3rem',
    display: 'flex',
    justifyContent: 'center',
    color: 'rgba(66, 6, 6, 0.781)'
  },
  h4: {
    fontSize: '30px',
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    display: 'flex',
    justifyContent: 'center',
    color: 'rgba(66, 6, 6, 0.781)'
  },
  font: {
    fontSize: '22px',
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    display: 'flex',
    justifyContent: 'center'
  },
  background: {
    backgroundColor: '#ffffff'
  },
  layout: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '30px',
    margin: '0, auto',
    backgroundColor: ''
  },
  img: {
    width: '300px',
    height: '400px',
    display: 'block',
    margin: 'auto',
    paddingTop: '',
    borderRadius: '50%',
    border: '2px solid rgba(66, 6, 6, 0.781)'
  },
  icons: {
    margin: '1rem',
    marginTop: '-0.3rem',
    marginBottom: '-2.5rem',
    position: 'relative'
  },
  aboutInfoCards: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '0, auto',
    padding: '30px'
  },
  projectHeader: {
    fontFamily: 'Open Sans',
    fontSize: '50px',
    fontWeight: 'bold',
    margin: 'auto',
    marginBottom: '1rem',
    color: '#ffffff',
    backgroundColor: 'rgba(66, 6, 6, 0.781)',
    padding: '1rem'
  }
};
export default Projects;
