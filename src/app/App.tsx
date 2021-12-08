import { ThemeProvider } from '@mui/system';
import './App.css';
import theme from '../theme';
import { Route, Routes } from 'react-router';
import NoScreen from '../screens/no-screen/NoScreen';
import Products from '../screens/products/Products';
import ProductDetails from '../screens/product-details/ProductDetail';
import { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState<any>([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  console.log('my carrito', cart);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Products onAddItemToCart={addItemToCart} />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="*" element={<NoScreen />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
