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
    MaxWidth: 500
  },
  media: {
    height: 140,
  },
  text: {
    fontSize: '22px',
    fontFamily: 'Open Sans',
    fontWeight: 'normal',
    color: 'rgba(66, 6, 6, 0.781)'
  }
};

export default function MediaCard() {
  const classes = styles

  return (
    <Card style={classes.card}>
      <CardContent>
        <List>
          <Typography style={classes.text} variant="body" color="textSecondary" component="p">
            <strong>HTML5</strong>
          </Typography>
        </List>
        <List>
          <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
            <strong>CSS3</strong>
          </Typography>
        </List>
        <List>
          <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
            <strong>JavaScript</strong>
          </Typography>
        </List>
        <List>
          <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
            <strong>React.js</strong>
          </Typography>
        </List>
        <List>
          <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
            <strong>Node.js</strong>
          </Typography>
        </List>
        <List>
          <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
            <strong>Express.js</strong>
          </Typography>
        </List>
        <List>
          <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
            <strong>MySQL</strong>
          </Typography>
        </List>
        <List>
          <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
            <strong>MongoDB</strong>
          </Typography>
        </List>
        <List>
          <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
            <h3><strong>Certified from the University of California Division of Continued Education.</strong></h3>
          </Typography>
        </List>
      </CardContent>
    </Card>
  );
}
