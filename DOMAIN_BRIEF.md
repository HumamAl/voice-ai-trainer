# Domain Knowledge Brief — Voice AI Adaptive Training Platform

## Sub-Domain Classification

**Adaptive voice AI conversation training platform** — B2B/prosumer SaaS product where individual learners or enterprise teams practice real-time spoken conversations with AI personas that simulate different personality types (coach, interviewer, challenger, mentor, supportive), receive post-session scored feedback, and track improvement over time via a progress dashboard. Closest analogs: Yoodli (speech coaching), Hyperbound (sales roleplay), ELSA Speak (pronunciation coaching). Session-based engagement model with streak/habit mechanics. Target users include: sales reps, job seekers, non-native speakers, professionals improving communication skills.

---

## Job Analyst Vocabulary — Confirmed and Extended

The team lead specified these terms from the client brief. Confirming accuracy and extending.

### Confirmed Primary Entity Names

- **Primary record type**: "session" (confirmed — every platform in this space calls a completed voice conversation a "session", not "call", "lesson", or "class")
- **Secondary record type**: "practice" or "roleplay" (interchangeable at the session level; roleplay is used when a persona is involved)
- **AI trainer unit**: "persona" (confirmed — Hyperbound uses "buyer persona", Yoodli uses "roleplay persona"; the trainer type is a persona not an "agent" or "bot" in the user-facing layer)
- **Learning pathway unit**: "module" (a structured sequence of sessions around a skill topic — e.g., "Objection Handling Module")
- **Learner unit**: "learner" at individual level, "team" or "cohort" at group level (not "user" or "student")
- **Feedback output**: "scorecard" (confirmed — Yoodli and Hyperbound both use this term for post-session feedback reports)
- **Progress habit metric**: "streak" (confirmed industry term — used by ELSA Speak, Duolingo-style edtech, and AI coaching platforms)

### Vocabulary Additions (Not in Client Brief)

- **"mode"** — the scenario/context type for a session (e.g., Interview Mode, Cold Call Mode, Discovery Mode, Coaching Mode, Presentation Mode)
- **"drill"** — a short, focused micro-session targeting one specific skill (objection handling, filler word reduction); shorter than a full session
- **"persona difficulty"** — the aggressiveness/challenge level of the AI trainer (Skeptical, Neutral, Supportive, Challenging)
- **"transcript"** — the text record of the voice session; post-session review surface
- **"turn"** — one exchange unit in the conversation (learner speaks → AI responds = 1 turn); used in internal metrics
- **"latency"** — AI response delay in ms; mentioned as quality metric in platform reviews
- **"competency"** — a named skill being assessed (e.g., "Objection Handling", "Pacing", "Active Listening")
- **"benchmark"** — a target score range for a competency, set at the cohort or org level
- **"certification"** — a milestone award for completing a module or hitting score thresholds
- **"playbook"** — a curated set of sessions/drills organized around a topic (e.g., "Executive Interview Playbook")

---

### Expanded KPI Vocabulary

| KPI Name | What It Measures | Typical Format |
|---|---|---|
| Sessions Completed | Total voice sessions finished (not abandoned) | Count (e.g., 247) |
| Avg. Session Duration | Mean time per completed session | Minutes:seconds (e.g., 14m 32s) |
| Overall Score | Composite feedback score across all competencies | 0–100 or letter grade (A–F) |
| Fluency Score | Smoothness of speech, absence of hesitations and long pauses | 0–100 |
| Clarity Score | Pronunciation accuracy, articulation, diction quality | 0–100 |
| Confidence Score | Composite of pace, volume consistency, assertiveness in phrasing | 0–100 |
| Pacing (WPM) | Words per minute spoken; optimal range 130–170 WPM | Words per minute |
| Filler Word Rate | Frequency of filler words ("um", "uh", "like", "you know") per minute | Count/min |
| Active Listening Score | Response relevance, question acknowledgment, topic continuity | 0–100 |
| Completion Rate | % of started sessions that are fully completed (not abandoned) | % |
| Practice Streak | Consecutive days with at least 1 completed session | Days (e.g., 12-day streak) |
| Improvement Trend | Week-over-week change in Overall Score | +/- delta % |
| Avg. Turn Count | Average number of conversation exchanges per session | Count (e.g., 18 turns/session) |
| Vocabulary Range | Lexical diversity metric — variety of words used vs. repetition | Score or grade level |
| Sessions This Week | Rolling 7-day session count | Count |
| Top Competency | Highest-scoring skill area | Label (e.g., "Empathy") |
| Weakest Competency | Lowest-scoring skill area; focus area for improvement | Label (e.g., "Pacing") |

