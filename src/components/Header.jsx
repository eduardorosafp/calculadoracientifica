// Header.js
import styled from "styled-components";

// Estilos usando Styled Components
const HeaderWrapper = styled.div`
  background-color: #e0eaf5;
  padding: 20px;
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
