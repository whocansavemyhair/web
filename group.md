---
layout: single
permalink: /group/
author_profile: false
classes: wide
sidebar: false
title: "Our Group"
---

<!-- 明确引入这页的样式，保证一定加载 -->
<link rel="stylesheet" href="{{ '/assets/css/group.css' | relative_url }}">

<div class="page-group">
  <!-- === 讨论用可视化 · 左信息窗 + 右侧四条一维坐标 === -->
  <section class="viz1d">
    <div class="viz1d-shell">
      <!-- 左：信息窗（独立于下面那块，以免互相影响） -->
      {% assign pi = site.data.group.pi | first %}
      <aside class="info-panel info-panel--small" id="infoPanel1D">
        <div class="panel-inner">
          <img src="{{ pi.photolink | relative_url }}" alt="{{ pi.name }}">
          <div class="panel-text">
            <h3>{{ pi.name }}</h3>
            <p class="degree">{{ pi.title }}</p>
            {% if pi.affiliation %}<p class="affiliation">{{ pi.affiliation | markdownify }}</p>{% endif %}
            <div class="links">
              {% if pi.pagelink %}<a href="{{ pi.pagelink }}" target="_blank">Google Scholar</a>{% endif %}
              {% if pi.github %}{% if pi.pagelink %} | {% endif %}<a href="{{ pi.github }}" target="_blank">GitHub</a>{% endif %}
              {% if pi.email %}{% if pi.pagelink or pi.github %} | {% endif %}<a href="mailto:{{ pi.email }}">Email</a>{% endif %}
            </div>
          </div>
        </div>
      </aside>

      <!-- 右：四条横向坐标轴 -->
      <div class="axes-1d">
        <!-- 1) Efficiency  ↔  Robustness -->
        <div class="axis-row">
          <span class="axis-label axis-label--left">Efficiency</span>
          <div class="axis-track">
            {% for m in site.data.group.current %}
              <div class="axis-thumb"
                  style="--pos: {{ m.a1 | default: 50 }}%;"
                  data-name="{{ m.name | escape }}"
                  data-title="{{ m.title | escape }}"
                  data-affiliation="{{ m.affiliation | strip_newlines | escape }}"
                  data-desc="{{ m.desc | strip_newlines | escape }}"
                  data-page="{{ m.pagelink }}" data-github="{{ m.github }}" data-email="{{ m.email }}"
                  data-photo="{{ m.photolink | relative_url }}">
                <img src="{{ m.photolink | relative_url }}" alt="{{ m.name }}">
              </div>
            {% endfor %}
          </div>
          <span class="axis-label axis-label--right">Robustness</span>
        </div>

        <!-- 2) Foundational Models  ↔  Optimal Systems -->
        <div class="axis-row">
          <span class="axis-label axis-label--left">Fundamental Models</span>
          <div class="axis-track">
            {% for m in site.data.group.current %}
              <div class="axis-thumb" style="--pos: {{ m.a2 | default: 50 }}%;"
                  data-name="{{ m.name | escape }}" data-title="{{ m.title | escape }}"
                  data-affiliation="{{ m.affiliation | strip_newlines | escape }}"
                  data-desc="{{ m.desc | strip_newlines | escape }}"
                  data-page="{{ m.pagelink }}" data-github="{{ m.github }}" data-email="{{ m.email }}"
                  data-photo="{{ m.photolink | relative_url }}">
                <img src="{{ m.photolink | relative_url }}" alt="{{ m.name }}">
              </div>
            {% endfor %}
          </div>
          <span class="axis-label axis-label--right">Optimal Systems</span>
        </div>

        <!-- 3) Exploration  ↔  Exploitation -->
        <div class="axis-row">
          <span class="axis-label axis-label--left">Exploration</span>
          <div class="axis-track">
            {% for m in site.data.group.current %}
              <div class="axis-thumb" style="--pos: {{ m.a3 | default: 50 }}%;"
                  data-name="{{ m.name | escape }}" data-title="{{ m.title | escape }}"
                  data-affiliation="{{ m.affiliation | strip_newlines | escape }}"
                  data-desc="{{ m.desc | strip_newlines | escape }}"
                  data-page="{{ m.pagelink }}" data-github="{{ m.github }}" data-email="{{ m.email }}"
                  data-photo="{{ m.photolink | relative_url }}">
                <img src="{{ m.photolink | relative_url }}" alt="{{ m.name }}">
              </div>
            {% endfor %}
          </div>
          <span class="axis-label axis-label--right">Exploitation</span>
        </div>

        <!-- 4) Transportation  ↔  Public Health -->
        <div class="axis-row">
          <span class="axis-label axis-label--left">Transportation</span>
          <div class="axis-track">
            {% for m in site.data.group.current %}
              <div class="axis-thumb" style="--pos: {{ m.a4 | default: 50 }}%;"
                  data-name="{{ m.name | escape }}" data-title="{{ m.title | escape }}"
                  data-affiliation="{{ m.affiliation | strip_newlines | escape }}"
                  data-desc="{{ m.desc | strip_newlines | escape }}"
                  data-page="{{ m.pagelink }}" data-github="{{ m.github }}" data-email="{{ m.email }}"
                  data-photo="{{ m.photolink | relative_url }}">
                <img src="{{ m.photolink | relative_url }}" alt="{{ m.name }}">
              </div>
            {% endfor %}
          </div>
          <span class="axis-label axis-label--right">Public Health</span>
        </div>
      </div>
    </div>
  </section>

