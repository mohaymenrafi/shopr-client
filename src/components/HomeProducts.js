import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function HomeProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products`);
        setProducts(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProducts();
  }, []);

  return (
    <Container>
      {products.slice(0, 12).map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
}
