const Cart = () => {
  return (
    <form>
      <h2>Cart </h2>
      <label htmlFor="Nome">Nome do Produto:</label><input type="texto"/>
      {/* <input type="text" placeholder="Nome do Produto" id="Nome do Produto" /> */}

      <label htmlFor="Valor">Valor Total:</label><input type="texto"/>

      {/* <input type="text" placeholder="Valor Total:" id="Valor Total" /> */}
    </form>
  );
};

export default Cart;
