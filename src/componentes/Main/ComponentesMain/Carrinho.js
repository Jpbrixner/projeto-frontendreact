import React from "react";
import CardCarrinho from "./CardCarrinho";
import { CarrinhoContainer } from "./StyledComponentsMain";

export default function Carrinho(props) {
  const { carrinho, setCarrinho } = props;

  let valorTotal = 0;
  carrinho.map((item) => (valorTotal = valorTotal + item.value * item.amount));

  function remover(id) {
    const traje = carrinho && carrinho.find((item) => item.id === id);

    if (traje.amount > 1) {
      const novoCarrinho = carrinho.map((item) => {
        if (traje.id === item.id && item.amount >= 1) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCarrinho(novoCarrinho);
    } else {
      const carrinhoSemItem = carrinho.filter((item) => item.id !== id);
      setCarrinho(carrinhoSemItem);
    }
  }

  return (
    <CarrinhoContainer>
      <h2>Carrinho:</h2>
      {carrinho.map((traje) => {
        return (
          <CardCarrinho key={traje.id} traje={traje} deleteItem={remover} />
        );
      })}
      <h3>Preço Total: R$ {valorTotal}</h3>
    </CarrinhoContainer>
  );
}
