
import { AreaCard } from "./CardStyle";
// import Camisata from "../../../Img/Camiseta 1.webp"




function Card(props) {

  // console.log( "props no card ", props.img)
  const {img, nome, valor} = props
  
  return (
    <AreaCard>
   
   <img src={img} alt={nome} ></img>
       
       <p>{nome}</p>
       <p>{valor} </p>

       <input type="text" placeholder="Adicionar ao Carrinho:" id="Carrinho" />
       
    </AreaCard>
  );
}

export default Card;
