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

<div class="home-banner">
  <h2>SELECTED PAPERS & PROJECT HIGHLIGHTS</h2>
  <p>Showcase representative projects, key research topics, or rotating banners here.</p>
</div>

<div class="home-grid">

  <section>
    <h2>Welcome to Yang Lab</h2>
    <p>
      We are a research group lead by  at Johns Hopkins University, Whiting School of Engineering.
      Our work focuses on <strong>computation systems and models</strong> in the areas of transportation and public health, including topics such as optimal computation model and optimal computation systems.
      Please visit our <a href="{{ '/research/' | relative_url }}">Research</a> and
      <a href="{{ '/publications/' | relative_url }}">Publications</a> pages for more details.
    </p>

    <h2>News</h2>
    <ul>
      <li>🎉 Sep 2025: Three papers were accepted to <em>NeurIPS 2025</em> with two spotlights.</li>
    </ul>
  </section>

  <aside>
    <h2>Contact</h2>
    <p>
      Department of Civil and System Engineering (CaSE)<br>
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
