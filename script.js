const toggleBtn = document.getElementById('navToggle');
  const leftLinks = document.querySelector('.left-links');
  const rightLinks = document.querySelector('.right-links');

  toggleBtn.addEventListener('click', () => {
    leftLinks.classList.toggle('show');
    rightLinks.classList.toggle('show');
  });  




  function scrollSlider(direction) {
  const track = document.getElementById('testimonialTrack');
  const cardWidth = track.querySelector('.testimonial-card').offsetWidth + 20; 
   track.scrollLeft += direction * cardWidth;
}

document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    parent.classList.toggle('active');
  });
});


 const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      successMessage.classList.remove('hidden');
      form.reset();
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 4000);
    });