---

### Status Label Vocabulary

**Session statuses:**
- Active states: `In Progress`, `Live` (during an active voice session)
- Completion states: `Completed`, `Reviewed` (after feedback is read)
- Problem states: `Abandoned`, `Incomplete`, `Disconnected`
- Scheduled states: `Scheduled`, `Upcoming`
- Draft states: `Not Started`, `Queued`

**Learner/account statuses:**
- `Active` — currently enrolled and engaging
- `At Risk` — no session in 7+ days
- `Inactive` — no session in 14+ days
- `Onboarding` — first week, under initial assessment
- `Certified` — completed a full module/playbook

**Streak statuses:**
- `Active Streak` — streak is intact today
- `Streak Frozen` — used a streak freeze (protect mechanic)
- `Streak Lost` — missed a day, streak broken

**Score trend indicators:**
- `Improving` — 3+ sessions trending upward
- `Plateauing` — less than 2-point movement over 5 sessions
- `Declining` — 3+ sessions trending downward

---

### Workflow and Action Vocabulary

**Primary actions (button labels, CTAs):**
- `Start Session` — initiate a new voice conversation
- `Resume` — return to an incomplete session
- `Review Scorecard` — open the post-session feedback report
- `Choose Persona` — select an AI trainer personality before starting
- `Set Mode` — select session type (Interview, Cold Call, Discovery, Coaching)
- `Run Drill` — start a short targeted micro-session
- `Share Scorecard` — send feedback report to a manager or coach
- `Assign Playbook` — manager action to assign a module to a learner

**Secondary actions:**
- `Replay Transcript` — review session conversation as text
- `Bookmark Moment` — flag a specific transcript moment for follow-up
- `Request Human Review` — escalate to a human coach
- `Adjust Difficulty` — change persona challenge level mid-module
- `Download Report` — export session data as PDF/CSV
- `Compare to Benchmark` — view score vs. team/cohort average

---

### Sidebar Navigation Candidates

For a voice AI training platform dashboard (admin/manager view):

1. **Session Feed** — live and recent session activity across learners (not "Activity Log")
2. **Practice Library** — browse available session modes, playbooks, and drills (not "Content")
3. **Leaderboard** — ranked view of learner scores within team or cohort (not "Rankings")
4. **Scorecards** — searchable list of all post-session feedback reports (not "Reports")
5. **Personas** — manage and configure AI trainer personalities (not "Settings > AI")
6. **Progress Tracker** — individual learner trend charts and milestone history (not "Analytics")
7. **Playbooks** — curated session sequences assigned to learners or cohorts (not "Courses")
8. **Team Overview** — cohort-level aggregate metrics and at-risk flags (for enterprise use)

---

## Design Context — Visual Language of This Industry

### What "Premium" Looks Like in This Domain

Voice AI coaching platforms in the premium tier have converged on a design language that borrows equally from consumer fitness apps (Whoop, Oura) and professional productivity tools (Notion, Linear). The defining characteristic is **purposeful dark backgrounds** — not dark mode as an option, but dark as the primary surface choice. This signals "serious tool", "AI-native", and "focus environment." Duolingo and language learning skew playful-light; voice AI training platforms for professionals skew dark-premium with electric accent colors.

