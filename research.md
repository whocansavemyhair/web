---
layout: single
permalink: /research/
author_profile: false
sidebar: false
classes: wide
---

<div class="research-hero-grid">
  <div class="research-wrapper research-wrapper--decision">
    <div class="research-title-row research-title-row--left">
      <h2>Decision-Making</h2>
    </div>
    <div class="research-section">
      <div class="research-text">
        <p>
          Large language models are becoming decision interfaces for complex systems,
          but reliable decisions still require domain grounding, uncertainty awareness,
          and actionable intervention design. We develop <strong>decision-making</strong>
          methods that use LLMs to connect data, language, and optimization, enabling
          applications such as public health analysis, personalized
          decision modeling, and trustworthy traffic safety assessment.
        </p>
      </div>
      <div class="research-image research-carousel" data-research-carousel aria-label="Decision-Making images">
        <div class="research-carousel-track">
          <img class="research-carousel-slide active" src="{{ '/assets/images/research/main/model-figs/Picture1.png' | relative_url }}?v=20260623-0015" alt="Decision-Making figure 1">
          <img class="research-carousel-slide" src="{{ '/assets/images/research/main/model-figs/Picture2.png' | relative_url }}?v=20260623-0015" alt="Decision-Making figure 2">
        </div>
        <div class="research-carousel-dots" aria-label="Select image">
          <button class="active" type="button" aria-label="Show image 1"></button>
          <button type="button" aria-label="Show image 2"></button>
        </div>
      </div>
    </div>
  </div>

  <div class="research-wrapper research-wrapper--collaborative alt">
    <div class="research-title-row research-title-row--right">
      <h2>Collaborative AI and Agentic Intelligence</h2>
    </div>
    <div class="research-section">
      <div class="research-image research-carousel" data-research-carousel aria-label="Collaborative AI and Agentic Intelligence images">
        <div class="research-carousel-track">
          <img class="research-carousel-slide active" src="{{ '/assets/images/research/main/collaborative-figs/benchmark_overview.png' | relative_url }}?v=20260627-001" alt="Collaborative AI and Agentic Intelligence benchmark overview">
        </div>
        <div class="research-carousel-dots" aria-label="Select image">
          <button class="active" type="button" aria-label="Show image 1"></button>
        </div>
      </div>
      <div class="research-text">
        <p>
          LLMs are powerful collaborators, but their reasoning becomes more reliable
          when it is shaped by human priors, physical constraints, and domain knowledge.
          Our work on <strong>collaborative intelligence</strong> studies how LLMs can organize,
          evaluate, and improve their own reasoning through self-governance, and how
          LLM-based mixture-of-experts systems can coordinate specialized agents to
          produce grounded, cooperative intelligence.
        </p>
      </div>
    </div>
  </div>

  <div class="research-wrapper research-wrapper--scaling">
    <div class="research-title-row research-title-row--left">
      <h2>Computing and Intelligence Scaling</h2>
    </div>
    <div class="research-section">
      <div class="research-text">
        <p>
          Scaling LLMs and multimodal foundation models is not only about making models
          larger; it also requires efficient computation, adaptive routing, and deployable
          intelligence under real-world resource constraints. We design <strong>computing and
          intelligence scaling</strong> methods for energy and transportation systems, edge AI,
          computing efficiency, and LLM life assessment that bring large-model
          intelligence closer to practical deployment.
        </p>
      </div>
      <div class="research-image research-carousel" data-research-carousel aria-label="Computing and Intelligence Scaling images">
        <div class="research-carousel-track">
          <img class="research-carousel-slide active" src="{{ '/assets/images/research/main/figs/Picture1.png' | relative_url }}?v=20260626-001" alt="Computing and Intelligence Scaling figure 1">
          <img class="research-carousel-slide" src="{{ '/assets/images/research/main/figs/Picture2.png' | relative_url }}?v=20260626-001" alt="Computing and Intelligence Scaling figure 2">
          <img class="research-carousel-slide" src="{{ '/assets/images/research/main/figs/Picture3.png' | relative_url }}?v=20260626-001" alt="Computing and Intelligence Scaling figure 3">
        </div>
        <div class="research-carousel-dots" aria-label="Select image">
          <button class="active" type="button" aria-label="Show image 1"></button>
          <button type="button" aria-label="Show image 2"></button>
          <button type="button" aria-label="Show image 3"></button>
        </div>
      </div>
    </div>
  </div>
</div>


<section class="highlighted-papers-section" aria-labelledby="highlighted-papers-title">
<h2 id="highlighted-papers-title" class="highlighted-papers-title">
  <button id="highlightedPapersReset" class="highlighted-papers-reset" type="button">Highlighted Papers</button>
</h2>

