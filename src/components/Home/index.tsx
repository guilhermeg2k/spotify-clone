import React from "react";
import ballons from "../../assets/images/ballons.png";
import "./styles.css";

function Home() {
  return (
    <main id="home">
      <div id="free-3-months-container">
        <div id="free-3-months">
          <div id="f3m-ballons">
            <p id="f3m-b-sp">Spotify Premium</p>
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
              Oferta indisponível para usuários que já experimentaram j
              Premium.&nbsp;
              <a href="#">Sujeita a Termos e Condições.</a> A oferta termina em
              31 de dez de 2020.
            </div>
          </div>
        </div>
      </div>
      <div id="takeover-container">
        <div id="takeover">
          <p id="to-sp">Spotify free</p>
          <h1>Escutar mudo tudo</h1>
          <p id="to-desc">
            Milhões de músicas e podcasts para explorar. E nem precisa de cartão
            de crédito.
          </p>
          <div id="to-btn">Obtenha o spotify free</div>
        </div>
      </div>
    </main>
  );
}

export default Home;
