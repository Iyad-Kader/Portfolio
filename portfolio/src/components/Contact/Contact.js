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
    fontSize: '80px'
  }
};

const copyToClipboard = str => {
  const el = document.createElement('textarea');  // Create a <textarea> element
  el.value = document.getElementById('emailTxt');                                 // Set its value to the string that you want copied
  el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
  el.style.left = '-9999px';                      // Move outside the screen to make it invisible
  document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0        // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false;                                    // Mark as false to know no selection existed before
  el.select();                                    // Select the <textarea> content
  document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el);                  // Remove the <textarea> element
  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
    document.getSelection().addRange(selected);   // Restore the original selection
  }
};

export default class Contact extends React.Component {
  render() {
    return (
      <>
      <br/>
      <h2 align='center' styles={styles.font}>Find me on Linkedin below</h2>
      <br/>
      <div align='center'>
          <SocialIcon url="https://www.linkedin.com/in/iyad-eddie-k-6a8048103" target="_blank"/>
       </div>
       <br/>
      <h2 align='center' >Or reach out to me through email
              
      <h5><br/><a href="#" id="emailTxt"onClick="return false;">eddie.kader@gmail.com</a></h5>
      </h2>

    
      </>
  );
      };
  };
  