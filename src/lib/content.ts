import mentorshipSections from "@/lib/mentorshipSections.json";

export type ProgramCategory = "mentorship" | "therapy";

export type ProgramSection = {
  heading: string;
  lines: string[];
};

export type Program = {
  slug: string;
  title: string;
  summary: string;
  audience: string;
  format: string;
  duration: string;
  benefits: string[];
  sections?: ProgramSection[];
};

export type WorkshopTrack = {
  slug: string;
  title: string;
  summary: string;
  focus: string;
  topics: string[];
};

export const images = {
  hero: "/devanu-hero.png",
  stillness:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=90",
  pottery: "/modern-sanctuary.jpg",
  founder: "/devanu.png",
  editorial: "/devanu-editorial.jpeg",
  subconscious:
    "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1400&q=90"
};

export const aboutStory = [
  "Dr. Devanu Bhatnagar is a happy, positive-minded, and confident woman whose soul is drawn to the mountains. The breeze of the highlands touches her deep inside and brings her peace, clarity, and a sense of purpose.",
  "As a Holistic Psychospiritual Therapist, she helps individuals navigate emotional and mental challenges through practices that combine psychotherapy with spiritual growth. Her work empowers people to heal from within, find clarity, and create a life filled with joy, purpose, and peace.",
  "She is also a scientist and technologist with over 16 years of experience, holding a Master's and PhD in Geospatial Technology along with an M.Plan in Urban Planning."
];

export const lifeJourney = [
  "Like many, she grew up dreaming of abundance: love, health, success, and financial security. Yet life led her through unexpected challenges, serious health issues, sleep disorders, and clinical depression.",
  "Deep inside, she was yearning for joy, purpose, and inner peace. A 14-year quest for healing eventually led her to holistic psychospiritual therapy, becoming the turning point of her life and spiritual awakening.",
  "Since then, she took a vow to serve others, especially those silently suffering just like she once was."
];

export const homepageHighlights = [
  ["01", "Personalized healing session"],
  ["02", "Subconscious reprogramming"],
  ["03", "Yogic spiritual practices"]
] as const;

export const featuredPaths = [
  {
    title: "Mentorship Programs",
    href: "/mentorship-programs",
    description:
      "Long-form guidance pathways for self-healing, emotional maturity, meditation, parenting, breathwork, and conscious lifestyle shifts.",
    image: "/mentorship.jpeg",
    preview: [
      "Self-Healing Learning Program",
      "Effective Parenting Program",
      "Yogic Breathwork and Pranayama"
    ]
  },
  {
    title: "Therapy Programs",
    href: "/therapy-programs",
    description:
      "Focused support for anxiety, depression, trauma, relationships, fears, addiction, confidence, and health recovery.",
    image: "/therapy.jpeg",
    preview: [
      "Depression, Anxiety & Stress Reversal",
      "Relationship Counseling & Therapy",
      "Overcoming Fears and Phobias"
    ]
  },
  {
    title: "Workshops",
    href: "/workshops",
    description:
      "Short, practical workshops covering emotional wellbeing, relationships, mindfulness, lifestyle, productivity, manifestation, and meditation.",
    image: "/workshop.avif",
    preview: [
      "Improving Mental Calmness & Peace Of Mind",
      "Goal Manifestation Ways & Techniques",
      "Healing Through Mantra Chants"
    ]
  }
] as const;

const mentorshipProgramSections = mentorshipSections as Record<string, ProgramSection[]>;

