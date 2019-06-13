import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';

const styles = {
  font: {
    fontSize: '20px'
  },
  background: {
    backgroundColor: '#ffffff'
  }
};

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron style={styles.background}>
        <h1 className="display-3" align='center'>Welcome, my name is Iyad Kader</h1>
        <p align='center' className="lead" style={styles.font}>Entry level web developer with experience in development of full stack applications and dynamic web pages with 1 year of experience in React, JavaScript, JQuery, Node, Express, SQL, and No SQL. Certified from the University of California Division of continued education. Seeking to leverage my cogent, technical, and professional communicative skills to learn and grow in the new role as a web developer. </p>
        <hr className="my-2" />
        <p align='center' style={styles.font}>Take a look at my project's</p>
        <Link to='project'>
          <p align='center' className="lead">
            <Button style={styles.font} color="primary">See project's</Button>
          </p>
        </Link>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;