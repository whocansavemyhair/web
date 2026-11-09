---
layout: single
permalink: /
author_profile: false
sidebar: false
classes: wide
---

<div class = "hero-wrapper">
  <section class="hero-section">
    <div class="hero-inner">
      <div class="hero-text">
        <h1>Welcome</h1>
        <p>
          At the Yang Research Group at Johns Hopkins University, we build AI copilots that help people make complex decisions. We combine scientific theory, domain knowledge, and physical constraints to help these systems reason through engineering problems, run simulations, and use tools. We study how copilots can learn from people’s choices and feedback, adapt to their goals and values, and help them judge when to trust a recommendation. We also design adaptive mixture-of-experts systems that match computing effort to the task to reduce response times, energy use, and deployment costs. Transportation and public health are our main application areas, where we test how these copilots can strengthen human judgment in practice.
        </p>
      </div>
      <div class="hero-image">
        <img src="{{ '/assets/images/home/main/lab1.png' | relative_url }}" alt="Yang Lab photo">
      </div>
    </div>
  </section>
</div>

<div class="home-body-wrapper">
<div class="home-grid">

<section>
  <h2>News</h2>

  <section class="news-section">
    <div class="news-grid">
      {% assign news_items = site.data.news | sort: "date" | reverse %}
      {% for item in news_items %}
      <article class="news-card">
        <div class="news-content">
          <div class="news-date"><time datetime="{{ item.date }}">{{ item.date | date: "%b %-d, %Y" }}</time></div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
          <a class="read-more" href="{{ item.url }}">Read more →</a>
        </div>
        <div class="news-thumb">
          <img src="{{ item.image | relative_url }}" alt="{{ item.image_alt }}">
        </div>
      </article>
      {% endfor %}
    </div>
  </section>
</section>

  <aside class="home-contact-panel">
    <section class="contact-block">
      <div class="contact-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img">
          <path d="M21 3 3 10.7l7.4 2.9L13.3 21 21 3Z"></path>
          <path d="m10.4 13.6 4.4-4.4"></path>
        </svg>
      </div>
      <div class="contact-copy">
        <h2>Contact</h2>
        <p>
          <strong>Prof. Hao Frank Yang</strong><br>
          Assistant Professor<br>
          Department of Civil and Systems Engineering<br>
          Whiting School of Engineering<br>
          Johns Hopkins University
        </p>
        {% include office-address.html %}
        <p class="contact-lines">
          <a href="mailto:haofrankyang@jhu.edu">haofrankyang@jhu.edu</a><br>
          <a href="https://scholar.google.com/citations?user=IA_dRMIAAAAJ&hl=en&oi=ao" target="_blank">Google Scholar</a><br>
          <a href="">LinkedIn</a>
        </p>
      </div>
    </section>
  </aside>

</div>
</div>
