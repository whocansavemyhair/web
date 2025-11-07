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

<!-- ===== 横向坐标轴（独立一行展示，一次只显示一条；上方为按“入学年数”分层） ===== -->
<section class="viz1d">
  <h2 class="section-title">Research Landscape — 1D Axes</h2>

  <div class="axes-1d-carousel" id="axesCarousel">
    <div class="axes-viewport">
      <div class="axes-track" id="axesTrack">

        <!-- Slide 1: Efficiency ↔ Robustness -->
        <div class="axis-slide">
          <div class="axis-row" data-axis="a1">
            <span class="axis-label axis-label--left">Efficiency</span>
            <div class="axis-track">
              <!-- 仅保留导引线，不再渲染数字 -->
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

    <div class="axes-nav-wrap">
      <button class="axes-nav prev" aria-label="Previous">‹</button>
      <div class="axes-dots" id="axesDots"></div>
      <button class="axes-nav next" aria-label="Next">›</button>
    </div>

    <!-- ===== 轴下方信息带：默认显示 PI；点击成员后显示 3 张卡片（中间选中，左右最近） ===== -->
    {% assign pi = site.data.group.pi | first %}
    <div class="info-ribbon" id="infoRibbon">
      <div class="info-card info-card--main">
        <div class="card-inner">
          <img src="{{ pi.photolink | relative_url }}" alt="{{ pi.name }}">
          <div class="card-text">
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
      </div>
    </div>
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

  /* ========== 轴布局：横向 data-pos；纵向按 data-years 分层（只占上半区） ========== */
  function layoutOneRow(row){
    const track = row.querySelector('.axis-track');
    const thumbs = Array.from(track.querySelectorAll('.axis-thumb'));

    // 清理旧导引线
    track.querySelectorAll('.lane-guides').forEach(n => n.remove());

    // 最大年级（years）
    let maxYears = 1;
    thumbs.forEach(t => {
      const y = parseInt(t.dataset.years || 1, 10);
      if (!isNaN(y)) maxYears = Math.max(maxYears, y);
    });
    maxYears = Math.min(Math.max(maxYears, 1), 8);

    const padX = 28, padY = 12;
    const W = track.clientWidth || track.getBoundingClientRect().width || 900;
    const H = track.clientHeight || 260;
    const innerW = Math.max(10, W - padX*2);
    const innerH = Math.max(10, H - padY*2);

    // 只用上半区域摆放头像，其余留白
    const lanesFrac = 0.5;           // 上半区：50% 用于车道
    const lanesH = innerH * lanesFrac;
    const lanesTop = padY;           // 从顶部开始
    const lanesBottom = lanesTop + lanesH;

    // 车道导引（不显示数字）
    const guides = document.createElement('div');
    guides.className = 'lane-guides';
    const lanes = maxYears;
    const bandH = lanesH / lanes;
    for (let i=0; i<lanes; i++){
      const yCenter = lanesTop + bandH*(i + 0.5);
      const g = document.createElement('div');
      g.className = 'lane-guide';
      g.style.top = `${yCenter}px`;
      guides.appendChild(g);
    }
    track.appendChild(gides = guides); // append

    // 按 years 分桶
    const laneBuckets = Array.from({length: lanes}, ()=>[]);
    thumbs.forEach(t=>{
      const pos = Math.max(0, Math.min(100, parseFloat(t.dataset.pos||50)));
      const years = Math.max(1, Math.min(lanes, parseInt(t.dataset.years||1, 10) || 1));
      const lane = years - 1;
      const x = padX + innerW * (pos/100);
      laneBuckets[lane].push({el:t, x});
    });

    // 放置，避免重叠
    const rMin = 18, rMax = 26, gap = 8;
    laneBuckets.forEach((bucket, laneIdx)=>{
      bucket.sort((a,b)=>a.x-b.x);
      const n = bucket.length || 1;
      const r = Math.max(rMin, Math.min(rMax, 0.45 * innerW / n));
      const dMin = 2*r + gap;
      const step = Math.min(r*0.9, (bandH/2 - r)/3);
      const cy = lanesTop + bandH*(laneIdx + 0.5);
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

  /* ========== 选择与信息带：显示中心 + 左右最近两个；头像同步放大 ========== */
  const ribbon = document.getElementById('infoRibbon');

  function thumbData(t){
    const d = t.dataset;
    return {
      el: t,
      x: parseFloat(t.style.left) || 0,
      name: d.name || '',
      title: d.title || '',
      affiliation: d.affiliation || '',
      desc: d.desc || '',
      page: d.page || '',
      github: d.github || '',
      email: d.email || '',
      photo: d.photo || ''
    };
  }

  function renderDefaultPI(){
    // 什么都不做：初始 HTML 已是 PI 卡
    ribbon.dataset.mode = 'pi';
  }

  function cardHTML(item, mod){
    return `
      <div class="info-card ${mod}">
        <div class="card-inner">
          <img src="${item.photo}" alt="${item.name}">
          <div class="card-text">
            <h3>${item.name}</h3>
            ${item.title ? `<p class="degree">${item.title}</p>` : ''}
            ${item.affiliation ? `<p class="affiliation">${item.affiliation}</p>` : ''}
            ${item.desc ? `<p class="desc">${item.desc}</p>` : ''}
            <div class="links">
              ${item.page ? `<a href="${item.page}" target="_blank">Page</a>` : ''}
              ${item.github ? `${item.page ? ' | ' : ''}<a href="${item.github}" target="_blank">GitHub</a>` : ''}
              ${item.email ? `${(item.page || item.github) ? ' | ' : ''}<a href="mailto:${item.email}">Email</a>` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function nearestThree(currentThumb){
    // 基于 **当前 slide** 的所有头像，按 x（像素）排序，找相邻两位
    const row = currentThumb.closest('.axis-row');
    const all = Array.from(row.querySelectorAll('.axis-thumb'));
    const items = all.map(thumbData).sort((a,b)=>a.x-b.x);
    const idx = items.findIndex(i => i.el === currentThumb);
    const left = items[idx-1] || null;
    const right = items[idx+1] || null;
    return {left, center: items[idx], right};
  }

  function clearThumbFocus(){
    document.querySelectorAll('.axis-thumb').forEach(t=>{
      t.classList.remove('thumb-main','thumb-side');
    });
  }

  function focusThumbSet(set){
    clearThumbFocus();
    set.center && set.center.el.classList.add('thumb-main');
    if (set.left) set.left.el.classList.add('thumb-side','thumb-side--left');
    if (set.right) set.right.el.classList.add('thumb-side','thumb-side--right');
  }

  function renderRibbonSet(set){
    let html = '';
    if (set.left) html += cardHTML(set.left, 'info-card--side side-left');
    html += cardHTML(set.center, 'info-card--main');
    if (set.right) html += cardHTML(set.right, 'info-card--side side-right');
    ribbon.innerHTML = html;
    ribbon.dataset.mode = 'triplet';

    // 侧卡可点击切换为中心
    ribbon.querySelectorAll('.info-card--side').forEach(card=>{
      card.addEventListener('click', ()=>{
        const name = card.querySelector('h3')?.textContent?.trim();
        // 找到同名头像元素触发选中
        const thumb = Array.from(document.querySelectorAll('.axis-thumb'))
          .find(t => (t.dataset.name||'').trim() === name);
        if (thumb){
          const set2 = nearestThree(thumb);
          focusThumbSet(set2);
          renderRibbonSet(set2);
        }
      }, {passive:true});
    });
  }

  // 头像交互
  function bindThumbs(){
    document.querySelectorAll('.axis-thumb').forEach(t=>{
      t.addEventListener('click', (e)=>{
        e.stopPropagation();
        const set = nearestThree(t);
        focusThumbSet(set);
        renderRibbonSet(set);
      }, {passive:true});
    });
  }

  // 点击空白恢复 PI
  document.addEventListener('click', (e)=>{
    if (!e.target.closest('.axis-thumb') && !e.target.closest('#infoRibbon')){
      clearThumbFocus();
      // 恢复为 PI
      ribbon.innerHTML = ribbon.getAttribute('data-pi-html') || ribbon.innerHTML;
      ribbon.dataset.mode = 'pi';
    }
  });

  // 保存初始 PI HTML
  ribbon.setAttribute('data-pi-html', ribbon.innerHTML);

  /* ========== 轮播：一次一条横轴 ========== */
  const trackEl = document.getElementById('axesTrack');
  const slides = Array.from(trackEl.querySelectorAll('.axis-slide'));
  const dotsWrap = document.getElementById('axesDots');
  let idx = 0;

  function renderDots(){
    dotsWrap.innerHTML = '';
    slides.forEach((_, i)=>{
      const d = document.createElement('button');
      d.className = 'dot' + (i===idx ? ' active' : '');
      d.addEventListener('click', ()=>{ idx=i; updateCarousel(true); });
      dotsWrap.appendChild(d);
    });
  }

  function updateCarousel(reLayout){
    trackEl.style.transform = `translateX(-${idx * 100}%)`;
    renderDots();
    if (reLayout) requestAnimationFrame(()=>{ layoutAll(); bindThumbs(); });
    // 切换轴时恢复 PI
    clearThumbFocus();
    ribbon.innerHTML = ribbon.getAttribute('data-pi-html');
    ribbon.dataset.mode = 'pi';
  }

  document.querySelector('.axes-nav.prev').addEventListener('click', ()=>{
    idx = (idx - 1 + slides.length) % slides.length; updateCarousel(true);
  });
  document.querySelector('.axes-nav.next').addEventListener('click', ()=>{
    idx = (idx + 1) % slides.length; updateCarousel(true);
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

  // 初始
  renderDots();
  requestAnimationFrame(()=>{ layoutAll(); bindThumbs(); });

  // resize
  window.addEventListener('resize', ()=>{ layoutAll(); });

  /* ===== Life 相册（保持不变） ===== */
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