The critical UI pattern is the **waveform or audio-visual indicator during active sessions**. Animated soundwave graphics during recording, concentric ring animations when the AI is speaking, and color transitions on the active listening state are all expected. When a practitioner sees a flat, non-animated session interface they immediately sense "this is not a real voice platform." The animated state machine (idle → listening → processing → responding) is the primary trust signal.

Post-session scorecards use **radial gauge charts or large circular score indicators** for the headline metric (Overall Score), with competency breakdowns displayed as bar charts or horizontal progress bars beneath. This pattern appears across Yoodli, ELSA Speak, Orai, and Virtual Sapiens — it has become the expected convention. Flat numeric displays without the circular/gauge treatment feel underbuilt to practitioners in this space.

Streak and gamification elements use **fire icons, colored streak counters, and weekly activity heatmaps** — borrowed directly from Duolingo and fitness app conventions. These feel native and motivating, not gimmicky, within this category. Practitioners in voice training genuinely engage with streak mechanics.

### Real-World Apps Clients Would Recognize as "Premium"

1. **Yoodli** — The market-leading speech coaching platform. Known for clean, dark-background session interface with real-time waveform display, auto-generated scorecards with circular score gauges, and multi-persona roleplay selection. Visual pattern: dark canvas, teal/blue accent, large score circles, transcript alongside scorecard. Practitioners consider it the Grammarly of speech — frictionless, immediate, credible feedback.

2. **Hyperbound** — Enterprise sales roleplay platform. Known for highly customizable AI buyer personas (named characters with photos, personality descriptors, role titles), leaderboard-driven gamification, and "skill heatmap" team views. Visual pattern: dark, electric blue accents, avatar cards for personas, dense data tables for manager views. The go-to benchmark for sales coaching teams.

3. **ELSA Speak** — Consumer-facing pronunciation coach for non-native speakers. Known for granular phoneme-level feedback, color-coded pronunciation heat maps, and detailed session breakdowns with multiple sub-scores. Visual pattern: clean white for consumer facing, dark panels for analysis states, circular score indicators, color-coded feedback overlays (green/yellow/red on phonemes).

### Aesthetic Validation

- **Job Analyst chose**: Dark Premium (AI/ML product, "premium, simple, modern")
- **Domain validation**: **Confirmed and strongly validated.** Every top practitioner-trusted platform in this space (Yoodli, Hyperbound, Virtual Sapiens, Vocal Image) uses a dark-primary palette. The dark canvas is category-defining — it signals "real AI product" vs. generic edtech. A light-mode demo would read as generic and out-of-touch for this sub-domain.
- **One color nuance**: The premium signal in this space is **electric blue or deep violet** on near-black — NOT pure black. Near-black with subtle blue-tinted backgrounds (like `oklch(0.09 0.015 260)`) + bright electric blue primary (like `oklch(0.65 0.22 265)`) matches exactly what Yoodli, Hyperbound, and current AI SaaS use as their "serious but energetic" color story. Avoid cool gray on black (that reads cybersecurity). Avoid purple-only (that reads gaming). The Speak app uses warm-neutral backgrounds — lean away from that, it reads more consumer/edtech. Stay blue-electric for professional coaching credibility.
- **Glow effects**: Unlike most dark aesthetics, voice AI platforms actively use subtle glow effects on active session states and score indicators. A subtle `box-shadow: 0 0 20px oklch(0.65 0.22 265 / 0.3)` on primary cards is not overdone — it's expected.

### Density and Layout Expectations

**Standard density** — not compact (like DevOps tools) and not spacious (like wellness apps). Practitioners spend 5-20 minutes per session interaction then review scorecards, so the dashboard is a launch pad + review hub, not a continuous monitoring surface. Cards and panels are the dominant layout pattern (not dense tables), with tables reserved for session history lists and leaderboard views.