<!-- 绑定 1D 轴的 hover/click 到左侧信息窗（与原有平行四边形互不干扰） -->
<script>
document.addEventListener('DOMContentLoaded', () => {
  const panel = document.getElementById('infoPanel1D');
  if (!panel) return;
  const defaultHTML = panel.innerHTML;
  let locked = false;

  function render(el){
    const d = el.dataset;
    panel.innerHTML = `
      <div class="panel-inner">
        <img src="${d.photo||''}" alt="${d.name||''}">
        <div class="panel-text">
          <h3>${d.name||''}</h3>
          ${d.title?`<p class="degree">${d.title}</p>`:''}
          ${d.affiliation?`<p class="affiliation">${d.affiliation}</p>`:''}
          ${d.desc?`<p class="desc">${d.desc}</p>`:''}
          <div class="links">
            ${d.page?`<a href="${d.page}" target="_blank">Personal Page</a>`:''}
            ${d.github?`${d.page?' | ':''}<a href="${d.github}" target="_blank">GitHub</a>`:''}
            ${d.email?`${(d.page||d.github)?' | ':''}<a href="mailto:${d.email}">Email</a>`:''}
          </div>
        </div>
      </div>`;
  }

  const thumbs = Array.from(document.querySelectorAll('.viz1d .axis-thumb'));
  thumbs.forEach(t=>{
    t.addEventListener('mouseenter', ()=>{ if(!locked) render(t); });
    t.addEventListener('mouseleave', ()=>{ if(!locked) panel.innerHTML = defaultHTML; });
    t.addEventListener('click', (e)=>{
      e.stopPropagation();
      const on = t.classList.contains('selected');
      thumbs.forEach(x=>x.classList.remove('selected'));
      if (on){ locked=false; panel.innerHTML = defaultHTML; }
      else    { locked=true; t.classList.add('selected'); render(t); }
    });
  });
  document.addEventListener('click', (e)=>{
    if(!e.target.closest('.viz1d .axis-thumb') && !e.target.closest('#infoPanel1D')){
      locked=false; thumbs.forEach(x=>x.classList.remove('selected')); panel.innerHTML = defaultHTML;
    }
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key==='Escape'){ locked=false; thumbs.forEach(x=>x.classList.remove('selected')); panel.innerHTML = defaultHTML; }
  });
});
</script>

  <!-- ========== Principal Investigator（左侧信息窗默认展示） ========== -->
  <section class="pi-section">
    <h2 class="section-title">Current Members</h2>

    <div class="pi-container">
      {% assign pi = site.data.group.pi | first %}
      <aside class="info-panel" id="infoPanel">
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

      <!-- ========== Research Landscape（右侧平行四边形象限） ========== -->
      <div class="axis-grid">
        <div class="axis-top">Theory</div>
        <div class="axis-left">Fundamental Models</div>

        <div class="axis-center">
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
                  
                </div>
              {% endfor %}
            </div>
          </div>
        </div>

        <div class="axis-right">Optimal Systems</div>
        <div class="axis-bottom">Application</div>
      </div>
    </div>
  </section>

  <hr>

  <!-- ========== Alumni（按你给的卡片表格样式） ========== -->
  <section class="alumni-section">
    <h2 class="section-title">Alumni</h2>

    <div class="group-grid">
      {% for a in site.data.group.alumni %}
      <div class="member-card alumni">
        <img src="{{ a.photolink | relative_url }}" alt="{{ a.name }}" class="member-photo">
        <h3>{{ a.name }}</h3>
        <p class="degree">Alumni</p>
        {% if a.desc %}<p class="desc">{{ a.desc }}</p>{% endif %}
        <div class="links">
          {% if a.pagelink %}<a href="{{ a.pagelink }}" target="_blank">Page</a>{% endif %}
          {% if a.github %}{% if a.pagelink %} | {% endif %}<a href="{{ a.github }}" target="_blank">GitHub</a>{% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </section>

  <hr>

  <!-- ========== Life（左右切换相册，路径固定为 assets/images/life） ========== -->
  <section class="life-section">
    <h2 class="section-title">Life</h2>

    <div class="life-slider" id="lifeSlider">
      <button class="life-nav life-prev" aria-label="Previous">‹</button>
      <div class="life-viewport">
        <div class="life-track" id="lifeTrack">
          {% for p in site.data.group.life %}
            {% assign filename = p.src | default: p.file %}
            <figure class="life-slide">
              <img src="{{ '/assets/images/life/' | append: filename | relative_url }}" alt="{{ p.alt | default: 'Life' }}">
              {% if p.caption %}<figcaption>{{ p.caption }}</figcaption>{% endif %}
            </figure>
          {% endfor %}
        </div>
      </div>
      <button class="life-nav life-next" aria-label="Next">›</button>
    </div>
  </section>

</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  /* ---------- 信息窗交互：hover 临时、click 锁定、点空白/ESC 解锁 ---------- */
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

  /* ---------- Life 相册：左右切换 ---------- */
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
