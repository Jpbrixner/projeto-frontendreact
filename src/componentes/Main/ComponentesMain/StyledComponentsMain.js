import styled from "styled-components";

export const ContainerFiltro = styled.div`
  width: 250px;
  height: 250px;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 10px 5px 5px black;

  input {
    border: 1px gray solid;
    border-radius: 4px;
    height: 20px;
    padding-left: 8px;
  }
  input:active {
    border: 1px black solid;
  }
`;
export const HomeStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

`;

export const CardsContainerHome = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  justify-content: center;
  padding: 10px;
  gap: 10px;
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: radial-gradient(
    circle farthest-corner at 7.2% 13.6%,
    rgba(37, 249, 245, 1) 0%,
    rgba(8, 70, 218, 1) 90%
  );
  width: 150px;
  height: 230px;
  box-shadow: 10px 5px 5px black;
  border-radius: 15px;
  padding: 10px;

  img {
    width: 60%;
    height: 60%;
    border-radius: 10px;
    box-shadow: 8px 3px 3px black;
  }
  button{
    border-radius: 4px;
    border: none;
  }
`;

export const CarrinhoContainer = styled.main`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const CardCarrinhoStyled = styled.section`
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 8px 3px 3px black;
  background-image: radial-gradient(
    circle farthest-corner at 7.2% 13.6%,
    rgba(37, 249, 245, 1) 0%,
    rgba(8, 70, 218, 1) 90%
  );
  img {
    width: 20%;
    height: 90%;
    border-radius: 8px;
    box-shadow: 5px 3px 3px black;
  }
  button {
    background-color: red;
    border-radius: 4px;
    border: none;
    width: 20px;
    height: 20px;
  }
`;