const mentorshipProgramsBase: Omit<Program, "sections">[] = [
  {
    slug: "self-healing-learning-program",
    title: "Self-Healing Learning Program",
    summary:
      "A foundational pathway for people who want to understand how emotional pain, subconscious patterns, and spiritual disconnection can be transformed through intentional practice.",
    audience: "Adults seeking a guided self-healing foundation",
    format: "Mentorship with reflective practices, tools, and guided integration",
    duration: "Multi-session mentorship journey",
    benefits: [
      "Build a practical self-healing routine",
      "Understand emotional triggers and repetitive inner patterns",
      "Strengthen grounded self-awareness and inner stability"
    ]
  },
  {
    slug: "student-performance-enhancement-program",
    title: "Student Performance Enhancement Program",
    summary:
      "A structured mentorship designed to improve consistency, focus, emotional balance, and confidence for learners facing performance pressure or academic overwhelm.",
    audience: "Students and young adults",
    format: "Mentorship with mindset, habit, and performance support",
    duration: "Short-to-medium term guided program",
    benefits: [
      "Improve concentration and study discipline",
      "Reduce stress around exams and expectations",
      "Build clarity, confidence, and productive routines"
    ]
  },
  {
    slug: "effective-parenting-program",
    title: "Effective Parenting Program",
    summary:
      "A supportive mentorship space for parents who want calmer communication, emotional understanding, and a more conscious relationship with their children.",
    audience: "Parents and caregivers",
    format: "Parent-focused mentorship and practical guidance",
    duration: "Layered support across multiple sessions",
    benefits: [
      "Respond with awareness instead of reactivity",
      "Deepen parent-child connection",
      "Create emotionally safer home rhythms"
    ]
  },
  {
    slug: "pre-post-natal-mentorship-program",
    title: "Pre & Post Natal Mentorship Program",
    summary:
      "A nurturing mentorship for women and families moving through pregnancy, birth preparation, postpartum adjustment, and emotional transitions around motherhood.",
    audience: "Expecting and new mothers",
    format: "Mentorship with emotional and spiritual support",
    duration: "Adaptable according to life stage",
    benefits: [
      "Support emotional steadiness during transition",
      "Strengthen body-mind trust and calmness",
      "Create a more supported pre and post natal experience"
    ]
  },
  {
    slug: "financial-blocks-healing-and-attracting-money-mentorship",
    title: "Financial Blocks Healing and Attracting Money Mentorship Program",
    summary:
      "A reflective mentorship for uncovering scarcity patterns, emotional resistance around money, and inherited beliefs that interfere with receiving, stability, and growth.",
    audience: "Adults working on abundance and money mindset",
    format: "Mentorship with belief work and emotional inquiry",
    duration: "Multi-session transformation process",
    benefits: [
      "Recognize hidden scarcity beliefs",
      "Develop a healthier relationship with money",
      "Strengthen confidence around receiving and decision-making"
    ]
  },
  {
    slug: "emotional-governance-and-emotional-intelligence-program",
    title: "Emotional Governance & Emotional Intelligence Program",
    summary:
      "A program focused on emotional literacy, self-regulation, and mature response patterns so that difficult emotions become workable instead of overwhelming.",
    audience: "Adults, parents, professionals, and students",
    format: "Guided mentorship with emotional skill-building",
    duration: "Progressive skill-based journey",
    benefits: [
      "Understand emotional patterns more clearly",
      "Build resilience during charged situations",
      "Improve relationships through regulated communication"
    ]
  },
  {
    slug: "addiction-and-unwanted-habits-reversal-mentorship-program",
    title: "Addiction & Unwanted Habits Reversal Mentorship Program",
    summary:
      "A mentorship framework that addresses the emotional and behavioral loops behind unhealthy habits, compulsions, and self-defeating coping patterns.",
    audience: "Individuals ready to shift addictive or unwanted patterns",
    format: "Mentorship with accountability and deeper pattern work",
    duration: "Ongoing guided support",
    benefits: [
      "Identify the emotional drivers beneath the habit",
      "Build healthier replacements and boundaries",
      "Develop steadier self-control and self-trust"
    ]
  },
  {
    slug: "beginner-level-basic-meditations-program",
    title: "Beginner Level Basic Meditations Program",
    summary:
      "An accessible starting point for people new to meditation who want to cultivate presence, nervous system calm, and a sustainable daily inner practice.",
    audience: "Beginners to meditation",
    format: "Guided meditative mentorship",
    duration: "Gentle step-by-step introduction",
    benefits: [
      "Create an approachable meditation habit",
      "Improve calmness and present-moment awareness",
      "Learn foundational contemplative techniques"
    ]
  },
  {
    slug: "mentorship-and-basic-meditation-program-for-children-and-teenagers",
    title: "Mentorship & Basic Meditation Program For Children & Teenagers",
    summary:
      "A youth-focused pathway that blends emotional guidance with simple meditation tools to support self-esteem, regulation, and inner steadiness during growing years.",
    audience: "Children, teenagers, and adolescents",
    format: "Age-sensitive mentorship and beginner meditation",
    duration: "Progressive guided support",
    benefits: [
      "Support emotional balance in younger age groups",
      "Build healthier focus and self-expression",
      "Introduce calming techniques that feel practical and safe"
    ]
  },
  {
    slug: "intermediate-level-ancient-meditations-program",
    title: "Intermediate Level Ancient Meditations Program",
    summary:
      "A deeper meditative journey for those who already have a foundation and want to expand their contemplative practice with more discipline and spiritual depth.",
    audience: "Practitioners with basic meditation familiarity",
    format: "Intermediate mentorship in meditation practice",
    duration: "Structured progression over multiple sessions",
    benefits: [
      "Deepen inner stillness and concentration",
      "Develop a more intentional practice rhythm",
      "Bridge meditation with daily-life awareness"
    ]
  },
  {
    slug: "advance-level-ancient-meditation-program-kundalini-sadhna",
    title: "Advance Level Ancient Meditation Program (Kundalini Sadhna)",
    summary:
      "A serious spiritual practice container for advanced seekers who want disciplined, guided work rooted in ancient meditation traditions and energetic awareness.",
    audience: "Advanced practitioners seeking deeper sadhana",
    format: "Advanced mentorship with committed practice",
    duration: "Longer and more immersive commitment",
    benefits: [
      "Work with advanced meditative depth and discipline",
      "Cultivate energetic awareness with guidance",
      "Sustain a devotional spiritual practice"
    ]
  },
  {
    slug: "yogic-breathwork-and-pranayama-mentorship-program",
    title: "Yogic Breathwork and Pranayama Mentorship Program",
    summary:
      "A breath-centered program that uses yogic practices to support emotional regulation, vitality, mental clarity, and a stronger connection between body and mind.",
    audience: "Adults interested in breath-led healing",
    format: "Mentorship with guided breathwork and pranayama",
    duration: "Practice-based series",
    benefits: [
      "Improve nervous system regulation",
      "Increase vitality, clarity, and grounding",
      "Learn breath practices that support daily wellbeing"
    ]
  },
  {
    slug: "1-year-extensive-mentorship-program-for-adults",
    title: "1 Year Extensive Mentorship Program For Adults",
    summary:
      "A comprehensive year-long container for people who want deep transformation through sustained mentorship across healing, mindset, spiritual practice, and life alignment.",
    audience: "Adults ready for long-term guided transformation",
    format: "Extended mentorship relationship",
    duration: "1 year",
    benefits: [
      "Receive continuity, depth, and accountability",
      "Integrate healing across multiple life areas",
      "Create durable changes through long-term support"
    ]
  },
  {
    slug: "1-year-extensive-program-for-young-children-teenagers-adolescents",
    title: "1 Year Extensive Program For Young Children, Teenagers & Adolescents",
    summary:
      "An extended mentorship pathway created for younger people who need consistent support with emotions, confidence, behavior, focus, and growth through key developmental years.",
    audience: "Young children, teenagers, and adolescents",
    format: "Long-term mentorship for developmental support",
    duration: "1 year",
    benefits: [
      "Provide steady emotional and behavioral guidance",
      "Support confidence, focus, and healthy self-image",
      "Offer consistency during formative years"
    ]
  }
];

