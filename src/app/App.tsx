import { ThemeProvider } from '@mui/system';
import './App.css';
import theme from '../theme';
import { Route, Routes } from 'react-router';
import NoScreen from '../screens/no-screen/NoScreen';
import Products from '../screens/products/Products';
import ProductDetails from '../screens/product-details/ProductDetail';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="*" element={<NoScreen />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
