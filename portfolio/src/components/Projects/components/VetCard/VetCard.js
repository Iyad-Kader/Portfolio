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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function VetCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('./VetCardPic.png')}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            SORIN Vet Clinic
          </Typography>
          <Typography component="p">
            SORIN is used for Veterinary clinics to set appointments, gain information on patients and docotrs, and to calculate dosage of medicine needed for cats and dogs based off weight and species.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://github.com/Iyad-Kader/VetClicnic" target="_blank">View project on Github</a>
        </Button>
      </CardActions>
    </Card>
  );
}

VetCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VetCard);
