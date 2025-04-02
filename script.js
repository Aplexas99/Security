document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navUl = document.querySelector("nav ul");

  hamburger.addEventListener("click", function () {
    navUl.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !message) {
      alert("Please fill out all fields before sending.");
      return;
    }

    window.location.href = `mailto:antonio@customisedcloud.hr?subject=Contact%20Form&body=Name:%20${name}%0AEmail:%20${email}%0A%0A${message}`;
  }

  window.sendEmail = sendEmail;

  const aboutContent = document.querySelector('.about-content');
  const serviceCards = document.querySelectorAll('.service-card');
  const quoteSection = document.querySelector('.quote-section');
  const serviceBoxes = document.querySelectorAll('.service-box');
  const assessmentContent = document.querySelector('.assessment-content');
  const assessmentForm = document.querySelector('.assessment-form');
  
  if (aboutContent) aboutContent.classList.add('fade-in');
  
  serviceCards.forEach((card, index) => {
    card.classList.add('fade-in');
    card.classList.add(`fade-in-delay-${index + 1}`);
  });
  
  if (quoteSection) quoteSection.classList.add('fade-in');
  
  serviceBoxes.forEach((box, index) => {
    box.classList.add('fade-in');
    box.classList.add(`fade-in-delay-${index % 4 + 1}`);
  });
  
  if (assessmentContent) assessmentContent.classList.add('fade-in-left');
  if (assessmentForm) assessmentForm.classList.add('fade-in-right');
  
  const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null, 
    threshold: 0.15,
    rootMargin: '-50px'
  });
  
  fadeElements.forEach(element => {
    observer.observe(element);
  });

  document.addEventListener('click', function(event) {
    const isClickInside = navUl.contains(event.target) || hamburger.contains(event.target);
    
    if (!isClickInside && navUl.classList.contains('active')) {
      navUl.classList.remove('active');
      hamburger.classList.remove('open');
    }
  });
});