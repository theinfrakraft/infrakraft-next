import { NextRequest, NextResponse } from 'next/server';
import { callClaude } from '@/lib/claude';

export async function POST(req: NextRequest) {
  try {
    const { description, budget } = await req.json();
    if (!description) return NextResponse.json({ error: 'description is required' }, { status: 400 });

    const result = await callClaude(
      'You are a senior technical architect at InfraKraft. You recommend lean, AI-native tech stacks that can be built fast with tools like Cursor, Windsurf, and Lovable.',
      `Recommend a tech stack for: "${description}"
Budget: ${budget || 'bootstrap'}

Provide:
**Recommended Stack**
- Frontend: [framework + why]
- Backend: [framework + language + why]
- Database: [choice + why]
- Auth: [choice + why]
- Hosting: [choice + monthly cost]
- AI Layer: [if applicable]

**Build Timeline:** [estimate for solo developer using AI coding tools]
**Monthly Running Cost:** [realistic estimate in INR and USD]
**Biggest Technical Risk:** [one thing to watch out for]
**Start Here:** [first thing to build to validate the idea]`,
      1200,
    );

    return NextResponse.json({ result });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
