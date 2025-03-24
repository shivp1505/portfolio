// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
  
  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Modal handling
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      document.getElementById(`modal-${projectId}`).classList.add('open');
    });
  });
  
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').classList.remove('open');
    });
  });
  
  window.addEventListener('click', (e) => {
    document.querySelectorAll('.modal').forEach(modal => {
      if (e.target === modal) modal.classList.remove('open');
    });
  });
  
  
  
// Mouse Events  
  const navbar = document.querySelector('.navbar');
  let isMouseNearTop = false;
  
  window.addEventListener('mousemove', (e) => {
    // If mouse is within 100px from top
    if (e.clientY < 100) {
      if (!isMouseNearTop) {
        navbar.classList.remove('hidden');
        isMouseNearTop = true;
      }
    } else {
      if (isMouseNearTop) {
        navbar.classList.add('hidden');
        isMouseNearTop = false;
      }
    }
  });

// Contact Modal 
  document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('contactModal').classList.add('show');
  });
  
  document.querySelector('.close-modal').addEventListener('click', function () {
    document.getElementById('contactModal').classList.remove('show');
  });
  
  window.addEventListener('click', function (e) {
    const modal = document.getElementById('contactModal');
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
  

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    emailjs.sendForm("service_8582tpp", "template_tonxzab", this)
      .then(() => {
        alert("✅ Message sent successfully!");
      })
      .catch((error) => {
        console.error("❌ Error sending email:", error);
        alert("Oops! Something went wrong.");
      });
  });



  

  
  
  