---
layout: single
permalink: /research-hex/
author_profile: false
sidebar: false
classes: wide
---

<!-- ========== 保留你的研究方向展示（原样不动） ========== -->
<div class="research-wrapper">
  <div class="research-section">
    <div class="research-text">
      <h2>Optimal Computation Models</h2>
      <p>
        We study to integrate <strong>optimal computation models</strong> through data-driven modeling,
        system-level simulation, and control theory in the areas of transportation and health.
      </p>
      <ul>
        <li>Sub area 1</li>
        <li>Sub area 2</li>
        <li>Sub area 3</li>
      </ul>
    </div>
    <div class="research-image research-hex-grid research-hex-grid-models" aria-label="Optimal Computation Models research images">
      <img src="{{ '/assets/images/research/main/hex-cutout/Picture1.png' | relative_url }}" alt="Optimal Computation Models figure 1">
      <img src="{{ '/assets/images/research/main/hex-cutout/Picture2.png' | relative_url }}?v=20260622-2135" alt="Optimal Computation Models figure 2">
      <img src="{{ '/assets/images/research/main/hex-cutout/Picture3.png' | relative_url }}" alt="Optimal Computation Models figure 3">
    </div>
  </div>
</div>

<div class="research-wrapper alt">
  <div class="research-section">
    <div class="research-image research-hex-grid research-hex-grid-systems" aria-label="Optimal Computational Systems research images">
      <img src="{{ '/assets/images/research/main/hex-cutout/Picture1.png' | relative_url }}" alt="Optimal Computational Systems figure 1">
      <img src="{{ '/assets/images/research/main/hex-cutout/Picture2.png' | relative_url }}?v=20260622-2135" alt="Optimal Computational Systems figure 2">
      <img src="{{ '/assets/images/research/main/hex-cutout/Picture3.png' | relative_url }}" alt="Optimal Computational Systems figure 3">
    </div>
    <div class="research-text">
      <h2>Optimal Computational Systems</h2>
      <p>
        We integrate computation and data science into
        <strong>computational systems</strong> to improve 
        policy design and resource allocation.
      </p>
      <ul>
        <li>Sub area 1</li>
        <li>Sub area 2</li>
        <li>Sub area 3</li>
      </ul>
    </div>
  </div>
</div>


<!-- ========== 统一 Filter Bar（publication 同款结构/类名） ========== -->
<!-- ========== 统一 Filter Bar（Papers 作为全局开关，放到最前） ========== -->
<div class="pub-filter-bar">
  <button class="pub-filter-toggle" id="pubFilterToggle" type="button" aria-expanded="false" aria-controls="pubFilterPanel">
    <span class="filter-icon" aria-hidden="true"><span></span><span></span><span></span></span>
    <span>Filters</span>
  </button>

  <div class="pub-filter-panel" id="pubFilterPanel">
    <div class="filter-buttons">
      <!-- 全局 Papers（控制 方向 + 类型 + 年份） -->
      <button data-scope="all" class="active">Papers</button>

      <!-- 方向 -->
      <button data-scope="direction" data-value="models">Models</button>
      <button data-scope="direction" data-value="systems">Systems</button>

      <!-- 类型 -->
      <button data-scope="type" data-type="journal">Journal</button>
      <button data-scope="type" data-type="conference">Conference</button>
    </div>

    <!-- 年份（右侧控件） -->
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

<script>
document.addEventListener("DOMContentLoaded", function () {
  // 按钮 & 控件
  const filterBar = document.querySelector(".pub-filter-bar");
  const filterToggle = document.getElementById("pubFilterToggle");
  const btns = document.querySelectorAll(".pub-filter-bar .filter-buttons button");
  const yearFilter = document.getElementById("pubYearFilter");
  const yearToggle = document.getElementById("pubYearToggle");
  const yearOptions = document.querySelectorAll(".pub-year-option");
  const pubs = Array.from(document.querySelectorAll(".pub-item"));
  const loadMoreBtn = document.getElementById("pubLoadMore");
  const PAGE_SIZE = 5;

  // 状态：默认 Papers 模式（展示全部）
  let allMode = true;
  let currentDirection = "all";
  let currentType = "all";
  let currentYear = "all";
  let visibleLimit = PAGE_SIZE;

  const btnAll = document.querySelector('.pub-filter-bar .filter-buttons button[data-scope="all"]');

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

  function applyFilters() {
    const matchedPubs = pubs.filter(pub => {
      const okDir  = (currentDirection === "all") || (pub.dataset.direction === currentDirection);
      const okType = (currentType === "all") || (pub.dataset.type === currentType);
      const okYear = (currentYear === "all") || (pub.dataset.year === currentYear);
      return okDir && okType && okYear;
    });

    pubs.forEach(pub => { pub.style.display = "none"; });
    matchedPubs.slice(0, visibleLimit).forEach(pub => {
      pub.style.display = "flex";
    });

    loadMoreBtn.style.display = (matchedPubs.length > visibleLimit) ? "inline-flex" : "none";
  }

  // 处理按钮点击（同 scope 互斥；Papers 为全局总开关）
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const scope = btn.dataset.scope;

      if (scope === "all") {
        // 进入 Papers 模式：清空其它激活
        allMode = true;
        currentDirection = "all";
        currentType = "all";
        currentYear = "all";
        setYearFilter("all");
        closeYearMenu();

        btns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        visibleLimit = PAGE_SIZE;
        applyFilters();
        closeFilterPanel();
        return;
      }

      // 只要点了非 Papers，Papers 就失效
      allMode = false;
      btnAll.classList.remove("active");

      // 同 scope 互斥
      btns.forEach(b => {
        if (b.dataset.scope === scope) b.classList.remove("active");
      });
      btn.classList.add("active");

      if (scope === "direction") currentDirection = btn.dataset.value || "all";
      if (scope === "type")      currentType      = btn.dataset.type  || "all";

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
      if (val !== "all") {
        allMode = false;
        btnAll.classList.remove("active");
      }
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

  // 首次渲染（Papers 模式）
  applyFilters();
});
</script>
