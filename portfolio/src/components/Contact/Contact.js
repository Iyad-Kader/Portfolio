import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const styles = {
  color: {
    backgroundColor: '#1D56DB'
  },
  size: {
    padding: '2rem'
  },
  font: {
    fontSize: '80px',
    marginTop: '1rem'
  }
};

export default class Contact extends React.Component {
  render () {
    return (
      <>

        <h2 align='center' styles={styles.font}>Find me on Linkedin below</h2>

        <div align='center'>
          <SocialIcon url='https://www.linkedin.com/in/iyad-eddie-k-6a8048103' target='_blank' />
        </div>

        <h2 align='center' >Or reach out to me through email

          <h5>><a href='#' id='emailTxt'onClick='return false;'>eddie.kader@gmail.com</a></h5>
        </h2>

      </>
    );
  }
}
