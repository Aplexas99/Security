document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navUl = document.querySelector("nav ul");

  hamburger.addEventListener("click", function () {
    navUl.classList.toggle("active");
    hamburger.classList.toggle("open");
  });


  const form = document.getElementById('form');
  const result = document.getElementById('result');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."
  
      fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: json
          })
          .then(async (response) => {
              let json = await response.json();
              if (response.status == 200) {
                  result.innerHTML = "Form submitted successfully";
              } else {
                  console.log(response);
                  result.innerHTML = json.message;
              }
          })
          .catch(error => {
              console.log(error);
              result.innerHTML = "Something went wrong!";
          })
          .then(function() {
              form.reset();
              setTimeout(() => {
                  result.style.display = "none";
              }, 3000);
          });
  });

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