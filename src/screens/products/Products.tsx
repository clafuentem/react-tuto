import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('details');
  };

  return (
    <div>
      <Typography>Soy la página de productos</Typography>
      <Button onClick={onClickButton}>Ve a la página de detalles</Button>
    </div>
  );
};

export default Products;
