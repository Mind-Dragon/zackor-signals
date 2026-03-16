export interface Signal {
  rating: 1 | 2 | 3 | 4;
  headline: string;
  detail?: string;
  source?: string;
  isNoise?: boolean;
  isCarryForward?: boolean;
}

export interface IssueSection {
  icon: string;
  title: string;
  signals: Signal[];
}

export interface Issue {
  id: string;
  issueNumber: number;
  date: string;
  time: string;
  btcPrice: string;
  btcChange: string;
  btcUp: boolean;
  ethPrice: string;
  ethChange: string;
  ethUp: boolean;
  sections: IssueSection[];
}

export const ISSUES: Issue[] = [
  {
    id: "2026-03-16-noon",
    issueNumber: 2,
    date: "March 16, 2026",
    time: "Noon CT",
    btcPrice: "$73,731",
    btcChange: "1.28%",
    btcUp: true,
    ethPrice: "$2,294",
    ethChange: "5.33%",
    ethUp: true,
    sections: [
      {
        icon: "₿",
        title: "Bitcoin",
        signals: [
          { rating: 4, headline: "Strategy acquires 22,337 BTC for $1.57B — total now 761,068 BTC", detail: "Largest single purchase in weeks. Community confirmed: 'biggest Strategy week yet, nearly 5x 4-week average.'", source: "r/CryptoCurrency score=262/44" },
          { rating: 4, headline: "BlackRock leads $600M institutional BTC inflow surge today", detail: "Spot BTC ETFs logged $767M inflow last week — first 5-day inflow streak of 2026. Three consecutive weeks of net inflows.", source: "Exa / CryptoPotato Mar 16" },
          { rating: 3, headline: "Metaplanet secures $255M, targets $531M total raise to buy more BTC", detail: "Japanese firm accelerating Bitcoin strategy. Joining global sovereign/corporate accumulation wave.", source: "Exa / IFT Mar 16" },
          { rating: 3, headline: "J.P. Morgan reportedly allowing BTC and ETH as collateral", detail: "Major TradFi institution accepting crypto as collateral — institutional adoption signal.", source: "r/CryptoCurrency score=10/6" },
          { rating: 3, headline: "VanEck: Up to 13 governments are mining Bitcoin", detail: "Nation-state mining quietly accelerating. BTC set for best week since September 2025.", source: "r/Bitcoin score=110/8" },
          { rating: 2, headline: "Ray Dalio: Study 500 years of history — Bitcoin weathers storms", detail: "Macro legend implicitly bullish. 79% of BTC long-term holders retaining supply as exchange reserves decline.", source: "r/Bitcoin score=357/66" },
          { rating: 2, headline: "BTC battles macro nerves near $73K — bulls must reclaim higher levels", detail: "Six-week high but market warns of new macro lows unless momentum holds above $73,726 MVRV level.", source: "You.com / Coindesk Mar 16" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "BlackRock Ethereum Staking ETF (ETHB) launches — institutional demand surges", detail: "ETH tops $2,000 on ETHB launch. $107M AUM on day one. Yield-paying staked ETH ETF signals next wave of institutional products.", source: "Exa / Bitcoin.com Mar 16" },
          { rating: 4, headline: "Erik Voorhees (ShapeShift) scoops 33,544 ETH worth $71M", detail: "Major whale buy. ETF inflows accelerating alongside founder accumulation.", source: "You.com / Decrypt Mar 16" },
          { rating: 3, headline: "ETH staking hits record 37.8M ETH staked", detail: "New all-time high for staked ETH. Ethereum Foundation sells 5K ETH amid price squeeze — monitor for Foundation overhang.", source: "Exa / Ad-Hoc-News Mar 15" },
          { rating: 3, headline: "Vitalik Buterin backs new update to simplify Ethereum node software", detail: "Simplification effort could lower barrier to solo staking and decentralize the validator set.", source: "Exa / CryptoBreaking Mar 15" },
          { rating: 2, headline: "ETH up 5.33% today — surging on ETHB + whale buys", detail: "Key breakout above $2,200 in focus. Capital rotating back into ETH after 20% recent drawdown.", source: "COMPOSIO_SEARCH_FINANCE live" },
          { rating: 2, headline: "Solana transfers $650B in stablecoins — liquidity drain from Ethereum continues", detail: "Structural ETH competitive pressure persisting even as ETH rallies. Watch L2 bridge inflows.", source: "Exa / AMBCrypto Mar 9 (carry-forward)", isCarryForward: true },
        ],
      },
    ],
  },
  {
    id: "001",
    issueNumber: 1,
    date: "March 14, 2026",
    time: "8am CT",
    btcPrice: "$70,743",
    btcChange: "0.31%",
    btcUp: false,
    ethPrice: "$2,075",
    ethChange: "0.82%",
    ethUp: false,
    sections: [
     ],
    },
];