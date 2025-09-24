// Toggle Menu
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
}

 // Simple slider JS
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider-images img');
    function showSlide(index) {
      slides.forEach((img, i) => img.classList.toggle('active', i === index));
    }
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
    setInterval(nextSlide, 3500);
// Form Validation
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields");
    return false;
  }
  alert("Message Sent Successfully!");
  return true;
}
