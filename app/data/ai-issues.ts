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
    id: 'ai-2026-03-27-8am',
    issueNumber: 2,
    date: 'March 27, 2026',
    time: '8AM CT',
    sections: [
      { icon: '🧠', title: 'Foundation Models', signals: [
        { rating: 4, headline: 'r/MachineLearning 256-upvote debate: Is the LeCun $1B AMI seed proof that autoregressive LLMs have hit a formal reasoning wall?', detail: 'The top r/MachineLearning discussion this week directly asks whether the $1 billion seed raise for LeCun new startup AMI is the definitive institutional signal that transformer-based autoregressive LLM architectures have hit a ceiling for formal reasoning. The community is divided, but the capital scale — $1B at seed — is unprecedented and forcing the architectural debate into the mainstream AI research conversation.', source: 'Reddit r/MachineLearning' },
        { rating: 4, headline: 'Google Gemini 3.1 Flash Live released in preview — real-time multimodal voice model purpose-built for AI agent low-latency use', detail: 'Google released Gemini 3.1 Flash Live in preview through the Gemini Live API in Google AI Studio. The model supports real-time audio, video, and tool use in low-latency environments and is explicitly positioned for AI agent voice applications. It directly competes with GPT-4o Realtime for the agentic voice infrastructure market.', source: 'SearchNews' },
        { rating: 4, headline: 'ChatGPT plus AlphaFold custom mRNA vaccine reduces dog tumor — AI-enabled personalized medicine produces real-world outcomes', detail: 'An Australian tech entrepreneur combined ChatGPT, AlphaFold protein folding, and a custom mRNA delivery mechanism to design a personalized cancer treatment that significantly reduced tumor size within weeks of first injection. Researchers described as excited throughout the process. The story is the most viral AI news of 2026 on Reddit with 2,149 upvotes on r/singularity.', source: 'Reddit r/singularity' },
      ] },
      { icon: '🤖', title: 'Agents & Automation', signals: [
        { rating: 4, headline: 'Trust Wallet AI Agent Kit — AI agents now execute real crypto transactions across 25 blockchains without human confirmation', detail: 'CZ-owned Trust Wallet released the Agent Kit infrastructure letting AI agents execute real cryptocurrency transactions across more than 25 blockchains autonomously. The release is the first major infrastructure layer enabling AI agents to act as real financial participants in multi-chain crypto ecosystems — a production-grade step toward the autonomous AI agent economy.', source: 'SearchNews' },
        { rating: 4, headline: 'Automated AI agent web traffic grows 8 times faster than human traffic — agentic searches becoming dominant online force', detail: 'A major study confirms automated traffic from bots and AI agents conducting agentic searches is growing 8 times faster than human web traffic as of March 2026. The data signals a structural shift in web economics: AI agents are becoming the primary web consumers for research, purchasing decisions, and data aggregation — ahead of schedule from most 2025 forecasts.', source: 'SearchNews' },
        { rating: 3, headline: 'Figure AI CEO teases Hark — next-generation AGI lab targeting AI that senses and interacts like humans in real environments', detail: 'Figure AI CEO teased Hark, a new advanced AI research lab with the goal of building AI that can sense and interact like humans in real-world environments. "AGI, in the limit, should feel like a sci-fi movie" — 116 upvotes on r/singularity. Figure AI is already deploying humanoid robots commercially and is now investing in the foundational research layer.', source: 'Reddit r/singularity' },
        { rating: 3, headline: 'Meta launches AI agents that run full advertising campaigns autonomously inside Ads Manager and WhatsApp', detail: 'Meta launched AI agents that run advertising campaigns completely autonomously from start to finish — including targeting, creative decisions, and optimization — inside Ads Manager and WhatsApp. The deployment marks the largest single production rollout of autonomous marketing agents in the industry to date by user reach.', source: 'YouSearch' },
        { rating: 3, headline: 'XRP live micropayments for AI agent commerce on XRPL — first production deployment of autonomous AI financial transactions', detail: 'XRP micropayments for autonomous AI agent commerce are live on the XRP Ledger. The milestone represents the first production deployment of AI agents conducting financial transactions on a public blockchain at scale — validating the XRP fast settlement and low-cost infrastructure thesis for AI agent payment rails.', source: 'COMPOSIO_SEARCH_NEWS' },
      ] },
      { icon: '💼', title: 'Industry & Policy', signals: [
        { rating: 4, headline: 'First-ever American AI Jobs Risk Index released by Tufts University — sector-by-sector displacement mapping goes public', detail: 'r/singularity (369 upvotes): Tufts University released the first-ever American AI Jobs Risk Index, providing formal sector-by-sector mapping of AI-driven employment disruption risk across the US workforce. The index is the most comprehensive academic risk mapping tool yet released and is expected to directly inform both federal policy response and institutional investment allocation decisions in 2026.', source: 'Reddit r/singularity' },
        { rating: 4, headline: 'China open-source AI dominance threatens US AI lead — US government advisory body issues formal strategic warning', detail: 'r/LocalLLaMA (525 upvotes): A US government advisory body formally warned that China dominance in open-source AI represents a strategic national security threat to US AI leadership. The warning explicitly references rapid adoption of open-source AI frameworks in Chinese enterprise and government contexts supported by $275K+ in state subsidies per major deployer.', source: 'Reddit r/LocalLLaMA' },
        { rating: 3, headline: 'David Sacks exits crypto czar role — transitions to co-chair President Council on AI and infrastructure', detail: 'Venture capitalist David Sacks has formally transitioned from his special government employee role as White House crypto czar to co-chair the President Council on AI and technology infrastructure. The move signals the White House executive focus is shifting from crypto-specific regulation to broad AI policy and national infrastructure governance.', source: 'COMPOSIO_SEARCH_NEWS' },
        { rating: 3, headline: 'AI superusers automating full daily routines using agentic tools — new power user class emerging in consumer markets', detail: 'A WSJ Business Brief confirmed: people who understand AI most deeply — the superusers — are now using AI agents to automate entire daily routines including scheduling, communication, research, and purchasing. This emerging class of AI power users is shifting from AI assistance to full agentic delegation of routine cognitive work.', source: 'SearchNews' },
      ] },
      { icon: '🛠️', title: 'Open Source & Tools', signals: [
        { rating: 4, headline: 'China-backed OpenClaw ecosystem drives open-source AI dominance — state subsidies, Baidu and Tencent deployments, 329K GitHub stars', detail: 'The OpenClaw ecosystem remains the central pillar of China open-source AI dominance as flagged in the US advisory body warning. With $275K in per-deployer state subsidies, Baidu and Tencent running production OpenClaw variants, and 329K GitHub stars as of last week, the project represents the most strategically significant open-source AI infrastructure of 2026.', source: 'OAX Foundation / Reddit r/LocalLLaMA' },
        { rating: 3, headline: 'VibeVoice 9B becomes new open-source STT leader — 8.34% WER on medical audio against 31 benchmarked models', detail: 'r/LocalLLaMA (25 upvotes): A developer benchmarked 31 speech-to-text models on medical audio and found VibeVoice 9B achieving 8.34% Word Error Rate — the new open-source leader for medical transcription. The model is large and computationally demanding but significantly outperforms all open-source alternatives. AI agent medical application stacks gain a stronger voice input layer.', source: 'Reddit r/LocalLLaMA' },
        { rating: 3, headline: 'Ternary neural networks gaining serious research momentum — plus-1 zero minus-1 weight quantization as efficient AI path', detail: 'r/MachineLearning (37 upvotes): Research into ternary neural networks using three-value weight quantization is receiving increasing serious attention as a path to highly efficient AI inference. The approach reduces memory and compute requirements while preserving model quality — directly relevant to edge deployment and on-device agentic applications that require low-power operation.', source: 'Reddit r/MachineLearning' },
        { rating: 2, headline: 'Open-source community asks why local models trail on ARC-AGI — frontier reasoning gap debate active on r/LocalLLaMA', detail: 'r/LocalLLaMA community is actively debating why open-source local LLMs continue to significantly trail frontier models on ARC-AGI reasoning benchmarks. The discussion highlights the gap between parameter efficiency improvements achieved in open-source and the formal reasoning capabilities that remain concentrated in proprietary frontier models.', source: 'Reddit r/LocalLLaMA' },
      ] },
      { icon: '🔬', title: 'Research', signals: [
        { rating: 4, headline: 'AlphaFold plus ChatGPT mRNA cancer treatment: cross-modal AI coordination in biomedicine producing measurable real-world outcomes', detail: 'The Australian entrepreneur mRNA dog cancer story demonstrates cross-modal AI coordination: ChatGPT for reasoning and research synthesis, AlphaFold for protein structure prediction, custom mRNA for delivery engineering. The outcome — significant tumor reduction in weeks — validates the thesis that AI agents coordinating across specialized scientific tools can accelerate biomedical discovery timelines dramatically.', source: 'Reddit r/singularity' },
        { rating: 3, headline: 'Meta TRIBE v2 — brain encoding model predicts fMRI responses across video, audio, and text for neuroscience AI research', detail: 'Meta released TRIBE v2, a brain encoding model that predicts fMRI responses across multiple sensory modalities including video, audio, and text simultaneously. The model represents a significant step toward unified cross-modal brain response prediction, with applications in neuroscience research and AI alignment research into how neural and artificial representations relate.', source: 'SearchNews' },
        { rating: 3, headline: 'Memristor demonstrates fully analog hardware-based neural network — new path to neuromorphic computing validated in lab', detail: 'r/artificial (5 upvotes): Researchers demonstrated a memristor-based fully analog hardware neural network — a significant proof-of-concept for neuromorphic computing architectures. The approach uses physical analog computation rather than digital simulation of neural networks, offering potential orders-of-magnitude efficiency improvements for inference workloads at the hardware level.', source: 'Reddit r/artificial' },
        { rating: 3, headline: 'Adversarial AI framework reveals mechanisms behind impaired consciousness — with potential therapy implications identified', detail: 'r/artificial (3 upvotes): A research team used an adversarial AI framework to reveal the computational mechanisms underlying impaired consciousness states. The research identified specific disruption patterns and proposed potential therapeutic interventions based on the computational model — an early example of AI-driven neuroscience producing actionable clinical hypotheses.', source: 'Reddit r/artificial' },
        { rating: 2, headline: '10 years since AlphaGo Move 37 — r/singularity reflects on where AI has and has not reached since 2016', detail: 'r/singularity (85 upvotes): A reflective discussion marking the 10th anniversary of AlphaGo Move 37 asks whether 2016-era observers would be impressed or disappointed by AI progress in 2026. The community consensus: impressive on narrow domains, surprising gaps in general reasoning and physical world interaction — consistent with the LeCun formal reasoning wall debate running simultaneously.', source: 'Reddit r/singularity' },
      ] },
    ],
  },


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