export const mentorshipPrograms: Program[] = mentorshipProgramsBase.map((program) => ({
  ...program,
  sections: mentorshipProgramSections[program.title] ?? []
}));

export const therapyPrograms: Program[] = [
  {
    slug: "depression-anxiety-stress-reversal-therapy-program",
    title: "Depression, Anxiety & Stress Reversal Therapy Program",
    summary:
      "A therapy pathway focused on emotional overwhelm, chronic stress patterns, anxious thinking, and depressive states through integrated psychospiritual support.",
    audience: "Individuals struggling with anxiety, stress, or low mood",
    format: "Therapy program with emotional and spiritual integration",
    duration: "Short-to-medium term therapy support",
    benefits: [
      "Reduce overwhelm and mental agitation",
      "Build calmer internal regulation",
      "Reconnect with steadiness, hope, and life energy"
    ]
  },
  {
    slug: "ptsd-reversal-therapy-program",
    title: "PTSD Reversal Therapy Program",
    summary:
      "A trauma-sensitive program that supports healing from distressing memories, hypervigilance, emotional numbness, and survival responses with care and pacing.",
    audience: "Individuals navigating post-traumatic stress responses",
    format: "Trauma-informed therapy container",
    duration: "Paced according to individual capacity",
    benefits: [
      "Increase felt safety and regulation",
      "Work gently with trauma responses",
      "Restore trust in self, body, and life"
    ]
  },
  {
    slug: "overcoming-a-break-up-therapy-program",
    title: "Overcoming a Break-up Therapy Program",
    summary:
      "A compassionate therapy space for processing heartbreak, grief, loss of attachment, self-worth ruptures, and the identity shifts that often follow a break-up.",
    audience: "Individuals healing after relationship loss",
    format: "Therapy with grief and emotional processing support",
    duration: "Flexible healing process",
    benefits: [
      "Process heartbreak with more care and clarity",
      "Rebuild self-worth after separation",
      "Move toward emotional closure and stability"
    ]
  },
  {
    slug: "relationship-counseling-and-therapy-program",
    title: "Relationship Counseling & Therapy Program",
    summary:
      "A therapeutic offering for relational conflict, communication struggles, recurring emotional wounds, and the desire to build healthier bonds.",
    audience: "Individuals and couples seeking relationship support",
    format: "Therapy and relational counseling",
    duration: "Case-dependent therapy format",
    benefits: [
      "Improve communication and emotional clarity",
      "Recognize repeated relationship patterns",
      "Strengthen healthier boundaries and connection"
    ]
  },
  {
    slug: "overcoming-career-and-financial-problems-therapy-program",
    title: "Overcoming Career & Financial Problems Therapy Program",
    summary:
      "A therapy-oriented program for people facing career confusion, financial stress, self-doubt, and the emotional pressure that often surrounds livelihood decisions.",
    audience: "Adults facing work or money stress",
    format: "Therapy with emotional and mindset inquiry",
    duration: "Focused support over multiple sessions",
    benefits: [
      "Untangle fear, indecision, and mental pressure",
      "Build clearer thinking around work and money",
      "Strengthen emotional resilience during uncertainty"
    ]
  },
  {
    slug: "health-improvement-and-disease-reversal-therapy-program",
    title: "Health Improvement & Disease Reversal Therapy Program",
    summary:
      "A mind-body support program that explores the emotional and lifestyle dimensions of healing while helping clients move toward healthier patterns and improved vitality.",
    audience: "People seeking holistic health support",
    format: "Therapy-informed healing support",
    duration: "Ongoing supportive program",
    benefits: [
      "Connect emotional wellbeing with physical health",
      "Build restorative lifestyle patterns",
      "Support a more hopeful healing orientation"
    ]
  },
  {
    slug: "pre-and-post-natal-therapy-program",
    title: "Pre and Post Natal Therapy Program",
    summary:
      "A therapeutic holding space for emotional changes linked to pregnancy, birth preparation, postpartum adjustment, and the psychological demands of motherhood.",
    audience: "Women in pre and post natal transitions",
    format: "Therapy support tailored to maternal transitions",
    duration: "Flexible and stage-sensitive",
    benefits: [
      "Reduce emotional overwhelm during transition",
      "Support confidence and nervous system calm",
      "Create a more supported maternal journey"
    ]
  },
  {
    slug: "guilt-liberation-therapy-program",
    title: "Guilt Liberation Therapy Program",
    summary:
      "A focused therapy process for people carrying persistent guilt, self-blame, moral injury, or inner heaviness that interferes with peace and self-acceptance.",
    audience: "Individuals carrying guilt or self-blame",
    format: "Therapy with emotional release and reframing",
    duration: "Focused therapeutic support",
    benefits: [
      "Loosen chronic self-blame patterns",
      "Develop compassion and healthier self-regard",
      "Move toward emotional lightness and repair"
    ]
  },
  {
    slug: "addiction-reversal-and-reversal-of-unwanted-habits-therapy-program",
    title: "Addiction Reversal and Reversal of Unwanted Habits Therapy Program",
    summary:
      "A therapy offering for compulsive behavior and habit loops that addresses root emotions, inner voids, and the repeated coping cycles behind the behavior.",
    audience: "Individuals seeking therapeutic addiction support",
    format: "Therapy-oriented behavioral and emotional support",
    duration: "Progressive and accountability-based",
    benefits: [
      "Understand why the pattern keeps repeating",
      "Build emotional alternatives to the habit cycle",
      "Strengthen commitment and self-trust"
    ]
  },
  {
    slug: "overcoming-fears-and-phobias-therapy-program",
    title: "Overcoming Fears and Phobias Therapy Program",
    summary:
      "A therapeutic process for fear-based patterns, avoidance, and phobic responses that interfere with freedom, functioning, and confidence.",
    audience: "Individuals living with fear or phobia responses",
    format: "Therapy support with regulated exposure to root causes",
    duration: "Needs-based therapeutic process",
    benefits: [
      "Reduce avoidance and fear intensity",
      "Build internal safety and confidence",
      "Expand freedom in everyday life"
    ]
  },
  {
    slug: "overcoming-complexes-and-confidence-building-therapy-program",
    title: "Overcoming Complexes and Confidence Building Therapy Program",
    summary:
      "A therapy program for shame, inferiority, insecurity, and internalized limiting narratives that keep self-expression small and hesitant.",
    audience: "Individuals working on self-esteem and confidence",
    format: "Therapy with identity and confidence rebuilding",
    duration: "Focused support over a defined arc",
    benefits: [
      "Challenge limiting self-concepts",
      "Build steadier confidence and self-expression",
      "Support a more empowered personal identity"
    ]
  }
];

