import styled from 'styled-components';

export const Header = styled.header`
  box-sizing: border-box;
  color: blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* a == Link  */
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    padding: 8px;

    transition: 0.2s;

    &:hover {
      color: #fff;
      background-color: black;
      border-right: 5px solid #49ff01;
      border-radius: 5px 0 0 5px;
    }
    //svg é o tipo de imagem do ícone, ou o próprio ícone nesse caso
    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 24px;
    }
    strong {
      font-size: 36px;
      color: #3d3d4d;
    }
    p {
      font-size: 18px;
      color: #737380;
      margin-top: 4px;
    }
  }
  ul {
    display: flex; /* Por padrão recebe o flex-direction: row; */
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        //Vai aplicar do 2º li pra frente.
        /* Pega todo elemento li que é precedido por outro li */
        margin-left: 80px;
      }
      strong {
        display: block; // com o display-block é possível quebrar linha
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block; // o margin-top não funciona no display-inline
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
      border-right: 1px solid black;
    }

    display: flex;
    align-items: center;

    div {
      flex: 1;
      margin: 0 16px;
      strong {
        font-size: 20px;
        color: #3d4d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcdb6;
    }
  }
`;
