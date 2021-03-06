import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mobile } from '../responsive';
import { register } from '../redux/apiCalls';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('https://i.ibb.co/1M43z0W/pexels-johannes-plenio-1103970.jpg')
    center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: '75%' })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export default function Register() {
  const [userInfo, setUserInfo] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const collectInfo = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(userInfo);
    if (userInfo.password === userInfo.confirmPassword) {
      console.log('pass matched');
      register(dispatch, userInfo, navigate);
    } else {
      console.warn('pass did not matched');
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleRegister}>
          <Input
            onChange={collectInfo}
            name="firstname"
            placeholder="First Name"
            type="text"
          />
          <Input
            onChange={collectInfo}
            name="lastname"
            placeholder="Last Name"
            type="text"
          />
          <Input
            onChange={collectInfo}
            name="username"
            placeholder="username"
            type="text"
          />
          <Input
            onChange={collectInfo}
            name="email"
            placeholder="Email"
            type="text"
          />
          <Input
            onChange={collectInfo}
            name="password"
            placeholder="Password"
            type="password"
          />
          <Input
            onChange={collectInfo}
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}
