import Anthropic from '@anthropic-ai/sdk';

let _client: Anthropic | null = null;

export function getAnthropicClient() {
  if (!_client) {
    _client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }
  return _client;
}

export async function callClaude(system: string, user: string, maxTokens = 1500): Promise<string> {
  const client = getAnthropicClient();
  const msg = await client.messages.create({
    model: 'claude-sonnet-5',
    max_tokens: maxTokens,
    system,
    messages: [{ role: 'user', content: user }],
  });
  return (msg.content[0] as { type: string; text: string }).text;
}
