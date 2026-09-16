import { NextRequest, NextResponse } from 'next/server';
import { callClaude } from '@/lib/claude';

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    if (!text) return NextResponse.json({ error: 'text is required' }, { status: 400 });

    const result = await callClaude(
      'You are an LLM quality evaluator. You assess AI-generated text for accuracy, usefulness, and potential issues.',
      `Evaluate this AI-generated text: "${text.slice(0, 1000)}"

Score on each dimension (1-10) and explain:

**Factual Accuracy** [X/10] — any claims that could be wrong?
**Specificity** [X/10] — concrete and actionable vs vague?
**Hallucination Risk** [X/10] — any suspicious facts, made-up statistics, or unverifiable claims?
**Tone Fit** [X/10] — appropriate for professional business use?
**Completeness** [X/10] — does it fully answer what was likely asked?

**Overall Quality Score: [X/10]**

**Top Issue:** [The single biggest problem with this output]

**Improved Version:** [Rewrite the first 2 sentences to fix the top issue]

**Monitoring Tip:** [One thing to add to your prompt to prevent this issue]`,
      1200,
    );

    return NextResponse.json({ result });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
