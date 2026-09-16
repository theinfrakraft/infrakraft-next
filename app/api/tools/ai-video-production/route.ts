import { NextRequest, NextResponse } from 'next/server';
import { callClaude } from '@/lib/claude';

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();
    if (!topic) return NextResponse.json({ error: 'topic is required' }, { status: 400 });

    const result = await callClaude(
      'You are a YouTube content creator and scriptwriter for InfraKraft, an AI and digital marketing agency targeting Indian SMBs.',
      `Write video scripts for: "${topic}"

**YOUTUBE SHORT (60 seconds)**
[Hook — first 3 seconds, must stop the scroll]
[Value — 3 fast points]
[CTA — subscribe/follow]

---

**YOUTUBE VIDEO INTRO (first 90 seconds)**
[Hook question or bold statement]
[Why this matters — 2 sentences]
[What they'll learn — quick list]
[Transition to main content]

---

**INSTAGRAM CAPTION**
[Hook line]
[3-4 value points with emojis]
[CTA]
[10 relevant hashtags]

Keep the tone: professional but conversational. Optimised for Indian audience.`,
      1500,
    );

    return NextResponse.json({ result });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
