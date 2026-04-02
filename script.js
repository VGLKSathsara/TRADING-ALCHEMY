// script.js — Trading Academy full course data & logic
// Updated with Theory Section (SMC, SNR, Alchemist) and refined courses.

// ----------------------------------------------------------------------
//  THEORY DATA (SMC, Malaysia SNR, Alchemist)
// ----------------------------------------------------------------------
const THEORY_LESSONS = [
  {
    badge: 'SMC · Core',
    title: 'What is Smart Money Concepts? (SMC)',
    sub: 'Understanding who really moves the market and how to follow their footprints.',
    analogy:
      "Imagine a poker game. Most players at the table are amateurs guessing their cards. But one player can see everyone else's hands. That player is 'smart money' — the banks, hedge funds, and institutions that have information, capital, and influence that retail traders do not. SMC is the study of HOW they move price, WHERE they place their orders, and HOW you can follow their footprints.",
    blocks: [
      {
        c: '#378ADD',
        t: "Who is 'smart money'?",
        b: "Smart money refers to the large institutions that move markets: central banks, investment banks, hedge funds, and large asset managers. These entities trade billions of dollars — so large that they CANNOT simply 'click buy.' They must engineer specific market conditions to fill their massive orders without moving price against themselves.",
      },
      {
        c: '#7F77DD',
        t: 'Why retail traders lose',
        b: 'Retail traders use simple tools: support/resistance, RSI, MACD. Smart money KNOWS where retail traders place their stops and entries — because everyone uses the same textbook levels. Smart money deliberately pushes price to those levels to trigger retail stop losses, collect that liquidity, and then reverse price in the direction they actually want to go.',
      },
      {
        c: '#639922',
        t: 'The core idea of SMC',
        b: "SMC teaches you to THINK LIKE the institution. Instead of asking 'where will retail traders buy?' — you ask 'where does smart money need to go to fill their orders?' That shift in perspective is everything. You stop being the prey and start reading the hunter's movements.",
      },
    ],
    rule: 'SMC Rule #1: The market is NOT random. Every wick, every fake breakout, every stop hunt is deliberate. Smart money engineers liquidity events to fill their orders. Your job is to identify those events before or as they happen.',
    warn: 'SMC is NOT a simple system. It requires patience, screen time, and the ability to think in terms of institutional behavior — not retail behavior. Do not expect to master it in a week.',
    key: 'SMC core belief: Banks and institutions manipulate price to collect liquidity before making their real move. Understanding this manipulation IS the edge.',
    quiz: {
      q: "Why do large institutions NOT simply 'click buy' when they want to enter a trade?",
      opts: [
        'They prefer to buy slowly over time for fun',
        "Their orders are so large that buying all at once would push price against them before they're fully filled",
        'They are not allowed to buy quickly',
        "They don't know when to buy",
      ],
      correct: 1,
      ok: 'Exactly. A $2 billion buy order cannot be filled at one price — it would move the market against itself. Institutions need to engineer conditions where enough sellers exist to fill their massive buy orders at the price they want.',
      bad: "Think about scale. If a major bank tries to buy $2 billion instantly, who sells it to them? They'd keep raising their bid until sellers appear — filling their order at worse prices. So they engineer conditions to create sellers at their desired price.",
    },
  },
  {
    badge: 'SNR · Malaysia',
    title: 'Malaysia SNR Concept (Support & Resistance)',
    sub: 'The legendary Southeast Asian approach to reading institutional order flow.',
    analogy:
      "Think of the market as a large bank vault. The key to the vault is not a single point, but a 'zone' — an area where the bank's employees (smart money) have left their fingerprints. Malaysia SNR is about finding those fingerprint zones—key support and resistance levels—that the market makers respect, break, and use to manipulate retail traders.",
    blocks: [
      {
        c: '#b8860b',
        t: 'What is SNR?',
        b: "SNR stands for Support & Resistance. The 'Malaysia' or 'Indo' approach to it is unique. It teaches that real, high-probability levels are not simple lines drawn on a chart. They are 'zones' created by the consolidation of institutional orders. When price approaches these zones, you can expect a reaction. When it breaks through, it often does so with force, trapping traders on the wrong side.",
      },
      {
        c: '#378ADD',
        t: 'Identifying Institutional Levels',
        b: "Unlike retail S/R drawn at obvious swing highs and lows, Malaysia SNR focuses on the 'origin' of moves. You look for areas where price consolidated (formed a range) before a strong impulse. The base of that consolidation is your 'demand' zone (where institutions bought). The top of that consolidation is your 'supply' zone (where they sold). These are the levels smart money uses.",
      },
      {
        c: '#639922',
        t: "The Concept of 'BOS' and 'CHoCH'",
        b: 'BOS (Break of Structure) and CHoCH (Change of Character) are critical. A BOS happens when price breaks a recent high or low, confirming the current trend. A CHoCH is a more significant event, indicating the trend might be reversing. Malaysia SNR traders wait for a CHoCH to happen FROM a key supply/demand zone before entering a trade. This aligns them with the new institutional direction.',
      },
    ],
    rule: 'Malaysia SNR Rule: Price is drawn to liquidity. Stop losses are the fuel for institutional moves. Identify where retail stops are likely clustered (just above old highs, just below old lows) — these are the magnets for price.',
    warn: 'Never draw a million zones. The best SNR traders have 1-2 key zones on their chart. If you see lines everywhere, you are drawing retail levels, not institutional ones. Simplify.',
    key: "The Malaysia SNR method is about precision and patience. You don't predict; you wait for price to come to your predefined institutional zone, then look for a confirmation of a CHoCH to enter with the smart money.",
    quiz: {
      q: "According to Malaysia SNR, where is the most significant 'supply' zone likely to be?",
      opts: [
        'The highest price the stock has ever been',
        'The area where price consolidated BEFORE a sharp drop',
        'Any random horizontal line on the chart',
        'The 50-day moving average',
      ],
      correct: 1,
      ok: 'Correct. The supply zone is the area where institutional sellers were active, which is often seen as the base of a consolidation or range before a sharp downward move. This is where they placed their short orders.',
      bad: "Not quite. Think of where the selling happened. It's not just a random high, but a 'zone' of distribution before a strong move down. That's where smart money was offloading positions.",
    },
  },
  {
    badge: 'Alchemist · Strategy',
    title: 'The Alchemist Trading Strategy',
    sub: 'Turning base concepts into gold: The art of synthesizing frameworks.',
    analogy:
      'The word Alchemist comes from alchemy — the ancient practice of combining base metals to create gold. Trading Alchemist is the same idea: you take the best elements from SMC, Malaysia SNR, price action, and other frameworks and combine them — refining them through your own experience — to create YOUR own golden trading system.',
    blocks: [
      {
        c: '#1D9E75',
        t: 'What Alchemist Trading Means',
        b: "Alchemist trading refers to a style where the practitioner has mastered multiple concepts — SMC, SNR, pure price action, market psychology — and synthesizes them into a fluid, integrated approach. It's not one specific system with rigid rules. It's a philosophy of seeing the market through multiple lenses simultaneously and using the right tool for the current market condition.",
      },
      {
        c: '#378ADD',
        t: 'Why Combining Frameworks Matters',
        b: 'No single framework is perfect. SMC is great for understanding liquidity and order blocks. Malaysia SNR is superior for identifying precise supply/demand zones. Pure price action provides timing for entries. By studying all deeply, an Alchemist trader can identify which tool is most appropriate for the current market condition, creating a higher-probability setup than any one framework could provide alone.',
      },
      {
        c: '#639922',
        t: 'The Alchemist Progression',
        b: "Stage 1: Learn one framework thoroughly (e.g., SMC). Stage 2: Paper trade it for 3+ months until profitable in simulation. Stage 3: Study a second framework (e.g., Malaysia SNR) and identify how it overlaps and how it can confirm or refine the first. Stage 4: Begin integrating them. Stage 5 (Alchemist): The frameworks are no longer separate tools — they've merged into your unified market vision.",
      },
    ],
    rule: 'Alchemist trading is not for beginners. You must first MASTER individual frameworks before blending them. A chef must know how to cook each ingredient individually before creating a signature dish. Attempting to be an Alchemist without mastery results in confusion, not clarity.',
    warn: "Be careful of 'framework hopping' — jumping from SMC to SNR to supply/demand every week without mastering any of them. This is the most common mistake. Pick one, master it, THEN expand. Alchemist is the destination, not the starting point.",
    key: "Alchemist is what you become after years of study, practice, and refinement. It's the ability to look at a chart and see liquidity pools, order blocks, supply/demand zones, and price action patterns all at once, and then act on the confluence. Every master trader practices their own form of Alchemy.",
    quiz: {
      q: 'A trader jumps between SMC, SNR, Wyckoff, and supply/demand every week — using whichever one explains a recent trade in hindsight. Is this Alchemist trading?',
      opts: [
        'Yes — using multiple frameworks is always Alchemy',
        'No — this is framework hopping. Alchemy is the MASTERY and integration of frameworks, not random switching',
        'Yes — more frameworks always mean better trading',
        "It doesn't matter which framework you use",
      ],
      correct: 1,
      ok: "Exactly right. Framework hopping is the opposite of Alchemist. Alchemist requires DEEP mastery of each component before integration. Randomly switching frameworks based on what explains the last trade is 'confirmation bias' — not trading skill.",
      bad: "Using multiple frameworks randomly is NOT Alchemy — it's framework hopping, a dangerous habit. Alchemy means you've mastered each framework to the point where they've become one unified vision. You can't blend what you haven't mastered.",
    },
  },
]

