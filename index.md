---
layout: single
permalink: /
author_profile: false
sidebar: false
classes: wide
---

<!-- Page-local styles: 仅影响此页，保证两列一定生效 -->
<style>
  /* 顶部横幅样式 */
  .home-banner{
    text-align:center; background-color:#0a5771; color:#fff;
    padding:40px; border-radius:8px; margin-bottom:30px;
  }
  /* 两列布局（左：Welcome/News；右：Contact/Links） */
  .home-grid{
    display:grid; grid-template-columns: 2fr 1fr; gap:40px; align-items:start;
  }
  @media (max-width: 900px){
    .home-grid{ grid-template-columns: 1fr; } /* 小屏改为单列 */
  }
</style>

<section class="hero-section">
  <div class="hero-text">
    <h1>Yang Lab</h1>
    <p>
      The Yang Research Group at Johns Hopkins University focuses on
      <strong>computational systems and models</strong> in transportation,
      public health, and optimization. Our research integrates data-driven
      modeling with computational theory to advance intelligent system design.
    </p>
  </div>

  <div class="hero-image">
    <img src="/assets/images/lab1.jpg" alt="Yang Lab photo">
  </div>
</section>

<div class="home-grid">

  <section>
    <h2>Welcome to Yang Lab</h2>
    <p>
      We are a research group lead by  at Johns Hopkins University, Whiting School of Engineering.
      Our work focuses on <strong>computation systems and models</strong> in the areas of transportation and public health, including topics such as optimal computation model and optimal computation systems.
      Please visit our <a href="{{ '/research/' | relative_url }}">Research</a> and
      <a href="{{ '/publications/' | relative_url }}">Publications</a> pages for more details.
    </p>

    News

    <section class="news-section">
      <div class="news-grid">

        <!-- 短卡片：标题 + 摘要 -->
        <article class="news-card short">
          <h3>🎉 Paper accepted to NeurIPS 2025</h3>
          <p>Our paper on XYZ was accepted to NeurIPS 2025.</p>
        </article>

        <!-- 短卡片：标题 + 摘要 -->
        <article class="news-card short">
          <h3>👩‍🎓 Welcome new students</h3>
          <p>We welcome new graduate students joining the lab in summer 2025.</p>
        </article>

        <!-- 长卡片：标题 + 摘要 + Read more（占两列） -->
        <article class="news-card long">
          <h3>🏆 Project awarded grant</h3>
          <p>Our project received the [Award Name] grant to further develop …</p>
          <a class="read-more" href="/web/news/2025-03-award/">Read more →</a>
        </article>

      </div>
    </section>
  </section>

  <aside>
    <h2>Contact</h2>
    <p>
      Johns Hopkins University<br>
      📧 <a href="mailto:haofrankyang@jhu.edu">haofrankyang@jhu.edu</a>
    </p>

    <h2>Links</h2>
    <ul>
      <li><a href="https://scholar.google.com/citations?user=IA_dRMIAAAAJ&hl=en&oi=ao" target="_blank">Google Scholar</a></li>
      <li><a href="https://github.com/" target="_blank">GitHub</a></li>
    </ul>
  </aside>

</div>
