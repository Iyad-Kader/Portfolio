import React from 'react';
// import PictureSlide from './components/Carousel'
// import Parallax from '../Parallax/Parallax';
import Jumbo from '../Jumbotron/Jumbotron';
import Contact from '../Contact/Contact'
const styles = {
  font: {
    fontSize: '40px'
  }
};

function Home(props) {
  const { classes } = props;
  return (
    <>
      <Jumbo />
    </>
  );
};

export default Home