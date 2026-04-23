const gameData = {
  title: "Lost Galaxy: Survivors",
  heroLogo: {
    src: "assets/hero-logo.png"
  },
  heroTitleLines: ["Lost", "Galaxy:", "Survivors"],
  studio: "After The Singularity Games",
  links: {
    steam: "https://store.steampowered.com/app/4019660",
    itch: "https://jorge-osbaldo.itch.io/lost-galaxy-survivors"
  },
  eyebrow: "Sci-fi top-down survival shooter",
  socialProof: [
    "Addictive and intense survival loop",
    "One more run turns into ten"
  ],
  tagline:
    "Survive relentless alien swarms, evolve your build in real time, and deploy tactical support tools before the battlefield consumes you.",
  urgencyText: "Free playtest available now - limited content",
  playtest: {
    banner: "Free playtest available now",
    detail: "Temporary demo-like build with limited content. Play on itch.io and send feedback while the Steam launch keeps cooking.",
    ctaLabel: "Playtest on itch.io",
    panelEyebrow: "Playtest live",
    panelTitle: "Temporary itch.io build",
    panelText: "Jump into the latest playtest, then share what felt good, rough, or missing so the full release lands stronger."
  },
  shortDescription:
    "Survive relentless alien swarms in a fast-paced sci-fi top-down shooter built around escalating pressure and fast tactical choices.",
  overview:
    "Lost Galaxy: Survivors is about momentum, decisions, and pressure. Each run pushes you to control space, manage escalating threats, and commit to upgrades that change how you fight.",
  overviewBullets: [
    "Control space",
    "Manage pressure",
    "Commit to upgrades"
  ],
  trailerCopy:
    "The demo trailer gives a focused look at the survival loop: swarms close in, elite threats break your rhythm, and every upgrade has to earn its place.",
  nav: [
    { label: "Overview", target: "#overview" },
    { label: "Features", target: "#features" },
    { label: "Screenshots", target: "#screenshots" },
    { label: "Details", target: "#details" }
  ],
  heroPanel: {
    eyebrow: "Launch window",
    title: "Coming soon",
    copy:
      "Jump into the temporary itch.io playtest now, then wishlist the full release on Steam for launch.",
    rows: [
      { label: "Release", value: "Coming soon" },
      { label: "Genre", value: "Action roguelite", icon: "target" },
      { label: "Mode", value: "Single-player", icon: "gamepad" }
    ],
    store: {
      platforms: [
        { icon: "windows", label: "Windows" },
        { icon: "mac", label: "macOS" },
        { icon: "steam-asset", label: "Steam" }
      ]
    },
    badges: [
      "Adaptive upgrades",
      "Leaderboards ready"
    ]
  },
  features: [
    {
      title: "Relentless alien waves",
      text: "The swarm thickens fast and punishes hesitation."
    },
    {
      title: "Build under fire",
      text: "Pick upgrades in real time and feel the run change immediately."
    },
    {
      title: "Deploy to survive",
      text: "Drop drones, turrets, and shields when the screen starts collapsing."
    },
    {
      title: "Pressure spikes harder",
      text: "Elites and nest zones can turn control into panic in seconds."
    },
    {
      title: "Chase the next run",
      text: "Every loss teaches a better answer for the next push."
    },
    {
      title: "Built for the grind",
      text: "Short runs, single-player focus, and leaderboard-ready pressure keep pulling you back in."
    }
  ],
  whyPlay: {
    title: "Why play Lost Galaxy: Survivors?",
    items: [
      "Real-time decisions, not passive gameplay",
      "Tactical deployables like turrets, drones, and shields",
      "Built for short, intense runs",
      "Designed around pressure and escalation"
    ]
  },
  loop: [
    {
      title: "Survey the pressure",
      text: "Track swarm flow, enemy density, and safe routes before the screen fills."
    },
    {
      title: "Commit to upgrades",
      text: "Choose offensive, defensive, or utility upgrades that define the next few minutes."
    },
    {
      title: "Deploy support",
      text: "Use tools at the right moment to stabilize space and survive sudden spikes."
    },
    {
      title: "Push the run",
      text: "Survive longer, face tougher threats, and turn close calls into stronger builds."
    }
  ],
  finalCta: {
    eyebrow: "Playtest live now",
    title: "The swarm is coming.",
    text: "Play now. Survive longer next time."
  },
  screenshots: [
    {
      src: "assets/screenshot-01.jpg",
      alt: "Lost Galaxy: Survivors alien horde combat screenshot",
      caption: "Relentless alien waves push every build choice."
    },
    {
      src: "assets/screenshot-02.jpg",
      alt: "Lost Galaxy: Survivors top-down battlefield screenshot",
      caption: "Space control matters when enemies arrive from every angle."
    },
    {
      src: "assets/screenshot-03.jpg",
      alt: "Lost Galaxy: Survivors upgrade and combat screenshot",
      caption: "Power spikes arrive mid-run, but the battlefield keeps escalating."
    },
    {
      src: "assets/screenshot-04.jpg",
      alt: "Lost Galaxy: Survivors portal defense combat screenshot",
      caption: "Portal fights turn crowded fast when objectives and swarm pressure overlap."
    },
    {
      src: "assets/screenshot-05.jpg",
      alt: "Lost Galaxy: Survivors facility combat screenshot",
      caption: "Tight industrial spaces make positioning and target priority matter."
    },
    {
      src: "assets/screenshot-06.jpg",
      alt: "Lost Galaxy: Survivors level up selection screenshot",
      caption: "Mid-run level-up choices reshape the build while the battlefield stays live."
    },
    {
      src: "assets/screenshot-07.jpg",
      alt: "Lost Galaxy: Survivors level up combat screenshot",
      caption: "Every level spike can buy breathing room or set up the next push."
    },
    {
      src: "assets/screenshot-08.jpg",
      alt: "Lost Galaxy: Survivors portal arena screenshot",
      caption: "Defensive tools help hold the line while enemies collapse on key structures."
    },
    {
      src: "assets/screenshot-09.jpg",
      alt: "Lost Galaxy: Survivors beam weapon combat screenshot",
      caption: "Beam support and weapon fire cut lanes through enemy packs under pressure."
    },
    {
      src: "assets/screenshot-10.jpg",
      alt: "Lost Galaxy: Survivors portal under attack screenshot",
      caption: "Objective alerts raise the pressure when the portal comes under attack."
    },
    {
      src: "assets/screenshot-11.jpg",
      alt: "Lost Galaxy: Survivors horde control screenshot",
      caption: "Enemy formations, minimap pressure, and drop collection all compete for attention."
    },
    {
      src: "assets/screenshot-12.jpg",
      alt: "Lost Galaxy: Survivors radar tower objective screenshot",
      caption: "Mission moments break up the run with radar towers, signal recovery, and objective zones."
    }
  ],
  platforms: ["Windows", "macOS"],
  steamFeatures: ["Single-player", "Steam Achievements", "Steam Leaderboards", "Family Sharing"],
  languages: [
    "English",
    "Italian",
    "Spanish",
    "Japanese",
    "Russian",
    "Simplified Chinese",
    "Portuguese",
    "Traditional Chinese"
  ]
};

window.gameData = gameData;
