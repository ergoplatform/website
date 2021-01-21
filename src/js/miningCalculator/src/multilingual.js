const language = window.location.pathname.includes('/en/') ? 'en' : 'cn';
const content = {
  en: {
    dailyRevenueTitle: 'Daily revenue',
    currentPriceTitle: 'Current Price',
    currentBlockRewardTitle: 'Current block reward',
    networkHashrateTitle: 'Network hashrate',
    yourHashrateTitle: 'Your hashrate',
    hashratePlaceholderTitle: 'Hashrate value',
    errorMessage: 'Data fetching error. Please, comeback later.'
  },
};

export default content[language] || content.en;
