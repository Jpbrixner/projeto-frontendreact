import React, { useState } from "react";
import produtos from "../../produtos.json";
import Carrinho from "./ComponentesMain/Carrinho";
import Filters from "./ComponentesMain/Filters";
import Home from "./ComponentesMain/Home";
import { MainStyled } from "./MainStyled";

export default function Main() {
  const [carrinho, setCarrinho] = useState([]);
  const [trajes] = useState(produtos.trajes);
  const [order, setOrder] = useState("asc");
  const [sortingParameter, setSortingParameter] = useState("name");
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <MainStyled>
      <Filters
        query={query}
        setQuery={setQuery}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <Home
        query={query}
        setQuery={setQuery}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        trajes={trajes}
        carrinho={carrinho}
        setCarrinho={setCarrinho}
        sortingParameter={sortingParameter}
        setSortingParameter={setSortingParameter}
        order={order}
        setOrder={setOrder}
      />
      <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />
    </MainStyled>
  );
}