The primary composition split is: **stat cards + circular score indicator + session history table + trend line chart**. The session history table is list-heavy (sortable by date, score, mode, persona). The analysis views (individual session scorecard) are card-heavy (competency cards, waveform replay, transcript panel). This mirrors exactly how Yoodli and ELSA Speak structure their UI.

One non-obvious pattern: **the active session interface should look completely different from the dashboard** — it should be full-screen, stripped of navigation, focused entirely on the conversation state machine (idle/listening/processing). The dashboard is information-dense; the session is minimalist-focused.

---

## Entity Names (10+ realistic names)

### Companies / Organizations (B2B clients of the platform)

Realistic naming conventions in this space: "[Function] + [Corp-style suffix]" or clean brand-forward names:

1. Meridian Sales Group
2. Apex Talent Partners
3. Vantage Consulting LLC
4. Clearbridge Communications
5. NovaStar Recruiting
6. Riverton Financial Advisors
7. Cascadia Tech Solutions
8. Summit Professional Development
9. Brightway Learning Institute
10. Ironclad Sales Enablement
11. Nexus Workforce Solutions
12. Caliber Leadership Academy

### People Names (Learners and Managers)

Voice AI training platform workforce skews toward sales professionals, job seekers, and L&D practitioners — demographically diverse, professional-first naming:

**Learners:**
- Marcus Webb
- Priya Nair
- Jordan Calloway
- Fatima Al-Hassan
- Tyler Renaud
- Soo-Jin Park
- Daniel Okonkwo
- Emily Vasquez
- Raj Mehta
- Claire Donnelly

**L&D Managers / Coaches:**
- Sandra Rourke (Learning & Development Manager)
- Carlos Ibarra (Sales Enablement Lead)
- Alisha Tremblay (Training Coordinator)

### Session Modes / Products / Playbooks (10+ names)

1. Cold Call Challenger — roleplay a cold outbound B2B sales call
2. Technical Interview Gauntlet — FAANG-style behavioral + technical interview
3. Executive Presence Coach — C-suite presentation and gravitas training
4. Objection Handler — focused drill on handling price, timing, and competitor objections
5. Discovery Call Pro — consultative selling conversation practice
6. Difficult Conversation Navigator — giving/receiving feedback, conflict de-escalation
7. Accent Clarity Module — pronunciation and articulation for non-native speakers
8. Panel Interview Prep — multi-voice interview simulation with 2-3 AI personas
9. Elevator Pitch Lab — 60-90 second value proposition delivery and refinement
10. Leadership Storytelling — narrative structure and influence through story
11. Customer Success QBR — quarterly business review presentation practice
12. On-Camera Confidence — video call presence and pacing awareness

### AI Persona Names (the "trainers")

1. Alex — The Coach (warm, encouraging, growth-focused)
2. Morgan — The Challenger (skeptical, pushes back, high standards)
3. Sam — The Skeptic (analytical, data-driven, hard to impress)
4. Jordan — The Mentor (experienced, patient, asks Socratic questions)
5. Riley — The Supportive (empathetic, gentle correction, low pressure)
6. Taylor — The Executive (time-pressured, blunt, expects preparation)
7. Dana — The Interviewer (formal, structured, follows a rubric)

---

## Realistic Metric Ranges

