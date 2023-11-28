
import styled from "styled-components";


const HeaderWrapper = styled.div`
  background-color: #a0c6f0;
  padding: 40px;
  text-align: center;
`;

const HeaderText = styled.h1`
  color: #333;
  font-size: 24px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderText>Programação para todos</HeaderText>
    </HeaderWrapper>
  );
};

export default Header;