<div class="pub-filter-bar">
  <button class="pub-filter-toggle" id="pubFilterToggle" type="button" aria-expanded="false" aria-controls="pubFilterPanel">
    <span class="filter-icon" aria-hidden="true"><span></span><span></span><span></span></span>
    <span>Filters</span>
  </button>

  <div class="pub-filter-panel" id="pubFilterPanel">
    <div class="filter-buttons">
      <button data-scope="type" data-type="journal">Journal</button>
      <button data-scope="type" data-type="conference">Conference</button>
    </div>

    <div class="pub-year-filter" id="pubYearFilter">
      <button class="pub-year-toggle" id="pubYearToggle" type="button" aria-haspopup="listbox" aria-expanded="false">Years</button>
      <div class="pub-year-menu" id="pubYearMenu" role="listbox" aria-label="Filter by year">
        <button class="pub-year-option active" type="button" data-year="all" role="option" aria-selected="true">All Years</button>
      {% assign years = site.data.publications | map:"year" | uniq | sort | reverse %}
      {% for y in years %}
        <button class="pub-year-option" type="button" data-year="{{ y }}" role="option" aria-selected="false">{{ y }}</button>
      {% endfor %}
      </div>
    </div>
  </div>
</div>


<!-- ========== Research Projects（随方向切换） ========== -->
<!-- <div class="project-grid show" id="projects-models">
  <article class="news-card long">
    <h3>Multi-agent Optimization</h3>
    <p>Developing scalable algorithms for multi-agent systems with adaptive control.</p>
  </article>

  <article class="news-card long">
    <h3>Learning-based Routing</h3>
    <p>Combining graph learning and dynamic optimization for network flow problems.</p>
  </article>

  <article class="news-card long">
    <h3>Distributed Control Systems</h3>
    <p>Decentralized optimization for real-time system coordination.</p>
  </article>
</div>

<div class="project-grid" id="projects-systems">
  <article class="news-card long">
    <h3>Health System Simulation</h3>
    <p>Data-driven modeling for healthcare system optimization and resilience.</p>
  </article>

  <article class="news-card long">
    <h3>Resource Allocation Algorithms</h3>
    <p>Adaptive resource allocation across distributed computational environments.</p>
  </article>

  <article class="news-card long">
    <h3>Policy Optimization Frameworks</h3>
    <p>Developing computational tools for data-informed policy decision-making.</p>
  </article>
</div> -->


<!-- ========== Publications（按 方向 + 类型 + 年份 联动过滤） ========== -->
<div id="pubList" class="pub-list">
  {% assign pubs = site.data.publications | sort: "year" | reverse %}
  {% for pub in pubs %}
  <div class="pub-item"
       data-type="{{ pub.type }}"
       data-year="{{ pub.year }}"
       data-direction="{{ pub.direction }}">
    <div class="pub-thumb">
      {% if pub.image and pub.image != "" %}
      <img src="{{ pub.image | relative_url }}" alt="{{ pub.title }}">
      {% else %}
      <div class="pub-thumb-placeholder">No image</div>
      {% endif %}
    </div>
    <div class="pub-content">
      <div class="pub-year">{{ pub.year }}</div>
      <h3 class="pub-title">{{ pub.title }}</h3>
      <p class="pub-authors">{{ pub.authors }}</p>
      <p class="pub-venue"><em>{{ pub.venue }}</em></p>

      <div class="pub-meta-row">
        {% if pub.keywords and pub.keywords.size > 0 %}
        <span class="pub-keywords" aria-label="Keywords">
          {% for keyword in pub.keywords %}
          <span>{{ keyword }}</span>{% unless forloop.last %}<span class="pub-keyword-separator">,</span>{% endunless %}
          {% endfor %}
        </span>
        {% endif %}
        <span class="pub-links">
          {% if pub.pdf and pub.pdf != "" %}
          {% if pub.pdf == "#" or pub.pdf contains "://" %}
          <a href="{{ pub.pdf }}" target="_blank" rel="noopener">[PDF]</a>
          {% else %}
          <a href="{{ pub.pdf | relative_url }}" target="_blank" rel="noopener">[PDF]</a>
          {% endif %}
          {% endif %}
          {% if pub.doi and pub.doi != "" %}
          <a href="{{ pub.doi }}" target="_blank">[DOI]</a>
          {% endif %}
        </span>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
<div class="pub-load-more-wrap">
  <button id="pubLoadMore" class="pub-load-more-btn" type="button">Load more</button>
</div>
</section>

