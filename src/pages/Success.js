import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Success() {
  const location = useLocation();
  //   const data = location.state.stripeData;
  //   const cart = location.state.products;
  console.log(location);
  return (
    <div>
      <h2>your order is success</h2>
    </div>
  );
}
