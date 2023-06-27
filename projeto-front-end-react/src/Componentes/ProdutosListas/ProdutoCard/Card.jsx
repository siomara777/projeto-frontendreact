
import { AreaCard } from "./CardStyle";

function Card() {
  return (
    <AreaCard>
   
       <h2>ProdutoCard</h2>
       <p>Nome do Produto:</p>
       <p>Valor:</p>
       <input type="text" placeholder="Adicionar ao Carrinho:" id="Filtros" />
    </AreaCard>
  );
}

export default Card;
