export const quickStart = [
  "Start with one user problem and one measurable success metric.",
  "Freeze an MVP scope in the first hour to avoid feature creep.",
  "Set up Git workflow + deployment target before major coding starts.",
  "Ship a thin end-to-end flow early, then iterate with mentor feedback.",
];

export const installGuides = [
  {
    tool: "Git",
    purpose: "Version control and team collaboration",
    command: "sudo apt install git  # Linux\nbrew install git      # macOS",
    docs: "https://git-scm.com/downloads",
  },
  {
    tool: "Node.js LTS",
    purpose: "Runtime for modern JavaScript projects",
    command: "nvm install --lts\nnvm use --lts",
    docs: "https://nodejs.org/en/download",
  },
  {
    tool: "VS Code",
    purpose: "Editor with fast extensions + debugger",
    command: "brew install --cask visual-studio-code #macOS",
    docs: "https://code.visualstudio.com/download",
  },
  {
    tool: "GitHub CLI",
    purpose: "Create PRs/issues directly from terminal",
    command: "brew install gh\n# or: sudo apt install gh",
    docs: "https://cli.github.com/",
  },
];

export const gitCommands = [
  { command: "git clone <repo-url>", note: "Clone project" },
  { command: "git checkout -b feature/<name>", note: "Create branch" },
  { command: "git add .", note: "Stage changes" },
  { command: "git commit -m \"feat: add xyz\"", note: "Commit clearly" },
  { command: "git pull origin main --rebase", note: "Sync safely" },
  { command: "git push -u origin feature/<name>", note: "Push branch" },
  { command: "gh pr create", note: "Open pull request" },
];

export const buildPlaybook = [
  {
    phase: "Hour 0-3",
    focus: "Problem + scope",
    actions: "Define users, success metric, and non-negotiable MVP boundaries.",
  },
  {
    phase: "Hour 4-12",
    focus: "Core implementation",
    actions: "Build the happy path with stable API contracts and basic logging.",
  },
  {
    phase: "Hour 13-24",
    focus: "Quality + resilience",
    actions: "Add error states, loading states, and fallback behavior.",
  },
  {
    phase: "Hour 25-36",
    focus: "Demo + submission",
    actions: "Prepare a tight demo script and validate every submission link.",
  },
];

export const architectureBlueprints = [
  {
    name: "Frontend + API",
    stack: "Next.js + Express/FastAPI",
    whenToUse: "You need polished UI + custom backend logic.",
  },
  {
    name: "AI Feature App",
    stack: "Next.js + Python ML service",
    whenToUse: "You need model inference, prompt pipelines, or embeddings.",
  },
  {
    name: "Security-first Service",
    stack: "Backend API + Auth + Audit logging",
    whenToUse: "You are solving Claw & Shield security workflows.",
  },
];

export const demoPrep = [
  "Open with the problem in one sentence.",
  "Show one happy path from start to end without interruption.",
  "Show one failure or edge-case and recovery behavior.",
  "Close with impact metric + future scope.",
];

export const judgingCriteria = [
  { area: "Problem Clarity", what: "Clear user pain and why it matters", selfCheck: "Can a judge repeat your problem in one sentence?" },
  { area: "Technical Depth", what: "Strong architecture and implementation choices", selfCheck: "Did you explain trade-offs, not just tools?" },
  { area: "Execution Quality", what: "Working demo, reliable flow, polished UX", selfCheck: "Does your core flow work without manual fixes?" },
  { area: "Impact", what: "Measurable value or meaningful outcome", selfCheck: "Do you have one concrete impact metric?" },
  { area: "Presentation", what: "Crisp storytelling and confident demo", selfCheck: "Can your team pitch in 3 minutes clearly?" },
];

export const failureModes = [
  "Broken demo link or credentials missing at judging time.",
  "No fallback/error states for API/model failures.",
  "Environment variables not documented in README.",
  "Scope too broad, so nothing feels complete.",
  "Pitch focuses on features, not problem and impact.",
];

export const mentorQuestions = [
  "What would you cut to keep this MVP strong and judge-ready?",
  "Which part of our architecture is most risky right now?",
  "What metric would best prove impact for this problem?",
  "If you were a judge, what would be your first criticism?",
  "What one UX change would most improve demo clarity?",
  "Are we over-engineering any module for hackathon scope?",
  "What security or privacy gap should we close before demo?",
  "How can we present this better for non-technical judges?",
  "What should be our strongest differentiation statement?",
  "What can we do in the next 2 hours for maximum score gain?",
];

export const teamRoleTemplates = [
  {
    teamSize: "2 Members",
    split: "Builder 1: frontend + demo flow | Builder 2: backend + deployment + README",
  },
  {
    teamSize: "3 Members",
    split: "Member 1: frontend | Member 2: backend/data | Member 3: integration + QA + pitch",
  },
  {
    teamSize: "4 Members",
    split: "Member 1: frontend | Member 2: backend/APIs | Member 3: AI/security/core logic | Member 4: QA + docs + pitch",
  },
];

export const apiReadinessChecklist = [
  "Timeouts and retries configured for external API calls.",
  "Rate-limit behavior handled with user-visible fallback.",
  "Validation for all required request inputs.",
  "Structured error responses and logs for debugging.",
  "Graceful no-network/offline behavior in UI flow.",
];

