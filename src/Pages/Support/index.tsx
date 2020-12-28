import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdClose, MdKeyboardArrowDown } from 'react-icons/md';
import LinksBox from './components/LinksBox';

import './styles.css';
function Support() {
  const [inputText, setInputText] = useState('');
  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const clearText = (e: React.MouseEvent<HTMLDivElement>) => {
    setInputText('');
  };
  return (
    <div id="support">
      <div id="help-container">
        <section id="help">
          <h1>Como podemos ajudar?</h1>
          <div id="help-search-box">
            <div id="help-input-icon">
              <FaSearch size={18}></FaSearch>
            </div>
            <input
              type="text"
              id="help-field"
              placeholder="Buscar"
              value={inputText}
              onChange={changeText}
            />
            {inputText ? (
              <div id="help-input-close" onClick={clearText}>
                <MdClose size={26}></MdClose>
              </div>
            ) : (
                <></>
              )}
          </div>
        </section>
        <section id="help-best-solutions">
          <h2>Melhores Soluções</h2>
          <div className="hbs-links">
            <h2>Opções de assinatura</h2>
            <a href="#">Criar ou entrar em um plano Família</a>
          </div>
          <div className="hbs-links">
            <h2>Ajuda com a conta</h2>
            <a href="#">Não me lembro das minhas informações de login</a>
          </div>
          <div className="hbs-links">
            <h2>Ajuda com a conta</h2>
            <a href="#">Não consigo redefinir a senha</a>
          </div>
        </section>
      </div>
      <div id="help-links">
        <div id="help-links-container">
          <LinksBox
            title="Conta e pagamento"
            links={[
              "Ajuda com a conta",
              "Ajuda com os pagamentos",
              "Opções ded assinatura",
              "Premium Familiar",
              "Premium Duo",
              "Premium Universitário",
              "Privacidade e segurança",
              "Para Anunciantes"
            ]}
          />
          <LinksBox
            title="Usando o Spotify"
            links={[
              "Tutoriais em Vídeo",
              "Primeiros passos",
              "Playlists",
              "Recursos",
              "Sistema e configurações",
              "Soluções de problemas"
            ]} />
          <LinksBox
            title="Ouça onde quiser"
            links={[
              "Alto-falantes",
              "TVs",
              "Carros",
              "Videogames",
              "Smartwatches",
              "Smart displays",
              "Assistentes de voz"
            ]} />
        </div>
      </div>
      <div id="help-community">
        <h2>Visite a Comunidade</h2>
        <span>Tem uma pergunta? Encontre respostas na nossa Comunidade de fãs especialistas do mundo todo!</span>
        <div id="help-community-btn">
          Encontrar respostas
        </div>
      </div>
    </div >
  );
}

export default Support;
