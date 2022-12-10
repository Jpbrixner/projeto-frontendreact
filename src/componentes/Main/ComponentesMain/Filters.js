import React from "react";
import { ContainerFiltro } from "./StyledComponentsMain";

export default function Filters (props) {
  
  return (
    <>
      <ContainerFiltro>
        <h2>Filtros:</h2>
        <p>Nome do Produto:</p>
        <input
          type="text"
          value={props.query}
          onChange={(event) => {
            props.setQuery(event.target.value);
          }}
        />
        <p>Preço Mínimo:</p>
        <input
          type="number"
          value={props.minPrice}
          onChange={(event) => {
            props.setMinPrice(event.target.value);
          }}
        />
        <p>Preço Máximo:</p>
        <input
          type="number"
          value={props.maxPrice}
          onChange={(event) => {
            props.setMaxPrice(event.target.value);
          }}
        />
      </ContainerFiltro>
    </>
  );
};



