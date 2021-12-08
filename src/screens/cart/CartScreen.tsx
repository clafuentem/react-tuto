import { Typography } from '@mui/material';
import React from 'react';
import useStyles from './cart-screen-styles';
import ProductItem from '../../components/product-item/ProductItem';

const CartScreen = ({ cart, onRemoveItemFromCart }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography variant="h2">Mi Carrito</Typography>
      </div>

      <div className={classes.productsContainer}>
        {cart.map((item: any) => {
          return (
            <ProductItem
              product={item}
              onAddItemToCart={undefined}
              isItemAddedToCart={true}
              onRemoveItemFromCart={onRemoveItemFromCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartScreen;