| Metric | Low | Typical | High | Notes |
|--------|-----|---------|------|-------|
| Session duration | 4 min | 12–18 min | 45 min | Drills are shorter (3-8 min); full roleplays 10-25 min |
| Overall Score (0-100) | 42 | 67–74 | 91 | New users start 42-58; power users plateau 78-85 |
| Fluency Score | 38 | 64–72 | 94 | Improves faster than Clarity in first 4 weeks |
| Clarity Score | 41 | 61–69 | 88 | Non-native speakers start lower (35-50) |
| Confidence Score | 35 | 62–71 | 89 | Most sensitive to practice frequency |
| Filler Word Rate | 0.2/min | 2.1–4.8/min | 14.3/min | Industry avg per Yoodli/Orai benchmarks |
| Speaking pace (WPM) | 98 WPM | 138–162 WPM | 219 WPM | Optimal range 130-170; outliers above 200 flag as "too fast" |
| Session completion rate | 58% | 74–82% | 94% | Abandoned sessions skew short (< 3 min) |
| Practice streak | 1 day | 6–11 days | 48 days | Median user streak is 7 days; power users sustain 21+ |
| Sessions per week | 0.3 | 2.1–3.4 | 7+ | Active learners average 2-3; enterprise mandates drive higher |
| Score improvement week 1-4 | +2 pts | +8–14 pts | +28 pts | Fastest improvement in first 6 sessions |
| Turn count per session | 4 | 12–22 | 41 | Longer sessions have more turns |
| Monthly active learners (team) | 8 | 35–120 | 800+ | SMB 8-50, mid-market 50-200 |
| Avg. sessions per learner/month | 1.2 | 5.8–9.3 | 24 | Highly engaged learners: 12-20/month |

---

## Industry Terminology Glossary (12+ terms)

| Term | Definition | Usage Context |
|------|-----------|---------------|
| Session | A single completed voice conversation practice interaction with an AI persona | Primary record unit; "sessions completed" is the top KPI |
| Scorecard | Post-session feedback report showing scores across all competencies with written AI feedback | Generated immediately after session ends; can be shared with coaches |
| Persona | An AI trainer character with a defined personality, communication style, and role context | Learners choose before starting; e.g., "Alex - The Coach" |
| Mode | The scenario/context type for a session (Interview, Cold Call, Coaching, Presentation, etc.) | Determines the conversation structure and scoring rubric |
| Drill | A short, targeted micro-session (3-8 min) focused on one specific skill area | Used for rapid repetition on weak competency areas |
| Playbook | A curated sequence of sessions and drills around a specific skill domain | Assigned by managers; learners progress through; e.g., "Sales Objection Playbook" |
| Streak | Consecutive days with at least one completed session | Gamification/habit mechanic; shown prominently in dashboard |
| Competency | A named skill dimension scored in every session (Fluency, Clarity, Confidence, Active Listening, etc.) | Each session scorecard shows 4-6 competency scores |
| Benchmark | Target score range for a competency, set at team or industry level | Shown alongside individual scores; e.g., "Team avg: 71 / Your score: 68" |
| Transcript | The full text record of a session's spoken dialogue, reviewed post-session | Used for coaching, bookmarking, and AI highlight generation |
| Filler Word | Verbal pause fillers (um, uh, like, you know, basically, actually) tracked per minute | One of the most actionable short-term improvement metrics |
| WPM | Words per minute; measured speaking pace during session | Optimal: 130-170 WPM; flagged outside range in scorecard |
| Fluency | Smoothness of spoken output; absence of unnatural pauses, corrections, and hesitations | Distinct from Clarity (which is about articulation/pronunciation) |
| Turn | One complete exchange: learner speaks, AI responds = 1 turn | Internal metric used in session depth analysis |
| At Risk | Learner status flag for 7+ days without a session | Triggers manager notifications in enterprise accounts |
| Certification | Milestone badge awarded for completing a full playbook or hitting a score threshold | Motivational milestone; shown in learner profile |
| Session Feed | Real-time or near-real-time view of ongoing and recent sessions across a team | Manager-facing dashboard panel |

---

## Common Workflows

### Workflow 1: Learner — Standard Practice Session

