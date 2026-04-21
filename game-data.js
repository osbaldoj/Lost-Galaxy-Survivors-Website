const gameData = {
  title: "Lost Galaxy: Survivors",
  heroTitleLines: ["Lost", "Galaxy:", "Survivors"],
  studio: "After The Singularity Games",
  links: {
    steam: "https://store.steampowered.com/app/4019660",
    itch: "https://jorge-osbaldo.itch.io/lost-galaxy-survivors"
  },
  eyebrow: "Sci-fi top-down survival shooter",
  tagline:
    "Survive relentless alien swarms, evolve your build in real time, and deploy tactical support tools before the battlefield consumes you.",
  playtest: {
    banner: "Free playtest available now",
    detail: "Temporary demo-like build with limited content. Play on itch.io and send feedback while the Steam launch keeps cooking.",
    ctaLabel: "Playtest on itch.io",
    panelEyebrow: "Playtest live",
    panelTitle: "Temporary itch.io build",
    panelText: "Jump into the latest playtest, then share what felt good, rough, or missing so the full release lands stronger."
  },
  shortDescription:
    "Survive relentless alien swarms in a fast-paced sci-fi top-down shooter. Level up, build powerful upgrades, deploy tactical support tools, and push your limits in an intense, replayable survival experience.",
  overview:
    "Lost Galaxy: Survivors is about momentum, decisions, and pressure. Each run pushes you to control space, manage escalating threats, and commit to upgrades that change how you fight.",
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
      "Wishlist the full release on Steam, then try the temporary itch.io playtest on Windows or macOS.",
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
      text: "Enemy hordes grow stronger, faster, and harder to contain as each run escalates."
    },
    {
      title: "Mid-run buildcraft",
      text: "Level up in real time and shape your run through damage, fire rate, abilities, mobility, and utility."
    },
    {
      title: "Tactical support tools",
      text: "Use drones, turrets, shields, and deployables to hold ground when the swarm breaks formation."
    },
    {
      title: "Elite enemies and nest zones",
      text: "High-pressure threats can turn a stable run into a crisis if you lose control of the map."
    },
    {
      title: "Replayable survival",
      text: "Experiment with different builds, chase better decisions, and push a little further each time."
    },
    {
      title: "Steam-ready progression",
      text: "Built around single-player runs with Steam achievements and leaderboards planned on the store page."
    }
  ],
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
