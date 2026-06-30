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
  <div class="group-title-row group-title-row--left">
    <h2>Principal Investigator</h2>
  </div>
  <div class="group-cards-section">
    <article class="pi-listing">
      <img src="{{ pi.photolink | relative_url }}" alt="{{ pi.name }}" class="profile-photo">
      <div class="profile-copy">
        <h3>{{ pi.name }}</h3>
        {% if pi.affiliation %}<div class="profile-affiliation">{{ pi.affiliation | markdownify }}</div>{% endif %}
        <div class="profile-links">
          {% if pi.pagelink %}<a href="{{ pi.pagelink }}" target="_blank" rel="noopener">Google Scholar</a>{% endif %}
          {% if pi.github %}<a href="{{ pi.github }}" target="_blank" rel="noopener">GitHub</a>{% endif %}
          {% if pi.email %}<a href="mailto:{{ pi.email }}">Email</a>{% endif %}
        </div>
      </div>
    </article>

    <div class="group-title-row group-title-row--left group-title-row--inside group-title-row--filterable">
      <h2>Group Members</h2>
      <div class="group-filter-buttons" aria-label="Filter group members">
        <button class="active" type="button" data-group-filter="all">All</button>
        <span class="group-filter-divider" aria-hidden="true"></span>
        <button type="button" data-area-filter="decision">Decision-Making</button>
        <button type="button" data-area-filter="collaborative">Collaborative</button>
        <button type="button" data-area-filter="scaling">Scaling</button>
        <span class="group-filter-divider" aria-hidden="true"></span>
        <button type="button" data-level-filter="graduate">Graduate</button>
        <button type="button" data-level-filter="undergraduate">Undergraduate</button>
      </div>
    </div>

    <div class="member-card-grid">
      {% for m in site.data.group.current %}
      {% assign member_title = m.title | default: '' | downcase %}
      {% assign member_level = 'graduate' %}
      {% if member_title contains 'undergraduate' %}
        {% assign member_level = 'undergraduate' %}
      {% endif %}
      <article class="profile-card profile-card--member" data-research-area="{{ m.research_area | default: 'all' }}" data-member-level="{{ member_level }}">
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
  <div class="group-title-row group-title-row--left">
    <h2>Alumni</h2>
  </div>
  <div class="group-cards-section">
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

</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const resetFilterButton = document.querySelector('[data-group-filter="all"]');
  const areaFilterButtons = Array.from(document.querySelectorAll('[data-area-filter]'));
  const levelFilterButtons = Array.from(document.querySelectorAll('[data-level-filter]'));
  const groupFilterRow = document.querySelector('.group-title-row--filterable');
  const memberCards = Array.from(document.querySelectorAll('.profile-card--member[data-research-area]'));
  const activeFilters = {
    area: 'all',
    level: 'all'
  };

  function updateGroupFilters(){
    const isReset = activeFilters.area === 'all' && activeFilters.level === 'all';
    if (resetFilterButton) resetFilterButton.classList.toggle('active', isReset);

    areaFilterButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.areaFilter === activeFilters.area);
    });

    levelFilterButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.levelFilter === activeFilters.level);
    });

    memberCards.forEach(card => {
      const areaVisible = activeFilters.area === 'all' || card.dataset.researchArea === activeFilters.area;
      const levelVisible = activeFilters.level === 'all' || card.dataset.memberLevel === activeFilters.level;
      const visible = areaVisible && levelVisible;
      card.hidden = !visible;
    });
  }

  if (resetFilterButton) {
    resetFilterButton.addEventListener('click', () => {
      activeFilters.area = 'all';
      activeFilters.level = 'all';
      updateGroupFilters();
    });
  }

  areaFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const area = button.dataset.areaFilter || 'all';
      activeFilters.area = activeFilters.area === area ? 'all' : area;
      updateGroupFilters();
    });
  });

  levelFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const level = button.dataset.levelFilter || 'all';
      activeFilters.level = activeFilters.level === level ? 'all' : level;
      updateGroupFilters();
    });
  });

  if (groupFilterRow) {
    groupFilterRow.addEventListener('mouseenter', () => groupFilterRow.classList.add('filter-open'));
    groupFilterRow.addEventListener('mouseleave', () => groupFilterRow.classList.remove('filter-open'));
  }

});
</script>
