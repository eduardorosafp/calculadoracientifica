// CalculatorPage.js
import styled from "styled-components";
import Header from "../components/Header";

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

// const HeaderImage = styled.img`
//   max-width: 100%;
//   margin-bottom: 0px; /* Adiciona um pouco de espaço abaixo da imagem */
// `;

const CalculatorBox = styled.div`
  margin-top: 30px; /* Reduz a margem superior para mover o box para cima */
  padding: 60px;
  background-color: #b4d6f9;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Reduz a intensidade da sombra */
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  margin-top: 20px;
  margin-top: 50px;
`;

const CalculatorPage = () => {
  const handleButtonClick = () => {
    window.location.href = "http://localhost:5173/calculadora";
  };

  return (
    <>
    <Header/>
    <PageWrapper>
      <CalculatorBox>
        <h1>Calculadora Científica</h1>
        <Button onClick={handleButtonClick}>Venha conhecer!</Button>
      </CalculatorBox>
    </PageWrapper>
    </> 
  );
};

export default CalculatorPage;
