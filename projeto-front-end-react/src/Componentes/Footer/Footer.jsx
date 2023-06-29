import React from "react";
import RedesSociais from "../Footer/RedesSociais";
// import instagram from "../../Img/instagram.png";
import { AreaFooter } from "./FooterStyle";

function Footer() {
  return (
    <footer>
      <AreaFooter>
        <div>
          <h3>Pagamento:</h3>
          <h5>Cartão de crédito</h5>
          <h5>Cartão de dédito</h5>
          <h5>Beleto e Pix</h5>
        </div>
        <div>
          <h3>Em que posso ajudar?</h3>
          <h5>Sua conta</h5>
          <h5>Frete e prazo de entrega</h5>
          <h5>Devolução e reembolso</h5>
        </div>
        <h2>Desenvolvido por Siomara Mota - 2023</h2>

        <section> 

            {/* <h3>Siga</h3> */}
            
            <RedesSociais/>

         </section>
       
      </AreaFooter>
    </footer>
  );
}

export default Footer;
