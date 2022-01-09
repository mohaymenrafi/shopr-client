import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-style: 14px;
  padding: 3px;
`;

const Announcement = () => (
  <Container>Super Deal! Free Shipping on Orders Over $50</Container>
);

export default Announcement;