<script>
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-research-carousel]").forEach(carousel => {
    const slides = Array.from(carousel.querySelectorAll(".research-carousel-slide"));
    const dots = Array.from(carousel.querySelectorAll(".research-carousel-dots button"));
    const prev = carousel.querySelector(".research-carousel-control.prev");
    const next = carousel.querySelector(".research-carousel-control.next");
    let current = 0;
    let timer = null;

    function showSlide(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
      dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
    }

    function start() {
      timer = window.setInterval(() => showSlide(current + 1), 10000);
    }

    function restart() {
      window.clearInterval(timer);
      start();
    }

    if (prev) {
      prev.addEventListener("click", () => {
        showSlide(current - 1);
        restart();
      });
    }

    if (next) {
      next.addEventListener("click", () => {
        showSlide(current + 1);
        restart();
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        restart();
      });
    });

    carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
    carousel.addEventListener("mouseleave", start);

    showSlide(0);
    start();
  });

  // 按钮 & 控件
  const filterBar = document.querySelector(".pub-filter-bar");
  const highlightedPapersReset = document.getElementById("highlightedPapersReset");
  const filterToggle = document.getElementById("pubFilterToggle");
  const btns = document.querySelectorAll(".pub-filter-bar .filter-buttons button[data-scope]");
  const yearFilter = document.getElementById("pubYearFilter");
  const yearToggle = document.getElementById("pubYearToggle");
  const yearOptions = document.querySelectorAll(".pub-year-option");
  const pubs = Array.from(document.querySelectorAll(".pub-item"));
  const loadMoreBtn = document.getElementById("pubLoadMore");
  const PAGE_SIZE = 5;

  // 默认展示全部论文；筛选按钮按类型互斥。
  let currentType = "all";
  let currentYear = "all";
  let visibleLimit = PAGE_SIZE;

  function closeFilterPanel() {
    filterBar.classList.remove("open");
    filterToggle.setAttribute("aria-expanded", "false");
  }

  function closeYearMenu() {
    yearFilter.classList.remove("open");
    yearToggle.setAttribute("aria-expanded", "false");
  }

  function setYearFilter(year) {
    currentYear = year;
    yearOptions.forEach(option => {
      const active = option.dataset.year === year;
      option.classList.toggle("active", active);
      option.setAttribute("aria-selected", active ? "true" : "false");
    });
  }

  function clearAllFilters() {
    currentType = "all";
    currentYear = "all";
    visibleLimit = PAGE_SIZE;
    btns.forEach(btn => btn.classList.remove("active"));
    setYearFilter("all");
    closeYearMenu();
    applyFilters();
    closeFilterPanel();
  }

  function applyFilters() {
    const matchedPubs = pubs.filter(pub => {
      const okType = (currentType === "all") || (pub.dataset.type === currentType);
      const okYear = (currentYear === "all") || (pub.dataset.year === currentYear);
      return okType && okYear;
    });

    pubs.forEach(pub => { pub.style.display = "none"; });
    matchedPubs.slice(0, visibleLimit).forEach(pub => {
      pub.style.display = "flex";
    });

    loadMoreBtn.style.display = (matchedPubs.length > visibleLimit) ? "inline-flex" : "none";
  }

  // 处理按钮点击：同 scope 互斥，再次点击同一按钮则清除该 scope。
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const scope = btn.dataset.scope;
      const wasActive = btn.classList.contains("active");

      // 同 scope 互斥
      btns.forEach(b => {
        if (b.dataset.scope === scope) b.classList.remove("active");
      });

      if (wasActive) {
        if (scope === "type") currentType = "all";
      } else {
        btn.classList.add("active");
        if (scope === "type") currentType = btn.dataset.type || "all";
      }

      visibleLimit = PAGE_SIZE;
      applyFilters();
      closeFilterPanel();
    });
  });

  filterToggle.addEventListener("click", event => {
    event.stopPropagation();
    const isOpen = filterBar.classList.toggle("open");
    filterToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if (!isOpen) closeYearMenu();
  });

  yearToggle.addEventListener("click", event => {
    event.stopPropagation();
    const isOpen = yearFilter.classList.toggle("open");
    yearToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  yearOptions.forEach(option => {
    option.addEventListener("click", () => {
      const val = option.dataset.year || "all";
      setYearFilter(val);
      visibleLimit = PAGE_SIZE;
      closeYearMenu();
      applyFilters();
      closeFilterPanel();
    });
  });

  document.addEventListener("click", event => {
    if (!filterBar.contains(event.target)) {
      closeFilterPanel();
    }
    if (!yearFilter.contains(event.target)) {
      closeYearMenu();
    }
  });

  filterToggle.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeFilterPanel();
      closeYearMenu();
      filterToggle.focus();
    }
  });

  yearToggle.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeYearMenu();
      yearToggle.focus();
    }
  });

  loadMoreBtn.addEventListener("click", () => {
    visibleLimit += PAGE_SIZE;
    applyFilters();
  });

  highlightedPapersReset.addEventListener("click", clearAllFilters);

  // 首次渲染：展示全部论文。
  applyFilters();
});
</script>
