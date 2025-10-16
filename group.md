---
layout: single
permalink: /group/
author_profile: false
classes: wide
sidebar: false
title: "Our Group"
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

<div class="axis-wrapper">
  <div class="axis-label-x">APPLICATION</div>
  <div class="axis-label-y">OPTIMAL SYSTEMS</div>

  <div class="research-map">
    <div class="members-layer">
      {% for member in site.data.group.current %}
        <div class="member-dot" 
             style="--x: {{ member.x }}%; --y: {{ member.y }}%;">
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

<script>
document.addEventListener('DOMContentLoaded', () => {
  const map = document.querySelector('.research-map');
  const dots = document.querySelectorAll('.member-dot');
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });
  map.addEventListener('click', (e) => {
    if (e.target === map) dots.forEach(d => d.classList.remove('active'));
  });
});
</script>
