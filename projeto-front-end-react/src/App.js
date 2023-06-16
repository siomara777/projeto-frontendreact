import { React } from "react";
import Filtros from "./Componentes/Filtros/Filtros";
import Home from "./Componentes/ProdutosListas/Homee/Home";
import Cart from "./Componentes/ProdutosListas/ShoppingCart/ProdCartao/Cart";
import ProdutoCard from "./Componentes/ProdutosListas/ProdutoCard/ProdutoCard";
import Item from "./Componentes/ProdutosListas/ShoppingCart/Item/Item";
import GlobalStyles from "./Componentes/GlobalStyle/GlobalStyle";



function App() {
  return (
    <div>
      <GlobalStyles />
      <Filtros />
      <Home />
      <ProdutoCard />
      <Cart />
      <Item />
    </div>
  );
}

export default App;
