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
    id: "2026-03-17-noon",
    issueNumber: 5,
    date: "March 17, 2026",
    time: "Noon CT",
    btcPrice: "$74,162",
    btcChange: "0.93%",
    btcUp: false,
    ethPrice: "$2,328",
    ethChange: "0.99%",
    ethUp: false,
    sections: [
      {
        icon: "₿",
        title: "Bitcoin",
        signals: [
          { rating: 4, headline: "BTC ETF inflow streak hits 6 days — $1.1B in 3 days, biggest week since January", detail: "Bitcoin spot ETFs now logging their longest consecutive inflow streak since October 2025. BlackRock, Fidelity leading $1.1B in 3-day haul. Institutional demand structurally driving this recovery, not retail speculation.", source: "Exa / crypto.news / ainvest Mar 17" },
          { rating: 4, headline: "Square enables Bitcoin payments by default for most US sellers starting March 30", detail: "Major merchant payments infrastructure shift: Square (Block) activating BTC payments for the majority of US seller base. Mainstream commercial Bitcoin utility expanding beyond investment to everyday transaction layer.", source: "r/Bitcoin score=10 · 1.6h" },
          { rating: 3, headline: "Australian Senate bill to integrate Bitcoin into financial system gains traction — score 219 on Reddit", detail: "Legislative momentum building: Australian Senate panel endorsement now the #2 top BTC post of the day. Joins US Strategic Reserve, El Salvador curriculum, 13 nation-state mining governments.", source: "r/Bitcoin score=219 · 6.6h" },
          { rating: 3, headline: "50+ public companies now hold ~1.2M BTC — from near-zero in 2017", detail: "Landmark corporate accumulation milestone confirmed. Strategy (761K BTC), Metaplanet, and growing roster cementing corporate treasury adoption as structural demand floor.", source: "r/Bitcoin score=10 · 3.3h" },
          { rating: 3, headline: "Metaplanet moves 4,986 BTC worth $368M to new wallets amid 12% stock slide", detail: "Japanese BTC treasury company shuffling holdings — likely internal wallet reorganization not selling. Stock down 12% on treasury shift headlines, but BTC position intact. Watch for next purchase announcement.", source: "r/CryptoCurrency score=23 · 2.4h" },
          { rating: 2, headline: "BTC recovering to $74,162 (+0.6% from 8am) — bears still watch $73,726 MVRV support", detail: "Price stabilizing mid-session after morning dip to $73,705. Volume on old coins 'incredibly silent' as market tests $74K range. Clean consolidation zone before next directional move.", source: "COMPOSIO_SEARCH_FINANCE live / r/Bitcoin score=130" },
          { rating: 2, headline: "Crypto ATM fraud losses surge 33% in 2025 as AI-powered scams accelerate — CertiK", detail: "Risk signal for retail: AI-enabled scams becoming most dangerous Bitcoin onramp threat. CertiK data shows institutional-grade attacks now targeting crypto ATM users. Not macro bearish but security friction rising.", source: "r/CryptoCurrency score=13 · 1.8h" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "Ethereum surges 8% to $2,361 — high-volume breakout could push ETH to $2,600+", detail: "FXLeaders Mar 17: ETH broke key resistance on strong volume. Analysts now targeting $2,600+ as next zone. BlackRock ETHB momentum + Pectra upgrade proximity + reduced EF sell pressure forming a bullish triple catalyst.", source: "Exa / FXLeaders Mar 17" },
          { rating: 4, headline: "Ethereum price: road to $2,800 cleared after key resistance breakout", detail: "FXEmpire analysis: ETH cleared the critical $2,200 pivot. Next technical resistance $2,400 then $2,800. 20% rally scenario now the primary analyst case — not the bull case.", source: "Exa / FXEmpire Mar 16" },
          { rating: 3, headline: "ETH Squeeze Dashboard trending on r/ethereum — supply dynamics in focus", detail: "Community tracking ETH staking supply squeeze: 37.8M ETH locked in staking (all-time high) creating structural supply constraint. Dashboard showing squeeze intensity building.", source: "r/ethereum score=27 · 22h" },
          { rating: 3, headline: "Ethereum price signals major breakout — 20% rally coming next?", detail: "Coinpedia Mar 16: multiple technical indicators aligned for continuation. ETHB inflows, staking ATH, and Vitalik's node simplification proposal all adding medium-term bullish weight.", source: "Exa / Coinpedia Mar 16" },
          { rating: 2, headline: "PayPal officially enables stablecoin access in 70 countries", detail: "Ethereum-based PYUSD and broader stablecoin ecosystem expanding globally. PayPal's 70-country rollout signals mainstream financial infrastructure adopting ETH-layer stablecoins — bullish for ETH as settlement layer.", source: "r/CryptoCurrency score=15 · 3.5h" },
          { rating: 1, headline: "Carry-forward: ETHB $107M AUM (day 2), Culper Research short open, EF sell pressure watch. $2,400 breakout level key for next leg confirmation.", isCarryForward: true },
        ],
      },
    ],
  },
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