import React from "react";
import "./sellers.css";
import "/src/App.css";
import Text from "/src/components/Texts/texts.jsx";
import Jogo from "/src/components/Jogo/jogo.jsx";

const Sellers = () => {

  
  return (
    <>
      <Text text="Mais Vendidos" />
      <div className="games-container flex-row align-container-center">
      <Jogo game_name="Red Dead Redemption 2" image="https://i1.wp.com/www.lifeisxbox.eu/wp-content/uploads/2019/12/rdr2.jpg?fit=1080,1080" discount="-25%" price="R$79,90"/><Jogo game_name="Hades" image="https://th.bing.com/th/id/OIP.ZV0qIIETZi9QJfw9C9tLXAHaHa?rs=1&pid=ImgDetMain" discount="-25%" price="R$79,90"/><Jogo game_name="Subnautica" image="https://th.bing.com/th/id/OIP.sqphuwgmI4piFihZ0OLnSgHaHa?rs=1&pid=ImgDetMain" discount="-25%" price="R$79,90"/><Jogo game_name="Don't Starve Together" image="https://th.bing.com/th/id/OIP.b7crJu_DVeZe-HVSIIViQAHaHa?rs=1&pid=ImgDetMain" discount="-25%" price="R$79,90"/>
        <Jogo game_name="Terraria" image="https://th.bing.com/th/id/OIP.WOPyTWkkh-_n4gxfGFhAOgAAAA?rs=1&pid=ImgDetMain" discount="-100%" price="Gratuito"/>
      </div>
    </>
  )
}


export default Sellers;