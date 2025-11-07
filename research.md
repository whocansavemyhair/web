---
layout: single
permalink: /research/
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
    <div class="research-image">
      <img src="{{ '/assets/images/lab1.png' | relative_url }}" alt="Optimal Computation Models">
    </div>
  </div>
</div>

<div class="research-wrapper alt">
  <div class="research-section">
    <div class="research-image">
      <img src="{{ '/assets/images/lab1.png' | relative_url }}" alt="Optimal Computational Systems">
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
<div class="pub-filter-bar">
  <div class="filter-buttons">
    <!-- 方向 -->
    <button data-scope="direction" data-value="models" class="active">Models</button>
    <button data-scope="direction" data-value="systems">Systems</button>

    <!-- 类型 -->
    <button data-scope="type" data-type="all" class="active">All</button>
    <button data-scope="type" data-type="journal">Journal</button>
    <button data-scope="type" data-type="conference">Conference</button>
  </div>

  <!-- 年份（右侧控件） -->
  <select id="pubYear" aria-label="Filter by year">
    <option value="all" selected>All Years</option>
    {% assign years = site.data.publications | map:"year" | uniq | sort | reverse %}
    {% for y in years %}
      <option value="{{ y }}">{{ y }}</option>
    {% endfor %}
  </select>
</div>


<!-- ========== Research Projects（随方向切换） ========== -->
<div class="project-grid show" id="projects-models">
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
</div>


<!-- ========== Publications（按 方向 + 类型 + 年份 联动过滤） ========== -->
<div id="pubList" class="pub-list">
  {% assign pubs = site.data.publications | sort: "year" | reverse %}
  {% for pub in pubs %}
  <div class="pub-item"
       data-type="{{ pub.type }}"
       data-year="{{ pub.year }}"
       data-direction="{{ pub.direction }}">
    <div class="pub-year">{{ pub.year }}</div>
    <div class="pub-content">
      <h3 class="pub-title">{{ pub.title }}</h3>
      <p class="pub-authors">{{ pub.authors }}</p>
      <p class="pub-venue"><em>{{ pub.venue }}</em></p>
      <p class="pub-links">
        {% if pub.pdf and pub.pdf != "" %}
        <a href="{{ pub.pdf }}" target="_blank">[PDF]</a>
        {% endif %}
        {% if pub.doi and pub.doi != "" %}
        <a href="{{ pub.doi }}" target="_blank">[DOI]</a>
        {% endif %}
      </p>
    </div>
  </div>
  {% endfor %}
</div>


<script>
document.addEventListener("DOMContentLoaded", function () {
  // 按钮 & 控件
  const btns = document.querySelectorAll(".pub-filter-bar .filter-buttons button");
  const yearSel = document.getElementById("pubYear");

  // 项目区
  const projectsModels = document.getElementById("projects-models");
  const projectsSystems = document.getElementById("projects-systems");

  // 论文
  const pubs = document.querySelectorAll(".pub-item");

  // 当前状态
  let currentDirection = "models";
  let currentType = "all";
  let currentYear = "all";

  function applyFilters() {
    // 1) 项目：方向切换
    projectsModels.classList.toggle("show", currentDirection === "models");
    projectsSystems.classList.toggle("show", currentDirection === "systems");

    // 2) 论文：方向 + 类型 + 年份
    pubs.forEach(pub => {
      const okDir = pub.dataset.direction === currentDirection;
      const okType = (currentType === "all") || (pub.dataset.type === currentType);
      const okYear = (currentYear === "all") || (pub.dataset.year === currentYear);
      pub.style.display = (okDir && okType && okYear) ? "flex" : "none";
    });
  }

  // 按钮点击（按 scope 互斥）
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const scope = btn.dataset.scope;

      // 同 scope 的按钮互斥
      btns.forEach(b => {
        if (b.dataset.scope === scope) b.classList.remove("active");
      });
      btn.classList.add("active");

      if (scope === "direction") currentDirection = btn.dataset.value;
      if (scope === "type") currentType = btn.dataset.type;

      applyFilters();
    });
  });

  // 年份选择
  yearSel.addEventListener("change", () => {
    currentYear = yearSel.value;
    applyFilters();
  });

  // 首次渲染
  applyFilters();
});
</script>
