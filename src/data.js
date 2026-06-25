// ─────────────────────────────────────────────────────────────
//  Everything lives here.
//  In the bio, wrap any phrase as { h: "text" } to highlight it
//  in orange. Plain strings render as normal text.
//  Placeholders are marked TODO.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Aarush Sharma",
  label: "physical AI · robotics · consumer hardware",
  email: "aarushsharma@gmail.com", // TODO
  // Drop your photo in /public and point this at it, e.g. "/me.jpg".
  photo: "/pfp.jpg", // TODO: replace with "/me.jpg" (your photo)
};

// Primary socials — shown as big "follow me" buttons.
export const socials = [
  { label: "LinkedIn", handle: "Connect on LinkedIn", href: "https://www.linkedin.com/in/aarushsharma1/" }, // TODO
  { label: "X", handle: "Follow on X", href: "https://x.com/_aarushs" }, // TODO
  {label: "Github", handle: "Follow on Github", href: "https://github.com/AarushSharma04"}
];

// Each array is a paragraph. Strings = normal text, { h } = orange highlight.
export const bio = [
  [
    "Hey, I'm Aarush — a ",
    { h: "Yale CS grad" },
    " interested in ",
    { h: "physical AI" },
    ", ",
    { h: "robotics" },
    ", and ",
    { h: "consumer hardware" },
    ".",
  ],
  [
    "I started building robots through ",
    { h: "FIRST Tech Challenge" },
    ". My team and I have had our fair share of all-nighters, debugging broken mechanisms days before competition, and surviving 100-hour build weeks. In 2023, we ",
    { h: "won world champs. " },
    "That experience taught me two things: building cool stuff is pretty addictive and its important to be unafraid of being ",
    { h: "unconventional" },
    ".",
  ],
  [
    "I studied computer science at ",
    { h: "Yale" },
    " from 2022–2026, with the occasional detour into philosophy or astronomy. I've also interned across software and engineering teams at ",
    { h: "Vanguard" },
    ", ",
    { h: "Infosys" },
    ", and ",
    { h: "Bristol Myers Squibb" },
    ". Most recently, I worked on ",
    { h: "Coinbase" },
    "'s institutional team across their order systems and tokenization.",
  ],
  [
    "This summer, I'll be at ",
    { h: "Founders Inc" },
    ", where I'm exploring how to make robotics and physical AI more ",
    { h: "useful, accessible, and delightful" },
    ".",
  ],
  [
    "Outside of work, I'm usually playing ",
    { h: "poker" },
    ", trying to get better at ",
    { h: "pickleball or basketball" },
    ", looking for good ",
    { h: "Thai food" },
    ", ",
    { h: "DJing" },
    ", traveling to new places with a good view, meeting new people, or beating my friends at ",
    { h: "GeoGuessr" },
    ".",
  ],
];

// Past + current projects. Edit freely; add or remove entries.
export const projects = [
  {
    name: "CoupledAI",
    status: "Senior Thesis",
    year: "2026",
    tagline: "Context-Aware Robot Visualization", // TODO: sharpen
    description:
      "CoupledAI is a hardware-aware robot development tool that connects robot CAD artifacts with control code. It ingests robot models, extracts CAD-derived hardware context, uses LLM-assisted analysis to relate hardware labels to source-code spans, and exports the resulting context for use in AI development tools.",
    href: "https://github.com/AarushSharma04/CoupledAI", // TODO: link when live
  },

  {
    name: "Predictive Flywheel Planner",
    status: "Research",
    year: "2026",
    tagline: "Model-Based Predictive Shooting Planner", // TODO: sharpen
    description:
      "This project applies deterministic state-space and fixed-length optimal planning to design a planner that computes a flywheel shooter’s parameters allowing a robot to accurately hit targets from arbitrary positions.",
    href: "https://github.com/AarushSharma04/Model-Based-Predictive-Shooting-Planner", // TODO: link when live
  },


  {
    name: "Blackjack Agent",
    status: "Fun class project",
    year: "2025",
    tagline: "MCTS and Q-learning for Blackjack", // TODO: sharpen
    description: "Using concepts in computational intelligence for games to create MCTS and Q-learning agents to play blackjack profitably.",
    href: "https://github.com/AarushSharma04/blackjack-agent", // TODO: link when live
  },
];
