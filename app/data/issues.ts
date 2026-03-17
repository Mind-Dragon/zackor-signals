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
    id: "2026-03-17-8am",
    issueNumber: 4,
    date: "March 17, 2026",
    time: "8am CT",
    btcPrice: "$73,705",
    btcChange: "1.54%",
    btcUp: false,
    ethPrice: "$2,317",
    ethChange: "1.47%",
    ethUp: false,
    sections: [
      {
        icon: "₿",
        title: "Bitcoin",
        signals: [
          { rating: 4, headline: "BTC hit $75K then pulls back to $73,705 — healthy consolidation after 8-session run", detail: "After touching $75,000 for first time since late 2025, BTC retreats -1.54% this morning. Bollinger Bands setting up for 'powerful move' per CoinTelegraph analysis. Healthy consolidation after best weekly performance since September 2025.", source: "CoinTelegraph / CoinGecko Mar 17" },
          { rating: 4, headline: "Crypto fund inflows hit $1.06B as Iran crisis fuels Bitcoin safe-haven demand", detail: "Geopolitical risk from Iran/Middle East driving capital into crypto as safe haven. One of the highest single-week inflow weeks in 2026. Structurally bullish — fear driving demand rather than just speculation.", source: "r/CryptoCurrency score=19 / Mar 17" },
          { rating: 3, headline: "Australian Senate panel endorses bill to integrate Bitcoin into financial system", detail: "Australia moves toward formal legislative integration of Bitcoin. Joins growing list of governments (US Strategic Reserve, El Salvador) formalizing BTC's role in financial infrastructure.", source: "r/Bitcoin score=82 · 2.6h" },
          { rating: 3, headline: "El Salvador: first country to teach Bitcoin to ALL students 7 years and older", detail: "Mandatory national Bitcoin education for 7+ year olds. Sovereign-level BTC adoption going from monetary policy to curriculum — long-term cultural entrenchment signal.", source: "@CryptoNewsHntrs / Twitter · Mar 17" },
          { rating: 3, headline: "Saylor signals continued Bitcoin accumulation — 'Stretch the Orange Dots'", detail: "Michael Saylor (Strategy) publicly signaling continued BTC buys. Strategy's total holdings still at 761,068 BTC. Institutional buyer-of-last-resort narrative intact through consolidation.", source: "@CryptosR_Us (303K) 299L/53RT · Mar 17" },
          { rating: 2, headline: "Bitcoin bulls risk getting trapped at 6-week highs — CoinTelegraph warns", detail: "Technical analysts flag potential bull trap setup after $75K rejection. Key support at $72K–$73K. A close below $73,726 MVRV level signals increased downside risk.", source: "CoinTelegraph / YouSearch · Mar 17" },
          { rating: 2, headline: "Motley Fool: Bold prediction — Bitcoin hits $100K again by end of 2026", detail: "Mainstream financial media making $100K year-end targets again. Implies 35%+ upside from current levels. Prediction markets showing 11% odds currently — significant asymmetry if institutional demand holds.", source: "Motley Fool / YouSearch · Mar 17" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "ETH holds above $2,250 after +12% surge yesterday — Motley Fool: 'trend could continue'", detail: "ETH up 12% in 24h on Mar 16, now consolidating at $2,317. Momentum from BlackRock ETHB ($107M AUM), whale accumulation, and staking ATH still in effect. Analysts watching $2,400 resistance zone closely.", source: "Motley Fool / TechBullion / YouSearch · Mar 17" },
          { rating: 3, headline: "$ETH almost tapped $2,400 resistance — next key level in focus", detail: "TedPillows (280K followers): ETH approaching the $2,400 resistance zone he's been calling. Break above would signal next leg toward the $2,400–$2,650 CME gap fill target. Watch for momentum confirmation.", source: "@TedPillows (280K) 270L/28RT · Mar 17" },
          { rating: 3, headline: "Crypto rally: what to expect from BTC, ETH, SOL, XRP this week", detail: "SeekingAlpha analysis: market entering week 2 of recovery rally. ETH outperforming broader market. Key catalysts: ETHB ETF daily inflows, Pectra upgrade timeline, and reduced EF sell pressure.", source: "SeekingAlpha / YouSearch · Mar 17" },
          { rating: 2, headline: "Kiyosaki tells 2.8M followers: ETH reaches $X within a year of global financial crash", detail: "Robert Kiyosaki continues warning of financial collapse while flagging crypto as the escape hatch. Mainstream fear-based crypto promotion reaching massive retail audience at a critical accumulation window.", source: "@SAMALTCOIN_ETH / Twitter 53L · Mar 17" },
          { rating: 1, headline: "Carry-forward: ETHB staking ETF at $107M AUM (day 2), Culper Research short still open, EF Mandate governance live. Watch daily ETHB inflows and $2,400 breakout level.", isCarryForward: true },
        ],
      },
    ],
  },
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