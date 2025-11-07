---
layout: single
permalink: /research/
author_profile: false
sidebar: false
classes: wide
---

<!-- ========== 全局筛选栏 ========== -->
<div class="global-filter-bar">
  <div class="filter-buttons">
    <button data-target="research-models" class="active">Models</button>
    <button data-target="research-systems">Systems</button>
    <button data-target="pub-all">All Publications</button>
    <button data-target="pub-journal">Journal</button>
    <button data-target="pub-conference">Conference</button>
  </div>
  <input type="text" id="globalSearch" placeholder="Search publications...">
</div>


<!-- ========== Research Section ========== -->
<div class="projects-section">

  <div class="project-grid show" id="research-models">
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

  <div class="project-grid" id="research-systems">
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
</div>



<!-- ========== Publications Section（原 publication.md 移植） ========== -->
<div id="pubList" class="pub-list">
  {% assign pubs = site.data.publications | sort: "year" | reverse %}
  {% for pub in pubs %}
  <div class="pub-item" data-type="{{ pub.type }}">
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

  const buttons = document.querySelectorAll(".global-filter-bar .filter-buttons button");
  const searchInput = document.getElementById("globalSearch");

  const researchModels = document.getElementById("research-models");
  const researchSystems = document.getElementById("research-systems");
  const pubs = document.querySelectorAll(".pub-item");

  function updateView() {
    const active = document.querySelector(".global-filter-bar .filter-buttons .active").dataset.target;
    const term = searchInput.value.toLowerCase();

    // Research 显示切换
    researchModels.classList.toggle("show", active === "research-models");
    researchSystems.classList.toggle("show", active === "research-systems");

    // Publications 筛选 + 搜索
    pubs.forEach(pub => {
      const t = pub.dataset.type;
      const matchType = (active === "pub-all") || (active === `pub-${t}`);
      const matchSearch = pub.querySelector(".pub-title").innerText.toLowerCase().includes(term);
      pub.style.display = (matchType && matchSearch) ? "flex" : "none";
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      updateView();
    });
  });

  searchInput.addEventListener("input", updateView);
});
</script>
