---
layout: single
permalink: /publications/
author_profile: false
sidebar: false
classes: wide
---

<div class="pub-filter-bar">
  <div class="filter-buttons">
    <button data-type="all" class="active">All</button>
    <button data-type="journal">Journal</button>
    <button data-type="conference">Conference</button>
  </div>
  <input type="text" id="pubSearch" placeholder="Search by title...">
</div>

<div id="pubList" class="pub-list">
  {% assign pubs = site.data.publications | sort: "year" | reverse %}
  {% for pub in pubs %}
  <div class="pub-item" data-type="{{ pub.type }}">
    <div class="pub-year">{{ pub.year }}</div>
    <div class="pub-content">
      <h3 class="pub-title">{{ pub.title }}</h3>
      <p class="pub-authors">{{ pub.authors }}</p>
      <p class="pub-venue"><em>{{ pub.venue }}</em></p>
      <p class="pub-links">
        {% if pub.pdf and pub.pdf != "" %}
        <a href="{{ pub.pdf }}" target="_blank">[PDF]</a>
        {% endif %}
        {% if pub.doi and pub.doi != "" %}
        <a href="{{ pub.doi }}" target="_blank">[DOI]</a>
        {% endif %}
      </p>
    </div>
  </div>
  {% endfor %}
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-buttons button");
  const searchInput = document.getElementById("pubSearch");
  const pubs = document.querySelectorAll(".pub-item");

  function filterPublications() {
    const activeType = document.querySelector(".filter-buttons .active").dataset.type;
    const searchTerm = searchInput.value.toLowerCase();

    pubs.forEach(pub => {
      const typeMatch = (activeType === "all") || (pub.dataset.type === activeType);
      const titleMatch = pub.querySelector(".pub-title").innerText.toLowerCase().includes(searchTerm);
      pub.style.display = (typeMatch && titleMatch) ? "flex" : "none";
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterPublications();
    });
  });

  searchInput.addEventListener("input", filterPublications);
});
</script>
