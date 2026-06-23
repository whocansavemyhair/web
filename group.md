---
layout: single
permalink: /group/
author_profile: false
classes: wide
sidebar: false
---

<div class="page-group-cards">

{% assign pi = site.data.group.pi | first %}

<section class="group-cards-band group-cards-band--members">
  <div class="group-cards-section">
    <header class="group-cards-intro">
      <h2 class="section-title">Members</h2>
    </header>

    <article class="pi-listing">
      <img src="{{ pi.photolink | relative_url }}" alt="{{ pi.name }}" class="profile-photo">
      <div class="profile-copy">
        <h3>{{ pi.name }}</h3>
        <p class="profile-title">Principal Investigator</p>
        {% if pi.affiliation %}<div class="profile-affiliation">{{ pi.affiliation | markdownify }}</div>{% endif %}
        <div class="profile-links">
          {% if pi.pagelink %}<a href="{{ pi.pagelink }}" target="_blank" rel="noopener">Google Scholar</a>{% endif %}
          {% if pi.github %}<a href="{{ pi.github }}" target="_blank" rel="noopener">GitHub</a>{% endif %}
          {% if pi.email %}<a href="mailto:{{ pi.email }}">Email</a>{% endif %}
        </div>
      </div>
    </article>

    <h3 class="group-members-heading">Group Members</h3>

    <div class="member-card-grid">
      {% for m in site.data.group.current %}
      <article class="profile-card profile-card--member">
        <img src="{{ m.photolink | relative_url }}" alt="{{ m.name }}" class="profile-photo">
        <div class="profile-copy">
          <h3>{{ m.name }}</h3>
          {% if m.title %}<p class="profile-title">{{ m.title }}</p>{% endif %}
          {% if m.desc %}<p class="profile-desc">{{ m.desc }}</p>{% endif %}
          <div class="profile-links">
            {% if m.pagelink %}<a href="{{ m.pagelink }}" target="_blank" rel="noopener">Page</a>{% endif %}
            {% if m.github %}<a href="{{ m.github }}" target="_blank" rel="noopener">GitHub</a>{% endif %}
            {% if m.email %}<a href="mailto:{{ m.email }}">Email</a>{% endif %}
          </div>
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="group-cards-band group-cards-band--alumni alumni-section">
  <div class="group-cards-section">
    <h2 class="section-title">Alumni</h2>
    <div class="alumni-card-grid">
      {% for a in site.data.group.alumni %}
      <article class="profile-card profile-card--alumni">
        <img src="{{ a.photolink | relative_url }}" alt="{{ a.name }}" class="profile-photo">
        <div class="profile-copy">
          <h3>{{ a.name }}</h3>
          <p class="profile-title">Alumni</p>
          {% if a.desc %}<p class="profile-desc">{{ a.desc }}</p>{% endif %}
          <div class="profile-links">
            {% if a.pagelink %}<a href="{{ a.pagelink }}" target="_blank" rel="noopener">Page</a>{% endif %}
            {% if a.github %}<a href="{{ a.github }}" target="_blank" rel="noopener">GitHub</a>{% endif %}
          </div>
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section class="group-cards-band group-cards-band--life life-section">
  <div class="group-cards-section">
    <h2 class="section-title">Life</h2>
    <div class="life-slider" id="lifeSlider">
      <div class="life-viewport">
        <div class="life-track" id="lifeTrack">
          {% for p in site.data.group.life %}
            {% assign filename = p.src | default: p.file %}
            <figure class="life-slide">
              <img src="{{ '/assets/images/group/life/' | append: filename | relative_url }}" alt="{{ p.alt | default: 'Life' }}">
              {% if p.caption %}<figcaption>{{ p.caption }}</figcaption>{% endif %}
            </figure>
          {% endfor %}
        </div>
      </div>
      <button class="life-nav life-prev" aria-label="Previous">‹</button>
      <button class="life-nav life-next" aria-label="Next">›</button>
      <div class="life-dots" id="lifeDots"></div>
    </div>
  </div>
</section>

</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const lifeTrack = document.getElementById('lifeTrack');
  if (!lifeTrack) return;

  const slidesLife = Array.from(lifeTrack.children);
  const lifeDots = document.getElementById('lifeDots');
  let i = 0;

  function renderLifeDots(){
    if (!lifeDots) return;
    lifeDots.innerHTML = '';
    slidesLife.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'life-dot' + (index === i ? ' active' : '');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Show life photo ${index + 1}`);
      dot.addEventListener('click', () => { i = index; updateLife(); });
      lifeDots.appendChild(dot);
    });
  }

  function updateLife(){
    lifeTrack.style.transform = `translateX(-${i * 100}%)`;
    renderLifeDots();
  }

  const prev = document.querySelector('.life-prev');
  const next = document.querySelector('.life-next');
  prev && prev.addEventListener('click', () => { i = (i - 1 + slidesLife.length) % slidesLife.length; updateLife(); });
  next && next.addEventListener('click', () => { i = (i + 1) % slidesLife.length; updateLife(); });
  updateLife();
});
</script>
