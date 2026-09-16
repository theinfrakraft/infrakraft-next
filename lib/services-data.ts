export interface ServicePillar {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  tools: string[];
  whatWeDo: string[];
  useCases: { title: string; desc: string }[];
  outcome: string;
}

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    tagline: "Make your business run while you sleep.",
    icon: "⚡",
    description:
      "We design and deploy end-to-end automated workflows that connect your apps, eliminate manual work, and trigger the right action at the right time — using n8n, Zapier, and Make.",
    tools: ["n8n", "Zapier", "Make.com", "Webhooks", "Google Sheets", "Slack", "WhatsApp"],
    whatWeDo: [
      "Map your current manual processes and identify automation opportunities",
      "Build multi-step workflows across CRM, email, WhatsApp, and databases",
      "Set up triggers, filters, error handling, and retry logic",
      "Self-hosted n8n setup on your own AWS/VPS for full data control",
      "Ongoing monitoring and iteration as your processes evolve",
    ],
    useCases: [
      { title: "Lead routing", desc: "Auto-assign inbound leads from your website to the right sales rep, log to CRM, and send a WhatsApp intro — in seconds." },
      { title: "Invoice automation", desc: "Generate and send invoices automatically when a deal closes, then follow up on unpaid ones on day 3, 7, and 14." },
      { title: "Social media scheduling", desc: "Post approved content to Instagram, LinkedIn, and Facebook on a schedule — no manual copy-paste." },
      { title: "Onboarding flow", desc: "When a new client signs, auto-create their project folder, send welcome email, and create tasks in ClickUp." },
    ],
    outcome: "Most clients eliminate 10–20 hours of weekly manual work within the first month.",
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    tagline: "Autonomous AI that thinks, plans, and acts.",
    icon: "🤖",
    description:
      "We build multi-agent systems using CrewAI, AutoGen, and LangGraph that can research, decide, and execute complex tasks — going far beyond simple chatbots.",
    tools: ["CrewAI", "AutoGen", "LangGraph", "LangChain", "OpenAI", "Claude", "Python"],
    whatWeDo: [
      "Design agent roles, goals, and tool access for your specific use case",
      "Build orchestration layers with fallback, retry, and human-in-the-loop checkpoints",
      "Integrate agents with your existing data sources and APIs",
      "Deploy on AWS Lambda, ECS, or your own server with logging and monitoring",
      "Provide dashboards to review agent outputs before they go live",
    ],
    useCases: [
      { title: "Research agent", desc: "Automatically monitor competitors, summarise news, and deliver a daily briefing to your inbox or Slack." },
      { title: "Content pipeline", desc: "Multi-agent system that fetches trends, generates scripts, creates images, and posts to YouTube and Instagram — daily, without human input." },
      { title: "Customer support triage", desc: "Agent reads incoming emails, classifies intent, drafts replies, and escalates only when confidence is low." },
      { title: "Sales intelligence", desc: "Agent enriches leads from LinkedIn and web, scores them, and adds notes to your CRM automatically." },
    ],
    outcome: "Replace hours of research and coordination work with agents that run 24/7 and never miss a step.",
  },
  {
    slug: "multimodal-ai",
    name: "Multimodal AI",
    tagline: "Build with models that see, hear, and understand.",
    icon: "🧠",
    description:
      "We integrate the latest multimodal LLMs — ChatGPT, Gemini, Claude, Grok — into your products and workflows, choosing the right model for each job.",
    tools: ["GPT-4o", "Gemini 1.5 Pro", "Claude 3.5", "Grok", "Whisper", "Vision APIs"],
    whatWeDo: [
      "Evaluate and recommend the right model for your cost and performance targets",
      "Build API wrappers, prompt templates, and fallback chains",
      "Process images, PDFs, audio, and video as inputs to AI workflows",
      "Implement structured output parsing for reliable downstream automation",
      "Cost and latency optimisation — right-size your model per task",
    ],
    useCases: [
      { title: "Document intelligence", desc: "Upload invoices, contracts, or reports — AI extracts structured data and feeds it into your workflow." },
      { title: "Image moderation", desc: "Automatically flag non-compliant product images before they go live on your e-commerce store." },
      { title: "Meeting transcription", desc: "Record calls, transcribe, summarise decisions and action items, and push to your project management tool." },
      { title: "Visual search", desc: "Customers upload a photo of what they want — AI finds the closest match in your product catalogue." },
    ],
    outcome: "Turn unstructured data — documents, images, calls — into structured, actionable information automatically.",
  },
  {
    slug: "rag",
    name: "RAG & Knowledge Bases",
    tagline: "AI that actually knows your business.",
    icon: "🔍",
    description:
      "We build Retrieval-Augmented Generation systems using LlamaIndex, Haystack, and vector databases — so your AI answers questions using your own data, not just what it was trained on.",
    tools: ["LlamaIndex", "Haystack", "LangChain", "Pinecone", "Supabase pgvector", "OpenAI Embeddings"],
    whatWeDo: [
      "Ingest and chunk your documents, PDFs, Notion pages, and databases",
      "Build embedding pipelines and choose the right vector store for your scale",
      "Design retrieval strategies — hybrid search, re-ranking, metadata filtering",
      "Build the chat interface and API your team or customers interact with",
      "Set up refresh pipelines so the knowledge base stays current",
    ],
    useCases: [
      { title: "Internal knowledge bot", desc: "Ask your company's SOPs, policies, and documentation in plain English — instant accurate answers." },
      { title: "Product support AI", desc: "Customer-facing chat trained on your product docs, FAQs, and past support tickets." },
      { title: "Legal document Q&A", desc: "Upload contracts — AI answers specific questions about clauses, dates, and obligations." },
      { title: "Sales enablement", desc: "Sales reps ask about pricing, case studies, and competitor responses — AI answers from your internal library." },
    ],
    outcome: "Stop losing institutional knowledge. Make everything your business knows available on demand.",
  },
  {
    slug: "ai-product-development",
    name: "AI Product Development",
    tagline: "From idea to live product — faster than ever.",
    icon: "🚀",
    description:
      "We build AI-native products using modern tools like Cursor, Windsurf, and Lovable alongside traditional code — delivering in weeks what used to take months.",
    tools: ["Cursor", "Windsurf", "Lovable", "Next.js", "FastAPI", "Supabase", "Vercel"],
    whatWeDo: [
      "Rapid prototyping — functional MVP in 1–2 weeks",
      "AI-assisted development with full code ownership on delivery",
      "Product scoping and technical architecture before a single line is written",
      "Integration with payment, auth, email, and storage providers",
      "Handover with documentation and deployment pipeline included",
    ],
    useCases: [
      { title: "SaaS MVP", desc: "Build and launch a core product with auth, payments, and a working feature set — ready for your first paying users." },
      { title: "Internal tool", desc: "Dashboards, admin panels, data entry tools, and reporting systems built fast for your team." },
      { title: "Client portal", desc: "A branded portal where your clients view project status, upload files, and communicate with your team." },
      { title: "AI-powered feature", desc: "Add an AI capability — smart search, auto-categorisation, content generation — to your existing product." },
    ],
    outcome: "Launch in weeks, not months. With full code ownership and no vendor lock-in.",
  },
  {
    slug: "ai-video-production",
    name: "AI Video Production",
    tagline: "Studio-quality video. No studio required.",
    icon: "🎬",
    description:
      "We produce AI-generated videos for marketing, training, and content at a fraction of traditional production cost — using Runway, Veo, Sora, and Seedance.",
    tools: ["Runway ML", "Veo 2", "Sora", "Higgsfield", "Seedance", "CapCut", "Adobe Premiere"],
    whatWeDo: [
      "Script writing and storyboarding for short-form and long-form video",
      "AI video generation from text prompts or existing images",
      "Post-production — editing, captions, music, and colour grading",
      "YouTube and Instagram-optimised exports with metadata",
      "Recurring content packages — weekly or monthly video deliverables",
    ],
    useCases: [
      { title: "Product explainer", desc: "60-second video explaining your product or service — ready for your homepage, ads, and pitches." },
      { title: "Social media reels", desc: "Weekly Instagram Reels and YouTube Shorts keeping your brand visible and growing." },
      { title: "Training videos", desc: "Onboarding and process training videos for your team — no camera crew needed." },
      { title: "Ad creatives", desc: "Multiple video ad variants for Meta and Google campaigns — test at scale without reshooting." },
    ],
    outcome: "Go from zero video presence to a consistent publishing schedule without hiring a videographer.",
  },
  {
    slug: "ai-voice-avatars",
    name: "AI Voice & Avatars",
    tagline: "Your voice and face — at infinite scale.",
    icon: "🎙️",
    description:
      "We create AI voice clones, digital avatars, and talking head videos using ElevenLabs and HeyGen — so you can produce content in your own voice without being on camera every time.",
    tools: ["ElevenLabs", "HeyGen", "D-ID", "Murf AI", "Eleven Multilingual v2"],
    whatWeDo: [
      "Voice cloning from a 10-minute sample — sounds exactly like you",
      "HeyGen avatar creation from a short video recording",
      "Automate talking-head video production from text scripts",
      "Multi-language voice synthesis for regional audiences",
      "Integration into your content pipeline for hands-free publishing",
    ],
    useCases: [
      { title: "Personalised video outreach", desc: "Send hundreds of personalised sales videos — each one sounds and looks like you recorded it personally." },
      { title: "Course content", desc: "Produce hours of e-learning content with your AI avatar — update lessons without re-recording." },
      { title: "Multilingual content", desc: "Publish your YouTube channel in Hindi, Tamil, and Telugu — in your own voice — without speaking those languages." },
      { title: "Brand ambassador videos", desc: "Consistent on-brand talking head videos for social media — published daily, recorded once." },
    ],
    outcome: "Your brand's voice and face, everywhere — without being in a studio every day.",
  },
  {
    slug: "connected-workspace",
    name: "Connected Workspace",
    tagline: "One place for your team to think, plan, and execute.",
    icon: "🗂️",
    description:
      "We design and build AI-powered connected workspaces using Notion, ClickUp, and Zapier — turning scattered tools into one coherent system your whole team actually uses.",
    tools: ["Notion", "ClickUp", "Zapier", "Slack", "Google Workspace", "Airtable"],
    whatWeDo: [
      "Workspace audit — map what you're using and where information gets lost",
      "Design a unified system: projects, tasks, docs, and meetings in one place",
      "Set up Notion AI or ClickUp AI features for your team",
      "Connect tools with automations — task created → Slack notified → calendar blocked",
      "Team training and SOP documentation so adoption actually sticks",
    ],
    useCases: [
      { title: "Agency OS", desc: "Client projects, creative briefs, deliverables tracking, and invoicing — all connected and automated." },
      { title: "Startup operating system", desc: "OKRs, product roadmap, sprint tracking, and team wiki — in one Notion workspace your whole team lives in." },
      { title: "Personal knowledge management", desc: "Second brain setup for founders and executives — capture ideas, notes, and research in a searchable system." },
      { title: "Client reporting", desc: "Automated weekly status reports pulled from ClickUp tasks and sent to clients — no manual write-up." },
    ],
    outcome: "Reduce context-switching by 60%. Every piece of information in one place, connected and automated.",
  },
  {
    slug: "ai-quality-cost-monitoring",
    name: "AI Quality & Cost Monitoring",
    tagline: "Ship AI you can trust. At a price you can afford.",
    icon: "📊",
    description:
      "We set up observability and cost monitoring for your AI systems using PromptLayer, Helicone, and TruLens — so you catch quality issues and cost spikes before they become problems.",
    tools: ["PromptLayer", "Helicone", "TruLens", "Langfuse", "Grafana", "CloudWatch"],
    whatWeDo: [
      "Instrument your LLM calls with request logging and trace IDs",
      "Set up cost dashboards by model, feature, and user segment",
      "Configure quality evals — hallucination detection, relevance scoring, toxicity checks",
      "Build alert rules for cost spikes and quality degradation",
      "Monthly reporting on AI spend and quality trends",
    ],
    useCases: [
      { title: "Cost control", desc: "Know exactly which feature is spending the most on API calls — and optimise it before the bill surprises you." },
      { title: "Quality regression alerts", desc: "Get notified the moment your AI's answer quality drops below threshold after a prompt change." },
      { title: "A/B prompt testing", desc: "Compare two prompt versions on real traffic — pick the one with better quality at lower cost." },
      { title: "Compliance logging", desc: "Full audit trail of every AI interaction for GDPR, SOC 2, and internal governance requirements." },
    ],
    outcome: "Ship AI features with confidence. Know what they cost, what they output, and when something breaks.",
  },
];

export function getPillarBySlug(slug: string): ServicePillar | undefined {
  return SERVICE_PILLARS.find((p) => p.slug === slug);
}
