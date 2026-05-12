const data = window.gameData;

const select = (selector, root = document) => root.querySelector(selector);
const selectAll = (selector, root = document) => [...root.querySelectorAll(selector)];

const getDataValue = (key) => key.split(".").reduce((value, part) => value?.[part], data);

const createElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const createIconElement = (iconName, label) => {
  if (iconName === "steam-asset") {
    const image = document.createElement("img");
    image.className = "icon-image";
    image.src = "assets/steam-icon.png";
    image.alt = "";
    image.setAttribute("aria-hidden", "true");
    return image;
  }

  const icon = createElement("span", `icon icon-${iconName}`);
  icon.setAttribute("aria-hidden", "true");
  if (label) icon.setAttribute("title", label);
  return icon;
};

const setTextContent = () => {
  selectAll("[data-text]").forEach((element) => {
    const key = element.dataset.text;
    const value = getDataValue(key);
    if (typeof value === "string") element.textContent = value;
  });
};

const setLinks = () => {
  const links = data.links || {};
  selectAll("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    if (links[key]) element.href = links[key];
  });
};

const renderNav = () => {
  const container = select("[data-render='nav']");
  data.nav.forEach((item) => {
    const link = createElement("a", "", item.label);
    link.href = item.target;
    link.dataset.navTarget = item.target.slice(1);
    container.append(link);
  });
};

const renderHeroPanel = () => {
  const container = select("[data-render='stats']");
  const panel = createElement("div", "hero-module");

  panel.append(createElement("span", "hero-module-eyebrow", data.heroPanel.eyebrow));
  panel.append(createElement("h2", "hero-module-title", data.heroPanel.title));
  panel.append(createElement("p", "hero-module-copy", data.heroPanel.copy));

  const statusList = createElement("div", "hero-status-list");
  data.heroPanel.rows.forEach((row) => {
    const item = createElement("article", "hero-status-row");
    item.append(createElement("span", "stat-label", row.label));

    const value = createElement("div", "hero-status-value");
    if (row.icon) value.append(createIconElement(row.icon, row.label));
    value.append(createElement("strong", "", row.value));
    item.append(value);
    statusList.append(item);
  });
  panel.append(statusList);

  const footer = createElement("div", "hero-store-block");

  const storeIcons = createElement("div", "hero-store-icons");
  data.heroPanel.store.platforms.forEach((platform) => {
    const item = createElement("div", "hero-store-item");
    item.append(createIconElement(platform.icon, platform.label));
    item.append(createElement("span", "", platform.label));
    storeIcons.append(item);
  });
  footer.append(storeIcons);

  const badgeRow = createElement("div", "hero-badge-row");
  data.heroPanel.badges.forEach((badge) => {
    badgeRow.append(createElement("span", "hero-badge", badge));
  });
  footer.append(badgeRow);

  panel.append(footer);

  container.append(panel);
};

const renderSteamCallout = () => {
  const container = select("[data-render='heroCallouts']");
  if (!container || !data.steamCallout) return;

  const banner = createElement("div", "hero-steam-callout");
  banner.append(createElement("span", "hero-steam-pill", "Playtest"));

  const copy = createElement("div", "hero-steam-copy-block");
  copy.append(createElement("strong", "hero-steam-title", data.steamCallout.banner));
  copy.append(createElement("p", "hero-steam-detail", data.steamCallout.detail));
  banner.append(copy);

  const link = createElement("a", "hero-steam-inline-link", data.steamCallout.ctaLabel);
  link.href = data.links.steam;
  link.target = "_blank";
  link.rel = "noreferrer";
  banner.append(link);

  container.append(banner);
};

const renderSocialProof = () => {
  const container = select("[data-render='socialProof']");
  if (!container) return;

  data.socialProof.forEach((line) => {
    const item = createElement("p", "hero-proof-line", line);
    item.prepend(createElement("span", "hero-proof-star", "\u2605"));
    container.append(item);
  });
};

const renderHeroTitle = () => {
  const container = select("[data-render='heroTitle']");

  const renderTextFallback = () => {
    container.replaceChildren();
    data.heroTitleLines.forEach((line) => {
      container.append(createElement("span", "", line));
    });
  };

  if (!data.heroLogo?.src) {
    renderTextFallback();
    return;
  }

  const label = createElement("span", "sr-only", data.title);
  const logo = document.createElement("img");
  logo.className = "hero-logo";
  logo.src = data.heroLogo.src;
  logo.alt = "";
  logo.decoding = "async";
  logo.hidden = true;
  logo.addEventListener("load", () => {
    logo.hidden = false;
  }, { once: true });
  logo.addEventListener("error", renderTextFallback, { once: true });

  container.replaceChildren(label, logo);
};

