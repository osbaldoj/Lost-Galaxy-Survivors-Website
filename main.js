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

  if (data.playtest) {
    const playtest = createElement("div", "hero-live-card");
    playtest.append(createElement("span", "hero-live-card-eyebrow", data.playtest.panelEyebrow));
    playtest.append(createElement("strong", "hero-live-card-title", data.playtest.panelTitle));
    playtest.append(createElement("p", "hero-live-card-copy", data.playtest.panelText));

    const playtestLink = createElement("a", "hero-live-card-link", data.playtest.ctaLabel);
    playtestLink.href = data.links.itch;
    playtestLink.target = "_blank";
    playtestLink.rel = "noreferrer";
    playtest.append(playtestLink);

    panel.append(playtest);
  }

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

const renderHeroCallouts = () => {
  const container = select("[data-render='heroCallouts']");
  if (!container || !data.playtest) return;

  const banner = createElement("div", "hero-live-banner");
  banner.append(createElement("span", "hero-live-pill", "Live"));

  const copy = createElement("div", "hero-live-copy-block");
  copy.append(createElement("strong", "hero-live-title", data.playtest.banner));
  copy.append(createElement("p", "hero-live-detail", data.playtest.detail));
  banner.append(copy);

  const link = createElement("a", "hero-live-inline-link", data.playtest.ctaLabel);
  link.href = data.links.itch;
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
    item.prepend(createElement("span", "hero-proof-star", "★"));
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

const renderOverviewBullets = () => {
  const container = select("[data-render='overviewBullets']");
  if (!container) return;

  data.overviewBullets.forEach((item) => {
    const bullet = createElement("li", "intro-feature-item");
    const label = createElement("strong", "intro-feature-label", item);
    bullet.append(label);
    container.append(bullet);
  });
};

const renderIntroScreenshot = () => {
  const container = select("[data-render='introScreenshot']");
  if (!container) return;

  const shots = data.screenshots.slice(0, 4);
  if (!shots.length) return;

  container.replaceChildren();

  const wrapper = document.createElement("div");
  wrapper.className = "intro-visual-images";

  const images = shots.map((shot, i) => {
    const img = document.createElement("img");
    img.src = shot.src;
    img.alt = shot.alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    img.style.opacity = i === 0 ? 1 : 0;
    wrapper.append(img);
    return img;
  });

  container.append(wrapper);

  const caption = createElement("figcaption", "", shots[0].caption);
  container.append(caption);

  let current = 0;
  setInterval(() => {
    const next = (current + 1) % shots.length;
    images[current].style.opacity = 0;
    images[next].style.opacity = 1;
    caption.textContent = shots[next].caption;
    current = next;
  }, 4500);
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

const renderPressQuotes = () => {
  const container = select("[data-render='pressQuotes']");
  if (!container || !data.pressQuotes) return;

  data.pressQuotes.forEach((quote) => {
    const block = document.createElement("blockquote");
    block.className = "press-quote";
    const p = createElement("p", "", `"${quote.text}"`);
    const cite = createElement("cite", "", `— ${quote.source}`);
    block.append(p, cite);
    container.append(block);
  });
};

const init = () => {
  setTextContent();
  setLinks();
  renderHeroCallouts();
  renderHeroTitle();
  renderSocialProof();
  renderNav();
  renderHeroPanel();
  renderFeatures();
  renderOverviewBullets();
  renderIntroScreenshot();
  setupScrollAnimations();
  setupHeroVideo();
  renderPressQuotes();
  setActiveNav();
};

init();
