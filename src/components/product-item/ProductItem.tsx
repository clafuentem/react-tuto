import React from 'react';
import useStyles from './product-item-styles';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import Counter from '../counter/Counter';

const ProductItem = ({ product, onAddItemToCart }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onClickItem = () => {
    navigate('details', { state: product });
  };

  const onClickAddToCart = () => {
    onAddItemToCart(product);
  };

  return (
    <div className={classes.container}>
      <div onClick={onClickItem} className={classes.topContainer}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={product.image}></img>
        </div>

        <div className={classes.brandContainer}>
          <div className={classes.brandInnerContainer}>
            <Typography className={classes.brandText}>{product.brand}</Typography>
          </div>
        </div>
        <div className={classes.titleContainer}>
          <Typography align="center" className={classes.titleText}>
            {product.name}
          </Typography>
        </div>
      </div>
      <div>
        <Counter />
      </div>
      <div className={classes.actionContainer}>
        <Typography align="center" className={classes.priceText}>
          {`${product.unitPrice}€`}
        </Typography>
        <Button onClick={onClickAddToCart} variant="outlined">
          Añadir a la cesta
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
