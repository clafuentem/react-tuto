import { Button, Typography } from '@mui/material';
import React from 'react';
import useStyles from './counter-styles';

const Counter = ({ value, onChangeValue }) => {
  const classes = useStyles();

  const onDecrementCount = () => {
    if (value > 1) {
      onChangeValue(value - 1);
    }
  };

  const onIncrementCount = () => {
    onChangeValue(value + 1);
  };

  return (
    <div className={classes.container}>
      <Button className={classes.button} onClick={onDecrementCount} disabled={value === 1}>
        -
      </Button>
      <Typography>{value}</Typography>
      <Button className={classes.button} onClick={onIncrementCount}>
        +
      </Button>
    </div>
  );
};

export default Counter;
