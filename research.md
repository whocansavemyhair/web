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



<!-- ========== 新 Filter Bar（替换原项目切换） ========== -->
<div class="pub-filter-bar research-filter">
  <div class="filter-buttons">
    <button data-direction="models" class="active">Models</button>
    <button data-direction="systems">Systems</button>
  </div>

  <div class="filter-buttons">
    <button data-type="all" class="active type-btn">All</button>
    <button data-type="journal" class="type-btn">Journal</button>
    <button data-type="conference" class="type-btn">Conference</button>
  </div>

  <select id="yearSelector">
    <option value="all" selected>All Years</option>
    {% assign years = site.data.publications | map:"year" | uniq | sort | reverse %}
    {% for y in years %}
      <option value="{{ y }}">{{ y }}</option>
    {% endfor %}
  </select>
</div>



<!-- ========== Research Projects (跟随 filter 显示) ========== -->
<div class="project-grid show" id="projects-models">
  <article class="news-card long"><h3>Multi-agent Optimization</h3></article>
  <article class="news-card long"><h3>Learning-based Routing</h3></article>
  <article class="news-card long"><h3>Distributed Control Systems</h3></article>
</div>

<div class="project-grid" id="projects-systems">
  <article class="news-card long"><h3>Health System Simulation</h3></article>
  <article class="news-card long"><h3>Resource Allocation Algorithms</h3></article>
  <article class="news-card long"><h3>Policy Optimization Frameworks</h3></article>
</div>



<!-- ========== Publications（动态跟随 Filter ） ========== -->
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
    </div>
  </div>
  {% endfor %}
</div>



<script>
document.addEventListener("DOMContentLoaded", function() {

  const directionBtns = document.querySelectorAll("[data-direction]");
  const typeBtns = document.querySelectorAll(".type-btn");
  const yearSelector = document.getElementById("yearSelector");
  const projectsModels = document.getElementById("projects-models");
  const projectsSystems = document.getElementById("projects-systems");
  const pubs = document.querySelectorAll(".pub-item");

  let currentDirection = "models";
  let currentType = "all";
  let currentYear = "all";

  function updateDisplay() {

    // Research 项目切换
    projectsModels.classList.toggle("show", currentDirection === "models");
    projectsSystems.classList.toggle("show", currentDirection === "systems");

    // Publications 过滤
    pubs.forEach(pub => {
      const matchDirection = pub.dataset.direction === currentDirection;
      const matchType = (currentType === "all" || pub.dataset.type === currentType);
      const matchYear = (currentYear === "all" || pub.dataset.year === currentYear);
      pub.style.display = (matchDirection && matchType && matchYear) ? "flex" : "none";
    });

  }

  directionBtns.forEach(btn => btn.onclick = () => {
    currentDirection = btn.dataset.direction;
    directionBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    updateDisplay();
  });

  typeBtns.forEach(btn => btn.onclick = () => {
    currentType = btn.dataset.type;
    typeBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    updateDisplay();
  });

  yearSelector.onchange = () => {
    currentYear = yearSelector.value;
    updateDisplay();
  };

});
</script>
