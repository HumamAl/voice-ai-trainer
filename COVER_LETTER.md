Closario

Real-time voice AI with personality modes and structured feedback — that's a genuinely interesting pipeline to build. I put together a working demo of what the dashboard and session flow could look like: {VERCEL_URL}

I've built AI pipelines before (WMF Agent Dashboard — Claude API for email classification and structured data extraction) and audio-driven apps (Meditation Audio — script generation + TTS playback). The voice pipeline would use WebSocket streaming with Deepgram for STT and ElevenLabs for natural TTS output — sub-200ms perceived latency is achievable with overlapping processing stages.

For the personality engine: each mode would use a layered prompt architecture — base personality + context-aware adaptation per turn, not just a system prompt swap.

One question: are you leaning toward a specific voice API provider, or is that part of what you want me to evaluate and recommend?

10-minute call or I can send a 2-slide architecture plan — your pick.

P.S. I can also record a quick Loom walkthrough of the demo if that's easier.

— Humam
