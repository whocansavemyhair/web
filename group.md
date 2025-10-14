---
layout: single
permalink: /group/
author_profile: false
classes: wide
sidebar: false
title: "Our Group"
---

## Principal Investigator
<div class="group-grid">
  {% for member in site.data.group.pi %}
  <div class="member-card">
    <img src="{{ member.photolink | relative_url }}" alt="{{ member.name }}" class="member-photo" onerror="this.src='{{ '/assets/images/group/placeholder.jpg' | relative_url }}'">
    <div class="member-body">
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

## Current Members
<div class="group-grid">
  {% for member in site.data.group.current %}
  <div class="member-card">
    <img src="{{ member.photolink | relative_url }}" alt="{{ member.name }}" class="member-photo" onerror="this.src='{{ '/assets/images/group/placeholder.jpg' | relative_url }}'">
    <div class="member-body">
      <h3>{{ member.name }}</h3>
      <p class="degree">{{ member.title }}</p>
      {% if member.desc %}
        <p class="desc">{{ member.desc }}</p>
      {% endif %}
      {% if member.pagelink %}
        <div class="spacer"></div>
        <a href="{{ member.pagelink }}" class="profile-link" target="_blank">Personal Page →</a>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

---

## Alumni
<div class="group-grid">
  {% for member in site.data.group.alumni %}
  <div class="member-card">
    <img src="{{ member.photolink | relative_url }}" alt="{{ member.name }}" class="member-photo" onerror="this.src='{{ '/assets/images/group/placeholder.jpg' | relative_url }}'">
    <div class="member-body">
      <h3>{{ member.name }}</h3>
      <p class="degree">{{ member.title }}</p>
      {% if member.desc %}
        <p class="desc">{{ member.desc }}</p>
      {% endif %}
      {% if member.pagelink %}
        <div class="spacer"></div>
        <a href="{{ member.pagelink }}" class="profile-link" target="_blank">Personal Page →</a>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>
