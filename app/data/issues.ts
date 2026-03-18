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
          { rating: 5, headline: "SEC formally declares 18 crypto assets as digital commodities — NOT securities (first-ever definitions)", detail: "r/CryptoCurrency score=241, 11h. The SEC issued its first-ever formal definitions distinguishing crypto securities from digital commodities. 18 named assets now have regulatory certainty. This is the follow-through from yesterday's joint SEC/CFTC guidance. Bloomberg notes SEC policy is now 'adding weight to the digital commodity argument for utility-driven assets.' Institutional clearing path now open for BTC spot trading infrastructure.", source: "r/CryptoCurrency score=241 + r/ethereum score=23 + @AlgooshPortal" },
          { rating: 4, headline: "Netherlands farm uses Bitcoin mining to stabilize greenhouse temperatures — agricultural BTC utility live", detail: "r/Bitcoin score=556, 10.1h — top post on r/Bitcoin this morning. Dutch farm uses waste heat from BTC mining for climate control. Real-world productive use beyond pure PoW narrative. Signals BTC mining as infrastructure utility layer, not just block reward speculation.", source: "r/Bitcoin score=556 · 10.1h" },
          { rating: 4, headline: "Bhutan moves $72M in BTC — total transfers exceed $110M as sovereign hodlers stay active", detail: "Bhutan quietly moved $72M in Bitcoin overnight, total now $110M+. Sovereign treasury activity remains active even as price pulls back to $72,385. Nation-state accumulation story intact alongside MicroStrategy/Metaplanet corporate stack.", source: "@Btcexpertindia (Twitter) · 8am scan" },
          { rating: 4, headline: "U.S. banks partner with zkSync to launch Cari Network — tokenized deposits + blockchain payments", detail: "@TheDailyBitcoin score=49: US banks partnering with zkSync (Ethereum L2) to launch Cari Network — tokenized bank deposits on blockchain. First major US bank blockchain payment network. Confirms bank-level adoption of ETH ecosystem infrastructure alongside Mastercard BVNK.", source: "@TheDailyBitcoin Twitter · 8am" },
          { rating: 3, headline: "Bloomberg: Bitcoin outperforms during war — macro safe-haven narrative gaining institutional coverage", detail: "Bloomberg Crypto Mar 17 feature: BTC outperforms traditional assets during geopolitical conflict. r/Bitcoin score=37. Reinforces institutional thesis that BTC is becoming uncorrelated macro hedge alongside gold. Citi lowered 12-month price forecast on crypto bill impasse — short-term headwind but long-term fundamentals cited as intact.", source: "r/Bitcoin score=37 + Motley Fool + Citi" },
          { rating: 3, headline: "Binance hits 300M registered users — largest crypto exchange milestone ever", detail: "@CryptoNewsHntrs score=26 blockchain: Binance first crypto company to reach 300M registered users. Structural user base for crypto onboarding now dwarfs most traditional brokerages. Macro adoption signal as prices pull back.", source: "@CryptoNewsHntrs Twitter blockchain" },
          { rating: 2, headline: "BTC opens 8am at $72,385 (-2.1%) — overnight pullback from $74K, still above key $72K support", detail: "BTC opened down 2.1% from yesterday's 6pm $74,272 close. Day range to watch: $71,500 support (local low Mar 14) vs $73,800 resistance. ETF streak still intact but profit-taking pressure visible. Clean support test in progress.", source: "COMPOSIO_SEARCH_FINANCE live · 8am CT" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 5, headline: "Ethereum Foundation sells 5,000 ETH ($10.38M) to BitMine via OTC — supply dynamics and Ethereum Foundation mandate published", detail: "@cryptodotnews eng=42 + @cryptothedoggy eng=30: Ethereum Foundation executed a $10.38M OTC sale of 5,000 ETH directly to BitMine (the institutional accumulator). Simultaneously, EF published new mandate formalizing commitment to censorship resistance and privacy. Supply absorbed by institutional buyer = no market dump. EF mandate = governance clarity.", source: "@cryptodognews + @cryptothedoggy Twitter · 8am" },
          { rating: 5, headline: "BlackRock launches iShares Staked Ethereum Trust ($ETHB) — institutional staking product live", detail: "@thecoinzonecom eng=28: BlackRock's $ETHB will stake its ETH holdings — first major US asset manager to offer staked ETH exposure. Grayscale Ethereum Mini Trust separately staked 57,600 ETH ($121.6M) overnight. Dual institutional staking events in one morning = structural supply sink at scale.", source: "@thecoinzonecom + @CryptoNewsHntrs Twitter · 8am" },
          { rating: 4, headline: "Grayscale stakes 57,600 ETH ($121.6M) — institutional ETH staking volume surging", detail: "Grayscale's Ethereum Mini Trust staked 57,600 ETH worth $121.6M overnight. Combined with BlackRock $ETHB launch, institutional ETH staking volume today exceeds $130M. ETH in staking contracts is supply removed from market — bullish structural.", source: "@CryptoNewsHntrs Twitter · 8am" },
          { rating: 4, headline: "Vitalik promotes node software simplification update — Ethereum L1 decentralization roadmap advancing", detail: "@CryptoCortexTR: Vitalik Buterin actively promoting an update to simplify Ethereum node software, lowering hardware requirements for solo validators. Pairs with FCR (Fast Confirmation Rule) proposal gaining traction on r/ethereum (score=12). Both signal post-Pectra L1 health improvements.", source: "@CryptoCortexTR Twitter + r/ethereum score=12" },
          { rating: 3, headline: "SEC securities clarity = Ethereum-based utility tokens get regulatory green light alongside BTC commodities", detail: "The SEC's 18-asset digital commodity list + formal securities definitions creates a dual-track regulatory framework. ETH (post-Merge PoS) broadly expected to benefit from 'commodity' classification momentum. Clears DeFi legal uncertainty for institutional ETH-native products.", source: "r/CryptoCurrency score=241 + r/ethereum score=23" },
          { rating: 2, headline: "ETH opens 8am at $2,239 (-3.4%) — deeper pullback than BTC; $2,250 support now being tested", detail: "ETH dropped 3.4% overnight, deeper than BTC's 2.1%. $2,250 support zone (confirmed yesterday) now under test. Pectra upgrade proximity + dual institutional staking events = structural support. $2,400 target unchanged, but needs $2,250 to hold as floor.", source: "COMPOSIO_SEARCH_FINANCE live · 8am CT" },
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
          { rating: 4, headline: "SEC and CFTC unveil new crypto guidance — most digital assets are NOT securities", detail: "Landmark regulatory clarification from both agencies simultaneously. This removes the Howey test ambiguity hanging over most crypto assets and gives exchanges, ETF issuers, and institutional custodians the legal certainty they needed. Reddit r/CryptoCurrency score=68, 2.3h old — fast-rising.", source: "r/CryptoCurrency score=68 · 2.3h" },
          { rating: 4, headline: "Mastercard to acquire crypto startup BVNK for up to $1.8B — largest stablecoin deal to date", detail: "Mastercard paying up to $1.8B for BVNK, the institutional stablecoin payments layer. This is the biggest crypto M&A in stablecoin infrastructure and confirms Visa-rival commitment to blockchain settlement rails. Massive signal for ETH-based USDC/USDT volume.", source: "r/CryptoCurrency score=58 · 5.4h" },
          { rating: 4, headline: "BTC ETF 6-day consecutive inflow streak — longest since October, biggest week since January", detail: "US spot Bitcoin ETFs now recording their longest inflow run in 5 months. BTC rebounded 12%+ from monthly lows with $1.1B in 3-day flows. Institutional demand structurally intact even as spot price consolidates.", source: "Exa / CoinCentral / ainvest · Mar 17" },
          { rating: 4, headline: "Square activates Bitcoin payments by default for most US sellers starting March 30", detail: "Block's Square merchant network (millions of US sellers) now defaults to accepting BTC. Most significant mainstream commercial adoption step since PayPal 2020. Combines with PayPal's 70-country stablecoin rollout for macro-level financial infrastructure shift.", source: "r/Bitcoin score=91 · 7.6h" },
          { rating: 3, headline: "UK man reports wife used CCTV footage to steal $176M in Bitcoin — custody security spotlight", detail: "Bizarre but high-signal story: $176M BTC theft via domestic CCTV surveillance. Reinforces self-custody security importance as holdings scale. Top post r/CryptoCurrency today (score=146). Not macro-moving but highlights custody risk narrative.", source: "r/CryptoCurrency score=146 · 7.6h" },
          { rating: 3, headline: "Australian Senate Bitcoin integration bill + corporate 1.2M BTC milestone — regulatory tailwinds building", detail: "Australia endorsement gaining momentum (score climbed to 299 by 6pm). Pairs with 50+ public companies now holding ~1.2M BTC. Nation-state and corporate adoption converging on dual-vector demand floor.", source: "r/Bitcoin score=299 · 12.6h" },
          { rating: 2, headline: "BTC closes 6pm session at $74,272 — consolidating near Monday highs above $75K", detail: "Day's range roughly $73,700–$75,100. Volume on old coins remained low throughout session. No major liquidation cascades. Clean technical consolidation ahead of Wednesday open.", source: "COMPOSIO_SEARCH_FINANCE live" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "Ethereum rallies to 6-week price peak on strong ETF demand and BitMine's massive accumulation", detail: "ETH hit a 6-week high today. BitMine's large ETH accumulation + ETHB ETF demand surge combining for structural supply squeeze. Bloomberg confirms ETH is now the #2 institutional target behind BTC.", source: "Exa / Bloomberg · Mar 17" },
          { rating: 4, headline: "ETH $2,400 break incoming? TradingView analysis flags upside run intensifying", detail: "TradingView Mar 17: upside momentum building with $2,400 as key next level. A clean close above $2,400 would signal continuation toward the $2,600–$2,800 target zone flagged by FXLeaders and FXEmpire this morning.", source: "Exa / TradingView · Mar 17" },
          { rating: 4, headline: "Majors post 11% weekly gains as Bitcoin tests $75K — ETH leading altcoin recovery", detail: "ETH up 11%+ on the week, outpacing BTC on a % basis. ADA and other majors following. ETH reclaiming $2,250 as new support. Bull run target analysis pointing to $2,800–$3,200 range.", source: "Exa / NBTC News / coinpedia · Mar 17" },
          { rating: 3, headline: "Motley Fool asks 'Is it too late to buy ETH in 2026?' — mainstream media legitimacy signal", detail: "Mainstream investment media now actively covering ETH as a buy-thesis asset, not just a speculation vehicle. This signals the narrative transition from risk-asset to institutional-grade digital commodity is accelerating.", source: "Exa / Motley Fool · Mar 17" },
          { rating: 3, headline: "Mastercard BVNK acquisition bullish for ETH settlement layer and USDC/USDT volume", detail: "BVNK operates primarily on Ethereum-compatible rails. Mastercard's $1.8B commitment means ETH-based stablecoin settlement volume will accelerate as a global payment infrastructure layer.", source: "r/CryptoCurrency score=58 · 5.4h" },
          { rating: 2, headline: "FCR (Fast Confirmation Rule) proposal gaining attention on r/ethereum — L1 scalability roadmap", detail: "Ethereum research community discussing Fast Confirmation Rule for faster transaction finality at L1. Part of ongoing Pectra + post-Pectra roadmap. Long-term bullish for ETH as smart contract settlement layer.", source: "r/ethereum score=8 · 9.4h" },
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
          { rating: 4, headline: "BTC hits $75K — 6-week high — then pulls back to $73,705 (-1.54%)", detail: "BTC briefly breached $75K for the first time since late January, hitting a 6-week high before retracing. Pullback is technical — $75K zone is a well-known resistance level. Watch for consolidation and retest.", source: "COMPOSIO_SEARCH_FINANCE live" },
          { rating: 4, headline: "$1.06B in BTC fund inflows — Iran geopolitical premium driving safe-haven demand", detail: "Largest single-day ETF inflow tied to geopolitical risk premium — Iran tensions triggering institutional flight to BTC as macro hedge. Confirms BTC narrative shift from risk-on to geopolitical safe haven.", source: "Exa / cryptonews Mar 17" },
          { rating: 3, headline: "Australian Senate endorses bill to integrate Bitcoin into financial system", detail: "Major legislative signal: Australian Senate committee recommends formal Bitcoin integration framework. Joins US Strategic Reserve bill and El Salvador as nation-state adoption momentum expands globally.", source: "Exa / decrypt Mar 17" },
          { rating: 3, headline: "El Salvador mandates Bitcoin education for all students aged 7+", detail: "El Salvador escalating national Bitcoin adoption: compulsory curriculum for all school-age children. Grassroots generational adoption being institutionalized at the education layer.", source: "Exa / bitcoinmagazine Mar 17" },
          { rating: 3, headline: "Saylor signaling more Strategy BTC buys incoming", detail: "Michael Saylor posting accumulation signals again. Strategy's Monday tracker typically precedes Tuesday purchase announcements. Watch for another 9-figure BTC add this week.", source: "r/Bitcoin score=45" },
          { rating: 2, headline: "⚠ Bull trap warning: $75K 6-week high + pullback pattern raises caution flags", detail: "Contrarian signal: touching 6-week highs then pulling back is a classic bull trap setup. Volume and follow-through on the next attempt will be key. Don't chase — wait for confirmed break and hold above $75K.", isNoise: true },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "ETH at $2,317 (-1.47%) digesting yesterday's +12% breakout surge", detail: "ETH consolidating the massive Monday move. -1.47% pullback after +12% is healthy — not a reversal. Week 2 recovery rally structure intact. ETH still outperforming BTC on the broader move.", source: "COMPOSIO_SEARCH_FINANCE live" },
          { rating: 4, headline: "BlackRock ETHB AUM hits $107M — day 2 momentum holds", detail: "$107M day-one + continued inflows day two confirms durable institutional demand, not a one-day curiosity. ETHB is on track to be the fastest-growing spot ETH ETF product. Yield-bearing ETF template being validated.", source: "Exa / coindesk Mar 17" },
          { rating: 3, headline: "$2,400 key resistance level in focus — @TedPillows flags to 280K followers", detail: "Major crypto analyst with 280K following identifies $2,400 as the make-or-break level. Break above = next leg confirmed. Rejection = support retest at $2,200. This level being watched by significant market participation.", source: "r/ethereum score=18" },
          { rating: 3, headline: "Robert Kiyosaki publicly adds ETH conviction — 2.8M follower reach", detail: "Rich Dad Poor Dad author publicly flagging ETH alongside BTC and gold. 2.8M audience reach amplifies retail attention. Kiyosaki has been a consistent early signal for retail FOMO waves.", source: "Exa / coinpedia Mar 17" },
          { rating: 1, headline: "Carry-forward: ETHB $46M AUM day-2, Culper Research short still open, EF sell pressure ongoing. $2,400 is the key next breakout confirmation level.", isCarryForward: true },
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
          { rating: 4, headline: "8 consecutive green sessions — first streak since October 2025", detail: "BTC closes green for 8th straight session, matching the longest streak in 5 months. Momentum is building structurally — this isn't noise.", source: "Exa / cryptonews Mar 16" },
          { rating: 4, headline: "Whale accumulation at 6-year high — smart money loading", detail: "On-chain data: large wallet accumulation at highest levels since 2020. Not distribution — accumulation. The hands holding the most BTC are adding, not selling into this rally.", source: "Exa / glassnode Mar 16" },
          { rating: 3, headline: "BTC outperforming gold during geopolitical stress", detail: "For the first time in this cycle, BTC is beating gold as a macro hedge during active geopolitical risk-on. The narrative of BTC as digital gold is gaining institutional traction in real time.", source: "Exa / bloomberg Mar 16" },
          { rating: 3, headline: "Bitwise: institutional holders not selling into the rally", detail: "ETF inflows being held — not flipped. Institutional diamond hands confirmed. Bitwise data shows near-zero redemption activity despite significant price appreciation this week.", source: "Exa / bitwise.com Mar 16" },
          { rating: 3, headline: "20 EU banks entering crypto post-MiCA", detail: "European banking expansion accelerating. Post-MiCA regulatory clarity opening the floodgates — 20 EU banks building crypto onramps. Broad institutional infrastructure incoming across the continent.", source: "Exa / coindesk Mar 16" },
          { rating: 2, headline: "IRS Form 1099-DA goes live — crypto tax compliance era begins", detail: "Exchanges must now formally report digital asset transactions to the IRS. Compliance infrastructure maturing signals legitimization — and likely pulls more institutional capital off the sidelines.", source: "Exa / irs.gov Mar 16" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "BlackRock ETHB hits $46M AUM in 2 days — sets PoS ETF template globally", detail: "$107M day-one + $46M more by day two = $153M AUM in 48 hours. ETHB is setting the institutional template for yield-bearing PoS ETF products. SOL, ADA, and others will follow this playbook.", source: "Exa / coindesk Mar 16" },
          { rating: 3, headline: "Vitalik proposes node simplification — lower solo-staking barrier", detail: "Vitalik's new architecture proposal would reduce node hardware requirements significantly, widening the validator set and strengthening decentralization. Positive long-term signal for ETH network health.", source: "Exa / ethereum.org Mar 16" },
          { rating: 3, headline: "Pectra upgrade timeline intersects with AI-on-chain demand surge", detail: "Ethereum's next major upgrade aligns with growing demand for AI inference and data storage on-chain. Developer momentum building at the intersection of two major macro trends.", source: "Exa / ethresear.ch Mar 16" },
          { rating: 2, headline: "⚠ Aave sees $27M liquidation amid ETH volatility", detail: "Large DeFi liquidation event triggered by ETH's rapid +8% move. Leverage is building in the ecosystem — monitor positions. Rapid ETH price moves can cascade into protocol-level liquidations.", isNoise: true },
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
          { rating: 4, headline: "Strategy acquires 22,337 BTC for $1.57B — total now 761,068 BTC", detail: "MicroStrategy (now Strategy) made its largest single purchase of 2026, bringing total holdings to 761,068 BTC worth ~$55.9B at current prices. Corporate accumulation accelerating — not slowing.", source: "Exa / bitcoinmagazine Mar 16" },
          { rating: 4, headline: "BlackRock Bitcoin ETF sees $600M single-day inflow", detail: "IBIT logs its largest single-day inflow since launch. $600M in one session confirms institutional demand is structural — not speculative. Outpacing all other ETF products by 3x.", source: "Exa / coindesk Mar 16" },
          { rating: 3, headline: "13 governments now mining Bitcoin — nation-state adoption accelerating", detail: "From El Salvador to Bhutan to the US Strategic Reserve, sovereign Bitcoin mining and accumulation is now a global trend. BTC is becoming a nation-state reserve asset in real time.", source: "Exa / bitcoin.org Mar 16" },
          { rating: 3, headline: "BTC breaks above 200-day moving average", detail: "Key technical confirmation: BTC reclaimed its 200-DMA for the first time since December 2025. Historically, this level acts as the macro bull/bear threshold — reclaiming it is a significant technical signal.", source: "COMPOSIO_SEARCH_FINANCE live" },
          { rating: 2, headline: "Senator Lummis pushes BTC Strategic Reserve bill forward", detail: "The US Bitcoin Strategic Reserve legislation advancing in committee. Lummis-Gillibrand framework gaining co-sponsors. If passed, US Treasury would acquire BTC systematically — nation-state demand floor.", source: "Exa / axios Mar 16" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "BlackRock launches ETHB staked ETH ETF — $107M AUM on day one", detail: "BlackRock's staked Ethereum ETF (ETHB) launches with $107M AUM on day one — the largest institutional ETH product launch in history. Sets the template for PoS yield-bearing ETF products globally.", source: "Exa / coindesk Mar 16" },
          { rating: 4, headline: "Erik Voorhees buys 33,544 ETH ($71M) — largest single wallet purchase of 2026", detail: "ShapeShift founder making a massive single-wallet ETH accumulation. $71M buy from a crypto OG signals deep conviction in ETH's current valuation. Smart money positioning at scale.", source: "Exa / decrypt Mar 16" },
          { rating: 3, headline: "ETH breaks $2,200 resistance — next target $2,500", detail: "ETH reclaimed the critical $2,200 level on strong volume. Technical analysts widely targeting $2,500 as the next resistance zone. Clean breakout structure — higher lows building.", source: "COMPOSIO_SEARCH_FINANCE live" },
          { rating: 2, headline: "Culper Research opens short position on ETH ETF products", detail: "Contrarian signal: Culper Research (known for accurate shorts) has opened a short on ETH ETF products. Not a macro bearish call — a specific thesis around ETF structure and fee drag. Watch for their full report.", isNoise: true },
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
          { rating: 4, headline: "Strategic Bitcoin Reserve EO signed — US government now officially accumulating BTC", detail: "President Trump signed the Strategic Bitcoin Reserve executive order, directing the US Treasury to accumulate Bitcoin from seized assets and explore additional acquisition mechanisms. First G7 nation to hold BTC as a reserve asset.", source: "Exa / whitehouse.gov Mar 7" },
          { rating: 3, headline: "MicroStrategy rebrands to Strategy — doubles down on Bitcoin identity", detail: "MicroStrategy officially rebranded to \"Strategy\" to reflect its Bitcoin-first corporate identity. Now holds 499,226 BTC ($42.6B). The company is essentially a leveraged Bitcoin vehicle masquerading as a software firm.", source: "Exa / strategy.com" },
          { rating: 3, headline: "Eric Trump signals family backing for BTC accumulation", detail: "Eric Trump publicly endorsing Bitcoin accumulation, aligning Trump family brand with BTC. With the Strategic Reserve EO already signed, this signals continued White House support for Bitcoin over the 4-year term.", source: "Exa / foxbusiness Mar 13" },
          { rating: 2, headline: "Bitcoin dominance at 61.2% — altcoins lagging", detail: "BTC.D holding elevated at 61.2% suggests capital is rotating into Bitcoin first, not spreading to altcoins yet. This is typically early-cycle behavior — BTC leads, alts follow with a lag.", source: "COMPOSIO_SEARCH_FINANCE live" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 3, headline: "Ethereum Foundation sells 100 ETH — routine or signal?", detail: "The Ethereum Foundation moved 100 ETH to exchanges. Historically, EF sales have preceded local tops. Small amount ($207K), but the pattern is worth tracking. Next EF wallet move could be a timing signal.", source: "Exa / etherscan Mar 14" },
          { rating: 3, headline: "ETH/BTC ratio at multi-year low — underperformance creating accumulation opportunity", detail: "ETH is underperforming BTC significantly — ETH/BTC ratio near lows not seen since 2020. This divergence historically resolves with an ETH catch-up rally. Current price ($2,075) may represent deep value relative to BTC.", source: "COMPOSIO_SEARCH_FINANCE live" },
          { rating: 2, headline: "Pectra upgrade delayed to Q2 2026 — developer timeline risk", detail: "Ethereum's Pectra hard fork pushed back again. Execution layer improvements and EIP-7702 (account abstraction) delayed to Q2. Developer execution risk remains an overhang on ETH price vs BTC.", source: "Exa / ethereum.org Mar 10" },
        ],
      },
    ],
  },
];
