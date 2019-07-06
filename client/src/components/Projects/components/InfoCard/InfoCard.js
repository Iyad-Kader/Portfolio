import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import SVGicon from '../../../SVGIcons';

const styles = {
  card: {
    maxWidth: 500,
    minWidth: 200,
    marginBottom: '2rem'
  },
  media: {
    height: 140,
  },
  color: {
    color: '#ffffff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(66, 6, 6, 0.781)',
    padding: '1rem'
  },
  text: {
    fontSize: '22px',
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    color: '#000000'
  },
  SVG: {
    display: 'inline-block',
    justifyContent: 'left',
    marginRight: '1rem'
  }
};

export default function MediaCard() {
  const classes = styles

  return (
    <Card style={classes.card}>
      <CardContent>
        <Typography style={classes.color} gutterBottom variant="h5" component="h2">
          Contact and Resume
          </Typography>
        <List>
          <Typography style={classes.text} variant="body" color="textSecondary" component="p">
            <strong>Email:</strong> <a href='mailto:eddie.kader%40gmail%2ecom?'>eddie.kader@gmail.com</a>
          </Typography>
        </List>
        <List>
          <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
            <strong>GitHub:</strong> <a href="https://github.com/Iyad-Kader" target='_blank'>https://github.com/Iyad-Kader</a>
          </Typography>
        </List>
        <List>
          <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/iyad-eddie-k-6a8048103" target='_blank'>https://www.linkedin.com/in/iyad-eddie-k-6a8048103</a>
          </Typography>
        </List>
        <List>
          <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
            <strong>Phone Number:</strong> (916)-804-7029
          </Typography>
        </List>
        <List>
          <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
              <strong>Resume:</strong> <a href="https://docs.google.com/document/d/1vVBewxFWere11gNkZvGo-mTLtCoTjHVsYZz1z-mooJE/edit?usp=sharing" target='_blank'>Iyad Kader Resume</a>
          </Typography>
        </List>
        <List>
          <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
            <strong>
              <h3>Or send a message below!</h3>
            </strong>
          </Typography>
        </List>
      </CardContent>
    </Card>
  );
}
