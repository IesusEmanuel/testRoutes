import React, { useState } from "react";
import "/src/App.css";
import "./add.css";
import Jogo from "/src/components/Jogo/jogo.jsx";

const Add = () => {
  const [game_name, setGame_name] = useState('');
  const [image, setImage] = useState('');
  const [discount, setDiscount] = useState('');
  const [price, setPrice] = useState('');
  const [jogos, setJogos] = useState([]);
  
  const addGame = (event) => {
    event.preventDefault();

    if(game_name.trim() && image.trim() && discount.trim() && price.trim()) {
      const newGame = {game_name, image, discount, price};

      setJogos([...jogos, newGame]);

      setGame_name('');
      setImage('');
      setDiscount('');
      setPrice('');
    }
  }
  
  return (
    <>
    <form onSubmit={addGame}>
      <h1 className="center white poppins">Adicionar</h1>
      <input
        type="text"
        placeholder="Nome do Jogo"
        value={game_name}
        onChange={(e) => setGame_name(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Desconto"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Imagem"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button className="pointer transition" type="submit">Adicionar Jogo</button>
    </form>

    <div className="games-container align-container-center">
      {jogos.map((jogo, index) => (
        <Jogo key={index} game_name={jogo.game_name} price={jogo.price} discount={jogo.discount} image={jogo.image} />
      ))}
    </div>
    </>
  )
}

export default Add;