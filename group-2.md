---
layout: single
permalink: /group-2/
author_profile: false
classes: wide
sidebar: false
---

<link rel="stylesheet" href="{{ '/assets/css/group.css' | relative_url }}">

<div class="page-group">

<!-- ===== 纯净横轴：一次只显示一条，样式与 Life 一致（viewport + track + slides） ===== -->
<section class="group-band group-band--members">
  <div class="group-section">
    <header class="group-intro">
      <h2 class="section-title">Members</h2>
    </header>

    <div class="viz1d">

  <div class="axes-plain" id="axesCarousel">
    <!-- 关键：viewport 负责裁切，只显示一条 -->
    <div class="axes-viewport">
      <div class="axes-track" id="axesTrack">

        {% assign current_year = site.time | date: "%Y" | plus: 0 %}

        <!-- Slide 1 -->
        <div class="axis-slide">
          <div class="axis-row" data-axis="a1">
            <span class="axis-label axis-label--left">Efficiency</span>
            <div class="axis-track">
              {% for m in site.data.group.current %}
                {% assign start_year = m.years | default: current_year %}
                {% assign years_in_lab = current_year | minus: start_year | plus: 1 %}
                <div class="axis-thumb"
                    data-pos="{{ m.a1 | default: 50 }}"
                    data-years="{{ years_in_lab }}"
                    data-start-year="{{ start_year }}"
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
                {% assign start_year = m.years | default: current_year %}
                {% assign years_in_lab = current_year | minus: start_year | plus: 1 %}
                <div class="axis-thumb"
                    data-pos="{{ m.a2 | default: 50 }}"
                    data-years="{{ years_in_lab }}"
                    data-start-year="{{ start_year }}"
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
                {% assign start_year = m.years | default: current_year %}
                {% assign years_in_lab = current_year | minus: start_year | plus: 1 %}
                <div class="axis-thumb"
                    data-pos="{{ m.a3 | default: 50 }}"
                    data-years="{{ years_in_lab }}"
                    data-start-year="{{ start_year }}"
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
                {% assign start_year = m.years | default: current_year %}
                {% assign years_in_lab = current_year | minus: start_year | plus: 1 %}
                <div class="axis-thumb"
                    data-pos="{{ m.a4 | default: 50 }}"
                    data-years="{{ years_in_lab }}"
                    data-start-year="{{ start_year }}"
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
    </div>
  </div>
</section>

<!-- ===== Alumni ===== -->
<section class="group-band group-band--alumni alumni-section">
  <div class="group-section">
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
  </div>
</section>