1. Learner logs in to dashboard, sees streak status and recommended next session
2. Navigates to "Practice Library" or selects from "Recommended" on dashboard
3. Selects a **Mode** (e.g., "Cold Call") and a **Persona** (e.g., "Morgan — The Challenger")
4. Reviews persona card: personality description, difficulty level, context/backstory
5. Clicks "Start Session" — session interface launches (full-screen, voice-focused)
6. Animated state machine: idle → countdown → listening (waveform active) → AI response → listening cycle
7. Conversation runs for natural flow until learner ends session or scenario concludes
8. Session ends → "Processing your scorecard..." loading state (3-8 seconds)
9. Scorecard displays: Overall Score (large circular gauge) + individual competency bars + AI-written feedback paragraphs
10. Learner reviews transcript, bookmarks key moments, optionally shares scorecard
11. Dashboard updates: streak incremented, scores updated, session added to history

### Workflow 2: Manager — Team Assignment and Review

1. L&D Manager logs in, sees team dashboard with active learner count, average scores, and at-risk flags
2. Navigates to "Playbooks" → selects existing playbook or creates new one
3. Assigns playbook to selected learner(s) or full cohort with due date
4. Monitors progress via "Team Overview" — sees each learner's % completion, trend, streak
5. Reviews individual scorecards for flagged/low-performing learners
6. Optionally adds comment to a scorecard ("Great improvement on pacing this week!")
7. Exports team progress report (PDF/CSV) for leadership review

### Workflow 3: Learner — Post-Session Improvement Loop

1. Session completes → Scorecard shows "Weakest Competency: Filler Words (2.4/min)"
2. System recommends targeted Drill: "Filler Word Reduction Drill — 6 min"
3. Learner accepts recommendation and immediately runs the drill
4. Drill scorecard compares performance to previous session on the same competency
5. Running trend line shows filler word rate over last 5 sessions
6. Competency marked as "In Focus" — dashboard surfaces related drills and tips

---

## Common Edge Cases

For mock data — these are realistic non-ideal records that make data feel authentic:

1. **Abandoned session** — session started, ran for 1m 47s, then disconnected; score = null; status = "Abandoned"
2. **Streak broken** — learner at 23-day streak missed yesterday; streak now showing "Lost (was 23)"; notification pending
3. **Score regression** — learner's Overall Score dropped from 74 to 61 over 3 sessions (fatigue, off-topic practice mode)
4. **Outlier session** — exceptionally long session: 47 minutes, 38 turns; Overall Score 89 (power user deep dive)
5. **At-risk learner** — last session 12 days ago; account status = "At Risk"; assigned playbook 0% complete
6. **Low-score first session** — brand new learner, Overall Score 38, Confidence 31, Fluency 44 (baseline for onboarding)
7. **Persona difficulty mismatch** — learner selected "Challenging" difficulty before completing any sessions; session abandoned at 2 turns
8. **Filler word spike** — learner averaging 1.8/min improved to 0.9/min over 4 sessions, then spikes to 6.3/min in a high-pressure interview mode
9. **Schedule conflict** — session marked "Scheduled" for 9:00 AM, learner never joined; status = "Missed"
10. **Perfect session** — rare outlier: Overall Score 96, 0.1 filler words/min, 154 WPM, all competencies above 90

---

## What Would Impress a Domain Expert

1. **The "latency" problem is real and often hidden**: Voice AI platforms struggle with response latency — practitioners know that >1.5 second AI response delay breaks immersion and ruins the conversation quality. A challenge card or data field acknowledging "AI response latency < 800ms" would signal deep product awareness that non-practitioners would never mention.

2. **Filler word detection requires acoustic model training, not just transcription**: Detecting "uh" and "um" accurately requires a separate acoustic model layer — simple transcription APIs miss 30-40% of filler words because they're often removed in ASR cleanup. Practitioners who've evaluated these platforms know this distinction.

3. **The WPM sweet spot is well-established**: Optimal conversational pace is 130-170 WPM. Below 110 sounds hesitant/unsure; above 195 sounds nervous/rushing. This is a real benchmark from presentation coaching research. Using specific WPM ranges signals understanding of speech analysis, not just "pacing feedback."