// ----------------------------------------------------------------------
//  COURSE DATA (Beginner, Daily Buyers, Advanced Application)
// ----------------------------------------------------------------------
const COURSES = [
  {
    id: 'beginner',
    name: 'Trading from Zero',
    short: 'Beginner',
    color: '#378ADD',
    lessons: [
      {
        badge: 'Start here',
        bc: '#E6F1FB',
        bt: '#185FA5',
        title: 'What is the stock market?',
        sub: "Before charts, before candles — let's understand what we're actually doing.",
        analogy:
          "Think of the stock market like a giant marketplace. Companies sell small pieces of themselves (called 'shares' or 'stocks') to raise money. When you buy a share, you own a tiny piece of that company. The price goes up when more people want to buy it, and down when more want to sell it.",
        blocks: [
          {
            c: '#378ADD',
            t: 'What moves the price?',
            b: 'Supply and demand. If 1,000 people want to buy a stock and only 100 want to sell — the price goes up. If 1,000 want to sell and only 100 want to buy — the price goes down. Every price movement comes back to this one simple idea.',
          },
          {
            c: '#639922',
            t: "Who are 'buyers' and 'sellers'?",
            b: "Buyers are people or institutions placing orders to buy shares. Sellers are placing orders to sell. When a buyer and seller agree on a price — that's a 'trade.' The last trade price is what you see as the stock price on your screen.",
          },
          {
            c: '#BA7517',
            t: "What is a 'day trader'?",
            b: 'Most investors buy stocks and hold them for months or years. A day trader buys and sells within a single day — sometimes in minutes or hours. Day traders try to profit from short-term price movements rather than long-term company growth.',
          },
        ],
        rule: 'The single most important idea in trading: price goes up when there are more buyers than sellers, and down when there are more sellers than buyers. Everything else is just figuring out which side is winning.',
        warn: null,
        key: 'You are not predicting the future. You are reading the evidence of what buyers and sellers are doing RIGHT NOW and making a calculated bet on who will win the next battle.',
        quiz: {
          q: "A stock's price is rising quickly. What is most likely happening?",
          opts: [
            'The company just got lucky',
            'More people want to buy it than sell it',
            'The price will keep rising forever',
            'The stock market is broken',
          ],
          correct: 1,
          ok: 'Exactly right. Rising price = more buyers than sellers.',
          bad: 'Rising price means demand (buyers) exceeds supply (sellers).',
        },
      },
      {
        badge: 'Lesson 2',
        bc: '#FAEEDA',
        bt: '#854F0B',
        title: 'Reading a candle — the building block',
        sub: "Every day of trading is summarized in one shape. Here's how to read it.",
        analogy:
          "Imagine a day of trading like a battle between buyers and sellers. At the end of the day, one side wins. A 'candle' is just a picture of that battle — it shows you where the fight started, how far each side pushed, and where it ended.",
        blocks: [
          {
            c: '#639922',
            t: 'The 4 prices in every candle',
            b: 'Every candle has 4 numbers: Open, Close, High, Low. Green candle = close was HIGHER than open (buyers won). Red candle = close was LOWER than open (sellers won).',
          },
          {
            c: '#BA7517',
            t: 'The body and the wicks',
            b: "The thick part (the 'body') shows the distance between open and close. The thin lines ('wicks') show how far price went BEFORE being pushed back. A long lower wick means sellers pushed price down but buyers fought back.",
          },
          {
            c: '#7F77DD',
            t: 'What a strong buyer candle looks like',
            b: 'A strong buyer candle is: GREEN, has a LARGE body, closes near the TOP of its range, and may have a long lower wick (buyers rejected the low prices).',
          },
        ],
        rule: 'Green candle closing near the top of its range = buyers were in control all day. Red candle closing near the bottom = sellers dominated. The bigger the body, the more decisive the winner.',
        warn: "A candle with a tiny body is called a 'doji.' It means buyers and sellers were roughly equal — nobody won. This is indecision.",
        key: "You don't need to memorize 50 patterns. Just ask: 'Where did it close relative to where it opened and relative to the day's range?'",
        quiz: {
          q: 'A candle opens at $10, goes as high as $14, goes as low as $9, and closes at $13. Who won the day?',
          opts: ['Sellers', 'Buyers', 'Neither', "Can't tell"],
          correct: 1,
          ok: 'Right. Opened at $10, closed at $13 — green candle, buyers won.',
          bad: 'Focus on close vs open and close vs high. Opened $10, closed $13 — buyers won.',
        },
      },
      {
        badge: 'Lesson 3',
        bc: '#EAF3DE',
        bt: '#3B6D11',
        title: 'Volume — how serious were they?',
        sub: "A price move without volume is like a rumor. With volume, it's a fact.",
        analogy:
          'Imagine two rallies. In the first, 10 people show up. In the second, 100,000 people show up. Both are rallies — but one is far more significant. Volume in trading tells you HOW MANY people were involved.',
        blocks: [
          {
            c: '#639922',
            t: 'What volume actually is',
            b: 'Volume is simply the number of shares traded in a day. High volume means a lot of people participated. Low volume means very few people were involved.',
          },
          {
            c: '#378ADD',
            t: 'The 20-day average volume',
            b: "To know if today's volume is 'high' or 'low,' you compare it to the average volume over the last 20 days.",
          },
          {
            c: '#BA7517',
            t: 'Why volume matters',
            b: 'If a stock goes up on HIGH volume — a lot of people were buying aggressively. That means conviction. If it goes up on LOW volume — that move is fragile and can reverse easily.',
          },
        ],
        rule: 'Green candle + high volume = real buyers. Green candle + low volume = weak move, be skeptical.',
        warn: "Never buy a stock just because it went up. Always ask: 'How much volume was behind that move?'",
        key: "Volume is the market's lie detector. Price can be moved temporarily on low volume. But high volume moves are hard to fake.",
        quiz: {
          q: 'Stock A goes up 5% on 3× normal volume. Stock B goes up 5% on 0.5× normal volume. Which move is more trustworthy?',
          opts: [
            'Stock B',
            'Stock A',
            'They are equal',
            "Volume doesn't matter",
          ],
          correct: 1,
          ok: "Correct. Stock A's move is far more reliable.",
          bad: 'Volume is the confirmation signal. Stock A had 3× normal volume — real conviction.',
        },
      },
    ],
  },
  {
    id: 'buyers',
    name: 'Identifying Daily Buyers',
    short: 'Daily Buyers',
    color: '#BA7517',
    lessons: [
      {
        badge: 'Foundation',
        bc: '#E6F1FB',
        bt: '#185FA5',
        title: 'Why buyers leave footprints',
        sub: 'The core idea behind reading daily buyers',
        analogy:
          'Every transaction leaves a mark in the market: the candle (price movement) and the volume (how many shares traded). Together they tell you whether buyers or sellers were in control of that session. Buyers cannot hide.',
        blocks: [
          {
            c: '#378ADD',
            t: 'The market is an auction',
            b: 'Every day the market runs an auction between buyers and sellers. The closing price is the final verdict — who was more aggressive, who had more conviction. Your job is to read that verdict on the daily chart.',
          },
          {
            c: '#639922',
            t: 'Price and volume are the evidence',
            b: 'You cannot directly see who bought or sold. But every transaction leaves a mark: the candle (price movement) and the volume (how many shares traded). Together they tell you whether buyers or sellers were in control.',
          },
          {
            c: '#BA7517',
            t: 'The daily timeframe is institutional time',
            b: 'Retail traders operate on 1-min or 5-min charts. Institutions — hedge funds, mutual funds, pension funds — make decisions on the daily and weekly. Identifying daily buyers means identifying what the smart money is doing.',
          },
        ],
        rule: 'Rule #1: Never look at a candle without looking at its volume. A green candle on low volume means almost nothing. A green candle on 2× average volume is a statement.',
        warn: null,
        key: 'You are reading evidence, not predicting. Every buying signal is a clue. The more clues point in the same direction, the higher the probability.',
        quiz: {
          q: 'A stock closes green but volume is 40% of its 20-day average. What does this tell you?',
          opts: [
            'Strong buyer conviction',
            'Low-conviction move',
            'Definite accumulation',
            "Volume doesn't matter",
          ],
          correct: 1,
          ok: 'Correct. Low volume green days often reflect a lack of sellers rather than aggressive buying.',
          bad: 'Low volume means fewer participants. A green close on thin volume could be just lack of sellers — not real buyer aggression.',
        },
      },
    ],
  },
  {
    id: 'advanced',
    name: 'Applying the Theory',
    short: 'Advanced',
    color: '#7F77DD',
    modules: [
      { name: 'Application', color: '#378ADD', bg: '#E6F1FB', tc: '#0C447C' },
    ],
    lessons: [
      {
        mod: 0,
        badge: 'Putting it Together',
        title: 'Applying SMC & SNR to Real Charts',
        sub: 'How to combine the theory into a practical trading workflow.',
        analogy:
          "You've studied the theory of SMC and Malaysia SNR. Now it's time to apply it. Imagine you're a detective. You know how the criminals (smart money) think. Now you need to go to the crime scene (the chart) and find the evidence. This lesson gives you a simple, repeatable process to do just that.",
        blocks: [
          {
            c: '#378ADD',
            t: 'Step 1: Identify the Higher Timeframe Bias',
            b: "Start on the daily or 4-hour chart. Use the Malaysia SNR concept to find the key supply/demand zones. Ask: 'Is price above a major demand zone (bullish) or below a major supply zone (bearish)?' This gives you your directional bias for the day.",
          },
          {
            c: '#7F77DD',
            t: 'Step 2: Wait for Price to Come to You',
            b: 'Patience. Do not chase. Wait for price to retrace to one of the key institutional levels you identified. If you are looking for buys, wait for price to come down to a demand zone. If looking for sells, wait for it to rally to a supply zone. This is where the smart money will be active.',
          },
          {
            c: '#639922',
            t: 'Step 3: Look for SMC Confirmation at the Level',
            b: "Once price is at your zone, don't just enter. Look for an SMC confirmation. This could be a 'change of character' (CHoCH) on a lower timeframe or a clear market structure shift. This is your signal that smart money has started to defend the level and is now moving price in your intended direction. Enter here with a stop loss beyond the zone.",
          },
        ],
        rule: 'The highest-probability trade is the one that has confluence from both your higher timeframe bias (Malaysia SNR) and a lower timeframe confirmation (SMC). If the signal is not clear, the trade is not there.',
        warn: 'Applying theory to a live chart is a skill. You will make mistakes. You will misidentify zones. The key is to journal every trade and review where you misread the institutional footprint. This is how you move from theory to practice.',
        key: 'The frameworks of SMC and Malaysia SNR are not meant to be used in isolation. They are lenses. Combine them: use SNR to find the battlefield, and SMC to time your entry. This synthesis is the first step on the path to becoming an Alchemist trader.',
        quiz: {
          q: "You have a bullish bias on the daily chart. What is the most 'Alchemist' approach to taking a trade?",
          opts: [
            'Buy immediately.',
            'Buy the first green candle you see.',
            'Wait for price to pull back to a key demand zone (SNR), then look for an SMC confirmation (e.g., a CHoCH) before entering.',
            'Buy only if the price is making a new high.',
          ],
          correct: 2,
          ok: 'Correct. This combines both frameworks: using SNR for the zone and SMC for the entry confirmation. This is the practical application of the Alchemist synthesis.',
          bad: 'Almost, but think about combining the concepts. You need to wait for price to come to a key level (SNR) and show you a sign of institutional entry (SMC) before you commit. Patience and confluence are key.',
        },
      },
    ],
  },
]

