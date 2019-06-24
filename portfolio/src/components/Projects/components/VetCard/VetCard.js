import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  click: {
    pointerEvents: 'none'
  }
};

function VetCard (props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          style={styles.click}
          className={classes.media}
          image={require('./VetCardPic.png')}
        />
        <CardContent style={styles.click}>
          <Typography gutterBottom variant='h5' component='h2'>
            SORIN Vet Clinic
          </Typography>
          <Typography component='p' style={styles.click}>
            SORIN is used for Veterinary clinics to set appointments, gain information on patient's and doctor's, and to calculate dosage of medicine needed for cat's and dog's based off weight and species. View the deployed version and login with username: <strong>admin</strong>; password: <strong>admin</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          <a href='https://github.com/Iyad-Kader/VetClicnic' target='_blank'>View Github</a>
        </Button>
        <Button size='small' color='primary'>
          <a href='https://young-taiga-86041.herokuapp.com/' target='_blank'>View Deployed</a>
        </Button>
      </CardActions>
    </Card>
  );
}

VetCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VetCard);
