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

<!-- ===== 1D 可视化：左信息窗 + 右侧“单条横轴”轮播（共4条） ===== -->
<section class="viz1d">
  <div class="viz1d-shell">
    <!-- 左：信息窗（默认显示 PI） -->
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

    <!-- 右：横轴轮播（一次只显示一条），支持左右切换/触摸 -->
    <div class="axes-1d-carousel" id="axesCarousel">
      <button class="axes-nav prev" aria-label="Previous">‹</button>
      <div class="axes-viewport">
        <div class="axes-track" id="axesTrack">
          <!-- Slide 1: Efficiency ↔ Robustness -->
          <div class="axis-slide">
            <div class="axis-row" data-axis="a1">
              <span class="axis-label axis-label--left">Efficiency</span>
              <div class="axis-track">
                {% for m in site.data.group.current %}
                  <div class="axis-thumb"
                       data-pos="{{ m.a1 | default: 50 }}"
                       data-years="{{ m.years | default: 1 }}"
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
          </div>

          <!-- Slide 2: Fundamental Models ↔ Optimal Systems -->
          <div class="axis-slide">
            <div class="axis-row" data-axis="a2">
              <span class="axis-label axis-label--left">Fundamental Models</span>
              <div class="axis-track">
                {% for m in site.data.group.current %}
                  <div class="axis-thumb"
                       data-pos="{{ m.a2 | default: 50 }}"
                       data-years="{{ m.years | default: 1 }}"
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
              <span class="axis-label axis-label--right">Optimal Systems</span>
            </div>
          </div>

          <!-- Slide 3: Exploration ↔ Exploitation -->
          <div class="axis-slide">
            <div class="axis-row" data-axis="a3">
              <span class="axis-label axis-label--left">Exploration</span>
              <div class="axis-track">
                {% for m in site.data.group.current %}
                  <div class="axis-thumb"
                       data-pos="{{ m.a3 | default: 50 }}"
                       data-years="{{ m.years | default: 1 }}"
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
              <span class="axis-label axis-label--right">Exploitation</span>
            </div>
          </div>

          <!-- Slide 4: Transportation ↔ Public Health -->
          <div class="axis-slide">
            <div class="axis-row" data-axis="a4">
              <span class="axis-label axis-label--left">Transportation</span>
              <div class="axis-track">
                {% for m in site.data.group.current %}
                  <div class="axis-thumb"
                       data-pos="{{ m.a4 | default: 50 }}"
                       data-years="{{ m.years | default: 1 }}"
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
              <span class="axis-label axis-label--right">Public Health</span>
            </div>
          </div>
        </div>
      </div>
      <button class="axes-nav next" aria-label="Next">›</button>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', () => {
  // ===== 信息窗（容错） =====
  const panel = document.getElementById('infoPanel1D');
  const hasPanel = !!panel;
  const defaultHTML = hasPanel ? panel.innerHTML : '';
  let locked = false;

  function render(el){
    if (!hasPanel) return;
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

  // ===== 布局：按 data-pos 横坐标、按 data-years 分车道（1->lane0, 2->lane1, ...） =====
  function layoutTracks(){
    document.querySelectorAll('.viz1d .axis-row').forEach(row=>{
      const track = row.querySelector('.axis-track');
      const thumbs = Array.from(track.querySelectorAll('.axis-thumb'));

      const padX = 24; const padY = 10;
      const W = track.clientWidth || track.getBoundingClientRect().width || 600;
      const H = track.clientHeight || 120;
      const innerW = Math.max(10, W - padX*2);
      const innerH = Math.max(10, H - padY*2);

      // 以“入学年数”为纵向层级。默认最多 6 层（1~6 年）
      const lanes = 6;
      const bandH = innerH / lanes;

      // 将成员按 years 放入 0..lanes-1 的车道
      const laneBuckets = Array.from({length: lanes}, ()=>[]);
      thumbs.forEach(t=>{
        const pos = Math.max(0, Math.min(100, parseFloat(t.dataset.pos||50)));
        const years = parseInt(t.dataset.years || 1, 10);
        let lane = (isNaN(years) ? 1 : years) - 1;  // 1年级->0车道
        lane = Math.max(0, Math.min(lanes-1, lane));
        const x = padX + innerW * (pos/100);
        laneBuckets[lane].push({el:t, x});
      });

      // 局部避碰
      const rMin = 16, rMax = 24, gap = 8;
      laneBuckets.forEach((bucket, laneIdx)=>{
        bucket.sort((a,b)=>a.x-b.x);
        const n = bucket.length || 1;
        const r = Math.max(rMin, Math.min(rMax, 0.45 * innerW / n));
        const dMin = 2*r + gap;
        const step = Math.min(r*0.85, (bandH/2 - r)/3);
        const cy = padY + bandH*(laneIdx + 0.5);
        const laneTop = cy - bandH/2 + r;
        const laneBot = cy + bandH/2 - r;

        const placed = [];
        bucket.forEach(item=>{
          let y = cy; let tries = 0, dir = 1;
          const near = (p) => (item.x - p.x) < dMin*1.2;
          while (placed.filter(near).some(p => Math.hypot(item.x - p.x, y - p.y) < dMin)) {
            y = cy + dir * step * (1 + Math.floor(tries/2));
            y = Math.min(laneBot, Math.max(laneTop, y));
            dir *= -1; tries++; if (tries > 30) break;
          }
          placed.push({x:item.x, y});
          const s = `${2*r}px`;
          item.el.style.width = s;
          item.el.style.height = s;
          item.el.style.left = `${item.x}px`;
          item.el.style.top  = `${y}px`;
        });
      });
    });
  }

  // ===== 交互：hover 临时、click 锁定 =====
  const thumbsAll = Array.from(document.querySelectorAll('.viz1d .axis-thumb'));
  thumbsAll.forEach(t=>{
    t.addEventListener('mouseenter', ()=>{ if(!locked) render(t); });
    t.addEventListener('mouseleave', ()=>{ if(!locked && panel) panel.innerHTML = defaultHTML; });
    t.addEventListener('click', (e)=>{
      e.stopPropagation();
      const on = t.classList.contains('selected');
      thumbsAll.forEach(x=>x.classList.remove('selected'));
      if (on){ locked=false; if (panel) panel.innerHTML = defaultHTML; }
      else    { locked=true;  t.classList.add('selected'); render(t); }
    }, { passive: true });
  });
  document.addEventListener('click', (e)=>{
    if(!e.target.closest('.viz1d .axis-thumb') && !e.target.closest('#infoPanel1D')){
      locked=false; thumbsAll.forEach(x=>x.classList.remove('selected'));
      if (panel) panel.innerHTML = defaultHTML;
    }
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key==='Escape'){
      locked=false; thumbsAll.forEach(x=>x.classList.remove('selected'));
      if (panel) panel.innerHTML = defaultHTML;
    }
  });

  // ===== 轮播：一次一条横轴（按钮 + 触摸滑动） =====
  const trackEl = document.getElementById('axesTrack');
  const slides = Array.from(trackEl.querySelectorAll('.axis-slide'));
  const prevBtn = document.querySelector('.axes-nav.prev');
  const nextBtn = document.querySelector('.axes-nav.next');
  let idx = 0;

  function updateCarousel(){
    trackEl.style.transform = `translateX(-${idx * 100}%)`;
    // 每次切换后重新布局当前 slide（以及相邻的那一页，避免闪烁）
    requestAnimationFrame(layoutTracks);
  }

  prevBtn.addEventListener('click', ()=>{ idx = (idx - 1 + slides.length) % slides.length; updateCarousel(); });
  nextBtn.addEventListener('click', ()=>{ idx = (idx + 1) % slides.length; updateCarousel(); });

  // 触摸滑动
  let startX = 0, swiping = false;
  trackEl.addEventListener('touchstart', (e)=>{
    if (!e.touches || !e.touches[0]) return;
    startX = e.touches[0].clientX; swiping = true;
  }, { passive: true });
  trackEl.addEventListener('touchmove', (e)=>{}, { passive: true });
  trackEl.addEventListener('touchend', (e)=>{
    if(!swiping) return;
    const endX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : startX;
    const dx = endX - startX;
    const TH = 40; // 滑动阈值
    if (dx > TH) prevBtn.click();
    else if (dx < -TH) nextBtn.click();
    swiping = false;
  });

  // 首次布局 + resize 重排
  requestAnimationFrame(layoutTracks);
  window.addEventListener('resize', layoutTracks);
});
</script>


<!-- ========== PI 简要（保留信息窗，不再显示“平行四边形象限”） ========== -->
<section class="pi-section">
  <h2 class="section-title">Current Members</h2>
  {% assign pi = site.data.group.pi | first %}
  <div class="pi-single">
    <aside class="info-panel">
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
  </div>
</section>

<hr>

<!-- ========== Alumni（保留） ========== -->
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

<!-- ========== Life（保留） ========== -->
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
  /* ---------- Life 相册：左右切换 ---------- */
  const track = document.getElementById('lifeTrack');
  if (track){
    const slides = Array.from(track.children);
    let idx = 0;
    function update() { track.style.transform = `translateX(-${idx * 100}%)`; }
    const prev = document.querySelector('.life-prev');
    const next = document.querySelector('.life-next');
    prev && prev.addEventListener('click', () => { idx = (idx - 1 + slides.length) % slides.length; update(); });
    next && next.addEventListener('click', () => { idx = (idx + 1) % slides.length; update(); });
  }
});
</script>