// State
let activeTab = 'course' // 'course' or 'theory'
let activeCourse = 0
let activeTheoryLesson = 0
let activeLessonByCourse = [0, 0, 0]
let answeredState = COURSES.map((c) => new Array(c.lessons.length).fill(false))
let doneState = COURSES.map((c) => new Array(c.lessons.length).fill(false))
let theoryDoneState = new Array(THEORY_LESSONS.length).fill(false)

function totalLessons() {
  return COURSES.reduce((s, c) => s + c.lessons.length, 0)
}
function totalDone() {
  return doneState.reduce((s, a) => s + a.filter(Boolean).length, 0)
}
function totalTheoryDone() {
  return theoryDoneState.filter(Boolean).length
}

function renderCourseTabs() {
  const container = document.getElementById('course-tabs')
  if (!container) return
  container.innerHTML = `
    <button class="course-tab ${activeTab === 'theory' ? 'active' : ''}" onclick="switchTab('theory')">📘 Theory</button>
    ${COURSES.map((c, i) => `<button class="course-tab ${activeTab === 'course' && i === activeCourse ? 'active' : ''}" onclick="switchTab('course', ${i})">${c.short}</button>`).join('')}
  `
}

function renderOverall() {
  if (activeTab === 'theory') {
    const pct = THEORY_LESSONS.length
      ? Math.round((totalTheoryDone() / THEORY_LESSONS.length) * 100)
      : 0
    const fill = document.getElementById('overall-fill')
    const pctEl = document.getElementById('overall-pct')
    if (fill) fill.style.width = pct + '%'
    if (pctEl) pctEl.textContent = pct + '%'
  } else {
    const pct = totalLessons()
      ? Math.round((totalDone() / totalLessons()) * 100)
      : 0
    const fill = document.getElementById('overall-fill')
    const pctEl = document.getElementById('overall-pct')
    if (fill) fill.style.width = pct + '%'
    if (pctEl) pctEl.textContent = pct + '%'
  }
}

