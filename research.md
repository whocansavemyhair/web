---
layout: single
permalink: /research/
author_profile: false
sidebar: false
classes: wide
---

<!-- ========== 研究方向 1：左文右图 ========== -->
<div class="research-wrapper">
  <section class="research-section">
    <div class="research-text">
      <h2>Computational Transportation Systems</h2>
      <p>
        We study how computation and optimization can enhance
        <strong>transportation networks</strong> through data-driven modeling,
        system-level simulation, and control theory.
      </p>
      <ul>
        <li>Urban mobility modeling and prediction</li>
        <li>Multi-agent traffic simulation</li>
        <li>Autonomous system optimization</li>
      </ul>
    </div>

    <div class="research-image">
      <img src="{{ '/assets/images/lab1.png' | relative_url }}" alt="Transportation Systems">
    </div>
  </section>
</div>

<!-- ========== 研究方向 2：左图右文 ========== -->
<div class="research-wrapper alt">
  <section class="research-section">
    <div class="research-image">
      <img src="{{ '/assets/images/lab1.png' | relative_url }}" alt="Public Health Systems">
    </div>

    <div class="research-text">
      <h2>Computational Public Health</h2>
      <p>
        We integrate computation and data science into
        <strong>public health systems</strong> to improve policy design,
        resource allocation, and health equity.
      </p>
      <ul>
        <li>Epidemic modeling and intervention optimization</li>
        <li>Healthcare system resilience</li>
        <li>AI-assisted health resource planning</li>
      </ul>
    </div>
  </section>
</div>

<!-- ========== 可切换的 Project 区域 ========== -->
<div class="projects-section">
  <h2>Selected Projects</h2>

  <div class="project-buttons">
    <button class="project-btn active" data-target="transportation">Transportation</button>
    <button class="project-btn" data-target="health">Public Health</button>
  </div>

  <!-- Transportation 项目列表 -->
  <div class="project-grid show" id="transportation">
    <article class="news-card long">
      <h3>🚗 Autonomous Mobility Simulation</h3>
      <p>Simulation framework for multi-agent decision making in complex urban environments.</p>
      <a class="read-more" href="#">Read more →</a>
    </article>

    <article class="news-card long">
      <h3>🛰️ Urban Demand Optimization</h3>
      <p>Dynamic pricing and routing for shared mobility systems using adaptive learning.</p>
      <a class="read-more" href="#">Read more →</a>
    </article>

    <article class="news-card long">
      <h3>🚦 Adaptive Traffic Control</h3>
      <p>AI-driven traffic signal coordination for city-wide congestion reduction.</p>
      <a class="read-more" href="#">Read more →</a>
    </article>
  </div>

  <!-- Public Health 项目列表 -->
  <div class="project-grid" id="health">
    <article class="news-card long">
      <h3>🧬 Pandemic Resource Planning</h3>
      <p>Optimization of hospital resource allocation and epidemic response policies.</p>
      <a class="read-more" href="#">Read more →</a>
    </article>

    <article class="news-card long">
      <h3>⚖️ Health Equity Modeling</h3>
      <p>Quantifying and improving fairness in healthcare accessibility and policy design.</p>
      <a class="read-more" href="#">Read more →</a>
    </article>

    <article class="news-card long">
      <h3>📊 Data-driven Intervention Design</h3>
      <p>Predictive modeling for epidemic control strategies using real-time data streams.</p>
      <a class="read-more" href="#">Read more →</a>
    </article>
  </div>
</div>

<script>
  // 简单按钮切换逻辑
  document.querySelectorAll('.project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.project-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.project-grid').forEach(g => g.classList.remove('show'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.target).classList.add('show');
    });
  });
</script>
