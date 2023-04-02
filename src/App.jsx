import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import ResponsiveAppBar from "./components/ResponsiveAppBar/index";
import ProductList from "./components/ProductList"
import Container from '@mui/material/Container';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import Home from './components/Home';

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
      <Routes>
        <Route path="/" element= { <Navigate to="/home"/> } />
        <Route path="/home" element= { <Home /> } />
        <Route path="/products" element= { <ProductList products={products} /> } />
      </Routes>
      {/* {products.map(product) => (<h3>{product.title}</h3>)} */}
      <ResponsiveAppBar/>
      <Container sx={{ mt: 5 }}>
      {/* <ProductList products={products}/> */}
      </Container>
    </div>
  );
}

export default App
