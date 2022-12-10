import React from "react";
import { CardCarrinhoStyled } from "./StyledComponentsMain";

export default function CardCarrinho(props) {
    const{traje, deleteItem}= props

    return (
      <CardCarrinhoStyled>
        <img src={traje.imageUrl} alt={traje.name} />
        <div>
        <p><strong>{traje.name}</strong></p>
        <p>
          Qtd: <b>{traje.amount}</b>
        </p>
        <p>R${traje.value}</p>
        <button onClick={() => deleteItem(traje.id)}>x</button>
        </div>
      </CardCarrinhoStyled>
    );
  }