4. **Adaptive difficulty is the hard problem**: Making an AI persona genuinely adapt mid-conversation based on learner responses (not just random pushback) is the unsolved challenge. Platforms that claim "adaptive" but use scripted objections are widely criticized by practitioners. A challenge card about "real-time persona adaptation" hits a known pain point.

5. **Streak mechanics have a documented churn correlation**: In language learning and coaching apps, maintaining a streak correlates more strongly with 90-day retention than any single quality metric. The "streak freeze" mechanic (1-2 per month protection) reduces churn by 20-35% per published Duolingo research. Practitioners building training platforms know this pattern from edtech.

---

## Common Systems & Tools Used

| Tool | Category | Usage |
|------|----------|-------|
| Yoodli | Direct competitor / reference app | Speech coaching, post-session scorecards, transcript review |
| Hyperbound | Direct competitor / reference app | Sales roleplay with named AI buyer personas, team leaderboards |
| ELSA Speak | Direct competitor (consumer) | Pronunciation scoring, phoneme-level feedback, daily drills |
| Orai | Direct competitor | Public speaking analysis, filler word tracking, mobile-first |
| Second Nature AI | Direct competitor (enterprise sales) | Sales roleplay, MEDDIC scoring, CRM integration |
| Gong.io | Adjacent / integration target | Real call recording; practitioners compare AI roleplay scores to real call scores |
| Salesloft | Adjacent / integration target | Enterprise sales engagement; roleplay platforms often integrate for workflow |
| Zoom / Google Meet | Session capture | Some platforms ingest recordings from meeting platforms |
| OpenAI Realtime API | Underlying infrastructure | Most platforms now built on GPT-4o Realtime or similar for voice |
| ElevenLabs | Underlying infrastructure | AI voice synthesis for persona voices |
| Deepgram / AssemblyAI | Underlying infrastructure | Speech-to-text with filler word detection |
| Slack | Notifications | "Your session was reviewed" / streak notifications |

---

## Geographic / Cultural Considerations

- Platform is inherently global (language learning, accent coaching, sales training have international learner bases)
- Non-native English speaker use case is significant — KPIs like "Clarity Score" and "Accent Clarity Module" have cross-cultural meaning
- US-centric default: WPM benchmarks, interview norms, and sales conversation patterns are US-market calibrated
- Session scheduling may reference time zones (PST/EST) for enterprise team assignments
- No specific state-level regulatory requirements for this domain
- GDPR relevant if European learners: voice recordings processed by AI = personal data; consent required

---

## Data Architect Notes

- **Primary datasets needed**: `sessions[]`, `learners[]`, `personas[]`, `scorecards[]`, `playbooks[]`, `teams[]`, `drills[]`
- **Session entity fields**: `id`, `learnerId`, `personaId`, `mode`, `status`, `startedAt`, `completedAt`, `durationSeconds`, `overallScore`, `scorecardId`, `turnCount`, `wpmAverage`, `fillerWordRate`
- **Scorecard entity fields**: `id`, `sessionId`, `fluencyScore`, `clarityScore`, `confidenceScore`, `activeListeningScore`, `vocabularyScore`, `pacingScore`, `overallScore`, `aiFeedback` (string paragraph), `highlights` (string[]), `improvementAreas` (string[])
- **Status enums for sessions**: `"Completed"` | `"In Progress"` | `"Abandoned"` | `"Scheduled"` | `"Missed"` | `"Incomplete"`
- **Learner status enums**: `"Active"` | `"At Risk"` | `"Inactive"` | `"Onboarding"` | `"Certified"`
- **Streak field**: `currentStreak: number` (days), `longestStreak: number`, `streakStatus: "Active" | "Frozen" | "Lost"`
- **Score ranges for realism**: Overall 38-91 (most in 58-82 range); Fluency 44-94; Clarity 41-88; Confidence 35-89; WPM 102-198; FillerWordsPerMin 0.2-8.4
- **Edge case records to include**: at least 1 Abandoned session (short duration), 1 new learner with low scores, 1 high-scoring outlier session, 1 At Risk learner with overdue playbook
- **Chart time-series**: 12-week weekly scores showing improvement curve (starts lower, rises with variance)
- **Persona difficulty**: `"Supportive"` | `"Neutral"` | `"Skeptical"` | `"Challenging"` | `"Aggressive"`
- **Mode values**: `"Cold Call"` | `"Discovery Call"` | `"Interview"` | `"Coaching"` | `"Presentation"` | `"Difficult Conversation"` | `"Elevator Pitch"` | `"Panel Interview"`

