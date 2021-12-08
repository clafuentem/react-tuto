import { ThemeProvider } from '@mui/system';
import './App.css';
import theme from '../theme';
import { Route, Routes } from 'react-router';
import NoScreen from '../screens/no-screen/NoScreen';
import Products from '../screens/products/Products';
import ProductDetails from '../screens/product-details/ProductDetail';
import { useState } from 'react';
import CartScreen from '../screens/cart/CartScreen';

const App = () => {
  const [cart, setCart] = useState<any>([]);

  const addItemToCart = (item, numItemsToAdd) => {
    const itemFoundInCart = cart.find((cartItem) => {
      return cartItem.name === item.name;
    });

    if (itemFoundInCart) {
      // El item ya está dentro del carrito. Filtramos nuestro carrito para que tenga todos los elementos menos el que hemos encontrado.
      const filteredCart = cart.filter((cartItem) => cartItem.name !== itemFoundInCart.name);

      setCart([...filteredCart, { ...item, units: itemFoundInCart.units + numItemsToAdd }]);
    } else {
      // El item aún no ha sido añadido, lo anadimos y ponemos su valor de units a `numItemsToAdd`
      setCart([...cart, { ...item, units: numItemsToAdd }]);
    }
  };

  console.log('my carrito', cart);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Products onAddItemToCart={addItemToCart} />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/cart" element={<CartScreen cart={cart} />} />
        <Route path="*" element={<NoScreen />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
