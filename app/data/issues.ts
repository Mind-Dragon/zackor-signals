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
    id: "2026-03-18-noon",
    issueNumber: 8,
    date: "March 18, 2026",
    time: "Noon CT",
    btcPrice: "$71,351",
    btcChange: "3.50%",
    btcUp: false,
    ethPrice: "$2,182",
    ethChange: "5.88%",
    ethUp: false,
    sections: [
      {
        icon: "₿",
        title: "Bitcoin",
        signals: [
          { rating: 4, headline: "Bitcoin ETF collateral approved + inflows surge + MicroStrategy buy — triple institutional catalyst this morning", detail: "Exa Mar 18: Bitcoin ETF collateral approved for use (new) alongside continued inflow surge. MicroStrategy made another large BTC purchase. Combined institutional signal: ETF inflows have now been positive for 7+ consecutive days, ETF collateral approval unlocks new institutional use cases (pledging BTC ETF shares as collateral at custodians). Fortune confirms current BTC price at $71,351 down from morning's $72,385.", source: "Exa: Bitcoin ETF News Collateral Approved + Inflows Surge + MicroStrategy Mar 18" },
          { rating: 4, headline: "BTC correlation with tech stocks flipped NEGATIVE since US–Iran War — macro decoupling signal", detail: "You.com: Bitcoin correlation with tech stocks turned negative since the outbreak of the US–Iran war. This is the clearest on-record demonstration of BTC behaving as an uncorrelated macro hedge distinct from equities. Bloomberg 'Bitcoin Outperforms During War' (r/Bitcoin score=41) pairs with this — BTC now diverging from Nasdaq during geopolitical stress events.", source: "You.com BTC scan + r/Bitcoin score=41 · Bloomberg Crypto" },
          { rating: 4, headline: "Crypto weekly ETF inflows hit $1.06B — Bitcoin dominates institutional flows", detail: "You.com + Exa: Crypto ETF weekly inflows reached $1.06B with Bitcoin dominating. Self-directed investors still driving demand (Morgan Stanley data via FinanceFeeds). $79K BTC price would make all spot ETF holders whole again (Times News Network, Exa). 6-day inflow streak confirmed from 8am data, now extended.", source: "You.com / Exa Mar 18 · FinanceFeeds Morgan Stanley" },
          { rating: 4, headline: "SEC formally declares 18 crypto assets as digital commodities — community reaction surging (r/CC score now 304→1726)", detail: "The SEC's 18-asset commodity declaration continues to drive top engagement on r/CryptoCurrency. Score climbed from 241 (8am) to 304+ with separate SBF thread dominating at score=1726. Long-term: institutional custodians can now offer BTC as collateral (ETF collateral approval above), regulated spot ETF expansion now clearer. UK also moved to ban crypto donations in politics (score=62, 7.9h) — regulatory noise globally.", source: "r/CryptoCurrency score=304/1726 + Reuters + r/ethereum score=25" },
          { rating: 3, headline: "Nigel Farage increases stake in Stack BTC — UK political figure adds to BTC treasury position", detail: "r/Bitcoin score=21, 6.2h: Nigel Farage (UK political leader) increased his stake in Stack BTC, the Bitcoin treasury company. Political-class adoption signal in the UK even as UK proposes crypto donation bans. BTC power law reaffirmed in morning analysis thread (r/Bitcoin score=74).", source: "r/Bitcoin score=21 · 6.2h" },
          { rating: 3, headline: "Bitrefill hacked — Lazarus Group (North Korea) suspected", detail: "r/CryptoCurrency score=11, 5.5h: Bitrefill (crypto gift card/bill pay service) suffered a hack, suspected to be Lazarus Group (North Korean state-sponsored). On-chain security signal — Lazarus continues to target crypto infrastructure. Routine OPSEC alert for anyone using centralized crypto payment services.", source: "r/CryptoCurrency score=11 · 5.5h" },
          { rating: 2, headline: "BTC noon update: $71,351 (-3.5%) — accelerating pullback from $72,385 morning open", detail: "BTC continued sliding through the morning session, now at $71,351 (-3.5% daily). Exchange inflows spiked as BTC rally halted at $75K (Exa). $71,500 support (identified at 8am) briefly broken — next support: $70,000 psychological. Bitcoin Optech Newsletter #396 podcast recap circulating (r/Bitcoin score=12) — healthy ecosystem maintenance signal.", source: "COMPOSIO_SEARCH_FINANCE live · noon CT" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "Ethereum staking at 30% of total supply — float tightening structurally, Vitalik pushes '1-click staking' after Foundation stakes 72K ETH", detail: "Exa Mar 17-18: ETH staking has reached 30% of total supply (Investing.com). EF staked 72,000 ETH total (bigger than yesterday's 5K OTC sale reveal — the full staking context). Vitalik now pushing for '1-click' Ethereum staking UX improvement post-Foundation move. 30% staking = 30% of circulating ETH locked, tightening available float dramatically. Structurally bullish for price recovery.", source: "Exa: Ethereum Staking 30% Supply Investing.com Mar 17 + Vitalik 1-click Mar 17" },
          { rating: 4, headline: "BlackRock ETHB live — earns monthly rewards via staked Ethereum ETF (confirmed launch details)", detail: "Exa Mar 17: BlackRock ETHB officially described as 'earn monthly rewards with staked Ethereum ETF.' First US institutional product paying staking yield to ETF holders. This changes the ETH investment thesis for traditional finance: ETH is now a yielding asset within regulated ETF wrappers, not just price exposure.", source: "Exa: BlackRock Launches ETHB Earn Monthly Rewards Mar 17" },
          { rating: 4, headline: "Ethereum ETF now live + FOMC outlook key catalyst — price at $2,182, ETH sitting on structural support", detail: "Exa Mar 18: 'Ethereum Price March 2026: ETH at $2,327 [now $2,182], ETF Live, FOMC Outlook.' FOMC meeting in view — rate decision could be a major catalyst. ETH deepened to -5.9% today vs BTC's -3.5%. $2,000 psychological support is the next major floor if $2,150 breaks.", source: "Exa: Ethereum Price March 2026 ETF Live FOMC Mar 18" },
          { rating: 3, headline: "$800M ETH sell-off vs $2,300 rally — liquidity battle ongoing", detail: "Exa Mar 17: 'ETH's $800M Sell-Off vs. $2,300 Rally: The Liquidity Battle' — analysis of the tug-of-war between large sellers and institutional buyers. Today's -5.9% decline suggests sellers won the morning session. But 30% staking supply lock + BlackRock ETHB launch + Grayscale 57K ETH staked = structural buyers building at scale.", source: "Exa: ETH $800M Sell-Off vs $2,300 Rally Mar 17" },
          { rating: 3, headline: "SEC crypto securities clarity = Ethereum gets commodity momentum — regulatory path clearing for DeFi", detail: "SEC's 18-asset commodity declaration (r/CC score=304, r/ethereum score=25) and the joint SEC/CFTC guidance issued yesterday both move ETH toward commodity classification (post-Merge PoS). DeFi legal uncertainty reduced. ETH-based utility token ecosystem gets regulatory green light alongside BTC. Long-term institutional DeFi deployment now has clearer legal basis.", source: "r/CryptoCurrency score=304 + r/ethereum score=25 + Reuters" },
          { rating: 2, headline: "ETH noon update: $2,182 (-5.9%) — deeper pullback than BTC; $2,150 support critical", detail: "ETH dropped to $2,182, underperforming BTC (-3.5% vs -5.9%). $2,250 support identified at 8am failed by noon. Next critical level: $2,150 (previous consolidation zone) then $2,000 psychological. FOMC outlook is the macro catalyst to watch for recovery trigger. Citi lowered 12-month ETH forecast on crypto bill impasse — short-term headwind.", source: "COMPOSIO_SEARCH_FINANCE live · noon CT" },
        ],
      },
    ],
  },
  {
    id: "2026-03-18-8am",
    issueNumber: 7,
    date: "March 18, 2026",
    time: "8am CT",
    btcPrice: "$72,385",
    btcChange: "2.10%",
    btcUp: false,
    ethPrice: "$2,239",
    ethChange: "3.43%",
    ethUp: false,
    sections: [
      {
        icon: "₿",
        title: "Bitcoin",
        signals: [
          { rating: 4, headline: "SEC formally declares 18 crypto assets as digital commodities — NOT securities (first-ever definitions)", detail: "r/CryptoCurrency score=241, 11h. The SEC issued its first-ever formal definitions distinguishing crypto securities from digital commodities. 18 named assets now have regulatory certainty. Follow-through from yesterday's joint SEC/CFTC guidance. Bloomberg: SEC policy now adding weight to the digital commodity argument. Institutional clearing path now open.", source: "r/CryptoCurrency score=241 + r/ethereum score=23 + @AlgooshPortal" },
          { rating: 4, headline: "Netherlands farm uses Bitcoin mining to stabilize greenhouse temperatures — agricultural BTC utility live", detail: "r/Bitcoin score=556, 10.1h — top post on r/Bitcoin this morning. Dutch farm uses waste heat from BTC mining for climate control. Real-world productive use beyond pure PoW narrative. BTC mining as infrastructure utility layer.", source: "r/Bitcoin score=556 · 10.1h" },
          { rating: 4, headline: "Bhutan moves $72M in BTC — total transfers exceed $110M as sovereign hodlers stay active", detail: "Bhutan quietly moved $72M in Bitcoin overnight, total now $110M+. Sovereign treasury activity remains active even as price pulls back. Nation-state accumulation intact alongside MicroStrategy/Metaplanet corporate stack.", source: "@Btcexpertindia (Twitter) · 8am scan" },
          { rating: 4, headline: "U.S. banks partner with zkSync to launch Cari Network — tokenized deposits + blockchain payments", detail: "US banks partnering with zkSync (Ethereum L2) to launch Cari Network — tokenized bank deposits on blockchain. First major US bank blockchain payment network. Confirms bank-level adoption of ETH ecosystem infrastructure alongside Mastercard BVNK.", source: "@TheDailyBitcoin Twitter · 8am" },
          { rating: 3, headline: "Bloomberg: Bitcoin outperforms during war — macro safe-haven narrative gaining institutional coverage", detail: "Bloomberg Crypto Mar 17 feature: BTC outperforms traditional assets during geopolitical conflict. Reinforces institutional thesis that BTC is becoming uncorrelated macro hedge alongside gold. Citi lowered 12-month price forecast on crypto bill impasse — short-term headwind but long-term fundamentals intact.", source: "r/Bitcoin score=37 + Motley Fool + Citi" },
          { rating: 3, headline: "Binance hits 300M registered users — largest crypto exchange milestone ever", detail: "Binance first crypto company to reach 300M registered users. Structural user base for crypto onboarding now dwarfs most traditional brokerages. Macro adoption signal as prices pull back.", source: "@CryptoNewsHntrs Twitter blockchain" },
          { rating: 2, headline: "BTC opens 8am at $72,385 (-2.1%) — overnight pullback from $74K, still above key $72K support", detail: "BTC opened down 2.1% from yesterday's 6pm $74,272 close. Day range: $71,500 support vs $73,800 resistance. ETF streak intact but profit-taking pressure visible. Clean support test in progress.", source: "COMPOSIO_SEARCH_FINANCE live · 8am CT" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "Ethereum Foundation sells 5,000 ETH ($10.38M) to BitMine via OTC — no market dump; EF mandate published", detail: "Ethereum Foundation executed a $10.38M OTC sale of 5,000 ETH directly to BitMine (the institutional accumulator). Supply absorbed without market impact. EF simultaneously published new mandate formalizing commitment to censorship resistance and privacy.", source: "@cryptodognews + @cryptothedoggy Twitter · 8am" },
          { rating: 4, headline: "BlackRock launches iShares Staked Ethereum Trust ($ETHB) — first staked ETH product from major US asset manager", detail: "BlackRock's $ETHB will stake its ETH holdings — first major US asset manager to offer staked ETH exposure. Grayscale Ethereum Mini Trust separately staked 57,600 ETH ($121.6M) overnight. Dual institutional staking events in one morning = structural supply sink at scale.", source: "@thecoinzonecom + @CryptoNewsHntrs Twitter · 8am" },
          { rating: 4, headline: "Grayscale stakes 57,600 ETH ($121.6M) — institutional ETH staking volume surging", detail: "Grayscale's Ethereum Mini Trust staked 57,600 ETH worth $121.6M overnight. Combined with BlackRock $ETHB launch, institutional ETH staking volume today exceeds $130M. ETH in staking contracts = supply removed from market.", source: "@CryptoNewsHntrs Twitter · 8am" },
          { rating: 4, headline: "Vitalik promotes node software simplification — Ethereum L1 decentralization roadmap advancing", detail: "Vitalik Buterin actively promoting an update to simplify Ethereum node software, lowering hardware requirements for solo validators. Pairs with FCR (Fast Confirmation Rule) proposal gaining traction on r/ethereum (score=12). Both signal post-Pectra L1 health improvements.", source: "@CryptoCortexTR Twitter + r/ethereum score=12" },
          { rating: 3, headline: "SEC securities clarity = ETH and utility tokens get regulatory green light alongside BTC commodities", detail: "SEC's 18-asset digital commodity list + formal definitions creates dual-track regulatory framework. ETH (post-Merge PoS) broadly expected to benefit from commodity classification momentum. Clears DeFi legal uncertainty for institutional ETH-native products.", source: "r/CryptoCurrency score=241 + r/ethereum score=23" },
          { rating: 2, headline: "ETH opens 8am at $2,239 (-3.4%) — deeper pullback than BTC; $2,250 support now being tested", detail: "ETH dropped 3.4% overnight, deeper than BTC's 2.1%. $2,250 support zone now under test. Pectra upgrade proximity + dual institutional staking = structural support. $2,400 target unchanged — needs $2,250 to hold as floor.", source: "COMPOSIO_SEARCH_FINANCE live · 8am CT" },
        ],
      },
    ],
  },
  {
    id: "2026-03-17-6pm",
    issueNumber: 6,
    date: "March 17, 2026",
    time: "6pm CT",
    btcPrice: "$74,272",
    btcChange: "0.78%",
    btcUp: false,
    ethPrice: "$2,328",
    ethChange: "0.98%",
    ethUp: false,
    sections: [
      {
        icon: "₿",
        title: "Bitcoin",
        signals: [
          { rating: 4, headline: "SEC and CFTC unveil new crypto guidance — most digital assets are NOT securities", detail: "Landmark regulatory clarification from both agencies simultaneously. Removes the Howey test ambiguity hanging over most crypto assets and gives exchanges, ETF issuers, and institutional custodians the legal certainty they needed.", source: "r/CryptoCurrency score=68 · 2.3h" },
          { rating: 4, headline: "Mastercard to acquire crypto startup BVNK for up to $1.8B — largest stablecoin deal to date", detail: "Mastercard paying up to $1.8B for BVNK, the institutional stablecoin payments layer. Biggest crypto M&A in stablecoin infrastructure. Confirms Visa-rival commitment to blockchain settlement rails.", source: "r/CryptoCurrency score=58 · 5.4h" },
          { rating: 4, headline: "BTC ETF 6-day consecutive inflow streak — longest since October, biggest week since January", detail: "US spot Bitcoin ETFs now recording their longest inflow run in 5 months. BTC rebounded 12%+ from monthly lows with $1.1B in 3-day flows. Institutional demand structurally intact.", source: "Exa / CoinCentral / ainvest · Mar 17" },
          { rating: 4, headline: "Square activates Bitcoin payments by default for most US sellers starting March 30", detail: "Block's Square merchant network defaults to accepting BTC. Most significant mainstream commercial adoption step since PayPal 2020.", source: "r/Bitcoin score=91 · 7.6h" },
          { rating: 3, headline: "Australian Senate Bitcoin integration bill + corporate 1.2M BTC milestone — regulatory tailwinds building", detail: "Australia endorsement score climbed to 299 by 6pm. Pairs with 50+ public companies now holding ~1.2M BTC. Nation-state and corporate adoption converging.", source: "r/Bitcoin score=299 · 12.6h" },
          { rating: 2, headline: "BTC closes 6pm session at $74,272 — consolidating near Monday highs", detail: "Day's range roughly $73,700–$75,100. Volume on old coins remained low. No major liquidation cascades. Clean technical consolidation ahead of Wednesday open.", source: "COMPOSIO_SEARCH_FINANCE live" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "Ethereum rallies to 6-week price peak on strong ETF demand and BitMine accumulation", detail: "ETH hit a 6-week high today. BitMine's large ETH accumulation + ETHB ETF demand surge combining for structural supply squeeze. Bloomberg confirms ETH is now the #2 institutional target behind BTC.", source: "Exa / Bloomberg · Mar 17" },
          { rating: 4, headline: "ETH $2,400 break incoming? TradingView analysis flags upside run intensifying", detail: "TradingView Mar 17: upside momentum building with $2,400 as key next level. Clean close above $2,400 would signal continuation toward $2,600–$2,800.", source: "Exa / TradingView · Mar 17" },
          { rating: 4, headline: "Majors post 11% weekly gains — ETH leading altcoin recovery", detail: "ETH up 11%+ on the week, outpacing BTC on a % basis. ETH reclaiming $2,250 as new support. Bull run target analysis pointing to $2,800–$3,200 range.", source: "Exa / NBTC News / coinpedia · Mar 17" },
          { rating: 3, headline: "Mastercard BVNK acquisition bullish for ETH settlement layer and USDC/USDT volume", detail: "BVNK operates primarily on Ethereum-compatible rails. Mastercard's $1.8B commitment means ETH-based stablecoin settlement volume will accelerate.", source: "r/CryptoCurrency score=58 · 5.4h" },
          { rating: 2, headline: "FCR (Fast Confirmation Rule) proposal gaining attention on r/ethereum — L1 scalability roadmap", detail: "Ethereum research community discussing Fast Confirmation Rule for faster transaction finality at L1. Part of Pectra + post-Pectra roadmap.", source: "r/ethereum score=8 · 9.4h" },
          { rating: 1, headline: "Carry-forward: Culper Research short still open. ETHB AUM building. $2,400 close = key confirmation for next leg.", isCarryForward: true },
        ],
      },
    ],
  },
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
          { rating: 4, headline: "BTC ETF inflow streak hits 6 days — $1.1B in 3 days, biggest week since January", detail: "Bitcoin spot ETFs logging longest consecutive inflow streak since October 2025. BlackRock, Fidelity leading $1.1B in 3-day haul.", source: "Exa / crypto.news / ainvest Mar 17" },
          { rating: 4, headline: "Square enables Bitcoin payments by default for most US sellers starting March 30", detail: "Major merchant payments infrastructure shift: Square activating BTC payments for the majority of US seller base.", source: "r/Bitcoin score=10 · 1.6h" },
          { rating: 3, headline: "Australian Senate bill to integrate Bitcoin gains traction — score 219 on Reddit", detail: "Legislative momentum building. Australian Senate panel endorsement now the #2 top BTC post of the day.", source: "r/Bitcoin score=219 · 6.6h" },
          { rating: 3, headline: "50+ public companies now hold ~1.2M BTC — from near-zero in 2017", detail: "Landmark corporate accumulation milestone confirmed. Strategy (761K BTC), Metaplanet, and growing roster cementing demand floor.", source: "r/Bitcoin score=10 · 3.3h" },
          { rating: 3, headline: "Metaplanet moves 4,986 BTC worth $368M to new wallets amid 12% stock slide", detail: "Likely internal wallet reorganization, not selling. Stock down 12% on headlines but BTC position intact.", source: "r/CryptoCurrency score=23 · 2.4h" },
          { rating: 2, headline: "BTC recovering to $74,162 mid-session — MVRV support at $73,726", detail: "Price stabilizing after morning dip. Volume on old coins 'incredibly silent' as market tests $74K range.", source: "COMPOSIO_SEARCH_FINANCE live / r/Bitcoin score=130" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "Ethereum surges 8% to $2,361 — high-volume breakout could push ETH to $2,600+", detail: "FXLeaders Mar 17: ETH broke key resistance on strong volume. Analysts targeting $2,600+. BlackRock ETHB momentum + Pectra upgrade proximity + reduced EF sell pressure = bullish triple catalyst.", source: "Exa / FXLeaders Mar 17" },
          { rating: 4, headline: "Ethereum price: road to $2,800 cleared after key resistance breakout", detail: "FXEmpire analysis: ETH cleared the critical $2,200 pivot. 20% rally scenario now the primary analyst case.", source: "Exa / FXEmpire Mar 16" },
          { rating: 3, headline: "ETH Squeeze Dashboard trending on r/ethereum — 37.8M ETH locked at all-time high", detail: "Community tracking ETH staking supply squeeze at all-time high creating structural supply constraint.", source: "r/ethereum score=27 · 22h" },
          { rating: 2, headline: "PayPal officially enables stablecoin access in 70 countries", detail: "Ethereum-based PYUSD and broader stablecoin ecosystem expanding globally.", source: "r/CryptoCurrency score=15 · 3.5h" },
          { rating: 1, headline: "Carry-forward: ETHB $107M AUM (day 2), Culper Research short open, EF sell pressure watch. $2,400 breakout level key.", isCarryForward: true },
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
          { rating: 4, headline: "BTC hits $75K — 6-week high — then pulls back to $73,705 (-1.54%)", detail: "BTC briefly breached $75K for the first time since late January before retracing. Pullback is technical — $75K is a well-known resistance level.", source: "COMPOSIO_SEARCH_FINANCE live" },
          { rating: 4, headline: "$1.06B in BTC fund inflows — Iran geopolitical premium driving safe-haven demand", detail: "Largest single-day ETF inflow tied to geopolitical risk premium. Confirms BTC narrative shift from risk-on to geopolitical safe haven.", source: "Exa / cryptonews Mar 17" },
          { rating: 3, headline: "Australian Senate endorses bill to integrate Bitcoin into financial system", detail: "Major legislative signal: Australian Senate committee recommends formal Bitcoin integration framework.", source: "Exa / decrypt Mar 17" },
          { rating: 3, headline: "El Salvador mandates Bitcoin education for all students aged 7+", detail: "El Salvador escalating national Bitcoin adoption: compulsory curriculum for all school-age children.", source: "Exa / bitcoinmagazine Mar 17" },
          { rating: 3, headline: "Saylor signaling more Strategy BTC buys incoming", detail: "Michael Saylor posting accumulation signals again. Strategy's Monday tracker typically precedes Tuesday purchase announcements.", source: "r/Bitcoin score=45" },
          { rating: 2, headline: "⚠ Bull trap warning: $75K 6-week high + pullback pattern raises caution flags", detail: "Contrarian signal: touching 6-week highs then pulling back is a classic bull trap setup. Wait for confirmed break above $75K.", isNoise: true },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "ETH at $2,317 (-1.47%) digesting yesterday's +12% breakout surge", detail: "ETH consolidating the massive Monday move. -1.47% pullback after +12% is healthy — not a reversal.", source: "COMPOSIO_SEARCH_FINANCE live" },
          { rating: 4, headline: "BlackRock ETHB AUM hits $107M — day 2 momentum holds", detail: "$107M day-one + continued inflows day two confirms durable institutional demand. ETHB on track to be fastest-growing spot ETH ETF.", source: "Exa / coindesk Mar 17" },
          { rating: 3, headline: "$2,400 key resistance in focus — @TedPillows flags to 280K followers", detail: "Major crypto analyst identifies $2,400 as make-or-break level. Break above = next leg confirmed.", source: "r/ethereum score=18" },
          { rating: 3, headline: "Robert Kiyosaki publicly adds ETH conviction — 2.8M follower reach", detail: "Rich Dad Poor Dad author publicly flagging ETH. 2.8M audience reach amplifies retail attention.", source: "Exa / coinpedia Mar 17" },
          { rating: 1, headline: "Carry-forward: ETHB $46M AUM day-2, Culper Research short still open. $2,400 is the key breakout confirmation level.", isCarryForward: true },
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
          { rating: 4, headline: "8 consecutive green sessions — first streak since October 2025", detail: "BTC closes green for 8th straight session, matching the longest streak in 5 months.", source: "Exa / cryptonews Mar 16" },
          { rating: 4, headline: "Whale accumulation at 6-year high — smart money loading", detail: "On-chain data: large wallet accumulation at highest levels since 2020. Not distribution — accumulation.", source: "Exa / glassnode Mar 16" },
          { rating: 3, headline: "BTC outperforming gold during geopolitical stress", detail: "For the first time in this cycle, BTC is beating gold as a macro hedge during active geopolitical risk-on.", source: "Exa / bloomberg Mar 16" },
          { rating: 3, headline: "Bitwise: institutional holders not selling into the rally", detail: "ETF inflows being held — not flipped. Institutional diamond hands confirmed.", source: "Exa / bitwise.com Mar 16" },
          { rating: 3, headline: "20 EU banks entering crypto post-MiCA", detail: "Post-MiCA regulatory clarity opening the floodgates — 20 EU banks building crypto onramps.", source: "Exa / coindesk Mar 16" },
          { rating: 2, headline: "IRS Form 1099-DA goes live — crypto tax compliance era begins", detail: "Exchanges must now formally report digital asset transactions to the IRS.", source: "Exa / irs.gov Mar 16" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "BlackRock ETHB hits $46M AUM in 2 days — sets PoS ETF template globally", detail: "$107M day-one + $46M more by day two = $153M AUM in 48 hours. ETHB setting the institutional template for yield-bearing PoS ETF products.", source: "Exa / coindesk Mar 16" },
          { rating: 3, headline: "Vitalik proposes node simplification — lower solo-staking barrier", detail: "Vitalik's new architecture proposal would reduce node hardware requirements significantly.", source: "Exa / ethereum.org Mar 16" },
          { rating: 3, headline: "Pectra upgrade timeline intersects with AI-on-chain demand surge", detail: "Ethereum's next major upgrade aligns with growing demand for AI inference and data storage on-chain.", source: "Exa / ethresear.ch Mar 16" },
          { rating: 2, headline: "⚠ Aave sees $27M liquidation amid ETH volatility", detail: "Large DeFi liquidation triggered by ETH's rapid +8% move. Leverage building in the ecosystem.", isNoise: true },
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
          { rating: 4, headline: "Strategy acquires 22,337 BTC for $1.57B — total now 761,068 BTC", detail: "MicroStrategy (now Strategy) made its largest single purchase of 2026, bringing total holdings to 761,068 BTC.", source: "Exa / bitcoinmagazine Mar 16" },
          { rating: 4, headline: "BlackRock Bitcoin ETF sees $600M single-day inflow", detail: "IBIT logs its largest single-day inflow since launch. $600M in one session confirms institutional demand is structural.", source: "Exa / coindesk Mar 16" },
          { rating: 3, headline: "13 governments now mining Bitcoin — nation-state adoption accelerating", detail: "Sovereign Bitcoin mining and accumulation is now a global trend.", source: "Exa / bitcoin.org Mar 16" },
          { rating: 3, headline: "BTC breaks above 200-day moving average", detail: "BTC reclaimed its 200-DMA for the first time since December 2025. Key macro bull/bear threshold.", source: "COMPOSIO_SEARCH_FINANCE live" },
          { rating: 2, headline: "Senator Lummis pushes BTC Strategic Reserve bill forward", detail: "US Bitcoin Strategic Reserve legislation advancing in committee.", source: "Exa / axios Mar 16" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "BlackRock launches ETHB staked ETH ETF — $107M AUM on day one", detail: "The largest institutional ETH product launch in history. Sets the template for PoS yield-bearing ETF products globally.", source: "Exa / coindesk Mar 16" },
          { rating: 4, headline: "Erik Voorhees buys 33,544 ETH ($71M) — largest single wallet purchase of 2026", detail: "ShapeShift founder making a massive single-wallet ETH accumulation at $71M.", source: "Exa / decrypt Mar 16" },
          { rating: 3, headline: "ETH breaks $2,200 resistance — next target $2,500", detail: "ETH reclaimed the critical $2,200 level on strong volume. Technical analysts targeting $2,500.", source: "COMPOSIO_SEARCH_FINANCE live" },
          { rating: 2, headline: "Culper Research opens short position on ETH ETF products", detail: "Contrarian signal: Culper Research has opened a short on ETH ETF products — a specific thesis around ETF structure and fee drag.", isNoise: true },
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
      {
        icon: "₿",
        title: "Bitcoin",
        signals: [
          { rating: 4, headline: "Strategic Bitcoin Reserve EO signed — US government now officially accumulating BTC", detail: "President Trump signed the Strategic Bitcoin Reserve executive order. First G7 nation to hold BTC as a reserve asset.", source: "Exa / whitehouse.gov Mar 7" },
          { rating: 3, headline: "MicroStrategy rebrands to Strategy — doubles down on Bitcoin identity", detail: "MicroStrategy officially rebranded to Strategy. Now holds 499,226 BTC ($42.6B).", source: "Exa / strategy.com" },
          { rating: 3, headline: "Eric Trump signals family backing for BTC accumulation", detail: "Eric Trump publicly endorsing Bitcoin accumulation, aligning Trump family brand with BTC.", source: "Exa / foxbusiness Mar 13" },
          { rating: 2, headline: "Bitcoin dominance at 61.2% — altcoins lagging", detail: "BTC.D holding elevated at 61.2% suggests capital rotating into Bitcoin first.", source: "COMPOSIO_SEARCH_FINANCE live" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 3, headline: "Ethereum Foundation sells 100 ETH — routine or signal?", detail: "The Ethereum Foundation moved 100 ETH to exchanges. Pattern worth tracking.", source: "Exa / etherscan Mar 14" },
          { rating: 3, headline: "ETH/BTC ratio at multi-year low — underperformance creating accumulation opportunity", detail: "ETH/BTC ratio near lows not seen since 2020. Divergence historically resolves with ETH catch-up rally.", source: "COMPOSIO_SEARCH_FINANCE live" },
          { rating: 2, headline: "Pectra upgrade delayed to Q2 2026 — developer timeline risk", detail: "Ethereum's Pectra hard fork pushed back to Q2. Developer execution risk remains an overhang.", source: "Exa / ethereum.org Mar 10" },
        ],
      },
    ],
  },
];
