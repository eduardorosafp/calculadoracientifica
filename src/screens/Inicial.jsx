import styled from "styled-components";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const CalculatorBox = styled.div`
  margin-top: 30px;
  padding: 60px;
  background-color: #b4d6f9;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  return (
    <>
      <Header />
      <PageWrapper>
        <CalculatorBox>
          <h1>Calculadora Científica</h1>
          <Link to="/calculadora">
            <Button>Venha conhecer!</Button>
          </Link>
        </CalculatorBox>
      </PageWrapper>
    </>
  );
};

export default CalculatorPage;
