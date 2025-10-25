---
layout: single
permalink: /research/
author_profile: false
sidebar: false
classes: wide
---

<!-- ========== 研究方向 1：左文右图 ========== -->
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

<!-- ========== 研究方向 2：左图右文 ========== -->
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

<!-- ========== 项目部分更新 ========== -->
<div class="projects-section">
  <h2 style="text-align:center;">
    Highlighted Projects in
    <select id="projectSelector" class="switch-select">
      <option value="models" selected>Optimal Computation Models</option>
      <option value="systems">Optimal Computational Systems</option>
    </select>
  </h2>

  <div class="project-grid show" id="models">
    <article class="news-card long">
      <h3>🚗 Multi-agent Optimization</h3>
      <p>Developing scalable algorithms for multi-agent systems with adaptive control.</p>
      <a class="read-more" href="#">Read more →</a>
    </article>

    <article class="news-card long">
      <h3>🛰️ Learning-based Routing</h3>
      <p>Combining graph learning and dynamic optimization for network flow problems.</p>
      <a class="read-more" href="#">Read more →</a>
    </article>

    <article class="news-card long">
      <h3>🚦 Distributed Control Systems</h3>
      <p>Decentralized optimization for real-time system coordination.</p>
      <a class="read-more" href="#">Read more →</a>
    </article>
  </div>

  <div class="project-grid" id="systems">
    <article class="news-card long">
      <h3>🧬 Health System Simulation</h3>
      <p>Data-driven modeling for healthcare system optimization and resilience.</p>
      <a class="read-more" href="#">Read more →</a>
    </article>

    <article class="news-card long">
      <h3>⚖️ Resource Allocation Algorithms</h3>
      <p>Adaptive resource allocation across distributed computational environments.</p>
      <a class="read-more" href="#">Read more →</a>
    </article>

    <article class="news-card long">
      <h3>📊 Policy Optimization Frameworks</h3>
      <p>Developing computational tools for data-informed policy decision-making.</p>
      <a class="read-more" href="#">Read more →</a>
    </article>
  </div>
</div>

<script>
  const selector = document.getElementById('projectSelector');
  const grids = {
    models: document.getElementById('models'),
    systems: document.getElementById('systems')
  };

  selector.addEventListener('change', (e) => {
    const selected = e.target.value;

    Object.values(grids).forEach(g => g.classList.remove('show'));
    grids[selected].classList.add('show');
  });
</script>