const renderGameplayCards = () => {
  const container = select("[data-render='gameplayCards']");
  if (!container || !data.gameplayLoop?.cards) return;

  data.gameplayLoop.cards.forEach((card, index) => {
    const article = createElement("article", "feature-card");
    article.append(createElement("span", "feature-index", String(index + 1).padStart(2, "0")));
    article.append(createElement("h3", "", card.title));
    article.append(createElement("p", "", card.text));
    container.append(article);
  });
};

const renderPlaytestBullets = () => {
  const container = select("[data-render='playtestBullets']");
  if (!container || !data.steamPlaytest?.bullets) return;

  data.steamPlaytest.bullets.forEach((bullet) => {
    const item = createElement("div", "playtest-bullet");
    const marker = createElement("span", "playtest-bullet-marker");
    marker.innerHTML = "&#10003;";
    item.append(marker);
    item.append(createElement("span", "playtest-bullet-text", bullet));
    container.append(item);
  });
};

const renderMediaPlaceholders = () => {
  const container = select("[data-render='mediaPlaceholders']");
  if (!container || !data.gameplayPreview?.placeholders) return;

  data.gameplayPreview.placeholders.forEach((placeholder) => {
    const card = createElement("div", "media-placeholder");

    const badge = createElement("span", "media-placeholder-badge", "Coming soon");
    card.append(badge);

    const label = createElement("span", "media-placeholder-label", placeholder.label);
    card.append(label);

    const hint = createElement("span", "media-placeholder-hint", placeholder.fileHint);
    card.append(hint);

    const comment = document.createComment(` Replace this placeholder with ${placeholder.fileHint} `);
    container.append(comment);
    container.append(card);
  });
};

const renderFeatures = () => {
  const container = select("[data-render='features']");
  data.features.forEach((feature, index) => {
    const article = createElement("article", "feature-card");
    article.append(createElement("span", "feature-index", String(index + 1).padStart(2, "0")));
    article.append(createElement("h3", "", feature.title));
    article.append(createElement("p", "", feature.text));
    container.append(article);
  });
};

const renderPressQuotes = () => {
  const container = select("[data-render='pressQuotes']");
  if (!container || !data.pressQuotes) return;

  data.pressQuotes.forEach((quote) => {
    const block = document.createElement("blockquote");
    block.className = "press-quote";
    const p = createElement("p", "", `"${quote.text}"`);
    const cite = createElement("cite", "", `\u2014 ${quote.source}`);
    block.append(p, cite);
    container.append(block);
  });
};

const setActiveNav = () => {
  const links = selectAll("[data-nav-target]");
  const sections = links
    .map((link) => select(`#${link.dataset.navTarget}`))
    .filter(Boolean);

  const activate = (id) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.navTarget === id);
    });
  };

  if (location.hash) {
    activate(location.hash.slice(1));
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) activate(visible.target.id);
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.18, 0.32, 0.48]
    }
  );

  sections.forEach((section) => observer.observe(section));
  window.addEventListener("hashchange", () => {
    if (location.hash) activate(location.hash.slice(1));
  });
};

const setupScrollAnimations = () => {
  const animateElements = selectAll(".feature-card");
  if (animateElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.1
  });

  animateElements.forEach((el) => observer.observe(el));
};

const setupHeroVideo = () => {
  const video = select(".hero-video");
  if (!video) return;

  const showVideo = () => video.classList.add("is-ready");
  const hideVideo = () => video.classList.remove("is-ready");

  video.addEventListener("loadeddata", showVideo, { once: true });
  video.addEventListener("error", hideVideo);

  const source = select("source", video);
  if (source) source.addEventListener("error", hideVideo);

  if (video.readyState >= 2) {
    showVideo();
  }
};

const init = () => {
  setTextContent();
  setLinks();
  renderSteamCallout();
  renderHeroTitle();
  renderSocialProof();
  renderNav();
  renderHeroPanel();
  renderGameplayCards();
  renderPlaytestBullets();
  renderMediaPlaceholders();
  renderFeatures();
  setupScrollAnimations();
  setupHeroVideo();
  renderPressQuotes();
  setActiveNav();
};

init();