function renderSidebar() {
  const sidebar = document.getElementById('sidebar')
  if (!sidebar) return

  if (activeTab === 'theory') {
    let html = `<div class="sidebar-section"><div class="sidebar-label">FOUNDATIONS</div>`
    THEORY_LESSONS.forEach((l, i) => {
      html += `<button class="sidebar-item ${i === activeTheoryLesson ? 'active' : ''} ${theoryDoneState[i] ? 'done' : ''}" onclick="goToTheoryLesson(${i})">
          <span class="snum">${theoryDoneState[i] ? '✓' : i + 1}</span>
          <span>${l.badge}</span>
        </button>`
    })
    html += `</div>`
    sidebar.innerHTML = html
  } else {
    const c = COURSES[activeCourse]
    const li = activeLessonByCourse[activeCourse]
    if (c.modules) {
      let html = ''
      c.modules.forEach((mod, mIdx) => {
        const modLessons = c.lessons.filter((x) => x.mod === mIdx)
        html += `<div class="sidebar-section"><div class="sidebar-label" style="color:${mod.color}">${mod.name}</div>`
        modLessons.forEach((l, j) => {
          const lessonIndex = c.lessons.findIndex((lesson) => lesson === l)
          html += `<button class="sidebar-item ${lessonIndex === li ? 'active' : ''} ${doneState[activeCourse][lessonIndex] ? 'done' : ''}" onclick="goToLesson(${lessonIndex})">
            <span class="snum">${doneState[activeCourse][lessonIndex] ? '✓' : j + 1}</span>
            <span>${l.badge.replace(/.*· /, '')}</span>
          </button>`
        })
        html += '</div>'
      })
      sidebar.innerHTML = html
    } else {
      let html = `<div class="sidebar-section"><div class="sidebar-label">${c.name}</div>`
      c.lessons.forEach((l, i) => {
        html += `<button class="sidebar-item ${i === li ? 'active' : ''} ${doneState[activeCourse][i] ? 'done' : ''}" onclick="goToLesson(${i})">
          <span class="snum">${doneState[activeCourse][i] ? '✓' : i + 1}</span>
          <span>${l.badge}</span>
        </button>`
      })
      html += '</div>'
      sidebar.innerHTML = html
    }
  }
}

