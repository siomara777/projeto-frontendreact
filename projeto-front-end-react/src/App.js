import { React } from "react";
// // import Filtros from "./Componentes/Filtros/Filtros";
import { Home } from "./Componentes/ProdutosListas/Home/Home";
// import Cart from "./Componentes/ProdutosListas/ShoppingCart/ProdCartao/Cart";

// import Item from "./Componentes/ProdutosListas/ShoppingCart/Items/Item";
// import "./App.css";
import { camisas } from "./Componentes/Assents/ListaProdutos";
import Footer from "./Componentes/Footer/Footer";
import Card from "./Componentes/ProdutosListas/ProdutoCard/Card";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Componentes/Header/Header";
// import Filtros from "./Componentes/Filtros/Filtros";
import Carrinho from "./Componentes/Carrinho/Carrinho";
import { useState } from "react";

function App() {
  const [inputValor, setInputValor] = useState("");
  const [selectOrdenar, setSelectOrdenar] = useState("ordenar");

  const rendeLista = camisas
    .filter((produto) => {
      if (produto.ordenar === selectOrdenar) {
        console.log(Boolean(produto.selectOrdenar === selectOrdenar));
        return produto;
      } else if (selectOrdenar === "ordenar") {
        console.log(Boolean(selectOrdenar));
        return camisas;
      }
    })
    .filter((produto) => {
      if (inputValor === produto.valor) {
        console.log(Boolean(inputValor === produto.valor), inputValor);
        return produto;
      } else if (!inputValor || inputValor === "0") {
        console.log(Boolean(inputValor), inputValor);
        return camisas;
      }
    });

  return (
    <div className="App">
      <GlobalStyle />

      <Header
        inputValor={inputValor}
        setInputValor={setInputValor}
        selectOrdenar={selectOrdenar}
        setSelectOrdenar={setSelectOrdenar}
      />
      <camisas rendeLista={rendeLista} />
      {/* <Card/> */}

      <Home camisas={camisas} />
      {/* <Filtros/>  */}
      {/* <Carrinho /> */}

      {/* <Filtros /> */}

      {/* <Card /> */}
      {/* <Cart /> */}
      {/* <Item /> */}
      <Footer />
    </div>
  );
}

export default App;
