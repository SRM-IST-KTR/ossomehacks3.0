export const THEME_DETAILS = [
  {
    id: 1,
    title: "Claw & Shield",
    image: "/tracks/fintech.png",
    imageScale: 1,
    subtitle: "ArmorIQ x OpenClaw Hackathon Brief",
    summary:
      "Autonomous AI agents are entering financial workflows — researching equities, executing trades, and monitoring portfolios on local systems. Build OpenClaw agents that enforce user-defined intent boundaries at runtime, even under ambiguous instructions or adversarial inputs.",
    sections: [
      {
        title: "Context and Core Question",
        items: [
          "Real risks exist: prompt injection, unauthorized tool execution, credential exposure, and silent scope escalation — compounded by regulatory requirements and irreversible transactions.",
          "Core challenge: How do we build agents with guaranteed adherence to user-defined intent, even under ambiguous instructions or malicious inputs?",
          "\"In financial systems, intent must be enforced, not inferred.\"",
        ],
      },
      {
        title: "Your Challenge",
        items: [
          "Build an OpenClaw-based autonomous system operating in a simulated financial environment using ArmorClaw for intent enforcement.",
          "Perform meaningful multi-step reasoning across financial data.",
          "Execute real actions against a live paper trading API (no mocked responses). All trading uses simulated funds (e.g., Alpaca, TradeStation SIM).",
          "Enforce clear intent boundaries at runtime with deterministic constraints.",
          "Demonstrate explicit blocking of unauthorized behavior — no human-in-the-loop intervention.",
        ],
      },
      {
        title: "Technical Requirements",
        items: [
          "An OpenClaw-based autonomous agent.",
          "Real execution of actions against a live paper trading API.",
          "Intent validation layer before execution.",
          "Policy-based runtime enforcement (not hardcoded if/else checks).",
          "Pure chatbot demos without execution will not qualify. Demos using real money will not qualify.",
        ],
      },
      {
        title: "Architectural Expectations",
        items: [
          "Clear separation between reasoning and execution.",
          "A visible and explicit enforcement layer.",
          "Traceability through logs or decision records.",
          "At least one allowed financial action (e.g., paper trade within policy) and one blocked action (e.g., trade rejected for exceeding limits) with clear rationale.",
        ],
      },
      {
        title: "Intent and Policy Design",
        items: [
          "Define a structured intent model and an enforceable policy model.",
          "Financial constraints: trade size limits, ticker/asset class restrictions, directory-scoped file access, tool restrictions, time-based restrictions (market hours, earnings blackouts), spend/exposure limits.",
          "Intent and policy models must be structured and interpretable — hardcoded conditional logic alone is not sufficient.",
          "Enforcement must be programmatic and autonomous. Manual approval during execution is not permitted.",
        ],
      },
      {
        title: "Judging Criteria",
        items: [
          "Enforcement Strength: Constraints technically enforced at runtime; violations deterministically blocked.",
          "Architectural Clarity: Reasoning separated from execution; explicit and well-designed enforcement layer.",
          "OpenClaw Integration: Meaningful leverage of OpenClaw capabilities.",
          "Accurate Delegation Enforcement: Scope boundaries correctly enforced (bonus if implemented).",
          "Use Case Depth: Realistic financial scenario reflecting genuine risks like unauthorized trades, data exfiltration, or scope escalation.",
        ],
      },
      {
        title: "Submission Requirements",
        items: [
          "Source code repository.",
          "Architecture diagram.",
          "Short document describing: intent model, policy model, and enforcement mechanism.",
          "Three-minute demo video showing: system overview, allowed action, blocked action, and enforcement explanation.",
          "Finalist teams will present live with Q&A.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Open Innovation (AI/ML)",
    image: "/tracks/openinovation.png",
    imageScale: 1.2,
    subtitle: "Build High-Impact AI/ML Solutions",
    summary:
      "Choose a real problem space and deliver a practical AI/ML-powered product with measurable user value, responsible behavior, and clear technical depth.",
    sections: [
      {
        title: "Theme Focus",
        items: [
          "Open-domain innovation using AI/ML across healthcare, education, productivity, climate, accessibility, or civic systems.",
          "Prioritize practical impact, usability, and deployable outcomes over demo-only prototypes.",
          "Define one clear user segment and one measurable outcome your system improves.",
        ],
      },
      {
        title: "Your Challenge",
        items: [
          "Identify a meaningful real-world pain point and validate why it matters.",
          "Design an AI/ML workflow that goes beyond a thin wrapper around an API.",
          "Demonstrate end-to-end flow: input, reasoning/modeling, and useful output action.",
          "Ship a usable prototype with a clear product narrative and decision transparency.",
        ],
      },
      {
        title: "Technical Expectations",
        items: [
          "Working AI/ML core integrated into a real product flow.",
          "Clear data handling assumptions and model behavior explanation.",
          "Fallback or guardrail handling for uncertain or unsafe outputs.",
          "Reproducible demo path with stable runtime behavior.",
        ],
      },
      {
        title: "Evaluation Lens",
        items: [
          "Problem depth and relevance of the selected use case.",
          "Technical quality of modeling, orchestration, and system design.",
          "UX clarity, usefulness, and reliability of outputs.",
          "Responsible AI thinking: safety, bias awareness, and transparency.",
          "Execution quality, polish, and demo completeness.",
        ],
      },
      {
        title: "Suggested Deliverables",
        items: [
          "Source repository with readable setup instructions.",
          "Architecture overview (diagram preferred).",
          "Short brief: problem, users, model choices, constraints, and impact metrics.",
          "Concise video demo showing real usage flow and outcomes.",
        ],
      },
    ],
  },
];
