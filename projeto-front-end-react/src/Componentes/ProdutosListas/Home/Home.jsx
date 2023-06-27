import { Header } from "../../Header/Header";
import ProdutoCard from "../ProdutoCard/Card";
import { AreaHome } from "../Home/HomeStyle";
import Filtros from "../../Filtros/Filtros";
import Carrinho from "../../Carrinho/Carrinho";
function App() {
  return (
    <AreaHome>
      <div>
        <Filtros />
        <Carrinho />
      </div>
      <main>
        {/* <Header/> */}

        <ProdutoCard />
        <ProdutoCard />
        <ProdutoCard />
        <ProdutoCard />
        <ProdutoCard />
        <ProdutoCard />
        <ProdutoCard />
        <ProdutoCard />
      </main>
    </AreaHome>
  );
}

export default App;
