import React from 'react';
import { Typography, Button } from '@mui/material';

const ProductDetails = () => {
  const onClickBackButton = () => {
    history.back();
  };

  return (
    <div>
      <Typography>Soy la pestaña de detalles</Typography>
      <Button onClick={onClickBackButton}>Volver atrás</Button>
    </div>
  );
};

export default ProductDetails;
