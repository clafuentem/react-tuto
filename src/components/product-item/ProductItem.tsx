import React, { useState } from 'react';
import useStyles from './product-item-styles';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import Counter from '../counter/Counter';

const ProductItem = ({ product, onAddItemToCart, isItemAddedToCart, onRemoveItemFromCart }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [numItems, setNumItems] = useState(1);

  const onClickItem = () => {
    navigate('details', { state: product });
  };

  const onClickAddToCart = () => {
    onAddItemToCart(product, numItems);
  };

  const onClickRemoveItem = () => {
    onRemoveItemFromCart(product);
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
      <div className={classes.itemsContainer}>
        {isItemAddedToCart ? (
          <Typography className={classes.itemsAddedText}>{`${product.units} item${
            product.units > 1 ? 's' : ''
          } en el carrito`}</Typography>
        ) : (
          <Counter value={numItems} onChangeValue={setNumItems} />
        )}
      </div>
      <div className={classes.actionContainer}>
        <Typography align="center" className={classes.priceText}>
          {`${product.unitPrice}€`}
        </Typography>
        {isItemAddedToCart ? (
          <Button onClick={onClickRemoveItem} color="error" variant="contained">
            Eliminar de la cesta
          </Button>
        ) : (
          <Button onClick={onClickAddToCart} variant="outlined">
            Añadir a la cesta
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
