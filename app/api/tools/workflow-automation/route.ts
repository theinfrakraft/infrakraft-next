import { NextRequest, NextResponse } from 'next/server';
import { callClaude } from '@/lib/claude';

export async function POST(req: NextRequest) {
  try {
    const { task } = await req.json();
    if (!task) return NextResponse.json({ error: 'task is required' }, { status: 400 });

    const result = await callClaude(
      'You are an expert n8n workflow designer. You create practical, importable workflow designs for Indian SMBs. Be specific and actionable.',
      `Design an n8n workflow to automate this task: "${task}"

Respond with:
1. **Workflow Overview** (2-3 sentences)
2. **Trigger** (what starts the workflow)
3. **Steps** (numbered list of nodes with what each does)
4. **Tools/Apps Connected** (list each integration)
5. **Time Saved Per Week** (estimate)
6. **Setup Difficulty** (Easy/Medium/Hard with reason)

Keep it practical for a small Indian business.`,
      1200,
    );

    return NextResponse.json({ result });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
