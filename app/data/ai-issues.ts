export interface AISignal {
  rating: 1 | 2 | 3 | 4;
  headline: string;
  detail?: string;
  source?: string;
  isNoise?: boolean;
  isCarryForward?: boolean;
}

export interface AIIssueSection {
  icon: string;
  title: string;
  signals: AISignal[];
}

export interface AIIssue {
  id: string;
  issueNumber: number;
  date: string;
  time: string;
  sections: AIIssueSection[];
}

export const AI_ISSUES: AIIssue[] = [

  {
    id: 'ai-2026-03-26-6pm',
    issueNumber: 1,
    date: 'March 26, 2026',
    time: '6PM CT',
    sections: [
      { icon: '🧠', title: 'Foundation Models', signals: [
        { rating: 4, headline: 'Yann LeCun raises $1B for AMI — institutional capital bets on post-transformer AI architecture', detail: 'LeCun new startup AMI raised $1.03 billion seed round (Bloomberg, Mar 10 2026). Reddit r/MachineLearning (240+ upvotes) debate: does this validate LeCun argument that autoregressive LLMs have hit a ceiling for formal reasoning? The raise puts serious capital behind non-autoregressive architecture research at scale — the largest bet on a transformer alternative ever.', source: 'Bloomberg / Reddit r/MachineLearning' },
        { rating: 3, headline: 'MIT releases Flow Matching and Diffusion course 2026 — definitive free open curriculum for next-gen generative AI', detail: 'MIT professors Peter Holderrieth and Ezra Erives released their full 2026 course on flow matching and diffusion models covering the complete modern stack. Free and open access. Rated the top public AI resource of 2026 on Reddit r/MachineLearning with 180+ upvotes. The fastest-growing area of AI research now has a definitive curriculum.', source: 'MIT / Reddit r/MachineLearning' },
      ] },
      { icon: '🤖', title: 'Agents & Automation', signals: [
        { rating: 4, headline: 'OpenClaw hits 329K GitHub stars in 60 days — fastest rise to number one in platform history', detail: 'OpenClaw reached the top GitHub project by star count in just 60 days from launch — the fastest any project has achieved this milestone in GitHub history. The result confirms open-source, local-first, no-code AI agent pipelines are winning developer mindshare at unprecedented speed.', source: 'lowtouch.ai' },
        { rating: 4, headline: 'China leads OpenClaw global adoption — $275K state subsidies driving Baidu and Tencent enterprise deployments', detail: 'Chinese tech firms receive $275K in state subsidies to integrate OpenClaw into enterprise workflows. Baidu and Tencent model variants now lead global OpenClaw deployments. OAX Foundation published a deep-dive on the architecture and enterprise deployment patterns driving adoption across industries.', source: 'Exa / OAX Foundation' },
        { rating: 3, headline: 'WRITER launches Agent Skills Creator — natural language to production-ready autonomous agent capabilities', detail: 'WRITER released an Agent Skills Creator tool enabling developers to build production-ready agent capabilities using natural language descriptions. The tooling lowers the barrier to creating specialized agent skills and accelerates the autonomous agent development cycle significantly.', source: 'WRITER / AIBTC' },
        { rating: 3, headline: 'Saylor digital credit thesis: AI agents as BTC-backed credit underwriters — agent economy meets Bitcoin finance infrastructure', detail: 'Strategy founder Michael Saylor told Forbes the next phase of crypto is financial engineering: BTC-backed credit instruments competing with bonds. He referenced AI agents specifically as the infrastructure layer for automating underwriting and management of these products. The vision connects the autonomous agent economy directly to Bitcoin financial infrastructure.', source: 'Forbes' },
      ] },
      { icon: '💼', title: 'Industry & Policy', signals: [
        { rating: 4, headline: 'LeCun AMI $1.03B seed signals bifurcation in AI research — transformer dominance being challenged with institutional capital', detail: 'The scale of the AMI raise signals institutional investors are hedging against autoregressive LLM limitations. LeCun has argued current transformer architectures cannot achieve genuine reasoning beyond pattern matching. A $1B seed is an explicit institutional vote for architectural diversification in AI — the most significant research bet against the transformer consensus since GPT-4.', source: 'Bloomberg' },
        { rating: 3, headline: 'AI harm cluster reaches 6 simultaneous domains in March 2026 — regulatory pressure accelerating across all sectors', detail: '6 simultaneous AI harm domains confirmed: (1) Fed data confirms AI hardening entry-level job market. (2) Meta layoffs driven by AI operational costs. (3) AI chatbots worsening psychotic symptoms (clinical study). (4) Gemini implicated in suicide case (Mar 4). (5) Guardian: rogue AI agent lab test. (6) Iran using AI for narrative warfare (CISA confirmed). Multi-domain misuse pattern historically precedes accelerated policy response.', source: 'CISA / Guardian / Meta / Reuters' },
        { rating: 3, headline: 'BlackRock CEO projects $500M/yr from AI-integrated finance products — crypto and AI convergence accelerating', detail: 'BlackRock CEO Larry Fink projected $500M+ in annual revenue from AI-integrated financial products including the staked ETH ETF at $212M AUM. The convergence of AI automation and crypto finance infrastructure is accelerating institutional product development at the largest asset manager.', source: 'Bloomberg' },
      ] },
      { icon: '🛠️', title: 'Open Source & Tools', signals: [
        { rating: 4, headline: 'OpenClaw fork ecosystem accelerating — MetaClaw, NanoClaw, KiloClaw extending core to enterprise, mobile, and education', detail: 'The OpenClaw fork ecosystem is expanding rapidly: MetaClaw (enterprise workflows), NanoClaw (edge and IoT), KiloClaw (WeChat mobile integration for China market), and LabClaw (academic research). Plugin architecture enables vertical specialization across deployment contexts.', source: 'GitHub / OAX Foundation' },
        { rating: 3, headline: 'OAX Foundation publishes OpenClaw architecture deep dive — production deployment guide for enterprise workloads', detail: 'OAX Foundation released comprehensive architectural documentation on the OpenClaw project covering its rise from zero to 329K GitHub stars and practical enterprise deployment guidance. The most detailed public documentation of OpenClaw production patterns to date.', source: 'OAX Foundation' },
      ] },
    ],
  },

];
