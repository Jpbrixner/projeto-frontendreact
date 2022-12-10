import React from "react";
import Card from "./Card";
import { CardsContainerHome, HomeStyled } from "./StyledComponentsMain";

export default function Home(props) {
  const {
    carrinho,
    setCarrinho,
    trajes,
    query,
    minPrice,
    maxPrice,
    order,
    setOrder,
    sortingParameter,
    setSortingParameter,
  } = props;

  function adicionar(id) {
    const i = carrinho.findIndex((item) => item.id === id);
    if (i !== -1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[i] = {
        ...novoCarrinho[i],
        amount: novoCarrinho[i].amount + 1,
      };
      setCarrinho(novoCarrinho);
    } else {
      const trajeEncontrado = trajes.find((traje) => traje.id === id);
      const novoTraje = { ...trajeEncontrado, amount: 1 };
      const novaLista = [...carrinho, novoTraje];
      setCarrinho(novaLista);
    }
  }
  const salvar = () => {
    window.localStorage.setItem("item-carrinho", JSON.stringify(carrinho))
    const carrinhoString = window.localStorage.getItem("item-carrinho")
    const carrinho = JSON.parse(carrinhoString)
}

  return (
    <HomeStyled>
      <h2>Trajes Espaciais</h2>
      <span>
        <label htmlFor="sortingParameter">Ordenar por: </label>
        <select
          name="sortingParameter"
          value={sortingParameter}
          onChange={(event) => {
            setSortingParameter(event.target.value);
          }}
        >
          <option value={"name"}>Nome</option>
          <option value={"value"}>Preço</option>
        </select>{" "}
        <select
          value={order}
          onChange={(event) => {
            setOrder(event.target.value);
          }}
        >
          <option value={"asc"}>Crescente</option>
          <option value={"desc"}>Decrescente</option>
        </select>
      </span>
      <CardsContainerHome>
        {trajes
          .filter((traje) => {
            return traje.name.includes(query);
          })
          .filter((traje) => {
            return traje.value >= minPrice || minPrice === "";
          })
          .filter((traje) => {
            return traje.value <= maxPrice || maxPrice === "";
          })
          .sort((currentTraje, nextTraje) => {
            switch (sortingParameter) {
              case "value":
                return currentTraje.value - nextTraje.value;
              default:
                return currentTraje.name.localeCompare(nextTraje.name);
            }
          })
          .sort(() => {
            if (order === "asc") {
              return 0;
            } else {
              return -1;
            }
          })
          .map((traje) => {
            return <Card traje={traje} key={traje.id} adicionar={adicionar} salvar={salvar}/>;
          })}
      </CardsContainerHome>
    </HomeStyled>
  );
}
