---
layout: single
permalink: /group/
author_profile: false
classes: wide
sidebar: false
title: Group
---

<div class="landscape-shell">
  <!-- 信息窗：默认展示 PI 信息 -->
  <aside class="info-panel" id="infoPanel">
    {% assign pi = site.data.group.pi | first %}
    <div class="panel-inner">
      <img src="{{ pi.photolink | relative_url }}" alt="{{ pi.name }}">
      <div class="panel-text">
        <h3>{{ pi.name }}</h3>
        <p class="degree">{{ pi.title }}</p>
        {% if pi.affiliation %}
          <p class="affiliation">{{ pi.affiliation | markdownify }}</p>
        {% endif %}
        <div class="links">
          {% if pi.pagelink %}<a href="{{ pi.pagelink }}" target="_blank">Google Scholar</a>{% endif %}
          {% if pi.github %}{% if pi.pagelink %} | {% endif %}<a href="{{ pi.github }}" target="_blank">GitHub</a>{% endif %}
          {% if pi.email %}{% if pi.pagelink or pi.github %} | {% endif %}<a href="mailto:{{ pi.email }}">Email</a>{% endif %}
        </div>
      </div>
    </div>
  </aside>

  <!-- 右侧：带轴标签的交互象限 -->
  <div class="axis-grid">
    <div class="axis-top">Theory</div>
    <div class="axis-left">Fundamental Models</div>

    <div class="axis-center">
      <!-- 平行四边形象限容器 -->
      <div class="research-map">
        <div class="members-layer">
          {% for member in site.data.group.current %}
            <div
              class="member-dot"
              style="--x: {{ member.x }}%; --y: {{ member.y }}%;"
              data-name="{{ member.name | escape }}"
              data-title="{{ member.title | escape }}"
              data-affiliation="{{ member.affiliation | strip_newlines | escape }}"
              data-desc="{{ member.desc | strip_newlines | escape }}"
              data-page="{{ member.pagelink }}"
              data-github="{{ member.github }}"
              data-email="{{ member.email }}"
              data-photo="{{ member.photolink | relative_url }}"
            >
              <img src="{{ member.photolink | relative_url }}" alt="{{ member.name }}">
              <div class="tooltip">
                <h4>{{ member.name }}</h4>
                <p class="degree">{{ member.title }}</p>
                {% if member.desc %}<p class="desc">{{ member.desc }}</p>{% endif %}
                {% if member.pagelink %}
                  <a href="{{ member.pagelink }}" target="_blank">Personal Page →</a>
                {% endif %}
              </div>
            </div>
          {% endfor %}
        </div>
      </div>
    </div>

    <div class="axis-right">Optimal Systems</div>
    <div class="axis-bottom">Application</div>
  </div>
</div>

## Alumni
<table class="alumni-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Degree</th>
      <th>Years</th>
      <th>Next</th>
      <th>Links</th>
    </tr>
  </thead>
  <tbody>
    {% for a in site.data.group.alumni %}
    <tr>
      <td>{{ a.name }}</td>
      <td>{{ a.degree }}</td>
      <td>{{ a.years }}</td>
      <td>{{ a.next }}</td>
      <td>
        {% if a.pagelink %}<a href="{{ a.pagelink }}" target="_blank">Page</a>{% endif %}
        {% if a.github %}{% if a.pagelink %} | {% endif %}<a href="{{ a.github }}" target="_blank">GitHub</a>{% endif %}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>

## Life
<div class="life-slider" id="lifeSlider">
  <button class="life-nav life-prev" aria-label="Previous">‹</button>
  <div class="life-viewport">
    <div class="life-track" id="lifeTrack">
      {% for p in site.data.group.life %}
        {% comment %}
          p 可以是 {src: xx.jpg, caption: ...} 或 {file: xx.jpg, caption: ...}
          若不是完整路径，则自动加 /assets/images/life/
        {% endcomment %}
        {% assign raw = p.src | default: p.file %}
        {% if raw contains 'http' %}
          {% assign final_src = raw %}
        {% elsif raw contains '/assets/' %}
          {% assign final_src = raw | relative_url %}
        {% else %}
          {% assign final_src = '/assets/images/life/' | append: raw | relative_url %}
        {% endif %}
        <figure class="life-slide">
          <img src="{{ final_src }}" alt="{{ p.alt | default: 'Life' }}">
          {% if p.caption %}<figcaption>{{ p.caption }}</figcaption>{% endif %}
        </figure>
      {% endfor %}
    </div>
  </div>
  <button class="life-nav life-next" aria-label="Next">›</button>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  /* 信息窗交互：hover 临时、click 锁定、点空白或 Esc 解除 */
  const panel = document.getElementById('infoPanel');
  const defaultHTML = panel.innerHTML;
  let locked = false;

  const dots = Array.from(document.querySelectorAll('.member-dot'));

  function renderFrom(el) {
    const d = el.dataset;
    panel.innerHTML = `
      <div class="panel-inner">
        <img src="${d.photo || ''}" alt="${d.name || ''}">
        <div class="panel-text">
          <h3>${d.name || ''}</h3>
          ${d.title ? `<p class="degree">${d.title}</p>` : ''}
          ${d.affiliation ? `<p class="affiliation">${d.affiliation}</p>` : ''}
          ${d.desc ? `<p class="desc">${d.desc}</p>` : ''}
          <div class="links">
            ${d.page ? `<a href="${d.page}" target="_blank">Personal Page</a>` : ''}
            ${d.github ? `${d.page ? ' | ' : ''}<a href="${d.github}" target="_blank">GitHub</a>` : ''}
            ${d.email ? `${(d.page || d.github) ? ' | ' : ''}<a href="mailto:${d.email}">Email</a>` : ''}
          </div>
        </div>
      </div>`;
  }

  dots.forEach(dot => {
    dot.addEventListener('mouseenter', () => { if (!locked) renderFrom(dot); });
    dot.addEventListener('mouseleave', () => { if (!locked) panel.innerHTML = defaultHTML; });
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const isSelected = dot.classList.contains('selected');
      dots.forEach(d => d.classList.remove('selected'));
      if (isSelected) {
        locked = false;
        panel.innerHTML = defaultHTML;
      } else {
        locked = true;
        dot.classList.add('selected');
        renderFrom(dot);
      }
    }, { passive: true });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.member-dot') && !e.target.closest('#infoPanel')) {
      locked = false;
      dots.forEach(d => d.classList.remove('selected'));
      panel.innerHTML = defaultHTML;
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      locked = false;
      dots.forEach(d => d.classList.remove('selected'));
      panel.innerHTML = defaultHTML;
    }
  });

  /* Life 相册：左右切换 */
  const track = document.getElementById('lifeTrack');
  const slides = Array.from(track.children);
  let idx = 0;
  function update() { track.style.transform = `translateX(-${idx * 100}%)`; }
  document.querySelector('.life-prev').addEventListener('click', () => {
    idx = (idx - 1 + slides.length) % slides.length; update();
  });
  document.querySelector('.life-next').addEventListener('click', () => {
    idx = (idx + 1) % slides.length; update();
  });
});
</script>
