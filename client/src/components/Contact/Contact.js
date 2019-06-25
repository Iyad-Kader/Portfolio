import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';

const styles = {
  form: {
    width: '600px',
    padding: '2rem',
    top: '8rem',
    position: 'relative',
    textAlign: 'center',
    left: '30rem',
    transform: 'scale(1.1)',
    transformOrigin: '0 0'
  },
  input: {
    width: '300px',
    margin: 'auto',
    textAlign: 'center'
  },
  msgInput: {
    height: '100px'
  }
};

class Contact extends React.Component {
  constructor () {
    super();

    this.state = {
      name: '',
      email: '',
      message: '',
      buttonText: 'Submit'
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()

    this.setState({
      buttonText: 'Submitted'
    })
    const { name, email, message } = this.state

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })
  }
  

  render () {
    return (
      <Form onSubmit={this.handleSubmit} style={styles.form}>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input
            className='formInput'
            style={styles.input}
            type='text'
            name='name'
            placeholder='Please enter your name'
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='name'>Email</Label>
          <Input
            className='formInput'
            style={styles.input}
            type='email'
            name='email'
            placeholder='Please enter your email'
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='name'>Message</Label>
          <Input
            className='formInput'
            style={styles.msgInput}
            type='textarea'
            name='message'
            placeholder='Please enter your message'
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button>{this.state.buttonText}</Button>
      </Form>
    );
  }
}

export default Contact;