## Layout Builder Notes

- **Recommended density**: Standard (`--content-padding: 1.5rem`, `--card-padding: 1.5rem`) — not compact, not spacious. The dashboard is a review hub + launch pad, not a real-time monitoring wall.
- **Dark Premium aesthetic confirmed**: Background should be near-black with subtle blue tint — suggested: `oklch(0.09 0.015 265)`. Avoid pure black (`oklch(0 0 0)`) which reads as gaming/cinema, not professional coaching.
- **Primary accent color**: Electric blue — `oklch(0.65 0.22 265)` (bright, saturated blue matching Yoodli/Hyperbound visual language). This is not navy or slate — it's genuinely bright and energetic.
- **Glow effects are expected**: Unlike other dark aesthetics, voice AI platforms use subtle glow on active/primary elements. Apply `box-shadow: 0 0 24px oklch(0.65 0.22 265 / 0.25)` on primary KPI cards and CTA buttons.
- **Sidebar**: Standard 16rem width works; dark sidebar bg (`oklch(0.07 0.012 265)`) slightly darker than page bg. Nav labels are action-oriented ("Session Feed", "Practice Library" vs. generic "Dashboard", "Reports").
- **Sidebar logo area**: Should show an animated pulsing dot or waveform icon to reinforce "live AI product" character.
- **Status badges are critical**: Every session record needs a colored status badge. Use: blue for "Completed", amber for "In Progress", red for "Abandoned", gray for "Scheduled". These are the primary visual differentiators in the session list.
- **No `--radius` extremes**: Medium radius (`0.75rem`) for the dark premium aesthetic — avoid sharp (0.25rem reads clinical/corporate) and avoid very rounded (reads consumer wellness).

## Dashboard Builder Notes

- **Most important single metric (largest stat card)**: `Sessions Completed` — total count, with trend vs. last period. This is the primary activity signal every manager checks first.
- **Second most important**: `Overall Score` (latest or rolling 7-day average) — the headline quality metric.
- **Chart type for trend data**: Line or area chart for "Score Over Time" (12-week weekly average), and bar chart for "Sessions by Mode" (which practice modes are used most). Area chart with gradient fill is especially expected in dark premium aesthetic — matches Yoodli, Hyperbound, and AI product aesthetics.
- **One domain-specific panel that would impress**: A **"Recent Sessions Feed"** panel showing the last 6-8 sessions as rows with: learner avatar, mode label, persona used, duration, overall score badge, status badge — sorted by time. This mirrors how L&D managers actually review their team's activity. It should be filterable by status.
- **Second impressive panel**: A **"Competency Radar"** — spider/radar chart showing scores across all 5-6 competencies. Recharts supports RadarChart — this is a well-recognized pattern in coaching platforms and instantly signals domain expertise.
- **Streak panel**: Include a streak counter card with a flame icon and current streak number prominently displayed. Even managers want to see team-level streak engagement (% of team with active streaks).
- **Score distribution**: A horizontal bar or donut showing distribution of learners by score bracket (Needs Work <60, Developing 60-74, Proficient 75-84, Advanced 85+). This is how L&D managers identify intervention needs.