function renderLessonHeader() {
  const headerDiv = document.getElementById('lesson-header')
  if (!headerDiv) return
  if (activeTab === 'theory') {
    const doneCount = totalTheoryDone()
    const pct = Math.round((doneCount / THEORY_LESSONS.length) * 100)
    headerDiv.innerHTML = `<div class="course-crumb"><span style="color:#b8860b;font-weight:600">📘 Theory</span><span>·</span><span>Lesson ${activeTheoryLesson + 1} of ${THEORY_LESSONS.length}</span></div>
    <div class="lesson-prog-track"><div class="lesson-prog-fill" style="width:${pct}%;background:#b8860b"></div></div>
    <div class="lesson-prog-txt">${doneCount} of ${THEORY_LESSONS.length} lessons complete</div>`
  } else {
    const c = COURSES[activeCourse]
    const li = activeLessonByCourse[activeCourse]
    const doneCount = doneState[activeCourse].filter(Boolean).length
    const pct = Math.round((doneCount / c.lessons.length) * 100)
    const col = lessonColor(activeCourse)
    headerDiv.innerHTML = `<div class="course-crumb"><span style="color:${col};font-weight:600">${c.name}</span><span>·</span><span>Lesson ${li + 1} of ${c.lessons.length}</span></div>
    <div class="lesson-prog-track"><div class="lesson-prog-fill" style="width:${pct}%;background:${col}"></div></div>
    <div class="lesson-prog-txt">${doneCount} of ${c.lessons.length} lessons complete</div>`
  }
}

