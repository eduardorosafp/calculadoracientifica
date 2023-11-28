import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }

  /* Adicione estilos específicos para telas menores (móveis) */
  @media only screen and (max-width: 600px) {
    /* Exemplo: Altere o tamanho da fonte ou a largura do conteúdo */
    body {
      font-size: 14px;
      width: 100%;
      overflow-x: hidden;
    }

    /* Adicione mais estilos conforme necessário para telas menores */
  }
`;
