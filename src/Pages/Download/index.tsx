import React from 'react';
import laptop from '../../assets/images/laptop.svg';
import greenCircle from '../../assets/images/green-circle.svg';
import greenSuccess from '../../assets/images/green-success-check.svg';
import appStore from '../../assets/images/appstore.png';
import playStore from '../../assets/images/playstore.png';
import mcStore from '../../assets/images/mcstore.png';
import allDevices from '../../assets/images/all-devices.svg';
import './styles.css';

function Download() {
  return (
    <main id="download">
      <section id="download-spotify">
        <div id="download-img">
          <img id="download-laptop" src={laptop} alt="Laptop" />
          <img id="download-green-circle" src={greenCircle} alt="Laptop" />
          <img id="download-green-success" src={greenSuccess} alt="Laptop" />
        </div>
        <h1>Baixe o Spotify</h1>
        <p>Escute milhões de músicas e podcasts no seu dispositivo.</p>
        <div id="download-btn">
          <span>BAIXAR</span>
        </div>
      </section>
      <section id="download-plataforms-section">
        <div id="download-plataforms">
          <h1>Curta as suas músicas também no seu celular ou tablet.</h1>
          <p>Ouvir música no celular ou tablet é fácil, divertido e grátis.</p>
          <div id="platform-links">
            <a href="#"><img src={appStore} alt="Apple Store" /></a>
            <a href="#"><img src={playStore} alt="Play Store" /></a>
            <a href="#"><img src={mcStore} alt="Microsoft Store" /></a>
          </div>
        </div>
      </section>
      <section id="download-all-devices-section">
        <div id="download-all-devices">
          <div id="download-all-devices-img">
            <img src={allDevices} alt="All devices" />
          </div>
          <h1>Uma só conta para curtir a música em qualquer dispositivo.</h1>
          <div id="download-plataforms-all-list">
            <ul className="download-plataforms-list">
              <li>
                CELULAR
            </li>
              <li>
                COMPUTADOR
            </li>
              <li>
                TABLET
            </li>
              <li>
                CARRO
            </li>
            </ul>
            <ul className="download-plataforms-list">
              <li>
                <a href="#">PlayStation ®</a>
              </li>
              <li>
                <a href="#">XBOX</a>
              </li>
              <li>
                <a href="#">TV</a>
              </li>
              <li>
                <a href="#">ALTO-FALANTE</a>
              </li>
              <li>
                <a href="#">WEB PLAYER</a>
              </li>
            </ul>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Download;