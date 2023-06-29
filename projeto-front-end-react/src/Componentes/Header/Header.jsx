import React from "react";

import { AreaHeader } from "./HeaderStyle";
import Logo from "./../../Img/logoMarca1.jpg";

const Header = ({ inputValor, setInputValor, selectOrdenar, setSelectOrdenar }) => {
  console.log(selectOrdenar);
  return (
    <AreaHeader>
      <div>
        <img src={Logo}></img>
      </div>
      {/* <h1> Universo Moda Masculina</h1> */}
      <input
        type="number"
        placeholder="Valor Máximo"
        min="0"
        max="50"
        value={inputValor}
        onChange={(e) => setInputValor(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor Mínimo"
        min="0"
        max="50"
        value={inputValor}
        onChange={(e) => setInputValor(e.target.value)}
      />
      <select
        value={selectOrdenar}
        onChange={(e) => setSelectOrdenar(e.target.value)}
      >
        <option value="ordenar">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
    <button type="text" > VÁ PARA CARRINHO</button>

   
   
    </AreaHeader>
  );
};

export default Header;
