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
import './styles.css'

const styles = {
  card: {
    maxWidth: 750,
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
    fontSize: '25px',
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
        <Typography style={classes.color}gutterBottom variant="h5" component="h2">
            About Me
          </Typography>
          <List>
        <Typography style={classes.text} variant="body" color="textSecondary" component="p">
        <SVGicon style={styles.SVG}name={'me'} width={30}/>
            I am a full stack developer seeking ful time oppurtunity in California.
          </Typography>
        </List>
        <List>
          <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
         <SVGicon style={styles.SVG} name={'code'} width={30} />
            As a developer I love to build wed apps, solve difficult problems,and learn new concepts. 
          </Typography>
        </List>
        <List>
        <Typography style={classes.text} variant="body2" color="textSecondary" component="p">
            <SVGicon style={styles.SVG} name={'hobby'} width={30} />
            When I am not coding I like to work out, hang out with my family and friends, and read books on various subjects (i.e. religion, business, etc.) 
          </Typography>
        </List>
        <List>
          <Typography style={classes.text}variant="body2" color="textSecondary" component="p">
            <SVGicon style={styles.SVG} name={'heart'} width={30} />
            Deep down I am someone who likes to take on difficult tasks even if it takes much time to figure out, improve myself physcially and mentally, and learn something new everyday.
          </Typography>
        </List>
        </CardContent>
    </Card>
  );
}
