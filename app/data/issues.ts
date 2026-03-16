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
    id: "2026-03-16-6pm",
    issueNumber: 3,
    date: "March 16, 2026",
    time: "6pm CT",
    btcPrice: "$74,767",
    btcChange: "2.70%",
    btcUp: true,
    ethPrice: "$2,358",
    ethChange: "8.28%",
    ethUp: true,
    sections: [
      {
        icon: "₿",
        title: "Bitcoin",
        signals: [
          { rating: 4, headline: "BTC hits 8 consecutive green sessions — first time since October 2025", detail: "Bitcoin surges past $74,500 intraday, approaching 6-week high. Risk-on mood returns as geopolitical tensions (Hormuz) ease slightly. Market is pricing in sustained institutional demand.", source: "Finance Magnates / CoinDesk Mar 16" },
          { rating: 4, headline: "Bitcoin whale activity hits 6-year high at $74K", detail: "Large holders accumulating at levels not seen since 2020. Coincides with $767M ETF inflow streak and Strategy's 22,337 BTC purchase. Supply shock thesis strengthening.", source: "Coinpaper Mar 16" },
          { rating: 3, headline: "Bitcoin beats gold during war — Peter Schiff pushes back", detail: "BTC outperforming gold as a safe haven amid Middle East tensions. Schiff doubles down on gold thesis but community notes BTC's relative strength. Narrative shift accelerating.", source: "r/CryptoCurrency score=105/17" },
          { rating: 3, headline: "BTC set for best week since September 2025 as tech-stock correlation fades", detail: "Decoupling signal: BTC rising while broader risk assets mixed. Institutional demand + shrinking exchange reserves driving price action independent of equity markets.", source: "r/Bitcoin score=118/16" },
          { rating: 3, headline: "Bitwise CIO: Institutional investors showed 'diamond hands' through the downturn", detail: "Bitwise's Matt Hougan confirms institutional HODLers stayed put during Feb–Mar correction. 'Diamond hands' trend among institutional allocators bullish for next leg.", source: "r/CryptoCurrency score=9 / CryptoRank Mar 16" },
          { rating: 2, headline: "20 of Europe's largest banks are moving into crypto trading and custody", detail: "European banking adoption accelerating. Bitget confirms four years of institutional resistance collapsing. Structural demand layer forming in EU.", source: "r/CryptoCurrency score=10 / Bitget Mar 16" },
          { rating: 2, headline: "IRS Form 1099-DA: Your 2025 crypto transactions are already reported", detail: "Regulatory clarity accelerating: IRS now receives automated crypto data. Compliance burden rising but signals legitimization. Affects all holders of BTC, ETH, and altcoins.", source: "r/CryptoCurrency score=66/18 FRESH" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "BlackRock ETHB staking ETF: $46M AUM in just 2 days — momentum building", detail: "Day-two metrics: $46M already banked. Blackrock's yield-bearing ETH product drawing new institutional capital segment. Analysts now targeting $2,200+ breakout.", source: "Exa / Phemex News Mar 15–16" },
          { rating: 3, headline: "Vitalik: Ethereum may need to rethink its node architecture entirely", detail: "Buterin signals deeper overhaul beyond current EIP roadmap. Focus on reducing node complexity to expand solo staker base and decentralize validators. Medium-term bullish.", source: "r/ethereum score=61/17 · 40h" },
          { rating: 3, headline: "Aave suffers $27M liquidation after oracle/glitch event", detail: "Roughly $27M liquidated on the leading DeFi lending protocol in 24h. Market continues functioning but highlights ongoing smart contract and oracle risk in DeFi infrastructure.", source: "AOL / CoinDesk Mar 16" },
          { rating: 3, headline: "Ethereum regains focus in 2026: upgrades, staking, and AI infrastructure converging", detail: "Multiple analyst reports highlight ETH's expanding role as AI compute settlement layer alongside DeFi. Pectra upgrade timeline and staking yield now key catalysts for institutional interest.", source: "Exa / Multiple Mar 15–16" },
          { rating: 2, headline: "BlackRock's ETHB signals new era for all proof-of-stake networks", detail: "Daily Upside analysis: ETHB opens template for staking ETFs on SOL, DOT, and ADA. ETH first-mover advantage in institutional staking yield products.", source: "Exa / The Daily Upside Mar 15" },
          { rating: 1, headline: "Carry-forward: Ethereum Foundation Mandate published Mar 13 — first formal EF governance document. Culper Research ETH short still open. Watch EF sell pressure.", isCarryForward: true },
        ],
      },
    ],
  },
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
          { rating: 3, headline: "Metaplanet secures $255M, targets $531M total raise to buy more BTC", detail: "Japanese firm accelerating Bitcoin treasury strategy. Joining global sovereign/corporate accumulation wave.", source: "Exa / IFT Mar 16" },
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