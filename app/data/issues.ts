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
    id: "2026-03-20-8am",
    issueNumber: 13,
    date: "March 20, 2026",
    time: "8am CT",
    btcPrice: "$70,335",
    btcChange: "0.6%",
    btcUp: true,
    ethPrice: "$2,140",
    ethChange: "0.1%",
    ethUp: true,
    sections: [
      {
        icon: "₿",
        title: "Bitcoin",
        signals: [
          {
            rating: 4,
            headline: "BTC holds $70,335 — consolidating above $70K floor as long-term selling pressure eases",
            detail: "Bitcoin steady at $70,335 (+0.6%) at 8am CT. VanEck report: long-term holder selling is slowing — 'potentially constructive' signal. BTC/Gold ratio RSI rebounding from oversold, MACD nearing bullish crossover per analysts. The $70K floor has held through multiple macro headwinds including Fed rate hold and Iran/oil volatility."
          },
          {
            rating: 4,
            headline: "Bitcoin spot ETFs record $90.2M net outflow Mar 19 — BlackRock clients led selling; weekly still $763M net in",
            detail: "Single-day outflow breaks multi-day inflow streak. BlackRock client redemptions drove the selling. Context: this is one day vs. a strong weekly picture ($763M net inflow). Short-term institutional hedging vs. long-term structural bid divergence continues. Watch for inflow resumption today."
          },
          {
            rating: 4,
            headline: "Strategy buys $1.57B in Bitcoin last week — 761,068 BTC total; STRC preferred equity to accelerate purchases",
            detail: "MicroStrategy/Strategy's largest-ever weekly purchase: 22,337 BTC at avg ~$70,337. STRC perpetual preferred equity vehicle announced to accelerate BTC accumulation toward BlackRock's $55B BTC stockpile. Saylor is systematically building a position that rivals sovereign wealth funds."
          },
          {
            rating: 4,
            headline: "BTQ BIP 360: first working quantum-resistant Bitcoin deployed on testnet — infrastructure milestone",
            detail: "BTQ deployed the first working BIP 360 implementation on Bitcoin Quantum testnet. r/CryptoCurrency (195↑) and r/Bitcoin (224↑) both trending. This moves quantum-resistant Bitcoin from theoretical proposal to live testnet infrastructure. With quantum computing timelines accelerating, BIP 360 is a long-term protocol resilience milestone."
          },
          {
            rating: 4,
            headline: "Strive surpasses Tesla in BTC holdings (13,628 vs 11,509) — enters top 10 public treasury holders",
            detail: "First dedicated Bitcoin treasury firm to pass Tesla. Corporate treasury arms race: Strive, American Bitcoin (ABTC/Trump family, ~$500M), Strategy, and others all racing to accumulate. Strive adds 317 BTC in latest filing per r/CryptoCurrency (19↑)."
          },
          {
            rating: 3,
            headline: "SEC Chair Atkins sets up formal 'framework' for Bitcoin as commodity — regulatory clarity milestone",
            detail: "First SEC chair to explicitly treat Bitcoin as commodity publicly. r/Bitcoin (129↑): Atkins confirming SEC is establishing formal classification framework. Landmark regulatory clarity milestone that reduces legal uncertainty for institutional holders and ETF products."
          },
          {
            rating: 3,
            headline: "Fed Basel revision proposal: BTC reclassification away from 'toxic asset' — structural bank catalyst",
            detail: "r/Bitcoin (52↑): Federal Reserve releasing proposal for revised Basel risk weighting standards. Reclassification would lower capital requirements for banks holding BTC — enabling banks to hold more BTC at lower cost. Structural long-term catalyst if passed."
          },
          {
            rating: 3,
            headline: "Wall St 2026 BTC targets converging: Citi $189K bull case, Bernstein $150K, JPM ~$170K",
            detail: "Multiple major banks publishing formal BTC price targets for 2026. DDC Enterprise adds 200 BTC lifting treasury to 2,383 BTC. Institutional consensus formation accelerating as price consolidates above $70K. BTC Machine Learning price prediction for Apr 1 also circulating."
          }
        ]
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          {
            rating: 4,
            headline: "Tom Lee: '$62K ETH if priced as payment rail' — NY Post + BlackRock institutional thesis goes mainstream",
            detail: "NY Post covers BlackRock bringing ETH exposure + yield to institutions. Tom Lee thesis: 'Ethereum is real money, real yield.' @WOLF_Bitcoin_ (107L/11RT): '$62K ETH if Ethereum priced as payment rail.' This is the largest mainstream ETH validation narrative this cycle — TradFi media is now covering the ETH yield thesis."
          },
          {
            rating: 4,
            headline: "Morgan Stanley files S-1 for spot Bitcoin ETF ($MSBT) — $1.9T manager enters BTC distribution; ETH ETF flows $315M",
            detail: "Coinbase as custodian, BNY Mellon as administrator. Morgan Stanley's entry as spot BTC ETF issuer is the biggest new distribution channel since IBIT. ETH ETF net inflows $315M on Mar 19. Institutional bid confirmed across both BTC and ETH."
          },
          {
            rating: 3,
            headline: "ETH RSI cycle-bottom signal active — Tom Lee reiterates 3 bullish drivers; $2,100 support held",
            detail: "$2,140 at 8am CT. $2,100 support held all session. CCN: RSI signal seen only twice in ETH history — both prior times preceded significant rallies. FXStreet: BTC, ETH, XRP all positioned for further gains. $2,200 is key reclaim level for next leg."
          },
          {
            rating: 2,
            headline: "Trust Wallet $7M hack exposed via internal dispute — custody security concerns resurface",
            detail: "r/CryptoCurrency (11↑): $7M Trust Wallet hack revealed by internal whistleblower at Chinese firm. DeFi custody risk narrative returns. Reminder to use hardware wallets for significant ETH/DeFi positions."
          }
        ]
      }
    ]
  },
  {
    id: "2026-03-19-6pm",
    issueNumber: 12,
    date: "March 19, 2026",
    time: "6pm CT",
    btcPrice: "$70,219",
    ethPrice: "$2,140",
    btcChange: "1.1%",
    ethChange: "1.2%",
    btcUp: true,
    ethUp: true,
    sections: [
      {
        icon: "₿",
        title: "Bitcoin",
        signals: [
        {
          rating: 4,
          headline: "BTC afternoon bounce: $69,370 low → $70,219 (+1.1%) — $70K psychological floor reclaimed by close",
          detail: "After breaching $70K at noon and touching $69,370 this morning (9:45am ET per Fortune), Bitcoin staged a +1.1% afternoon recovery to $70,219 at 6pm CT. The $70K floor held as a magnet — short-covering + dip buyers absorbed the Iran/oil macro selloff. Close above $70K is constructive heading into Friday."
        },
        {
          rating: 4,
          headline: "Strive surpasses Tesla in Bitcoin holdings — 13,628 BTC vs Tesla's 11,509 BTC — corporate treasury arms race",
          detail: "Bitcoin treasury company Strive disclosed holdings of 13,628 BTC, pulling ahead of Tesla (11,509 BTC) to become a top-10 public treasury holder. This is the first time a dedicated Bitcoin treasury firm has passed Tesla — a milestone in the institutional BTC accumulation race. Strive is Texas-based and grew its position aggressively in Q1 2026."
        },
        {
          rating: 4,
          headline: "Bitcoin quantum resistance moves from proposal to live infrastructure — BTQ BIP 360 first working implementation",
          detail: "BTQ deployed the first working BIP 360 implementation on Bitcoin Quantum (r/Bitcoin score=140, r/CryptoCurrency score=39 — both trending). This moves quantum-resistant Bitcoin from theoretical proposal to live testnet infrastructure. With quantum computing timelines accelerating, BIP 360 infrastructure deployment is a long-term protocol resilience milestone the market has largely not priced."
        },
        {
          rating: 3,
          headline: "Morgan Stanley Bitcoin ETF ticker revealed: 'MSBT' on NYSE — launch imminent after amended S-1",
          detail: "Morgan Stanley's Bitcoin ETF will trade as 'MSBT' on the NYSE (Exa, CoinCentral Mar 19). The ticker reveal follows the amended S-1 filing — a sign the launch is nearing. With 126 crypto ETFs under concurrent SEC review, MSBT's entry would be the most significant new BTC distribution channel since BlackRock's IBIT."
        },
        {
          rating: 3,
          headline: "$15B Prince Group crypto seizure — US plans swirling around largest crypto seizure in history",
          detail: "Questions are swirling around US government plans for the record $15B Prince Group crypto seizure (r/CryptoCurrency score=47, 6.8h). This is the largest crypto seizure in history. How the US disposes of these assets — auction, Treasury hold, or strategic reserve contribution — could have significant market impact on BTC supply dynamics."
        },
        {
          rating: 3,
          headline: "Bitcoin ETF inflow streak broken — $164M outflows Wednesday end multi-day run; weekly high still $763M",
          detail: "Spot Bitcoin ETFs logged $164M in net redemptions Wednesday, ending a multi-day inflow streak (CoinDesk). Despite the single-day outflow, the weekly high of $763M represents the strongest 7-day inflow of 2026. The streak break is a short-term negative signal but doesn't invalidate the broader institutional accumulation trend."
        },
        {
          rating: 3,
          headline: "Fed holds 3.50-3.75%, raises 2026 inflation forecast to 2.7% — dot plot stays at 1 cut; BTC macro headwind remains",
          detail: "The Fed held rates steady at 3.50-3.75% and raised its 2026 inflation forecast to 2.7% (news, 7h ago). The dot plot stayed at 1 cut — hawkish hold. Iran/oil geopolitics + elevated inflation forecasts = the macro headwind that drove this morning's BTC selloff. The 1 cut outlook caps BTC upside until macro resolves."
        },
        {
          rating: 2,
          headline: "Fed Basel risk weighting proposal — BTC currently classified as 'toxic asset'; revision could change bank calculus",
          detail: "The Fed released a Basel risk weighting revision proposal today (r/Bitcoin score=38). Bitcoin is currently treated as a 'toxic asset' under Basel standards, requiring banks to hold expensive capital buffers against BTC exposure. A reclassification would structurally lower the cost for banks to hold BTC — a long-term structural demand catalyst."
        },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
        {
          rating: 4,
          headline: "Ethereum Foundation deploys $7.8M ETH into DeFi — largest single-day EF DeFi deployment, setting the tone",
          detail: "The Ethereum Foundation deployed $7.8 million in ETH into DeFi today (news, 6h ago). This is on top of the 3,400 ETH Morpho deployment from earlier this week. The EF is actively using its treasury to bootstrap DeFi yields — a signal to institutions that on-chain yields are legitimate. Staking yields are the main bridge connecting TradFi and DeFi."
        },
        {
          rating: 4,
          headline: "BlackRock + institutions staking ETH — supply squeeze 'just getting started' as ETHB yield machines lock supply",
          detail: "Multiple Exa sources (Mar 18-19) confirm: BlackRock and other institutions staking ETH through ETHB are creating a supply squeeze that is just beginning. ETHB monthly yield distribution means institutional ETH is locked in staking — not available for selling. With 37M ETH already staked (30% supply), the institutional staking layer adds a second locking mechanism on top."
        },
        {
          rating: 3,
          headline: "ETH recovers to $2,140 (+1.2% from noon) — bouncing with BTC; $315M ETF inflows show bid remains",
          detail: "ETH recovered from the noon low of $2,114 to $2,140 at 6pm CT (+1.2%). ETH ETF inflows hit $315M in a recent session, raising the question 'Is the tide turning?' (Exa Mar 18). Whale $111M ETH purchase at $2,185 (from earlier today) is now underwater — but at a smaller margin. $2,100 held as support through the session."
        },
        {
          rating: 3,
          headline: "One-click institutional staking — developers targeting frictionless ETH staking; nearly 1M validators active",
          detail: "Ethereum developers are targeting one-click staking for institutions — removing the technical friction that has kept TradFi from direct ETH staking (CoinDesk, 13h ago). Nearly 1 million validators are now active and ~30% of all ETH is staked. Combined with ETHB's arrival, this UX simplification could unlock the next wave of institutional staking capital."
        },
        {
          rating: 3,
          headline: "ETH outperforms BTC on 1D basis (-2.9% vs -1.4%) — but ETH/BTC narrative holds: geopolitical hedge + yield",
          detail: "ETH fell -2.88% on the day vs BTC -1.43% — ETH underperformed BTC on raw 1D change. But the structural ETH/BTC narrative (staking yield as geopolitical hedge) continues: ETH's absolute performance vs its ATH ratio has been recovering. The $7.8M EF DeFi deployment + ETHB staking squeeze + $315M ETF inflows = three simultaneous demand drivers."
        },
        {
          rating: 2,
          headline: "ETH 6pm: $2,140 (-2.9% 1D) — three-body problem persists; $2,100 support held all session",
          detail: "ETH closes the 6pm session at $2,140. The three-body problem continues: staking supply sink (37M ETH locked), L2 fee compression to mainnet (-90% YoY), BlackRock ETHB demand. $2,100 held as support all session. ETH RSI cycle-bottom signal still in play. Key level to watch: reclaim $2,200 to signal resumption."
        },
        ],
      },
    ],
  },

  {
    id: "2026-03-19-noon",
    issueNumber: 11,
    date: "March 19, 2026",
    time: "Noon CT",
    btcPrice: "$69,465",
    ethPrice: "$2,114",
    btcChange: "2.4%",
    ethChange: "3.6%",
    btcUp: false,
    ethUp: false,
    sections: [
      {
        icon: "₿",
        title: "Bitcoin",
        signals: [
        {
          rating: 4,
          headline: "BTC breaks below $70K as Iran war + oil spike triggers macro risk-off — Fed hold fails to hold price",
          detail: "Bitcoin dropped below $70,000 today as rising oil prices (Iran-related tensions) overwhelmed the Fed's rate hold. BTC-USD now at $69,465 (-2.4% from 6pm yesterday, -3.5% 24h). 'Hold onto dry powder while prices swing' (analyst, CoinDesk). The Fed paused as expected, but 'higher for longer' + geopolitical risk-off = double pressure. $70K psychological floor decisively breached at noon."
        },
        {
          rating: 4,
          headline: "Morgan Stanley files amended Bitcoin ETF S-1 — 126 crypto ETFs under SEC review simultaneously",
          detail: "Morgan Stanley advanced its Bitcoin ETF plans with an amended S-1 filing (CoinCentral, Exa Mar 19). 126 crypto ETF applications are now under simultaneous SEC review. This is the largest institutional ETF pipeline in crypto history. Morgan Stanley entry would add a major wealth management distribution channel to Bitcoin's institutional demand stack."
        },
        {
          rating: 3,
          headline: "Bitcoin ETF flows conflicted: $164M outflows today vs $763M weekly inflow high — net week still strong",
          detail: "Today's session saw $164M ETF outflows as BTC dipped below $71K (Exa Mar 19). But the weekly inflow high hit $763M — the strongest week of 2026. Crypto ETFs collectively added $12B in AUM since US-Iran tensions began (CoinCentral). Short-term profit-taking vs long-term institutional accumulation divergence."
        },
        {
          rating: 3,
          headline: "Bhutan executed masterclass OTC liquidation: $72M Bitcoin moved to Binance without moving price",
          detail: "Bhutan moved $72M in Bitcoin to Binance via OTC desk without registering any price impact (You.com). National reserve now at 4,400 BTC. Sovereign-level profit-taking at the $70K level using institutional OTC infrastructure — zero market disruption. The playbook for how nation-states exit crypto positions."
        },
        {
          rating: 3,
          headline: "Ancient Bitcoin whale offloads $100M+ as price slips — decade-dormant holders reactivating",
          detail: "A long-dormant Bitcoin holder who accumulated BTC over a decade ago resurfaced to offload tens of millions (CoinDesk news). Simultaneously, Citigroup cut price targets for BTC and most crypto stocks. Ancient whale reactivation + sell-side institutional trimming = two separate but aligned bearish data points at the $69-70K level."
        },
        {
          rating: 3,
          headline: "Fed proposes Basel risk weighting revisions — could reduce capital requirements for BTC at banks",
          detail: "The Federal Reserve will release a proposal for revisions to Basel risk weighting standards (r/Bitcoin, score=11, 1.3h). If bank capital requirements for holding Bitcoin are reduced, it directly lowers the cost for banks to hold BTC on balance sheet — a structural long-term bullish catalyst separate from price action."
        },
        {
          rating: 2,
          headline: "BTC noon: $69,465 (-2.4% from 6pm) — $70K support broken; $65K-68K next support zone in focus",
          detail: "BTC failed to hold $70K at noon. The Fed hold catalyst was fully absorbed by 6pm yesterday; today's Iran/oil macro + whale offloading + ETF outflows drove the breach. Next technical support: $65,000-$68,000 range. Quantum-resistant Bitcoin (BTQ BIP 360 implementation) deployed on testnet — long-term protocol resilience signal (r/Bitcoin, 51, 1.5h)."
        },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
        {
          rating: 4,
          headline: "Ethereum outperforming Bitcoin in Iran/war macro — ETH/BTC ratio strengthening as geopolitical hedge",
          detail: "ETH is outperforming BTC during the Iran-US-Israel geopolitical crisis — unexpected, as ETH typically underperforms in risk-off (CoinDesk). ETH at $2,114 vs BTC at $69,465. ETH/BTC ratio holding. Explanation: ETH's yield (staking) + DeFi productivity creates a 'digital economy' narrative distinct from pure BTC store-of-value during geopolitical stress."
        },
        {
          rating: 4,
          headline: "BlackRock ETHB staking ETF 'rewrites rules of what a crypto fund can be' — direct yield from ETH staking",
          detail: "BlackRock's staked Ethereum ETF (ETHB) is described as a rule-rewriting product (Exa Mar 19 x2). Monthly staking yield distribution creates a yield instrument on top of crypto exposure — a new asset class. Combined with 30% of ETH supply staked, 37M ETH locked, this represents the structural demand floor Ethereum bulls have been building toward."
        },
        {
          rating: 4,
          headline: "Bitmine launches $250M Ethereum treasury strategy — stock surges 1,000% in single day",
          detail: "BitMine Immersion revealed a $250 million Ethereum corporate treasury investment, with Tom Lee backing (news). Stock surged +1,000% in a single day. This is the ETH equivalent of MicroStrategy's BTC treasury play — a publicly traded company making a massive levered ETH bet. Corporate ETH treasury strategy is now live."
        },
        {
          rating: 3,
          headline: "Ethereum Foundation deploys 3,400 ETH to Morpho DeFi vaults — DeFi TVL crosses $100B milestone",
          detail: "EF added 3,400 ETH to Morpho Vaults V2 (Exa, multiple confirmations Mar 18-19). DeFi Total Value Locked crossed $100 billion again after months of contraction (Exa Mar 18). The EF's active DeFi deployment signals conviction in on-chain treasury management and directly grows TVL in Ethereum's core ecosystem."
        },
        {
          rating: 3,
          headline: "Vitalik Buterin releases fast confirmation rule update — sub-second UX for institutional stakers",
          detail: "Vitalik shared a fast confirmation rule update for Ethereum (Exa Mar 18) — targeting near-instant transaction confirmation for institutions. Combined with the 'one-click staking' push for institutions (Exa Mar 19, CoinDesk), Ethereum is actively reducing UX friction at the exact moment institutional capital is entering via ETHB."
        },
        {
          rating: 2,
          headline: "ETH noon: $2,114 (-3.6% from 6pm) — $2,100 support testing; three-body problem (staking/L2 fees/ETHB) in play",
          detail: "ETH at $2,114 — testing the $2,100 support level. The 'three-body problem': 37M ETH staked (supply sink), L2 fees to mainnet down 90% YoY (revenue pressure), BlackRock ETHB (new demand). Whale bought $111M at $2,185 yesterday. ETH RSI flashed a cycle-bottom signal seen only twice before. $2,100 is the critical floor heading into this afternoon."
        },
        ],
      },
    ],
  },

  {
    id: "2026-03-19-8am",
    issueNumber: 10,
    date: "March 19, 2026",
    time: "8am CT",
    btcPrice: "$69,295",
    btcChange: "2.74%",
    btcUp: false,
    ethPrice: "$2,133",
    ethChange: "3.19%",
    ethUp: false,
    sections: [
      {
        icon: "₿",
        title: "Bitcoin",
        signals: [
          { rating: 4, headline: "Michael Saylor: \'Bitcoin is the ultimate hedge against chaos\' — 2,849 likes, 358 RTs as BTC breaks below $70K", detail: "Top engagement signal of the scan. Saylor posting into macro chaos as BTC drops below $70K for the first time this week. @saylor, Twitter." },
          { rating: 4, headline: "Strive acquires 317 BTC for $23M at ~$72,555 avg cost — now among top institutional BTC holders", detail: "Matt Cole / Strive (Eric Trump-backed firm) confirms purchase. As of 3/18/2026. @ColeMacro, Twitter." },
          { rating: 4, headline: "Bitcoin ETF 6-day inflow streak: $2.1B institutional surge with $361M single-day inflow", detail: "\'Institutional conviction is back\' — longest inflow streak since October. BlackRock, Fidelity leading. TradingView/Fensory/ainvest, Mar 17–18." },
          { rating: 3, headline: "BTC breaks below $70K — $820B wiped from US stocks, $120B from crypto amid macro selloff", detail: "Iran strike on Qatar gas hub risks global financial depression per top Reddit post. Macro risk-off event driving coordinated selloff. r/CryptoCurrency score=1139." },
          { rating: 3, headline: "Institutional demand for Bitcoin at highest level since October 2025", detail: "On-chain accumulation data confirms institutional re-entry at current levels. r/Bitcoin score=399." },
          { rating: 3, headline: "Iran strike on Qatar gas hub sparks macro fear — global financial depression risk flagged", detail: "Geopolitical shock driving broad risk-off across equities and crypto. r/CryptoCurrency score=376." },
          { rating: 2, headline: "Hacker claims $60M Trezor crack after breaking into $2.24M wallet", detail: "Hardware wallet security alert. r/CryptoCurrency score=197. Carry-forward: verify severity before acting on cold storage." }
        ]
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "Grayscale Ethereum Mini Trust stakes 57,600 ETH worth $121.6M in single move", detail: "Largest institutional ETH staking event this scan period. @CryptoNewsHntrs, Twitter." },
          { rating: 4, headline: "US formally classifies ETH as a digital commodity — ETH price drops on news", detail: "Regulatory clarity cuts both ways: commodity classification removes securities overhang but triggered sell-the-news reaction. @cryptonewsfocus, Twitter." },
          { rating: 3, headline: "Ethereum Foundation deploys 3,400 ETH into Morpho + sells 5,000 ETH to BitMine for $10.2M", detail: "Foundation actively redeploying treasury into DeFi and institutional sales. @investing_gurus / @ForceUna, Twitter." },
          { rating: 3, headline: "SEC approves Nasdaq tokenized securities trading — blockchain rails for equities advancing", detail: "r/CryptoCurrency score=31. SEC Chair Paul Atkins: \'all US markets will be on-chain within two years.\'" },
          { rating: 3, headline: "Ethereum developers push one-click staking to simplify validator operations", detail: "Staking UX overhaul proposal gaining dev consensus. Targets non-technical users. @unhedgedx, Twitter." },
          { rating: 2, headline: "Vitalik pushes node simplification update — \'most important Ethereum roadmap item right now\'", detail: "Proposal to reduce node software complexity for user-friendly self-hosting. @CryptoCortexTR, Twitter." },
          { rating: 2, headline: "Ethereum whale accumulation drives 14% rally signal amid macro pullback risks", detail: "Large wallet accumulation detected despite broader market decline. @ForceUna, Twitter." }
        ]
      },
      {
        icon: "🔗",
        title: "Blockchain & Crypto",
        signals: [
          { rating: 4, headline: "CFTC + SEC harmonize crypto rules; Mastercard bets $1.8B on stablecoins; Nasdaq acquires Kraken", detail: "Triple regulatory/institutional headline week. @PeteyK DYOR Ep.65 roundup, Twitter score=77." },
          { rating: 3, headline: "SEC Chair Atkins: all US markets will be on-chain within two years", detail: "DC Blockchain Summit keynote statement. @kriptoworldcom / @JaeJenny29905, Twitter." },
          { rating: 3, headline: "Kraken delays $800M IPO plans amid bear market conditions", detail: "Exchange citing market conditions. r/CryptoCurrency score=54." },
          { rating: 2, headline: "FTX set to repay creditors $2.2 billion this month", detail: "Creditor repayment process underway. r/CryptoCurrency score=16." }
        ]
      }
    ]
  },
  {
    id: "2026-03-18-6pm",
    issueNumber: 9,
    date: "March 18, 2026",
    time: "6pm CT",
    btcPrice: "$71,155",
    btcChange: "3.76%",
    btcUp: false,
    ethPrice: "$2,193",
    ethChange: "5.42%",
    ethUp: false,
    sections: [
      {
        icon: "₿",
        title: "Bitcoin",
        signals: [
          { rating: 4, headline: "$820B wiped from US stock market today — $120B from crypto — macro risk-off dominates closing session", detail: "r/CryptoCurrency score=180, 1.7h: The single biggest story of the day's close. $820 billion was erased from the US stock market today alongside $120 billion from total crypto market cap. This is a broad macro deleveraging event — equities and crypto selling in tandem at close. Yet BTC's correlation with tech stocks flipped NEGATIVE earlier today (You.com), meaning the equity crash has dragged crypto despite the decoupling thesis. Watch whether BTC holds $70K tonight as a key psychological floor.", source: "r/CryptoCurrency score=180 · 1.7h" },
          { rating: 4, headline: "Fed holds rates — BTC chasing $72K immediately post-announcement; Bitcoin back to $71K", detail: "You.com: 'Bitcoin Chases $72K After Fed Decides To Hold Rates: Is BTC Selling Over?' — the FOMC held rates as expected, triggering an initial BTC bounce toward $72K. However the stock market selloff (-$820B) reasserted downward pressure. Fed 'Higher for Longer' reality priced in (Exa: Wall Street braces). Current price $71,155 — down from the $72K chase high but stabilizing. Net read: Fed catalyst delivered short-term relief, but macro risk-off environment capped the move.", source: "You.com + Exa: FOMC Decision Wall Street Higher for Longer Mar 18" },
          { rating: 4, headline: "Institutional Bitcoin demand at highest level since October 2025 — Bitwise holds firm through downturn", detail: "r/Bitcoin score=177, 5.3h: Institutional demand for Bitcoin has risen to its highest level since October 2025 — confirmed across custodians and ETF data. Bitwise: institutional investors held firm through bitcoin's downturn (Exa: Infomarine/Bitwise Mar 18). ETF collateral approved + 7-day inflow streak + $1.06B weekly ETF inflows (carry-forward from noon). BTC ETF inflows: 7 consecutive days net positive (Chinese + Korean crypto media confirmed via Exa). Advisor demand stays resilient even as retail sentiment dips (Morgan Stanley, FinanceFeeds).", source: "r/Bitcoin score=177 · 5.3h + Exa Bitwise Mar 18" },
          { rating: 3, headline: "Tim Scott expects stablecoin yield compromise proposal by week's end — crypto legislation unblocking", detail: "Exa Mar 18: Tim Scott expects a stablecoin yield compromise proposal by end of this week to break the stalled crypto bill impasse. This is the key legislative catalyst the market has been waiting on. A stablecoin framework would accelerate institutional DeFi adoption and give ETH's utility token ecosystem firm legal footing. Breakthrough deal expected imminently.", source: "Exa: Tim Scott stablecoin compromise Mar 18" },
          { rating: 3, headline: "Bhutan continues selling Bitcoin stash — national reserve falls to 4,400 BTC", detail: "You.com: Bhutan continues to sell its sovereign Bitcoin holdings, with reserves now fallen to 4,400 BTC. Bhutan accumulated via state-run BTC mining; this represents sovereign-level profit-taking at $71K prices — a macro signal that nation-state holders are trimming at current levels. Not a panic sell, but worth tracking alongside Trezor phishing letter campaign (r/Bitcoin score=45, 3.8h).", source: "You.com BTC scan + r/Bitcoin score=45 phishing alert" },
          { rating: 3, headline: "Bitcoin power law cycle analysis goes viral — r/Bitcoin score=208 in 10 hours", detail: "r/Bitcoin score=208, 10.8h: Bitcoin power law 'as real as the 4-year cycle' — detailed analysis thread going viral. Long-term cycle conviction holding even during -3.76% day. Complements Bloomberg 'Bitcoin Outperforms During War' carry-forward (score=45) and 'Institutional demand at highest since Oct 2025' (score=177). Community sentiment: this is a buying opportunity on the power law chart, not a trend break.", source: "r/Bitcoin score=208 · 10.8h" },
          { rating: 2, headline: "BTC 6pm close: $71,155 (-3.76%) — worst close of the week; $70K psychological support critical overnight", detail: "BTC ended the day at $71,155 — the deepest daily close of the week (-3.76% vs noon's -3.5%). The Fed hold provided a brief $72K bounce but risk-off macro ($820B equity wipe) reasserted pressure. A Trezor phishing letter was mailed to a user's home address (r/Bitcoin score=45) — hardware wallet OPSEC alert active. Watch $70,000 overnight as the must-hold floor. $79K rally still needed for all spot ETF holders to be whole.", source: "COMPOSIO_SEARCH_FINANCE 6pm CT" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 4, headline: "FOMC holds rates — ETH targets higher levels post-announcement; stablecoin bill compromise expected this week", detail: "Exa Mar 18: 'Ether price breakout: ETH surges above resistance, targets higher levels' (IG AU). 'ETH tests $2,400 resistance as breakout strength builds' (Exa Mar 18). The FOMC hold removes the yield competition pressure on ETH's staking returns. Tim Scott's stablecoin compromise bill (expected by week's end) would directly enable ETH DeFi expansion. BlackRock ETHB staking yield narrative gets stronger as the risk-free rate stays flat.", source: "Exa: ETH price breakout + resistance test Mar 18 + Tim Scott bill" },
          { rating: 4, headline: "ETH staking + BlackRock ETHB + 30% supply locked — structural floor building as price tests $2,150", detail: "Carry-forward from day's earlier scans: ETH staking at 30% of total supply (Investing.com), EF staked 72,000 ETH total, BlackRock ETHB paying monthly staking rewards, Vitalik pushing 1-click staking UX. With the FOMC hold confirmed, ETHB's monthly yield becomes even more attractive versus risk-free rates. The structural supply sink (30% locked) persists regardless of short-term price action. $2,150 remains the critical support — currently holding at $2,193.", source: "Exa Mar 17-18 carry-forward · structural floor analysis" },
          { rating: 4, headline: "SEC crypto commodity classification + Tim Scott stablecoin bill = dual regulatory tailwinds for ETH DeFi", detail: "SEC declared 18 digital assets as commodities (r/CC score=356, now at all-time high for this thread). R/ethereum SEC thread at score=28 (up from 25 at noon). Tim Scott stablecoin yield compromise coming by week's end (Exa). S&P Dow Jones + Tradexyz launching first official S&P500 perpetual on Hyperliquid (r/CC score=15) — TradFi perpetual derivatives on crypto infrastructure signals institutional legitimacy. ETH-based DeFi infrastructure is the direct beneficiary.", source: "r/CryptoCurrency score=356 + r/ethereum score=28 + Exa Tim Scott + r/CC score=15" },
          { rating: 3, headline: "Polymarket opens 'The Situation Room' — prediction market degen venue signals crypto consumer culture expanding", detail: "r/CryptoCurrency score=20, 1.0h: Polymarket launched 'The Situation Room' — described as 'basically a sports bar for degens.' Prediction markets are becoming mainstream consumer crypto products. Polymarket runs on Polygon (Ethereum L2) — this is Ethereum ecosystem adoption at the consumer entertainment layer. High engagement signal for ETH L2 activity.", source: "r/CryptoCurrency score=20 · 1.0h" },
          { rating: 3, headline: "$2.24M wallet hacked via Trezor exploit — $60M Trezor crack claim active threat", detail: "r/CryptoCurrency score=18, 1.9h: 'Hacker Breaks Into a $2.24 Million Wallet and Now Claims a $60 Million Trezor Crack.' Separate from the phishing letter (r/Bitcoin score=45) — this is a claimed hardware wallet vulnerability. Active security threat for any Ethereum holder using Trezor. If the $60M crack claim is real, this is a major hardware wallet security event. Use passphrase protection on all Trezor devices immediately.", source: "r/CryptoCurrency score=18 · 1.9h" },
          { rating: 2, headline: "ETH 6pm: $2,193 (-5.42%) — holding above $2,150; FOMC catalyst delivered, stablecoin bill the next trigger", detail: "ETH closed at $2,193 — slightly higher than noon's $2,182, showing modest recovery off lows. The FOMC hold was the main positive catalyst today. $2,150 support held. The stablecoin bill compromise (Tim Scott, expected this week) is the next legislation catalyst. $2,400 resistance identified by Exa analysts as the first recovery target. FOMC 'Higher for Longer' confirmed but priced in.", source: "COMPOSIO_SEARCH_FINANCE 6pm CT" },
        ],
      },
    ],
  },
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
