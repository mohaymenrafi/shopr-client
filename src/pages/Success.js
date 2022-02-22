/* eslint-disable no-unused-vars */
import React from 'react';
import { useLocation } from 'react-router-dom';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SuccessComponent from '../components/SuccessComponent';

export default function Success() {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.products;
  console.log({ cart, data });
  return (
    <div>
      <Announcement />
      <Navbar />
      <SuccessComponent data={data} cart={cart} />
      <Footer />
    </div>
  );
}
