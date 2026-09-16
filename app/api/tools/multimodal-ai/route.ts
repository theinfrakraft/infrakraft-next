import { NextRequest, NextResponse } from 'next/server';
import { callClaude } from '@/lib/claude';

export async function POST(req: NextRequest) {
  try {
    const { content } = await req.json();
    if (!content) return NextResponse.json({ error: 'content is required' }, { status: 400 });

    const result = await callClaude(
      'You are a content strategy expert who analyses YouTube titles and social media posts for performance potential.',
      `Analyse this content for strategy and performance: "${content}"

Provide:
**Hook Strength** (1-10 with explanation)
**Curiosity Gap** — does it make you want to watch/read? Why?
**SEO Value** — key phrases that make it searchable
**Target Audience Fit** — who is this for?
**Emotional Triggers** — what emotions does it activate?
**One Improvement** — rewrite the title/caption to score 2 points higher
**Predicted Performance** — Low / Medium / High with reason`,
      1000,
    );

    return NextResponse.json({ result });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
