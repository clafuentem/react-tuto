import React, { useState, useEffect } from 'react';
import { Typography, LinearProgress, Button } from '@mui/material';
import useStyles from './products-styles';
import ProductsService from '../../services/ProductsService';
import ProductItem from '../../components/product-item/ProductItem';
import { useNavigate } from 'react-router';

const Products = ({ onAddItemToCart }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const classes = useStyles();

  const onClickMyCart = () => {
    navigate('/cart');
  };

  useEffect(() => {
    const getAsyncProducts = async () => {
      const result = await ProductsService.getProducts();
      setProducts(result.data);
    };

    getAsyncProducts();
  }, []);

  if (products.length === 0) {
    return (
      <div className={classes.loaderContainer}>
        <LinearProgress className={classes.loader} />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Typography variant="h2">Página de productos</Typography>
      </div>
      <Button onClick={onClickMyCart} variant="contained" className={classes.cartButton}>
        Mi carrito
      </Button>

      <div className={classes.productsContainer}>
        {products.map((item: any) => {
          return <ProductItem product={item} onAddItemToCart={onAddItemToCart} isItemAddedToCart={false} />;
        })}
      </div>
    </div>
  );
};

export default Products;
