import { NextRequest, NextResponse } from 'next/server';
import { callClaude } from '@/lib/claude';

export async function POST(req: NextRequest) {
  try {
    const { script } = await req.json();
    if (!script) return NextResponse.json({ error: 'script is required' }, { status: 400 });

    const result = await callClaude(
      'You are a voiceover director and AI voice specialist. You optimise scripts for natural text-to-speech delivery.',
      `Optimise this script for AI voice synthesis (ElevenLabs): "${script.slice(0, 500)}"

Provide:
**Optimised Script** (with natural pauses marked as "..." and emphasis marked as *word*)

**Delivery Notes**
- Recommended pace: [slow/medium/fast]
- Tone: [friendly/authoritative/excited/calm]
- Emphasis words: [key words to stress]

**Voice Recommendation**
- Best ElevenLabs voice type: [e.g. "Indian English, warm, professional male"]
- Model: eleven_multilingual_v2 (for Hindi/English code-switching support)

**Estimated Duration:** [X seconds at recommended pace]`,
      1000,
    );

    return NextResponse.json({ result });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
