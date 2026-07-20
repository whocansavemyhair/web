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
          Please feel free to contact Prof. Hao Frank Yang if your interests align with
          our work.
        </p>
      </div>
    </div>
  </section>

  <section class="join-sweeties-band">
    <div class="join-title-row join-content">
      <h2>Sweeties</h2>
    </div>
    <div class="join-sweeties join-content">
      <div class="join-sweeties-copy">
        <p>
          Our unofficial morale team.
        </p>
        <p>
          We welcome everyone to bring their own sweeties and join our growing lab family.
        </p>
      </div>

      <div class="join-sweeties-carousel" data-join-carousel aria-label="Lab sweeties">
        <div class="join-carousel-track">
          <img class="join-carousel-slide active" src="{{ '/assets/images/join-us/cat-1-centered.jpg' | relative_url }}?v=20260630-001" alt="Lab sweetie">
          <img class="join-carousel-slide" src="{{ '/assets/images/join-us/cat-2-centered.jpg' | relative_url }}?v=20260630-001" alt="Lab sweetie">
          <img class="join-carousel-slide" src="{{ '/assets/images/join-us/cat-3-centered.jpg' | relative_url }}?v=20260714-001" alt="Lab sweeties on a cat tree">
        </div>
        <div class="join-carousel-dots" aria-label="Select image">
          <button class="active" type="button" aria-label="Show sweetie 1"></button>
          <button type="button" aria-label="Show sweetie 2"></button>
          <button type="button" aria-label="Show sweetie 3"></button>
        </div>
      </div>
    </div>
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
