import React from 'react';
<<<<<<< HEAD
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: 5
  }
});

const TrelloCard = ({ text }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom>{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default TrelloCard;
=======
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='body2' component='p'>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}
>>>>>>> 19b59b528499fea27236fc666624eb08f5324695
