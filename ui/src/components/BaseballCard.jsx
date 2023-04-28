import React, { Component, useState, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import UpArrow from "@material-ui/icons/ArrowUpward"
import DownArrow from "@material-ui/icons/ArrowDownward"
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import { images } from '../images';

const useStyles = makeStyles((theme) => {
  return {
    baseballCard: {
      fontWeight: 'bold',
      position: 'relative',
      margin: theme.spacing(2),
    },
    media: {
      height: 0,
      paddingTop: '100%',
    },
    cardWrapper: {},
    cardText: {},
  };
});

const BaseballCard = ({ playerName, handleClick }) => {
  const classes = useStyles();
  const CardContainer = handleClick ? CardActionArea : Fragment;
  const containerProps = handleClick
    ? {
        onClick: () => handleClick(playerName),
      }
    : {};
  const [active, setActive] = useState(false);
  const upVote = () => {
    setActive(!active);
  };
  const [active2, setActive2] = useState(false);
  const downVote = () => {
    setActive2(!active2);
  };
  const [postContent, setPostContent] = useState("")

  const submitComment = (event) => {
    setPostContent(event.target.value)
  };


  return (
    <Card className={classes.baseballCard}>
      <IconButton 
        onClick={upVote}
        style={{ color: active ? "green": "gray"}}
      >
              <UpArrow />
      </IconButton>
      <CardContainer {...containerProps}>
        <CardMedia
          className={classes.media}
          image={images[playerName]}
          title={playerName}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.cardText}
          >
            
            {playerName}

          </Typography>
        </CardContent>
      </CardContainer>
      <IconButton
      onClick={downVote}
      style={{ color: active2 ? "red": "gray"}}
      >
              <DownArrow />
      </IconButton>
      <FormControl className={classes.item} fullWidth>
        <TextField
          label="Comment"
          type="text"
          onChange={submitComment}
          value={postContent}
          variant="outlined"
        />
        <Button onClick={() =>
          setPostContent("")} variant="contained">
            Submit
        </Button>
      </FormControl>
    </Card>
  );
};

export default BaseballCard;