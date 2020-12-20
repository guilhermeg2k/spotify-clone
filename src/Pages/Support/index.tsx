import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
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
      <div id="help-links-container">

      </div>
    </div>
  );
}

export default Support;
