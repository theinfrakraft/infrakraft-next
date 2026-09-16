import { NextRequest, NextResponse } from 'next/server';
import { callClaude } from '@/lib/claude';

export async function POST(req: NextRequest) {
  try {
    const { task } = await req.json();
    if (!task) return NextResponse.json({ error: 'task is required' }, { status: 400 });

    const result = await callClaude(
      'You are simulating a 3-agent CrewAI crew: a Researcher, an Analyst, and a Strategist. Show the reasoning of each agent clearly.',
      `Run a 3-agent research crew on this task: "${task}"

Format your response as:

🔍 **RESEARCHER** (finding the facts)
[What the researcher discovers — key facts, data points, sources]

📊 **ANALYST** (evaluating the findings)
[What the analyst concludes — patterns, scores, trade-offs]

🎯 **STRATEGIST** (the actionable recommendation)
[Final recommendation with specific next steps for an Indian SMB]

---
**Bottom Line:** [One clear, direct answer in 2 sentences]`,
      1500,
    );

    return NextResponse.json({ result });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