function lockQuiz(isTheory, lessonIndex) {
  let l, correctAnswer
  if (isTheory) {
    l = THEORY_LESSONS[lessonIndex]
    correctAnswer = l.quiz.correct
  } else {
    const c = COURSES[activeCourse]
    l = c.lessons[lessonIndex]
    correctAnswer = l.quiz.correct
  }
  l.quiz.opts.forEach((_, i) => {
    const btn = document.getElementById('o' + i)
    if (btn) {
      btn.disabled = true
      if (i === correctAnswer) btn.classList.add('correct')
    }
  })
  const fbDiv = document.getElementById('fb')
  if (fbDiv && !fbDiv.classList.contains('show')) {
    fbDiv.className = 'fb show ok'
    fbDiv.textContent = '✓ ' + l.quiz.ok
  }
}

function answerTheory(idx) {
  if (theoryDoneState[activeTheoryLesson]) return
  const l = THEORY_LESSONS[activeTheoryLesson]
  theoryDoneState[activeTheoryLesson] = true

  l.quiz.opts.forEach((_, i) => {
    const btn = document.getElementById('o' + i)
    if (btn) {
      btn.disabled = true
      if (i === l.quiz.correct) btn.classList.add('correct')
      else if (i === idx) btn.classList.add('wrong')
    }
  })
  const fbDiv = document.getElementById('fb')
  const ok = idx === l.quiz.correct
  if (fbDiv) {
    fbDiv.className = 'fb show ' + (ok ? 'ok' : 'bad')
    fbDiv.textContent = (ok ? '✓ ' : '✗ ') + (ok ? l.quiz.ok : l.quiz.bad)
  }
  const nb = document.getElementById('nb')
  if (nb) nb.style.opacity = '1'
  renderSidebar()
  renderLessonHeader()
  renderOverall()
}

