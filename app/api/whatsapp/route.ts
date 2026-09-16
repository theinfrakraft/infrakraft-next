import { NextRequest, NextResponse } from 'next/server';

const KEYWORD_RULES = [
  {
    match: /pric|cost|rate|charges?|₹|rupee/i,
    reply: `Here's a quick overview 👇\n\n*Websites*\n• Starter — ₹5,000 (3 pages, 5–7 days)\n• Business — ₹15,000 (up to 8 pages, e-commerce ready)\n• Monthly Retainer — ₹8,000/mo\n\n*Cloud & DevOps*\n• AWS Setup — from ₹8,000\n• CI/CD Pipeline — from ₹6,000\n\n*AI & Automation*\n• WhatsApp / Website Bot — from ₹8,999\n\nFull pricing 👉 https://theinfrakraft.vercel.app/pricing\n\nWant a free 30-min scoping call? https://cal.com/infrakraft/30min`,
  },
  {
    match: /aws|cloud|ec2|s3|terraform|devops|infra/i,
    reply: `I'm AWS-certified (Solutions Architect) and work with:\n\n• EC2, ECS/Fargate, RDS, S3, CloudFront\n• Terraform for infrastructure-as-code\n• IAM, VPC, security groups\n• CI/CD via GitHub Actions or CodePipeline\n\nTypical cloud setup: *₹8,000–₹20,000* depending on scope.\n\nLet's talk specifics — book a free call 👉 https://cal.com/infrakraft/30min`,
  },
  {
    match: /ci.?cd|pipeline|deploy|github.action|codepipeline/i,
    reply: `CI/CD is one of my specialties 🚀\n\nA typical setup covers:\n• Automated builds + tests on every push\n• Staging → production promotion\n• Docker + container deployments\n• Slack/email notifications on failures\n\nMost pipelines: *₹6,000–₹14,000*, delivered in 3–5 days.\n\nFree scoping call 👉 https://cal.com/infrakraft/30min`,
  },
  {
    match: /whatsapp.?bot|chatbot|ai.?bot|automation|bot/i,
    reply: `WhatsApp AI bots are one of my favourite builds 🤖\n\nStarting from *₹8,999*. Most clients see ROI within the first month.\n\nWant to see one in action? Reply "demo" and I'll show you 👇`,
  },
  {
    match: /website|web.?app|ecommerce|e-commerce|shop|store/i,
    reply: `I build fast, mobile-first websites for Indian businesses 🇮🇳\n\n• Starter (3 pages) — *₹5,000*, 5–7 days\n• Business (up to 8 pages) — *₹15,000*, 10–14 days\n• Monthly Retainer — *₹8,000/mo*\n\nFull pricing 👉 https://theinfrakraft.vercel.app/pricing`,
  },
];

const SYSTEM_PROMPT = `You are the AI assistant for InfraKraft, a freelance tech service run by Krishna Prasad — an AWS-certified engineer based in Bangalore and Chennai.

Services and pricing:
- Websites: Starter ₹5,000 (3 pages, 5–7 days), Business ₹15,000 (up to 8 pages), Monthly Retainer ₹8,000/mo
- AWS Cloud Setup: from ₹8,000 | CI/CD Pipeline: from ₹6,000 | Cloud Security Audit: ₹4,999
- WhatsApp/AI Bot: from ₹8,999 | Business Automation: ₹15,000–₹35,000
- Tutoring: ad-hoc ₹500–₹800/hr
- Payment: 50% advance, 50% on delivery. Free 30-min scoping call before any project.

Contact: WhatsApp this number | cal.com/infrakraft/30min | contact.theinfrakraft@gmail.com
Site: https://theinfrakraft.vercel.app

Tone: friendly, direct, helpful. Keep replies concise — under 120 words. Always end with a clear CTA. Use WhatsApp-friendly formatting: *bold* for emphasis, bullet points. Never say you are an AI.`;

async function callClaude(userMessage: string): Promise<string> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY!,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userMessage }],
    }),
  });
  const data = await res.json();
  return data.content?.[0]?.text || "Thanks for reaching out! I'll get back to you shortly. Or book a call directly 👉 https://cal.com/infrakraft/30min";
}

async function sendReply(phoneId: string, accessToken: string, to: string, text: string) {
  await fetch(`https://graph.facebook.com/v20.0/${phoneId}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ messaging_product: 'whatsapp', to, type: 'text', text: { body: text, preview_url: false } }),
  });
}

export async function GET(req: NextRequest) {
  const { WA_VERIFY_TOKEN } = process.env;
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');
  if (mode === 'subscribe' && token === WA_VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  }
  return new Response('Forbidden', { status: 403 });
}

export async function POST(req: NextRequest) {
  const { WA_ACCESS_TOKEN, WA_PHONE_ID } = process.env;
  const body = await req.json();
  try {
    const entry = body?.entry?.[0]?.changes?.[0]?.value;
    const msg = entry?.messages?.[0];
    if (!msg || msg.type !== 'text') return NextResponse.json({}, { status: 200 });

    const from = msg.from;
    const text = msg.text.body.trim();

    await fetch(`https://graph.facebook.com/v20.0/${WA_PHONE_ID}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${WA_ACCESS_TOKEN}` },
      body: JSON.stringify({ messaging_product: 'whatsapp', status: 'read', message_id: msg.id }),
    });

    const matched = KEYWORD_RULES.find((r) => r.match.test(text));
    const reply = matched ? matched.reply : await callClaude(text);

    await sendReply(WA_PHONE_ID!, WA_ACCESS_TOKEN!, from, reply);
  } catch (e) {
    console.error('WhatsApp webhook error:', e);
  }
  return NextResponse.json({}, { status: 200 });
}
