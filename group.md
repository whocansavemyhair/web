---
layout: single
permalink: /group/
author_profile: false
classes: wide
sidebar: false
title: "Our Group"
---

<link rel="stylesheet" href="{{ '/assets/css/group.css' | relative_url }}">

<div class="page-group">

<!-- ===== 横向坐标轴（独立一行，一次只展示一条；上方为按“入学年数”的车道） ===== -->
<section class="viz1d">
  <div class="axes-1d-carousel" id="axesCarousel">
    <h2 class="section-title">Research Landscape — 1D Axes</h2>

    <div class="axes-viewport">
      <div class="axes-track" id="axesTrack">

        <!-- Slide 1 -->
        <div class="axis-slide">
          <div class="axis-row" data-axis="a1">
            <span class="axis-label axis-label--left">Efficiency</span>
            <div class="axis-track">
              <!-- JS 将在此插入 .lane-guides 和 .lane-labels -->
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

        <!-- Slide 2 -->
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

        <!-- Slide 3 -->
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

        <!-- Slide 4 -->
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

    <div class="axes-nav-wrap">
      <button class="axes-nav prev" aria-label="Previous">‹</button>
      <div class="axes-dots" id="axesDots"></div>
      <button class="axes-nav next" aria-label="Next">›</button>
    </div>
  </div>
</section>

<hr>

<!-- ===== PI 简要（独立） ===== -->
<section class="pi-section">
  <h2 class="section-title">Principal Investigator</h2>
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

<!-- ===== Alumni ===== -->
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

<!-- ===== Life ===== -->
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
  /* ===== 1D 轴布局：横向 data-pos，纵向按 data-years 分层 ===== */
  function layoutOneRow(row){
    const track = row.querySelector('.axis-track');
    const thumbs = Array.from(track.querySelectorAll('.axis-thumb'));

    // 清理旧的导引与标签
    track.querySelectorAll('.lane-guides, .lane-labels').forEach(n => n.remove());

    // 统计最大年级（入学年数）
    let maxYears = 1;
    thumbs.forEach(t => {
      const y = parseInt(t.dataset.years || 1, 10);
      if (!isNaN(y)) maxYears = Math.max(maxYears, y);
    });
    maxYears = Math.min(Math.max(maxYears, 1), 8); // 兜底 1..8

    const padX = 24, padY = 10;
    const W = track.clientWidth || track.getBoundingClientRect().width || 800;
    const H = track.clientHeight || 180;
    const innerW = Math.max(10, W - padX*2);
    const innerH = Math.max(10, H - padY*2);

    const lanes = maxYears;
    const bandH = innerH / lanes;

    // 车道导引（水平虚线）+ 年级标签（左侧竖排）
    const guides = document.createElement('div');
    guides.className = 'lane-guides';
    const labels = document.createElement('div');
    labels.className = 'lane-labels';

    for (let i=0; i<lanes; i++){
      const yCenter = padY + bandH*(i + 0.5);
      const g = document.createElement('div');
      g.className = 'lane-guide';
      g.style.top = `${yCenter}px`;
      guides.appendChild(g);

      const lab = document.createElement('div');
      lab.className = 'lane-label';
      lab.style.top = `${yCenter}px`;
      lab.textContent = (i+1);   // 1,2,3,... 表示入学年数
      labels.appendChild(lab);
    }
    track.appendChild(guides);
    track.appendChild(labels);

    // 放置头像：按 years -> lane，横向按 data-pos
    const laneBuckets = Array.from({length: lanes}, ()=>[]);
    thumbs.forEach(t=>{
      const pos = Math.max(0, Math.min(100, parseFloat(t.dataset.pos||50)));
      const years = Math.max(1, Math.min(lanes, parseInt(t.dataset.years||1, 10) || 1));
      const lane = years - 1;
      const x = padX + innerW * (pos/100);
      laneBuckets[lane].push({el:t, x});
    });

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
        while (placed.some(p => Math.hypot(item.x - p.x, y - p.y) < dMin)) {
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
  }

  function layoutAll(){
    document.querySelectorAll('.axis-row').forEach(layoutOneRow);
  }

  // hover 提示（可选）
  document.querySelectorAll('.axis-thumb').forEach(t=>{
    t.title = `${t.dataset.name || ''}${t.dataset.title ? ' — ' + t.dataset.title : ''}`;
  });

  // 轮播逻辑
  const trackEl = document.getElementById('axesTrack');
  const slides = Array.from(trackEl.querySelectorAll('.axis-slide'));
  const dotsWrap = document.getElementById('axesDots');
  let idx = 0;

  function renderDots(){
    dotsWrap.innerHTML = '';
    slides.forEach((_, i)=>{
      const d = document.createElement('button');
      d.className = 'dot' + (i===idx ? ' active' : '');
      d.addEventListener('click', ()=>{ idx=i; updateCarousel(); });
      dotsWrap.appendChild(d);
    });
  }

  function updateCarousel(){
    trackEl.style.transform = `translateX(-${idx * 100}%)`;
    renderDots();
    // 切换后做布局，保证当前 slide 尺寸已稳定
    requestAnimationFrame(layoutAll);
  }

  document.querySelector('.axes-nav.prev').addEventListener('click', ()=>{
    idx = (idx - 1 + slides.length) % slides.length; updateCarousel();
  });
  document.querySelector('.axes-nav.next').addEventListener('click', ()=>{
    idx = (idx + 1) % slides.length; updateCarousel();
  });

  // 触摸滑动
  let startX = 0, swiping = false;
  trackEl.addEventListener('touchstart', (e)=>{
    if (!e.touches || !e.touches[0]) return;
    startX = e.touches[0].clientX; swiping = true;
  }, { passive: true });
  trackEl.addEventListener('touchend', (e)=>{
    if(!swiping) return;
    const endX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : startX;
    const dx = endX - startX;
    const TH = 40;
    if (dx > TH) document.querySelector('.axes-nav.prev').click();
    else if (dx < -TH) document.querySelector('.axes-nav.next').click();
    swiping = false;
  });

  // 初始布局 + resize
  renderDots();
  requestAnimationFrame(layoutAll);
  window.addEventListener('resize', layoutAll);

  /* ===== Life 相册 ===== */
  const lifeTrack = document.getElementById('lifeTrack');
  if (lifeTrack){
    const slidesLife = Array.from(lifeTrack.children);
    let i = 0;
    function upd(){ lifeTrack.style.transform = `translateX(-${i*100}%)`; }
    const prev = document.querySelector('.life-prev');
    const next = document.querySelector('.life-next');
    prev && prev.addEventListener('click', ()=>{ i = (i-1+slidesLife.length)%slidesLife.length; upd(); });
    next && next.addEventListener('click', ()=>{ i = (i+1)%slidesLife.length; upd(); });
  }
});
</script>
