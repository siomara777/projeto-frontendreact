import { React } from "react";
// // import Filtros from "./Componentes/Filtros/Filtros";
import Home from "./Componentes/ProdutosListas/Home/Home";
// import Cart from "./Componentes/ProdutosListas/ShoppingCart/ProdCartao/Cart";

// import Item from "./Componentes/ProdutosListas/ShoppingCart/Items/Item";
// import "./App.css";

// // import Footer from "./Componentes/Footer/Footer";
// import Card from "./Componentes/ProdutosListas/ProdutoCard/Card"
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Componentes/Header/Header";
// import Filtros from "./Componentes/Filtros/Filtros";
import Carrinho from "./Componentes/Carrinho/Carrinho"
function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
      {/* <Card/> */}
      <Home />
      {/* <Filtros/>  */}
      {/* <Carrinho /> */}

      {/* <Filtros /> */}

      {/* <Card /> */}
      {/* <Cart /> */}
      {/* <Item /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
