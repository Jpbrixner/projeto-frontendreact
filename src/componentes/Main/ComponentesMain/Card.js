import React from "react";
import { CardContainer } from "./StyledComponentsMain";

export default function Card(props) {
  const { traje, adicionar,salvar } = props;
  
  return (
    <CardContainer>
      <img src={traje.imageUrl} alt={traje.name} />
      <p><strong>{traje.name}</strong></p>
      <p>R${traje.value}</p>
      <button onClick={() => adicionar(traje.id)}>Adicionar</button>
    </CardContainer>
  );
}
