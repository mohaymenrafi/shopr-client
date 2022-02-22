/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  padding: 15px;
  min-height: calc(100vh - 370px);
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
`;
const Text = styled.p`
  font-size: 1.4rem;
  margin: 1rem 0;
`;
const Button = styled.button`
  padding: 11px 36px;
  font-size: 1.2rem;
  border: 1px solid teal;
  outline: none;
  border-radius: 3px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export default function SuccessComponent({ data, cart }) {
  return (
    <Container>
      <Title>Thank you for your order!</Title>
      <Text>We will process your order very soon!</Text>
      <Link to="/all-products">
        <Button>Back To Shopping</Button>
      </Link>
    </Container>
  );
}
