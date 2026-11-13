---
layout: single
permalink: /join-us/
author_profile: false
classes: wide
sidebar: false
---

<div class="join-page">
  <section class="join-hero">
    <div class="join-hero-layout join-content">
      <div class="join-team-carousel" data-join-carousel aria-label="Yang Lab team photos">
        <div class="join-carousel-track">
          {% for p in site.data.group.life %}
            {% assign filename = p.src | default: p.file %}
            <img class="join-carousel-slide{% if forloop.first %} active{% endif %}" src="{{ '/assets/images/group/life/' | append: filename | relative_url }}?v=20260630-001" alt="{{ p.alt | default: 'Yang Lab team moment' }}">
          {% endfor %}
        </div>
        <div class="join-carousel-dots" aria-label="Select image">
          {% for p in site.data.group.life %}
            <button class="{% if forloop.first %}active{% endif %}" type="button" aria-label="Show team photo {{ forloop.index }}"></button>
          {% endfor %}
        </div>
      </div>

      <div class="join-copy">
        <h1>Meet the Team!</h1>
        <p class="join-lead">
          Are you seeking a challenging yet rewarding research experience in large language
          models and intelligent systems? We invite highly motivated students and researchers
          to become part of the Yang Research Group at Johns Hopkins University.
        </p>

        <p>
          Our work spans the three directions described on the Research page:
          decision-making, agentic AI and collaborative intelligence, and computing and
          intelligence scaling. Across these directions, we are especially interested in
          LLM-centered methods that are grounded in real-world domains such as transportation,
          public health, behavior, and complex societal systems.
        </p>

        <p>
          We welcome undergraduate and master's students who would like to explore
          research, as well as prospective PhD applicants interested in joining the lab.
          Please feel free to contact Dr. Hao Frank Yang (<a href="mailto:haofrankyang@jhu.edu">haofrankyang@jhu.edu</a>) if your interests align with our work.
        </p>
      </div>
    </div>
  </section>

  <section class="join-sweeties-band">
    <div class="join-title-row join-content">
      <h2>Our Memory</h2>
    </div>
    <section id="pet-gallery" class="pet-gallery join-content" aria-labelledby="pet-gallery-title">
      <h3 id="pet-gallery-title" class="join-memory-subtitle">Pets</h3>
      <div class="memory-exhibit memory-exhibit--light" data-memory-carousel aria-roledescription="carousel" aria-label="Pets of our lab members">
        <div class="memory-story">
          <div class="memory-captions">
            <div class="memory-caption"><p>Meet the pets of our lab members. You are welcome to bring your pets along to meet the team.</p></div>
          </div>
          <div class="memory-controls">
            <span class="memory-count">01 / 09</span>
            <div class="memory-arrows">
              <button type="button" class="memory-prev" aria-label="Previous pet photograph">&larr;</button>
              <button type="button" class="memory-next" aria-label="Next pet photograph">&rarr;</button>
            </div>
          </div>
        </div>
        <div class="memory-track" tabindex="0" aria-label="Pet photo gallery. Swipe horizontally or use the arrow keys.">
          <figure class="memory-slide" aria-label="1 of 9: Cat belonging to a lab member">
            <a href="{{ '/assets/images/join-us/cat-1-centered.jpg' | relative_url }}?v=20260630-001" target="_blank" rel="noopener" aria-label="View full photograph: Cat belonging to a lab member"><img src="{{ '/assets/images/join-us/cat-1-centered.jpg' | relative_url }}?v=20260630-001" alt="Cat belonging to a lab member" loading="lazy" decoding="async"></a>
          </figure>
          <figure class="memory-slide" aria-label="2 of 9: Cat belonging to a lab member">
            <a href="{{ '/assets/images/join-us/cat-2-centered.jpg' | relative_url }}?v=20260630-001" target="_blank" rel="noopener" aria-label="View full photograph: Cat belonging to a lab member"><img src="{{ '/assets/images/join-us/cat-2-centered.jpg' | relative_url }}?v=20260630-001" alt="Cat belonging to a lab member" loading="lazy" decoding="async"></a>
          </figure>
          <figure class="memory-slide" aria-label="3 of 9: Cats on a cat tree">
            <a href="{{ '/assets/images/join-us/cat-3-centered.jpg' | relative_url }}?v=20260714-001" target="_blank" rel="noopener" aria-label="View full photograph: Cats on a cat tree"><img src="{{ '/assets/images/join-us/cat-3-centered.jpg' | relative_url }}?v=20260714-001" alt="Cats on a cat tree" loading="lazy" decoding="async"></a>
          </figure>
          <figure class="memory-slide" aria-label="4 of 9: Loki the corgi sitting in a car">
            <a href="{{ '/assets/images/join-us/Loki1.jpg' | relative_url }}?v=20260905-001" target="_blank" rel="noopener" aria-label="View full photograph: Loki the corgi sitting in a car"><img src="{{ '/assets/images/join-us/Loki1.jpg' | relative_url }}?v=20260905-001" alt="Loki the corgi sitting in a car" loading="lazy" decoding="async"></a>
          </figure>
          <figure class="memory-slide" aria-label="5 of 9: Loki the corgi relaxing upside down">
            <a href="{{ '/assets/images/join-us/Loki2.jpg' | relative_url }}?v=20260905-001" target="_blank" rel="noopener" aria-label="View full photograph: Loki the corgi relaxing upside down"><img src="{{ '/assets/images/join-us/Loki2.jpg' | relative_url }}?v=20260905-001" alt="Loki the corgi relaxing upside down" loading="lazy" decoding="async"></a>
          </figure>
          <figure class="memory-slide" aria-label="6 of 9: Outdoor portrait of Loki the corgi">
            <a href="{{ '/assets/images/join-us/Loki3.jpg' | relative_url }}?v=20260905-001" target="_blank" rel="noopener" aria-label="View full photograph: Outdoor portrait of Loki the corgi"><img src="{{ '/assets/images/join-us/Loki3.jpg' | relative_url }}?v=20260905-001" alt="Outdoor portrait of Loki the corgi" loading="lazy" decoding="async"></a>
          </figure>
          <figure class="memory-slide" aria-label="7 of 9: Loki the corgi holding a family celebration sign">
            <a href="{{ '/assets/images/join-us/Loki4.jpg' | relative_url }}?v=20260905-001" target="_blank" rel="noopener" aria-label="View full photograph: Loki the corgi holding a family celebration sign"><img src="{{ '/assets/images/join-us/Loki4.jpg' | relative_url }}?v=20260905-001" alt="Loki the corgi holding a family celebration sign" loading="lazy" decoding="async"></a>
          </figure>
          <figure class="memory-slide" aria-label="8 of 9: Loki the corgi resting by a kitchen counter">
            <a href="{{ '/assets/images/join-us/Loki5.jpg' | relative_url }}?v=20260905-001" target="_blank" rel="noopener" aria-label="View full photograph: Loki the corgi resting by a kitchen counter"><img src="{{ '/assets/images/join-us/Loki5.jpg' | relative_url }}?v=20260905-001" alt="Loki the corgi resting by a kitchen counter" loading="lazy" decoding="async"></a>
          </figure>
          <figure class="memory-slide" aria-label="9 of 9: Close-up of Loki the corgi outdoors">
            <a href="{{ '/assets/images/join-us/Loki6.jpg' | relative_url }}?v=20260905-001" target="_blank" rel="noopener" aria-label="View full photograph: Close-up of Loki the corgi outdoors"><img src="{{ '/assets/images/join-us/Loki6.jpg' | relative_url }}?v=20260905-001" alt="Close-up of Loki the corgi outdoors" loading="lazy" decoding="async"></a>
          </figure>
        </div>
      </div>
    </section>
    {% include memory-photo-wall.html %}
    <section id="life-interests-gallery" class="life-interests join-content" aria-labelledby="life-interests-title">
      <h3 id="life-interests-title" class="join-memory-subtitle">Life and interests</h3>
      <div class="life-slider" data-memory-carousel aria-roledescription="carousel" aria-label="Life and interests photographs">
        <div class="memory-track" tabindex="0" aria-label="Swipe horizontally or use the arrow keys">
          {% for photo in site.data.life_interests %}
          <figure class="memory-slide" aria-label="{{ forloop.index }} of {{ site.data.life_interests.size }}: {{ photo.title | escape }}">
            <a href="{{ photo.image | relative_url }}" target="_blank" rel="noopener" aria-label="View full photograph: {{ photo.title | escape }}">
              <img src="{{ photo.image | relative_url }}" alt="{{ photo.alt | escape }}" loading="lazy" decoding="async">
            </a>
          </figure>
          {% endfor %}
        </div>
        <div class="memory-controls">
          <button type="button" class="memory-prev" aria-label="Previous photograph">&larr;</button>
          <span class="memory-count">01 / {% if site.data.life_interests.size < 10 %}0{% endif %}{{ site.data.life_interests.size }}</span>
          <button type="button" class="memory-next" aria-label="Next photograph">&rarr;</button>
        </div>
      </div>
    </section>
    <script src="{{ '/assets/js/memory-gallery.js?v=20261110-001' | relative_url }}" defer></script>
  </section>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-join-carousel]').forEach(carousel => {
    const slides = Array.from(carousel.querySelectorAll('.join-carousel-slide'));
    const dots = Array.from(carousel.querySelectorAll('.join-carousel-dots button'));
    if (!slides.length) return;

    let index = 0;
    let timer;

    function showSlide(nextIndex){
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('active', slideIndex === index);
      });
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === index);
      });
    }

    function start(){
      window.clearInterval(timer);
      timer = window.setInterval(() => showSlide(index + 1), 4600);
    }

    dots.forEach((dot, dotIndex) => {
      dot.addEventListener('click', () => {
        showSlide(dotIndex);
        start();
      });
    });

    carousel.addEventListener('mouseenter', () => window.clearInterval(timer));
    carousel.addEventListener('mouseleave', start);
    start();
  });
});
</script>
