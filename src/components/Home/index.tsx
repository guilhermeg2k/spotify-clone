import React from "react";
import ballons from "../../assets/images/ballons.png";
import "./styles.css";

function Home() {
  return (
    <main id="home">
      <div id="free-3-months-container">
        <div id="free-3-months">
          <div id="f3m-ballons">
            <p>Spotify Premium</p>
            <img src={ballons} alt="Ballons" />
          </div>
          <div id="f3m-text">
            <p id="f3m-sp">Spotify premium</p>
            <h1>Curta 3 meses de Premium grátis</h1>
            <p id="f3m-text-desc">
              Curta músicas sem anúncios, no modo offline e muito mais. Cancele
              quando quiser.
            </p>
            <div id="f3m-btn">Ganhe 3 meses grátis</div>
            <div id="f3m-agreements">
              Somente para o plano Individual. Depois, apenas R$ 16,90/mês.
              Oferta indisponível para usuários que já experimentaram o Premium.
              Sujeita a Termos e Condições. A oferta termina em 31 de dez de
              2020.
            </div>
          </div>
        </div>
      </div>
      <h2>Hello</h2>
    </main>
  );
}

export default Home;
