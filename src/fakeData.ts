const plans = [
  {
    name: "Individual",
    priceText: "R$ 16,90/mês após o período da oferta",
    numberOfAccounts: 1,
    advantages: ["Curta música sem anúncios", "Ouça em qualquer lugar — até offline", "Toque o que quiser", "Faça um plano pré-pago ou uma assinatura"],
    freeTimeInMonths: 3,
    agreements: "O período de 3 meses grátis não está disponível para usuários que já experimentaram o Premium. Sujeito a Termos e condições. Válido até 31 de dez de 2020.",
    prePaidPlans: true
  },
  {
    name: "Duo",
    priceText: "R$ 21,90/mês após o período da oferta",
    numberOfAccounts: 2,
    advantages: [
      "2 contas Premium para um casal que mora junto",
      "Duo Mix: uma playlist só pra vocês, atualizada regularmente com músicas que os dois gostam", "Ouça sem anúncio, no modo offline e sob demanda"
    ],
    freeTimeInMonths: 1,
    agreements: "São aplicáveis termos e condições. O mês grátis não está disponível para usuários que já experimentaram o Premium.",
    prePaidPlans: false
  },
  {
    name: "Família",
    priceText: "R$ 26,90/mês após o período da oferta",
    numberOfAccounts: 6,
    advantages: [
      "6 contas Premium para familiares que moram no mesmo endereço",
      "Family Mix: uma playlist pra família, atualizada regularmente com músicas que todo mundo gosta", "Bloqueie música explícita",
      "Ouça sem anúncio, no modo offline e sob demanda",
      "Faça um plano pré-pago ou uma assinatura",
      "Spotify Kids: um aplicativo separado, feito especialmente para crianças"],
    freeTimeInMonths: 1,
    agreements: "São aplicáveis termos e condições. O mês grátis não está disponível para usuários que já experimentaram o Premium.",
    prePaidPlans: true
  },
  {
    name: "Universitário",
    priceText: "R$ 8,50/mês após o período da oferta",
    numberOfAccounts: 1,
    advantages: [
      "Desconto especial para estudantes universitários que tenham direito à oferta",
      "Curta música sem anúncios",
      "Ouça em qualquer lugar — até offline",
      "Toque o que quiser",
    ],
    freeTimeInMonths: 1,
    agreements: "Plano disponível somente para estudantes universitários de instituições de ensino superior aprovadas. O mês grátis não está disponível para usuários que já experimentaram o Premium. São aplicáveis os termos e condições da oferta do Spotify de desconto para universitários.",
    prePaidPlans: false
  },
]
const fakeData = {
  plans,
};

export default fakeData;