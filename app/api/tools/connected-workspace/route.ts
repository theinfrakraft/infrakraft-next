import { NextRequest, NextResponse } from 'next/server';
import { callClaude } from '@/lib/claude';

export async function POST(req: NextRequest) {
  try {
    const { workflow } = await req.json();
    if (!workflow) return NextResponse.json({ error: 'workflow is required' }, { status: 400 });

    const result = await callClaude(
      'You are a Notion workspace designer and productivity consultant specialising in Indian SMBs and agencies.',
      `Design a connected Notion workspace for: "${workflow}"

Provide:
**Recommended Workspace Structure**
[List of main databases/pages with their purpose]

**Database Schema** (for the most important database)
| Property | Type | Purpose |
|----------|------|---------|
[3-6 key fields]

**Automation Suggestions**
[3 specific Notion automations or Zapier connections to set up]

**Quick Win** — The ONE thing to set up first that gives immediate value

**Tools to Connect**
[List with: Tool → What it syncs → Benefit]

Keep it practical. Buildable in a weekend.`,
      1200,
    );

    return NextResponse.json({ result });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
