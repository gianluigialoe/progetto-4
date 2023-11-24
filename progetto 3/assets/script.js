window.addEventListener('scroll', function() {
    var header = document.getElementById('myHeader');
    if (window.scrollY > 800) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });