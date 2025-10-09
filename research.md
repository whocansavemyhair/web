---
layout: single
permalink: /research/
title: "Research"
author_profile: false
sidebar: false
classes: wide
---

<!-- ========== 方向一：左文字右图 ========== -->
<div class="research-wrapper">
  <section class="research-section">
    <div class="research-text">
      <h2>Computational Transportation Systems</h2>
      <p>
        We study how computation and optimization can enhance <strong>transportation networks</strong> through data-driven modeling, system-level simulation, and control theory.
      </p>
      <ul>
        <li>Urban mobility modeling and prediction</li>
        <li>Multi-agent traffic simulation</li>
        <li>Autonomous system optimization</li>
      </ul>
    </div>
    <div class="research-image">
      <img src="{{ '/assets/images/transportation.jpg' | relative_url }}" alt="Transportation Systems">
    </div>
  </section>
</div>

<!-- ========== 方向二：左图右文字 ========== -->
<div class="research-wrapper alt">
  <section class="research-section">
    <div class="research-image">
      <img src="{{ '/assets/images/health.jpg' | relative_url }}" alt="Health Systems">
    </div>
    <div class="research-text">
      <h2>Computational Public Health</h2>
      <p>
        We integrate computation and data science into <strong>public health systems</strong> to improve policy design, resource allocation, and health equity.
      </p>
      <ul>
        <li>Epidemic modeling and intervention optimization</li>
        <li>Healthcare system resilience</li>
        <li>AI-assisted health resource planning</li>
      </ul>
    </div>
  </section>
</div>

---

<!-- ========== Project Section ========== -->
<section class="projects-section">
  <div class="projects-header">
    <h2>Selected Projects</h2>
    <div class="project-buttons">
      <button class="project-btn active" data-target="trans">Transportation</button>
      <button class="project-btn" data-target="health">Public Health</button>
    </div>
  </div>

  <div class="project-list trans active">
    <ul>
      <li><strong>Autonomous Mobility Simulation</strong> — Simulation framework for multi-agent decision making.</li>
      <li><strong>Urban Demand Optimization</strong> — Dynamic pricing and routing for shared transport.</li>
      <li><strong>Adaptive Traffic Control</strong> — AI-based control for city-wide signal coordination.</li>
    </ul>
  </div>

  <div class="project-list health">
    <ul>
      <li><strong>Pandemic Resource Planning</strong> — Optimal allocation of hospital resources under constraints.</li>
      <li><strong>Health Equity Modeling</strong> — Quantifying and improving fairness in medical access.</li>
      <li><strong>Data-driven Intervention Design</strong> — Predictive modeling for epidemic control strategies.</li>
    </ul>
  </div>
</section>

<script>
  // 按钮切换项目展示
  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.project-btn');
    const lists = document.querySelectorAll('.project-list');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        lists.forEach(l => l.classList.remove('active'));
        btn.classList.add('active');
        document.querySelector('.project-list.' + btn.dataset.target).classList.add('active');
      });
    });
  });
</script>
