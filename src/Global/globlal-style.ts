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
  @media (max-width: 720px) {
    /* Exemplo: Altere o tamanho da fonte ou a largura do conteúdo */
    html {
       font-size: 87.5%; // vai gerar 14px;
    }

@media (max-width: 1080px){
  html{
   font-size: 93.75%; // vai gerar 15px;
  }
 } 
    /* Adicione mais estilos conforme necessário para telas menores */
  }
`;
