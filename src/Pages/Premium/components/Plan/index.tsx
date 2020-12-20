import React from 'react';
import './styles.css';

interface PlanProps {
  name: string;
  priceText: string;
  numberOfAccounts: number;
  advantages: Array<string>;
  freeTimeInMonths: number;
  agreements: string;
  prePaidPlans: boolean;
}

const Plan: React.FC<PlanProps> = ({
  name,
  priceText,
  numberOfAccounts,
  advantages,
  freeTimeInMonths,
  agreements,
  prePaidPlans,
}) => {
  return (
    <div className="plan-box-container">
      <div className="plan-box">
        <header>
          <div className="plan-free-time-box">
            <div>
              <span className="free-time">{freeTimeInMonths} meses grátis</span>
            </div>
            {prePaidPlans ? (
              <div>
                <span className="pre-paid">Planos pré-pagos disponíveis</span>
              </div>
            ) : (
              <></>
            )}
          </div>
          <h1 className="plan-name">{name}</h1>
          <p>{priceText}</p>
          <p>
            {numberOfAccounts === 1 ? `1 Conta` : `${numberOfAccounts} Contas`}
          </p>
        </header>
        <ul className="plan-advantages">
          {advantages.map((advantage, index) => (
            <li key={index}>
              <div className="plan-advantage-icon">
                <svg
                  role="img"
                  focusable="false"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <polyline
                    points="3.32 12.86 8.9 19.4 20.99 5.26"
                    fill="none"
                    stroke="#181818"
                  ></polyline>
                </svg>
              </div>
              <span>{advantage}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="plan-btn-container">
        <span className="plan-button">COMEÇAR</span>
        <footer className="plan-agreements">{agreements}</footer>
      </div>
    </div>
  );
};

export default Plan;
