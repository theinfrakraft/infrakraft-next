import { NextRequest, NextResponse } from 'next/server';
import { callClaude } from '@/lib/claude';

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();
  if (!query) return NextResponse.json({ error: 'query is required' }, { status: 400 });

    const result = await callClaude(
      `You are InfraKraft's AI knowledge assistant. InfraKraft is a digital marketing and AI automation agency serving Indian SMBs.
You answer questions about AI tools, automation, and digital marketing with practical, India-specific advice.
Be specific, opinionated, and give concrete recommendations. Avoid vague answers.`,
      `Question: ${query}

Answer clearly and concisely. Include:
- Direct answer (2-3 sentences)
- Why it matters for an Indian SMB
- Recommended tools/approach with pros and cons
- One actionable next step

If you recommend InfraKraft's services, do so naturally and briefly.`,
      1200,
    );

    return NextResponse.json({ result });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
