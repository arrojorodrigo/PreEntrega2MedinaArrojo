import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import ResponsiveAppBar from "./components/ResponsiveAppBar/index";
import ProductList from "./components/ProductList"
import Container from '@mui/material/Container';

function App() {  
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await axios("https://fakestoreapi.com/products")
    setProducts(data)
  }
  useEffect (() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <ResponsiveAppBar/>
      <Container sx={{ mt: 5 }}>
      <ProductList products={products}/>
      </Container>
    </div>
  );
}

export default App
