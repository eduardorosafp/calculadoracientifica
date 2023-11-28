import { useState } from "react";
import Header from "../components/Header";
import Calculator from "../Calculator";
import App from "../App";
import styled from "styled-components";

const Home = () => {
  const [showApp, setShowApp] = useState(false);

  const handleButtonClick = () => {
    setShowApp(!showApp); // Inverte o valor do estado
  };

  // Defina o styled.button fora do componente
  const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    margin-top: 20px;
  `;

  const CenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  return (
    <>
    <Header />
    <CenteredContainer>
      {showApp ? (
        <App onBackButtonClick={handleButtonClick} />
        ) : (
          <div>
          <Calculator />
          <Button onClick={handleButtonClick}>Mostrar App</Button>
        </div>
      )}
    </CenteredContainer>
      </>
  );
};

export default Home;