export const securityQuickChecks = [
  "No secrets or keys committed in repo history.",
  "Input validation and sanitization on all user-controlled fields.",
  "Auth/session logic protects sensitive routes and actions.",
  "CORS policy restricted to required origins only.",
  "Basic audit logging for critical user/system actions.",
];

export const pitchScripts = [
  {
    duration: "90 Seconds",
    structure: "Problem (20s) -> Solution (35s) -> Demo Proof (25s) -> Impact (10s)",
  },
  {
    duration: "180 Seconds",
    structure: "Problem (30s) -> Why Now (20s) -> Architecture (35s) -> Demo (60s) -> Impact + Roadmap (35s)",
  },
];

export const trackResources = [
  {
    track: "Claw & Shield",
    description: "The following are optional references to help teams get started. They are not required reading.",
    links: [
      { label: "Claw & Shield Rulebook (PDF)", url: "/resources/claw-shield-rulebook.pdf" },
    ],
    categories: [
      {
        category: "Core Frameworks",
        links: [
          { label: "OpenClaw", description: "Open-source autonomous AI agent framework", url: "https://github.com/openclaw/openclaw" },
          { label: "OpenClaw Documentation", description: "Official docs covering tools, skills, and security", url: "https://docs.openclaw.ai/" },
          { label: "OpenClaw Skills Overview", description: "How skills work and how to create them", url: "https://openclawdoc.com/docs/skills/overview/" },
          { label: "ClawHub", description: "Central skill registry for OpenClaw", url: "https://clawhub.com/" },
        ],
      },
      {
        category: "Intent Enforcement",
        links: [
          { label: "ArmorClaw", description: "Intent enforcement plugin for OpenClaw agents", url: "https://github.com/armoriq/armorclaw" },
          { label: "ArmorIQ OpenClaw Docs", description: "Setup, concepts, and configuration", url: "https://docs-openclaw.armoriq.ai/" },
          { label: "ArmorIQ", description: "Intent Intelligence platform for AI agent security", url: "https://armoriq.ai/" },
        ],
      },
      {
        category: "Paper Trading APIs",
        links: [
          { label: "Alpaca Paper Trading", description: "Free simulated trading with real-time market data", url: "https://docs.alpaca.markets/docs/paper-trading" },
          { label: "Alpaca Trading API", description: "Order execution, positions, and market data", url: "https://docs.alpaca.markets/docs/trading-api" },
          { label: "Alpaca MCP Server", description: "Official MCP server for natural-language trading", url: "https://github.com/alpacahq/alpaca-mcp-server" },
          { label: "OpenClaw Alpaca Trading Skill", description: "Community-built OpenClaw skill for Alpaca", url: "https://github.com/lacymorrow/openclaw-alpaca-trading-skill" },
          { label: "TradeStation SIM API", description: "Alternative paper trading API", url: "https://api.tradestation.com/docs/fundamentals/sim-vs-live/" },
        ],
      },
      {
        category: "Security Background",
        links: [
          { label: "Microsoft: Running OpenClaw Safely", description: "Identity, isolation, and runtime risk", url: "https://www.microsoft.com/en-us/security/blog/2026/02/19/running-openclaw-safely-identity-isolation-runtime-risk/" },
          { label: "Cisco: Personal AI Agents Are a Security Nightmare", description: "Enterprise risk analysis", url: "https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare" },
          { label: "ClawJacked Vulnerability Disclosure", description: "Agent reasoning hijack via malicious websites", url: "https://thehackernews.com/2026/02/clawjacked-flaw-lets-malicious-sites.html" },
          { label: "Bitdefender AI Skills Checker", description: "Free security scanner for OpenClaw skills", url: "https://www.bitdefender.com/en-us/consumer/ai-skills-checker" },
        ],
      },
    ],
  },
  {
    track: "Open Innovation (AI/ML)",
    description: "Data-to-model workflow, rapid prototyping, and practical deployment for demos.",
    links: [
      { label: "Hugging Face Tasks", url: "https://huggingface.co/tasks" },
      { label: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
      { label: "LangChain Docs", url: "https://python.langchain.com/docs/introduction/" },
      { label: "MLflow Docs", url: "https://mlflow.org/docs/latest/index.html" },
      { label: "Hugging Face Datasets", url: "https://huggingface.co/datasets" },
      { label: "FastAPI Docs", url: "https://fastapi.tiangolo.com/" },
    ],
  },
];

export const generalTechResources = [
  { label: "MDN Web Docs", url: "https://developer.mozilla.org/" },
  { label: "Next.js Docs", url: "https://nextjs.org/docs" },
  { label: "Tailwind CSS Docs", url: "https://tailwindcss.com/docs" },
  { label: "Framer Motion Docs", url: "https://www.framer.com/motion/" },
  { label: "Postman Learning Center", url: "https://learning.postman.com/" },
  { label: "Vercel Docs", url: "https://vercel.com/docs" },
];

export const gitCheatSheet = {
  label: "Download Git Cheat Sheet (PDF)",
  url: "https://education.github.com/git-cheat-sheet-education.pdf",
};

export const submissionTemplate = {
  label: "Download Submission Template (Markdown)",
  url: "/resources/submission-template.md",
};

export const finalChecklist = [
  "README includes setup, architecture summary, and demo link.",
  "Live deployment works on desktop and mobile.",
  "Environment variables are documented and excluded from git.",
  "Submission form links and video are verified twice.",
  "Team can explain problem, solution, and impact in <3 minutes.",
];
