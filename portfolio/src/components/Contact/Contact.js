import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import axios from 'axios';

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
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: '10rem',
    textAlign: 'center',
    maxWidth: '15rem',
    margin: 'auto',
    padding: '1rem'
  },
  btn: {
    margin: 'auto',
    display: 'flex',
    position: 'relative',
    top: '10rem'

  }
};

class Contact extends React.Component {
  // resetForm = () => {
  //   document.getElementById('contact-form').reset();
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const name = document.getElementById('name').value;
  //   const email = document.getElementById('email').value;
  //   const message = document.getElementById('message').value;
  //   axios({
  //     method: 'POST',
  //     url: 'http://localhost:3000/send',
  //     data: {
  //       name: name,
  //       email: email,
  //       messsage: message
  //     }
  //   }).then((response) => {
  //     if (response.data.msg === 'success') {
  //       alert('Message Sent.');
  //       this.resetForm();
  //     } else if (response.data.msg === 'fail') {
  //       alert('Message failed to send.');
  //     }
  //   });
  // }

  render () {
    return (
      <form id='contact-form' onSubmit={this.handleSubmit.bind(this)} method='POST'>
        <div style={styles.form}className='form-group'>
          <label for='name'>Name</label>
          <input type='text' className='form-control' id='name' />
        </div>
        <div style={styles.form}className='form-group'>
          <label for='exampleInputEmail1'>Email address</label>
          <input type='email' className='form-control' id='email' aria-describedby='emailHelp' />
        </div>
        <div style={styles.form}className='form-group'>
          <label for='message'>Message</label>
          <textarea className='form-control' rows='5' id='message' />
        </div>
        <button style={styles.btn}type='submit' className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}

export default Contact;
