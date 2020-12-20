import React from 'react';
import fakeData from '../../fakeData';
import Plan from './components/Plan';
import './styles.css';

function Premium() {
  return (
    <main id="premium">
      <div id="p-free-3-months-container">
        <section id="p-free-3-months">
          <div id="p-f3m-text">
            <h1>Curta 3 meses de Premium grátis</h1>
            <p id="p-f3m-text-desc">
              Curta músicas sem anúncios, no modo offline e muito mais. Cancele
              quando quiser.
            </p>
            <div id="p-f3m-btns">
              <div id="p-f3m-btn">Ganhe 3 meses grátis</div>
              <div id="p-f3m-plans-btn">Ver todos os planos</div>
            </div>
            <div id="p-f3m-agreements">
              Somente para o plano Individual. Depois, apenas R$ 16,90/mês.
              Oferta indisponível para usuários que já experimentaram o
              Premium.&nbsp;
              <a href="#">Sujeita a Termos e Condições.</a> A oferta termina em
              31 de dez de 2020.
            </div>
          </div>
        </section>
      </div>
      <div id="benefits-container">
        <section id="benefits">
          <h1>Por que virar Premium?</h1>
          <div id="benefits-desc">
            <ul>
              <li>
                <div id="img-1" className="b-desc-img"></div>
                <div className="b-desc">
                  <h2>Baixe suas músicas.</h2>
                  <span>Ouça de onde quiser.</span>
                </div>
              </li>
              <li>
                <div id="img-2" className="b-desc-img"></div>
                <div className="b-desc">
                  <h2>Sem anúncios para interromper.</h2>
                  <span>Curta música sem parar.</span>
                </div>
              </li>
              <li>
                <div id="img-3" className="b-desc-img"></div>
                <div className="b-desc">
                  <h2>Ouça qualquer música.</h2>
                  <span>Mesmo no celular ou tablet.</span>
                </div>
              </li>
              <li>
                <div id="img-4" className="b-desc-img"></div>
                <div className="b-desc">
                  <h2>Pule quantas faixas quiser.</h2>
                  <span>Ouça só as que você curtir</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div id="plans-container">
        <section id="plans">
          <h1>Escolha seu plano Premium</h1>
          <p>
            Ouça sem limites no seu celular, alto-falante e em outros
            dispositivos.
          </p>
          <div id="plans-overview">
            {fakeData.plans.map((plan, index) => (
              <Plan
                key={index}
                name={plan.name}
                priceText={plan.priceText}
                numberOfAccounts={plan.numberOfAccounts}
                advantages={plan.advantages}
                freeTimeInMonths={plan.freeTimeInMonths}
                agreements={plan.agreements}
                prePaidPlans={plan.prePaidPlans}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Premium;
