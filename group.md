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

<!-- ===== 纯净横轴：一次只显示一条，样式与 Life 一致（viewport + track + slides） ===== -->
<section class="viz1d">

  <div class="axes-plain" id="axesCarousel">
    <!-- 关键：viewport 负责裁切，只显示一条 -->
    <div class="axes-viewport">
      <div class="axes-track" id="axesTrack">

        <!-- Slide 1 -->
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

    <!-- 与 Life 相同的极简导航 -->
    <button class="axes-nav prev" aria-label="Previous">‹</button>
    <button class="axes-nav next" aria-label="Next">›</button>
    <div class="axes-dots" id="axesDots"></div>

    <!-- 轴下信息带：默认 PI；点击头像显示三卡 -->
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

<!-- ===== Life（原样） ===== -->
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
  /* ========== years=1 贴横轴；years 向上；无外框，顶部自然留白 ========== */
  function layoutOneRow(row){
    const track = row.querySelector('.axis-track');
    const thumbs = Array.from(track.querySelectorAll('.axis-thumb'));

    // 清理导引线
    track.querySelectorAll('.lane-guides').forEach(n => n.remove());

    // 求最大 years
    let maxYears = 1;
    thumbs.forEach(t => {
      const y = parseInt(t.dataset.years || 1, 10);
      if (!isNaN(y)) maxYears = Math.max(maxYears, y);
    });
    maxYears = Math.min(Math.max(maxYears, 1), 8);

    const padX = 20;
    const W = track.clientWidth || track.getBoundingClientRect().width || 900;
    const H = track.clientHeight || 360;
    const innerW = Math.max(10, W - padX*2);

    // 自底向上分配层：baseline 在最底，years=1 紧贴 baseline
    const guides = document.createElement('div');
    guides.className = 'lane-guides';
    track.appendChild(guides);

    const baselineY = H - 2;
    const usableUp = H * 0.70;                   // 底部向上 70% 用于层，其余作为顶部留白
    const bandH = Math.max(18, usableUp / maxYears);

    const yFor = (k) => baselineY - bandH*(k - 0.5); // k=1..maxYears

    // 画淡导引线
    for(let k=1; k<=maxYears; k++){
      const g = document.createElement('div');
      g.className = 'lane-guide';
      g.style.top = `${yFor(k)}px`;
      guides.appendChild(g);
    }

    // 分桶并放置
    const buckets = Array.from({length: maxYears}, ()=>[]);
    thumbs.forEach(t=>{
      const years = Math.max(1, Math.min(maxYears, parseInt(t.dataset.years||1, 10) || 1));
      const pos = Math.max(0, Math.min(100, parseFloat(t.dataset.pos||50)));
      const x = padX + innerW * (pos/100);
      buckets[years-1].push({el:t, x, yc: yFor(years)});
    });

    const rMin = 18, rMax = 26, gap = 8;
    buckets.forEach(bucket=>{
      bucket.sort((a,b)=>a.x-b.x);
      const n = bucket.length || 1;
      const r = Math.max(rMin, Math.min(rMax, 0.45 * innerW / n));
      const dMin = 2*r + gap;
      const step = Math.min(r*0.9, (bandH/2 - r)/3);
      const placed = [];
      bucket.forEach(item=>{
        let y = item.yc, tries = 0, dir = 1;
        while (placed.some(p => Math.hypot(item.x - p.x, y - p.y) < dMin)) {
          y = item.yc + dir * step * (1 + Math.floor(tries/2));
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

  function layoutAll(){ document.querySelectorAll('.axis-row').forEach(layoutOneRow); }

  /* ========== 信息带：三卡（固定尺寸）+ 边缘显示两个内侧且相对位置不变 ========== */
  const ribbon = document.getElementById('infoRibbon');

  function thumbData(t){
    const d = t.dataset;
    return {
      el: t,
      x: parseFloat(t.style.left) || 0,
      name: d.name || '', title: d.title || '', affiliation: d.affiliation || '',
      desc: d.desc || '', page: d.page || '', github: d.github || '',
      email: d.email || '', photo: d.photo || ''
    };
  }

  // 选择三卡（或两卡）集合：center / edge-left / edge-right
  function pickTriplet(t){
    const row = t.closest('.axis-row');
    const items = Array.from(row.querySelectorAll('.axis-thumb'))
      .map(thumbData).sort((a,b)=>a.x-b.x);
    const n = items.length;
    const i = items.findIndex(it => it.el === t);

    if (n === 0) return { order: [], mode: 'center' };
    if (n === 1) return { order: [items[0]], mode: 'center' };
    if (n === 2){
      if (i === 0) return { order: [items[0], items[1]], mode: 'edge-left' };
      return { order: [items[0], items[1]], mode: 'edge-right' };
    }

    const left1  = (i-1 >= 0) ? items[i-1] : null;
    const left2  = (i-2 >= 0) ? items[i-2] : null;
    const right1 = (i+1 <  n) ? items[i+1] : null;
    const right2 = (i+2 <  n) ? items[i+2] : null;

    // 极左：X 在最左，取 X、右1、右2
    if (i === 0)     return { order: [items[i], right1, right2].filter(Boolean), mode: 'edge-left' };
    // 极右：X 在最右，取 左2、左1、X
    if (i === n-1)   return { order: [left2, left1, items[i]].filter(Boolean), mode: 'edge-right' };

    // 次边缘：尽量补“内侧”第二个
    if (!left1 && right1) return { order: [items[i], right1, right2].filter(Boolean), mode: 'edge-left' };
    if (!right1 && left1) return { order: [left2, left1, items[i]].filter(Boolean), mode: 'edge-right' };

    // 中间：左右各取一个
    return { order: [left1, items[i], right1].filter(Boolean), mode: 'center' };
  }

  function cardHTML(item, mod){
    return `<div class="info-card ${mod}">
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
    </div>`;
  }

  function clearThumbFocus(){
    document.querySelectorAll('.axis-thumb')
      .forEach(t=>t.classList.remove('thumb-main','thumb-side','thumb-side--left','thumb-side--right'));
  }

  // 渲染三卡并保持相对位置不变
  function renderRibbonSet(result){
    const { order, mode } = result;
    if (!order || order.length === 0) return;

    // 头像高亮
    clearThumbFocus();
    order.forEach((it, idx)=>{
      if (!it || !it.el) return;
      if (mode === 'center'){
        if (idx === 1) it.el.classList.add('thumb-main');
        else if (idx === 0) it.el.classList.add('thumb-side','thumb-side--left');
        else it.el.classList.add('thumb-side','thumb-side--right');
      }else if (mode === 'edge-left'){
        if (idx === 0) it.el.classList.add('thumb-main'); // X 在最左
        else it.el.classList.add('thumb-side','thumb-side--right');
      }else if (mode === 'edge-right'){
        if (idx === order.length-1) it.el.classList.add('thumb-main'); // X 在最右
        else it.el.classList.add('thumb-side','thumb-side--left');
      }
    });

    // 生成卡片 HTML（顺序即视觉顺序）
    let html = '';
    if (mode === 'center'){
      html += cardHTML(order[0], 'info-card--side side-left');
      html += cardHTML(order[1], 'info-card--main');
      html += cardHTML(order[2], 'info-card--side side-right');
    }else if (mode === 'edge-left'){
      html += cardHTML(order[0], 'info-card--main');
      if (order[1]) html += cardHTML(order[1], 'info-card--side side-right');
      if (order[2]) html += cardHTML(order[2], 'info-card--side side-right');
    }else if (mode === 'edge-right'){
      if (order[0]) html += cardHTML(order[0], 'info-card--side side-left');
      if (order[1]) html += cardHTML(order[1], 'info-card--side side-left');
      html += cardHTML(order[2], 'info-card--main');
    }

    ribbon.innerHTML = html;
    ribbon.dataset.mode = 'triplet';

    // 侧卡点击 -> 切换到那个人的三卡
    ribbon.querySelectorAll('.info-card--side').forEach(c=>{
      c.addEventListener('click', ()=>{
        const name = c.querySelector('h3')?.textContent?.trim();
        const th = Array.from(document.querySelectorAll('.axis-thumb'))
          .find(t => (t.dataset.name||'').trim() === name);
        if (th){ const res2 = pickTriplet(th); renderRibbonSet(res2); }
      }, {passive:true});
    });
  }

  function bindThumbs(){
    document.querySelectorAll('.axis-thumb').forEach(t=>{
      t.addEventListener('click', (e)=>{
        e.stopPropagation();
        const res = pickTriplet(t);
        renderRibbonSet(res);
      }, {passive:true});
    });
  }

  // 点击空白恢复 PI
  ribbon.setAttribute('data-pi-html', ribbon.innerHTML);
  document.addEventListener('click', (e)=>{
    if (!e.target.closest('.axis-thumb') && !e.target.closest('#infoRibbon')){
      clearThumbFocus();
      ribbon.innerHTML = ribbon.getAttribute('data-pi-html');
      ribbon.dataset.mode = 'pi';
    }
  });

  /* ========== 轮播：与 Life 相同（viewport + track + slides） ========== */
  const trackEl = document.getElementById('axesTrack');
  const slides = Array.from(trackEl.querySelectorAll('.axis-slide'));
  const dotsWrap = document.getElementById('axesDots');
  const prevBtn = document.querySelector('.axes-nav.prev');
  const nextBtn = document.querySelector('.axes-nav.next');
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
    // 每次切轴恢复 PI
    clearThumbFocus();
    ribbon.innerHTML = ribbon.getAttribute('data-pi-html');
    ribbon.dataset.mode = 'pi';
  }
  prevBtn.addEventListener('click', ()=>{ idx = (idx - 1 + slides.length) % slides.length; updateCarousel(true); });
  nextBtn.addEventListener('click', ()=>{ idx = (idx + 1) % slides.length; updateCarousel(true); });

  // 触摸滑动
  let startX=0, swiping=false;
  trackEl.addEventListener('touchstart', e=>{ if(e.touches[0]){ startX=e.touches[0].clientX; swiping=true; } }, {passive:true});
  trackEl.addEventListener('touchend', e=>{
    if(!swiping) return;
    const endX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : startX;
    const dx = endX - startX; const TH = 40;
    if (dx>TH) prevBtn.click();
    else if (dx<-TH) nextBtn.click();
    swiping=false;
  }, {passive:true});

  // 初始
  renderDots();
  requestAnimationFrame(()=>{ layoutAll(); bindThumbs(); });
  window.addEventListener('resize', layoutAll);

  /* ===== Life slider 保持不变 ===== */
  const lifeTrack = document.getElementById('lifeTrack');
  if (lifeTrack){
    const slidesLife = Array.from(lifeTrack.children);
    let i = 0;
    function upd(){ lifeTrack.style.transform = `translateX(-${i*100}%)`; }
    const prev = document.querySelector('.life-prev');
    const next = document.querySelector('.life-next');
    prev && prev.addEventListener('click', ()=>{ i=(i-1+slidesLife.length)%slidesLife.length; upd(); });
    next && next.addEventListener('click', ()=>{ i=(i+1)%slidesLife.length; upd(); });
  }
});
</script>
