import styled from 'styled-components';
import { mobile } from '../responsive';

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
  width: 30%;
  background-color: white;
  ${mobile({ width: '75%' })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 14px;
  cursor: pointer;
  font-weight: 400;
`;

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="Password" />
          <Button>Login</Button>
          <Link>Forgot password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}
