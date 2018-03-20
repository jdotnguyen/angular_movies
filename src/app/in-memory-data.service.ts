import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const coins = [
      {
        id: 'bitcoin',
        rank: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        priceusd: 8392.82,
        pricebtc: 1.0,
        marketcap: 142065264140,
        percentchange: 7.19
      },
      {
        id: 'ethereum',
        rank: 2,
        name: 'Ethereum',
        symbol: 'ETH',
        priceusd: 555.731,
        pricebtc: 0.0664251,
        marketcap: 54613649531.0,
        percentchange: 2.79
      },
      {
        id: 'ripple',
        rank: 3,
        name: 'Ripple',
        symbol: 'XRP',
        priceusd: 0.687841,
        pricebtc: 0.00008222,
        marketcap: 26888885380.0,
        percentchange: 10.31
      },
      {
        id: 'bitcoin-cash',
        rank: 4,
        name: 'Bitcoin Cash',
        symbol: 'BCH',
        priceusd: 956.45,
        pricebtc: 0.114322,
        marketcap: 16283884052.0,
        percentchange: 1.99
      },
      {
        id: 'litecoin',
        rank: 5,
        name: 'Litecoin',
        symbol: 'LTC',
        priceusd: 156.062,
        pricebtc: 0.0186537,
        marketcap: 8690961082.0,
        percentchange: 3.33
      }
    ];
    return {coins};
  }
}