export const workshopTracks: WorkshopTrack[] = [
  {
    slug: "mind-performance-and-clarity",
    title: "Mind, Performance & Clarity",
    summary:
      "Short practical workshops that support attention, memory, discipline, clear thinking, decision-making, and purposeful action.",
    focus: "Mental performance, self-management, and practical growth tools",
    topics: [
      "Improving Memory & Brain Power.",
      "Improving Focus & Attention Span.",
      "Improving Self-Discipline, Self-Control & Will Power.",
      "Understanding Personal Attributes For Academic / Work Success.",
      "Goal Setting & Prioritizing.",
      "Inducing Self-Motivation.",
      "Efficient Time Management & Enhancing Productivity.",
      "Overcoming Laziness & Procrastination.",
      "Improved Decision Making & Problem Solving."
    ]
  },
  {
    slug: "healthy-lifestyle-and-wellbeing",
    title: "Healthy Lifestyle & Wellbeing",
    summary:
      "Workshops centered on daily wellbeing, calmness, resilience, happiness, rest, and foundational habits that support long-term vitality.",
    focus: "Lifestyle design, resilience, and sustainable wellbeing",
    topics: [
      "Building A Healthy Lifestyle.",
      "Basics Of Nutrition & A Healthy Diet.",
      "Improving Mental Calmness & Peace Of Mind.",
      "Stress Management & Developing Resilience.",
      "Importance Of Work-Life Balance And Ways To Achieve It.",
      "Improving Happiness & Joy.",
      "Developing Self-Love & Self-Care.",
      "Ways To Improve Sleep Routine & Sleep Quality."
    ]
  },
  {
    slug: "emotional-healing-and-self-regulation",
    title: "Emotional Healing & Self-Regulation",
    summary:
      "Workshops for recognizing, understanding, and skillfully handling emotional turbulence, negative thought loops, guilt, anger, and addictive patterns.",
    focus: "Emotional literacy, inner regulation, and healing patterns",
    topics: [
      "Developing Emotional Intelligence.",
      "Harmful Impact Of Negative Thoughts & Emotions.",
      "Managing Negative Emotions As & When They Come.",
      "Overcoming Anger Issues.",
      "Overcoming Guilt & Self-Blame Tendency, And Developing Self-Acceptance.",
      "Understanding The Process Of Formation Of Anxiety & Depression.",
      "Overcoming Addictions."
    ]
  },
  {
    slug: "relationships-parenting-and-communication",
    title: "Relationships, Parenting & Communication",
    summary:
      "Workshops that help people communicate more clearly, build stronger relationships, navigate family dynamics, and respond more consciously to others.",
    focus: "Relational awareness, parenting, and communication skills",
    topics: [
      "Handling Peer Pressure & Bullying.",
      "Importance Of Love & Compassion For Improving Quality Of One’s Own Life.",
      "Developing Effective, Efficient & Crystal Clear Communication.",
      "Building Strong Relationships & Becoming Likeable.",
      "Building Excellent Spousal Relationship.",
      "Recognizing Toxic Relationship Patterns & Manipulations.",
      "Building Excellent Parent-Child Relationship.",
      "Basics Of Good Parenting.",
      "Understanding Child Psychology."
    ]
  },
  {
    slug: "money-purpose-and-manifestation",
    title: "Money, Purpose & Manifestation",
    summary:
      "A cluster of workshops exploring blocks to abundance, manifesting goals, values-based living, and the inner narratives that shape results.",
    focus: "Abundance, direction, and conscious creation",
    topics: [
      "Building A Vision Board And Its Benefits.",
      "Recognizing Money Blocks.",
      "Overcoming Money Blocks.",
      "Goal Manifestation Ways & Techniques.",
      "Relationship Between Karma, Destiny & Formation Of Life Situations."
    ]
  },
  {
    slug: "health-awareness-and-recovery",
    title: "Health Awareness & Recovery",
    summary:
      "Workshops that connect emotional awareness with disease formation, prevention, substance-use awareness, and healing-oriented understanding.",
    focus: "Mind-body awareness and healthier life direction",
    topics: [
      "Overcoming Cyber Addiction.",
      "Harms Of Substance Abuse, And Its Avoidance.",
      "Understanding The Process Of Disease Formation.",
      "Disease Reversal & Healing."
    ]
  },
  {
    slug: "mindfulness-meditation-and-yogic-practice",
    title: "Mindfulness, Meditation & Yogic Practice",
    summary:
      "Meditation and yogic workshops that introduce presence, affirmations, spiritual reflection, cleansing, chant-based healing, and contemplative practice.",
    focus: "Meditation, mindfulness, and spiritual practice",
    topics: [
      "Mindfulness & Its Benefits.",
      "Mindfulness & Staying In The Present Moment.",
      "Using Affirmations For Reprogramming The Subconscious Mind.",
      "Using 8 Sutras Of Patanjali (Yoga) For Improving Life Quality.",
      "Beginner Level Relaxation Meditation.",
      "Planetary Healing Meditation.",
      "Energy Body Cleansing Meditation.",
      "Ancestors Ascension Meditation.",
      "Forgiveness & Unconditional Love Meditation For Karmic Cord Cutting.",
      "Full Moon Meditation.",
      "Healing Through Mantra Chants."
    ]
  },
  {
    slug: "confidence-study-and-youth-support",
    title: "Confidence, Study & Youth Support",
    summary:
      "Workshops aimed at self-esteem, study pressure, and helping younger participants develop steadier confidence and more supportive internal habits.",
    focus: "Confidence-building and youth-focused support",
    topics: [
      "Building Self-Confidence & Self-Esteem.",
      "Overcoming Study Pressure & Stress Free Studying.",
      "Importance Of Morals, Integrity & Honesty For Personal Success."
    ]
  }
];