function answerCourse(idx) {
  const ci = activeCourse
  const li = activeLessonByCourse[ci]
  if (answeredState[ci][li]) return
  const l = COURSES[ci].lessons[li]
  answeredState[ci][li] = true
  doneState[ci][li] = true

  l.quiz.opts.forEach((_, i) => {
    const btn = document.getElementById('o' + i)
    if (btn) {
      btn.disabled = true
      if (i === l.quiz.correct) btn.classList.add('correct')
      else if (i === idx) btn.classList.add('wrong')
    }
  })
  const fbDiv = document.getElementById('fb')
  const ok = idx === l.quiz.correct
  if (fbDiv) {
    fbDiv.className = 'fb show ' + (ok ? 'ok' : 'bad')
    fbDiv.textContent = (ok ? '✓ ' : '✗ ') + (ok ? l.quiz.ok : l.quiz.bad)
  }
  const nb = document.getElementById('nb')
  if (nb) nb.style.opacity = '1'
  renderSidebar()
  renderLessonHeader()
  renderOverall()
}

function goToTheoryLesson(i) {
  if (i < 0 || i >= THEORY_LESSONS.length) return
  activeTheoryLesson = i
  renderTheoryLesson()
}

function goToLesson(i) {
  if (i < 0 || i >= COURSES[activeCourse].lessons.length) return
  activeLessonByCourse[activeCourse] = i
  renderCourseLesson()
}

function switchTab(tab, courseIndex = 0) {
  activeTab = tab
  if (tab === 'course') {
    activeCourse = courseIndex
  }
  renderCourseTabs()
  if (activeTab === 'theory') {
    renderTheoryLesson()
  } else {
    renderCourseLesson()
  }
}

function lessonColor(cIdx) {
  const c = COURSES[cIdx]
  const l = c.lessons[activeLessonByCourse[cIdx]]
  if (c.modules && l.mod !== undefined) return c.modules[l.mod].color
  return c.color
}
function lessonBadgeBg(cIdx) {
  const c = COURSES[cIdx]
  const l = c.lessons[activeLessonByCourse[cIdx]]
  if (c.modules && l.mod !== undefined) return c.modules[l.mod].bg
  return l.bc || c.color
}
function lessonBadgeText(cIdx) {
  const c = COURSES[cIdx]
  const l = c.lessons[activeLessonByCourse[cIdx]]
  if (c.modules && l.mod !== undefined) return c.modules[l.mod].tc
  return l.bt || '#fff'
}

