const language = window.location.pathname.includes('/en/') ? 'en' : 'cn';
const content = {
    en: {
        dailyRevenueTitle: 'Daily revenue',
        currentPriceTitle: 'Current Price',
        currentBlockRewardTitle: 'Current block reward',
        networkHashrateTitle: 'Network hashrate',
        yourHashrateTitle: 'Your hashrate',
        hashratePlaceholderTitle: 'Hashrate value',
        errmess: 'Data fetching error. Please, comeback later.'
    },
    // Attention: Chinese translate done with Google translator
    cn: {
        dailyRevenueTitle: '每日收入',
        currentPriceTitle: '当前价格',
        currentBlockRewardTitle: '当前块奖励',
        networkHashrateTitle: '网络哈希率',
        yourHashrateTitle: '你的哈希率',
        hashratePlaceholderTitle: '哈希值',
        errmess: '数据获取错误。 请稍后再来'
    }
}

const MultilingualContent = {
    dailyRevenueTitle: content[language]['dailyRevenueTitle'],
    currentPriceTitle: content[language]['currentPriceTitle'],
    currentBlockRewardTitle: content[language]['currentBlockRewardTitle'],
    networkHashrateTitle: content[language]['networkHashrateTitle'],
    yourHashrateTitle: content[language]['yourHashrateTitle'],
    hashratePlaceholderTitle: content[language]['hashratePlaceholderTitle'],
    errmess: content[language]['errmess']
}

export default MultilingualContent;