export const methodology = [
  {
    number: "01",
    title: "Transpersonal Psychology",
    description:
      "Psychological concepts meet the spiritual dimension of human experience, supporting life transitions and personal growth."
  },
  {
    number: "02",
    title: "Ancient Wisdom Integration",
    description:
      "Sacred teachings, dharmic values, mindfulness, affirmations, and esoteric healing are translated into grounded modern practice."
  },
  {
    number: "03",
    title: "Neural Realignment",
    description:
      "Subconscious reprogramming, breathwork, somatic experiencing, bio-energetics, and lifestyle medicine help reshape limiting patterns."
  }
];

export const healingPillars = [
  {
    title: "Reverse Deep-Rooted Trauma",
    description:
      "A compassionate space for childhood wounds, emotional imprints, and survival patterns to be witnessed and transformed."
  },
  {
    title: "Dismantle Shadow Patterns",
    description:
      "Shadow work and integrative counseling help reveal the hidden beliefs that quietly shape choices, relationships, and self-worth."
  },
  {
    title: "Shift Limiting Beliefs",
    description:
      "Manifestation alchemy and subconscious reprogramming support movement from inherited fear toward conscious creation."
  }
];

export const transformations = [
  ["Victim", "Creator"],
  ["Confusion", "Clarity"],
  ["Pain", "Peace"]
];

export function getMentorshipProgram(slug: string) {
  return mentorshipPrograms.find((program) => program.slug === slug);
}

export function getTherapyProgram(slug: string) {
  return therapyPrograms.find((program) => program.slug === slug);
}

export function getWorkshopTrack(slug: string) {
  return workshopTracks.find((track) => track.slug === slug);
}
