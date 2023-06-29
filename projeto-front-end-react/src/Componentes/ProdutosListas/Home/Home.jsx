import React from "react";
import ProdutoCard from "../ProdutoCard/Card";
import { AreaHome } from "../Home/HomeStyle";
import Filtros from "../../Filtros/Filtros";
import Carrinho from "../../Carrinho/Carrinho";

export function Home (props) {

const {camisas} = props
console.log(camisas)

const rendeLista = camisas.map((produto) => {


  return(
<ProdutoCard 
        img={produto.img}
        nome={produto.nome} 
        valor= {produto.valor} 
        
        />


  )


})
  return (
    <AreaHome>
      <div>
        <Filtros />
        <Carrinho />
      </div>
      <main>
        
{rendeLista}
        
        
        
        
        
        
      </main>
    </AreaHome>
  );
}

;
