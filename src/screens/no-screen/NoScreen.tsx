import { Typography } from '@mui/material';
import React from 'react';
import useStyles from './no-screen-style';

const NoScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography align="center">La página solicitada no existe :(</Typography>
    </div>
  );
};

export default NoScreen;
