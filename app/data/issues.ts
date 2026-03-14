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
        icon: "🦞",
        title: "OpenClaw & Niche AI — Weekend Breakout",
        signals: [
          { rating: 4, headline: "Baidu sponsors OpenClaw on GitHub", detail: "First major Chinese tech company to officially fund the ecosystem. \"Finally going to start flexing.\"", source: "Twitter · 26K impr · ❤102" },
          { rating: 4, headline: "OpenClaw on humanoid robots and drones", detail: "@minchoi: \"AI can now see, understand space, and move through the physical world.\"", source: "Twitter · 34K impr · ❤207 RT38" },
          { rating: 2, headline: "ByteDance exec gifted Mac Mini for OpenClaw", detail: "8TB storage; Chinese community asking about dedicated OpenClaw home appliance GUI form factor.", source: "Twitter · 56K impr · ❤269" },
          { rating: 2, headline: "Alibaba also riding China OpenClaw wave", detail: "Big Tech wave accelerating.", source: "SiliconRepublic via Exa" },
          { rating: 2, headline: "Memori Labs launches OpenClaw persistent memory plugin", detail: "Directly addresses the openclaw-mem0 crash bug. Production memory layer now available.", source: "PRWeb Mar 13 via Exa" },
          { rating: 2, headline: "PR #44974: global env overrides · PR #45444: /btw command · PR #45373: Chrome DevTools MCP preset", detail: "Four new PRs in 48h.", source: "GitHub" },
          { rating: 1, headline: "NOISE: Polymarket \"$50→$435K with OpenClaw\" posts confirmed as engagement-bait", detail: "Multiple accounts, identical format.", isNoise: true },
        ],
      },
      {
        icon: "🤖",
        title: "Zero-Human Company & AI Agents",
        signals: [
          { rating: 3, headline: "Brian Roemmele: 2048-employee ZHC via MicroFish swarm", detail: "MicroFish@Home: run up to 1 million agents on your old computer. Karpathy autoresearch integration.", source: "Twitter · 110K impr · ❤294 BM329 — highest ZHC impression count in series" },
          { rating: 3, headline: "Fed: AI is making it harder to land entry-level jobs", detail: "Federal Reserve data cited.", source: "You.com FRESH 7am CT" },
          { rating: 3, headline: "Meta seeking massive layoffs amid AI costs", detail: "Headcount reduction to fund AI infrastructure build-out.", source: "SeekingAlpha FRESH 6:34am CT" },
          { rating: 2, headline: "SWE-agent 2.0 — open-source autonomous AI software engineer", source: "yuv.ai Mar 13 via Exa" },
          { rating: 2, headline: "PlugMem (Microsoft Research) — transforms raw agent interactions into reusable persistent knowledge", detail: "New top AI Exa score 0.5840.", source: "Microsoft Research via Exa" },
        ],
      },
      {
        icon: "₿",
        title: "Bitcoin",
        signals: [
          { rating: 3, headline: "BTC ETF 5-day consecutive inflow streak — first of 2026", detail: "$180M Friday alone, $1.9B cumulative. Institutional demand confirmed." },
          { rating: 3, headline: "Saylor: Strategy launching global quantum upgrade effort for Bitcoin", detail: "Long-term security infrastructure play.", source: "Twitter FRESH 6:35am CT" },
          { rating: 3, headline: "Luxembourg allocates 1% sovereign wealth fund to BTC", detail: "Nation-state accumulation joining the trend.", source: "Twitter FRESH 7:33am CT" },
          { rating: 2, headline: "@alicharts MVRV signal: clearing $73,726 opens path to $95,894", source: "Twitter · ❤130 RT19 IMPR7K" },
          { rating: 1, headline: "Bear case (TedPillows): BTC down 60%+ every mid-term election year", detail: "\"33% down in 2026 still on table.\"", source: "Twitter · ❤143 IMPR5K" },
        ],
      },
      {
        icon: "Ξ",
        title: "Ethereum",
        signals: [
          { rating: 3, headline: "ETH rejected from $2,150 again", detail: "Next crucial support $2,000; failure retraces entire pump.", source: "TedPillows · ❤208 RT20 IMPR13,792 — top ETH signal" },
          { rating: 2, headline: "ETH ETF inflow $26.7M yesterday — BlackRock bought $32.4M", detail: "ETHB hits $107M AUM on launch day. \"More exotic ETF structures likely coming.\"", source: "Twitter · ❤262 RT39 IMPR12,623" },
          { rating: 2, headline: "Grayscale staked 57,600 ETH (~$121M)", detail: "Institutional staking accelerating post-ETHB launch.", source: "Twitter FRESH" },
          { rating: 1, headline: "WiseCrypto fundamentals: RWA $1.2B→$15.2B, whale holdings +29%, exchange supply -23%", detail: "On-chain bull case building quietly.", source: "Twitter · IMPR12K" },
          { rating: 1, headline: "Carry-forward: Ethereum Foundation Mandate published Mar 13 — first formal governance document for EF. Culper Research ETH short still open.", isCarryForward: true },
        ],
      },
    ],
  },
];