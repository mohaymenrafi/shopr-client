import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';

const Container = styled.div`
  min-height: 60px;
  color: black;
`;

const Wrapper = styled.div`
  margin: 0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
`;
const Input = styled.input`
  border: none;
  outline: 0px;
  padding: 7px;
  ${mobile({ width: '50px' })}
`;
const Logo = styled.h2`
  font-weight: 800;
  ${mobile({ fontSize: '24px' })}
`;
const Center = styled.div`
  text-align: center;
  flex: 1;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <MdSearch style={{ color: 'gray', fontSize: '20px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SHOPR</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={5} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
