---
layout: single
permalink: /group/
author_profile: false
classes: wide
sidebar: false
---

## Principal Investigator
<div class="pi-container">
  {% for member in site.data.group.pi %}
  <div class="pi-card">
    <img src="{{ member.photolink | relative_url }}" alt="{{ member.name }}" class="pi-photo">
    <div class="pi-info">
      <h3>{{ member.name }}</h3>
      <p class="degree">{{ member.title }}</p>
      {% if member.affiliation %}
        <p class="affiliation">{{ member.affiliation | markdownify }}</p>
      {% endif %}
      <div class="links">
        {% if member.pagelink %}<a href="{{ member.pagelink }}" target="_blank">Google Scholar</a>{% endif %}
        {% if member.github %} | <a href="{{ member.github }}" target="_blank">GitHub</a>{% endif %}
        {% if member.email %} | <a href="mailto:{{ member.email }}">Email</a>{% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>

---

## Research Landscape

<!-- 使用网格将 4 个轴标签放在交互窗口外侧 -->
<div class="axis-grid">
  <div class="axis-top">Theory</div>
  <div class="axis-left">Fundamental Models</div>

  <div class="axis-center">
    <div class="research-map">
      <div class="members-layer">
        {% for member in site.data.group.current %}
          <div class="member-dot" style="--x: {{ member.x }}%; --y: {{ member.y }}%;">
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

<script>
document.addEventListener('DOMContentLoaded', () => {
  const dots = Array.from(document.querySelectorAll('.member-dot'));

  // 点击头像：切换当前激活，且先关闭其它
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation(); // 阻止冒泡到外层
      const wasActive = dot.classList.contains('active');
      dots.forEach(d => d.classList.remove('active'));
      if (!wasActive) dot.classList.add('active'); // 再次点击同一个可关闭
    });
  });

  // 点击交互区空白（地图、图层、网格外边缘等）：关闭所有
  document.addEventListener('click', (e) => {
    // 只要点击不在 member-dot 内部，就关闭
    if (!e.target.closest('.member-dot')) {
      dots.forEach(d => d.classList.remove('active'));
    }
  });

  // 键盘 Esc 关闭（桌面友好）
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dots.forEach(d => d.classList.remove('active'));
    }
  });

  // 触摸设备优化：在触摸开始时关闭其它（避免残留）
  document.addEventListener('touchstart', (e) => {
    if (!e.target.closest('.member-dot')) {
      dots.forEach(d => d.classList.remove('active'));
    }
  }, { passive: true });
});
</script>