function renderTheoryLesson() {
  const l = THEORY_LESSONS[activeTheoryLesson]
  const done = theoryDoneState[activeTheoryLesson]
  const prevI = activeTheoryLesson > 0 ? activeTheoryLesson - 1 : -1
  const nextI =
    activeTheoryLesson < THEORY_LESSONS.length - 1 ? activeTheoryLesson + 1 : -1
  const area = document.getElementById('lesson-area')
  if (!area) return
  area.innerHTML = `
    <div class="card"><div class="card-head"><span class="badge" style="background: #fdf4e0; color:#b8860b">${l.badge}</span><div class="card-title">${l.title}</div><div class="card-sub">${l.sub}</div></div>
    <div class="card-body"><div class="analogy-box"><div class="analogy-lbl">Think of it this way</div><div class="analogy-txt">${l.analogy}</div></div>
    ${l.blocks.map((b) => `<div class="block"><div class="block-title"><span class="bdot" style="background:${b.c}"></span>${b.t}</div><div class="block-body">${b.b}</div></div>`).join('')}
    <div class="rule-box">${l.rule}</div>${l.warn ? `<div class="warn-box">${l.warn}</div>` : ''}
    <div class="key-box"><div class="key-lbl">Key takeaway</div><div class="key-txt">${l.key}</div></div></div>
    <div class="quiz-area"><div class="quiz-hdr">Knowledge check — answer before moving on</div><div class="quiz-q">${l.quiz.q}</div>
    <div class="opts">${l.quiz.opts.map((o, i) => `<button class="opt" id="o${i}" onclick="answerTheory(${i})">${o}</button>`).join('')}</div>
    <div class="fb" id="fb"></div></div>
    <div class="card-foot"><button class="btn" onclick="goToTheoryLesson(${prevI})" ${prevI < 0 ? 'disabled' : ''}>← Back</button>
    <span class="foot-info">${totalTheoryDone()} / ${THEORY_LESSONS.length} theory done</span>
    <button class="btn primary" id="nb" onclick="goToTheoryLesson(${nextI})" ${nextI < 0 ? 'disabled' : ''} style="background:#b8860b;opacity:${done ? 1 : 0.4}">${nextI < 0 ? 'Theory Complete ✓' : 'Next lesson →'}</button></div></div>`
  if (done) lockQuiz(true, activeTheoryLesson)
  renderSidebar()
  renderLessonHeader()
  renderOverall()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function renderCourseLesson() {
  const c = COURSES[activeCourse]
  const li = activeLessonByCourse[activeCourse]
  const l = c.lessons[li]
  const col = lessonColor(activeCourse)
  const bbg = lessonBadgeBg(activeCourse)
  const btx = lessonBadgeText(activeCourse)
  const done = answeredState[activeCourse][li]
  const prevI = li > 0 ? li - 1 : -1
  const nextI = li < c.lessons.length - 1 ? li + 1 : -1
  const area = document.getElementById('lesson-area')
  if (!area) return
  area.innerHTML = `
    <div class="card"><div class="card-head"><span class="badge" style="background:${bbg};color:${btx}">${l.badge}</span><div class="card-title">${l.title}</div><div class="card-sub">${l.sub}</div></div>
    <div class="card-body"><div class="analogy-box"><div class="analogy-lbl">Think of it this way</div><div class="analogy-txt">${l.analogy}</div></div>
    ${l.blocks.map((b) => `<div class="block"><div class="block-title"><span class="bdot" style="background:${b.c}"></span>${b.t}</div><div class="block-body">${b.b}</div></div>`).join('')}
    <div class="rule-box">${l.rule}</div>${l.warn ? `<div class="warn-box">${l.warn}</div>` : ''}
    <div class="key-box"><div class="key-lbl">Key takeaway</div><div class="key-txt">${l.key}</div></div></div>
    <div class="quiz-area"><div class="quiz-hdr">Knowledge check — answer before moving on</div><div class="quiz-q">${l.quiz.q}</div>
    <div class="opts">${l.quiz.opts.map((o, i) => `<button class="opt" id="o${i}" onclick="answerCourse(${i})">${o}</button>`).join('')}</div>
    <div class="fb" id="fb"></div></div>
    <div class="card-foot"><button class="btn" onclick="goToLesson(${prevI})" ${prevI < 0 ? 'disabled' : ''}>← Back</button>
    <span class="foot-info">${totalDone()} / ${totalLessons()} total done</span>
    <button class="btn primary" id="nb" onclick="goToLesson(${nextI})" ${nextI < 0 ? 'disabled' : ''} style="background:${col};opacity:${done ? 1 : 0.4}">${nextI < 0 ? 'Course complete ✓' : 'Next lesson →'}</button></div></div>`
  if (done) lockQuiz(false, li)
  renderSidebar()
  renderLessonHeader()
  renderOverall()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Expose functions to global scope
window.answerTheory = answerTheory
window.answerCourse = answerCourse
window.goToTheoryLesson = goToTheoryLesson
window.goToLesson = goToLesson
window.switchTab = switchTab

document.addEventListener('DOMContentLoaded', () => {
  renderCourseTabs()
  renderTheoryLesson() // Start with Theory tab active
})
