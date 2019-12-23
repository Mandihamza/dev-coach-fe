import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='/static/images/cards/contemplative-reptile.jpg'
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Lizard
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
          >
            Lizards are a widespread group of squamate reptiles, with
            over 6,000 species, ranging across all continents except
            Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

// <img
// src={
//   props.avatar_url
//     ? props.avatar_url
//     : 'https://clkde.tradedoubler.com/click?p=264311&a=3045532&g=24328740&epi=search_attention&url=https://stock.adobe.com/images/exclamation-point-of-attention-against-the-sky-triangular-sign-danger-warning/284208732?as_channel=affiliate&as_campaign=pexels&as_source=arvato'
// }
// alt='coach or student'
// />
// </Avatar>
// }
// action={
// <IconButton aria-label='settings'>
// <MoreVertIcon />
// </IconButton>
// }
// title={props.appointment_topic}
// subheader={props.appointment_date}
// />