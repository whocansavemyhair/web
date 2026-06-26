---
layout: single
permalink: /join-us/
author_profile: false
classes: wide
sidebar: false
---

<div class="join-page">
  <section class="join-hero">
    <div class="join-hero-inner join-content">
      <h1>Join Us!</h1>
      <div class="join-hero-carousel" data-join-carousel aria-label="Lab cats">
        <div class="join-carousel-track">
          <img class="join-carousel-slide active" src="{{ '/assets/images/join-us/cat-1-centered.jpg' | relative_url }}?v=20260626-001" alt="Lab cat">
          <img class="join-carousel-slide" src="{{ '/assets/images/join-us/cat-2-centered.jpg' | relative_url }}?v=20260626-001" alt="Lab cat">
        </div>
        <div class="join-carousel-dots" aria-label="Select image">
          <button class="active" type="button" aria-label="Show image 1"></button>
          <button type="button" aria-label="Show image 2"></button>
        </div>
      </div>
    </div>
  </section>

  <section class="join-section join-content">
    <p>
      We are always looking for motivated students who are excited about building
      reliable, efficient, and human-centered intelligent systems. Our work connects
      AI, decision-making, collaborative intelligence, computing systems, transportation,
      public health, and optimization.
    </p>

    <p>
      The group is a good fit for students who enjoy formulating real problems,
      building computational methods, validating ideas with data, and communicating
      results clearly.
    </p>

    <h2>Research Areas</h2>
    <ul>
      <li>Decision-making for complex transportation, health, and societal systems</li>
      <li>Collaborative intelligence across humans, AI agents, and embodied systems</li>
      <li>Computing and intelligence scaling for efficient large-scale AI systems</li>
    </ul>

    <h2>Prospective PhD Students</h2>
    <p>
      Prospective PhD students should apply through the Johns Hopkins University
      graduate admissions process and describe how their interests connect with the
      lab's research directions.
    </p>

    <h2>Master's and Undergraduate Students</h2>
    <p>
      Current master's and undergraduate students are welcome to explore research
      projects in the lab. Prior experience in machine learning, optimization,
      systems, data science, or domain applications is helpful, but curiosity and
      consistency are the most important starting points.
    </p>
  </section>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('[data-join-carousel]');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.join-carousel-slide'));
  const dots = Array.from(carousel.querySelectorAll('.join-carousel-dots button'));
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
    timer = window.setInterval(() => showSlide(index + 1), 4200);
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
</script>
