import React, { useState } from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
  text-transform: capitalize;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`;
const Option = styled.option`
  font-size: 16px;
`;

export default function AllProducts() {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');
  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value.toLowerCase(),
    });
  };
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>All Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Pink</Option>
            <Option>Cream</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>2XL</Option>
            <Option>3XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={handleSort}>
            <Option value="newest">Newest</Option>
            <Option value="highest">Price (asc) </Option>
            <Option value="lowest">Price (desc) </Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products filters={filters} sort={sort} category="" />
      <Newsletter />
      <Footer />
    </Container>
  );
}