<!-- ===== Life（原样） ===== -->
<section class="group-band group-band--life life-section">
  <div class="group-section">
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
  /* ========== 横坐标表达研究倾向；纵向只用于重叠时按入组年份避让 ========== */
  function layoutOneRow(row){
    const track = row.querySelector('.axis-track');
    const thumbs = Array.from(track.querySelectorAll('.axis-thumb'));
    track.querySelectorAll('.lane-guides').forEach(n => n.remove());

    const padX = 20;
    const W = track.clientWidth || track.getBoundingClientRect().width || 900;
    const H = track.clientHeight || 360;
    const innerW = Math.max(10, W - padX*2);

    const baselineY = H - 2;
    const rMin = 46, rMax = 54, gap = 12;
    const verticalGap = 10;
    const topPad = 8;
    const axisGap = 18;
    let r = Math.max(18, Math.min(rMax, Math.max(rMin, 0.46 * innerW / Math.max(1, thumbs.length))));

    const items = thumbs.map((t, index) => {
      const pos = Math.max(0, Math.min(100, Number.parseFloat(t.dataset.pos||50)));
      return {
        el: t,
        index,
        name: t.dataset.name || '',
        startYear: Number.parseInt(t.dataset.startYear || t.dataset.years || 9999, 10) || 9999,
        x0: padX + innerW * (pos/100)
      };
    }).sort((a,b) => {
      const dy = b.startYear - a.startYear;
      if (dy !== 0) return dy;
      const dx = a.x0 - b.x0;
      if (Math.abs(dx) > 0.001) return dx;
      return a.name.localeCompare(b.name) || a.index - b.index;
    });

    const minX = padX + r;
    const maxX = padX + innerW - r;
    const dMin = 2*r + gap;
    const maxShift = dMin * 1.25;

    function nearestFreeX(x0, lane){
      const clamped = Math.max(minX, Math.min(maxX, x0));
      const candidates = [clamped, minX, maxX];

      lane.forEach(item => {
        candidates.push(item.x - dMin);
        candidates.push(item.x + dMin);
      });

      return candidates
        .filter(x => x >= minX && x <= maxX)
        .filter(x => lane.every(item => Math.abs(x - item.x) >= dMin - 0.01))
        .sort((a,b) => Math.abs(a - x0) - Math.abs(b - x0))[0];
    }

    const lanes = [];
    items.forEach(item => {
      let placed = false;

      for (let laneIndex = 0; laneIndex < lanes.length; laneIndex++) {
        const x = nearestFreeX(item.x0, lanes[laneIndex]);
        if (typeof x !== 'number') continue;

        if (Math.abs(x - item.x0) <= maxShift) {
          item.x = x;
          item.lane = laneIndex;
          lanes[laneIndex].push(item);
          placed = true;
          break;
        }
      }

      if (!placed) {
        item.x = Math.max(minX, Math.min(maxX, item.x0));
        item.lane = lanes.length;
        lanes.push([item]);
      }
    });

    const defaultYStep = 2*r + verticalGap;
    const fitYStep = lanes.length > 1
      ? (baselineY - axisGap - 2*r - topPad) / (lanes.length - 1)
      : defaultYStep;
    const yStep = Math.max(0, Math.min(defaultYStep, fitYStep));
    const s = `${2*r}px`;

    lanes.forEach((lane, laneIndex) => {
      lane.forEach(item => {
        item.el.style.width  = s;
        item.el.style.height = s;
        item.el.style.left   = `${item.x}px`;
        item.el.style.top    = `${baselineY - r - axisGap - laneIndex * yStep}px`;
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
      x: Number.parseFloat(t.style.left) || 0,
      y: Number.parseFloat(t.style.top) || 0,
      name: d.name || '', title: d.title || '', affiliation: d.affiliation || '',
      desc: d.desc || '', page: d.page || '', github: d.github || '',
      email: d.email || '', photo: d.photo || ''
    };
  }

  function orderedItemsForThumb(t){
    const row = t.closest('.axis-row');
    return Array.from(row.querySelectorAll('.axis-thumb'))
      .map(thumbData).sort((a,b)=> {
        const dx = a.x - b.x;
        if (Math.abs(dx) > 1) return dx;
        return a.y - b.y;
      });
  }

  function cardHTML(item, mod){
    return `<div class="info-card ${mod}" data-name="${item.name}">
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

  // 现在这个函数只负责更新下方三张卡片，不再改变坐标轴上的头像样式
  function clearThumbFocus(){
    // 保留函数，但不再对 .axis-thumb 添加/移除任何 class
  }

  function bindMemberCards(){
    ribbon.querySelectorAll('.info-card').forEach(c=>{
      c.addEventListener('click', (e)=>{
        e.stopPropagation();
        const name = c.dataset.name || c.querySelector('h3')?.textContent?.trim();
        const th = Array.from(document.querySelectorAll('.axis-thumb'))
          .find(t => (t.dataset.name||'').trim() === name);
        if (th) focusThumb(th);
      });
    });
  }

  function updateMemberCardState(nextMain){
    const cards = Array.from(ribbon.querySelectorAll('.info-card'));
    const targetIndex = cards.findIndex(card => card.dataset.name === nextMain);
    if (targetIndex < 0) return null;

    cards.forEach((card, index) => {
      card.classList.remove('info-card--main', 'info-card--side', 'side-left', 'side-right');
      if (index === targetIndex) {
        card.classList.add('info-card--main');
      } else {
        card.classList.add('info-card--side', index < targetIndex ? 'side-left' : 'side-right');
      }
    });

    return cards[targetIndex];
  }

  function renderMemberScroller(t){
    const items = orderedItemsForThumb(t);
    if (!items.length) return;
    clearThumbFocus();

    const nextMain = t.dataset.name || '';
    const axis = t.closest('.axis-row')?.dataset.axis || '';
    const shouldBuild = ribbon.dataset.mode !== 'members' || ribbon.dataset.axis !== axis;

    if (shouldBuild) {
      ribbon.innerHTML = items.map((item, index) => {
        const activeIndex = items.findIndex(it => it.name === nextMain);
        const mod = index === activeIndex ? 'info-card--main' : `info-card--side ${index < activeIndex ? 'side-left' : 'side-right'}`;
        return cardHTML(item, mod);
      }).join('');
      ribbon.dataset.mode = 'members';
      ribbon.dataset.axis = axis;
      bindMemberCards();
    }

    const mainCard = updateMemberCardState(nextMain);

    if (mainCard) requestAnimationFrame(() => {
      mainCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  }

  function focusThumb(t){
    renderMemberScroller(t);
  }

  function bindThumbs(){
    document.querySelectorAll('.axis-thumb').forEach(t=>{
      t.addEventListener('click', (e)=>{
        e.stopPropagation();
        focusThumb(t);
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
        dot.addEventListener('click', () => { i = index; upd(); });
        lifeDots.appendChild(dot);
      });
    }
    function upd(){
      lifeTrack.style.transform = `translateX(-${i*100}%)`;
      renderLifeDots();
    }
    const prev = document.querySelector('.life-prev');
    const next = document.querySelector('.life-next');
    prev && prev.addEventListener('click', ()=>{ i=(i-1+slidesLife.length)%slidesLife.length; upd(); });
    next && next.addEventListener('click', ()=>{ i=(i+1)%slidesLife.length; upd(); });
    upd();
  }
});
</script>
