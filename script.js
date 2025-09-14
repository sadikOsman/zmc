(function(){
  // Set current year
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Hide navigation when scrolling past hero section
  const header = document.querySelector('header');
  const hero = document.querySelector('.hero');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heroHeight = hero.offsetHeight;
    
    if (scrollTop > heroHeight) {
      // Scrolled past hero - hide navigation
      header.classList.add('hidden');
    } else {
      // Still in hero section - show navigation
      header.classList.remove('hidden');
    }
  });

  // Sidebar toggle
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('mobileSidebar');
  const overlay = document.getElementById('overlay');

  function openSidebar(){
    sidebar.classList.add('show');
    overlay.classList.add('show');
    hamburger.setAttribute('aria-expanded','true');
    overlay.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  }
  function closeSidebar(){
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    hamburger.setAttribute('aria-expanded','false');
    overlay.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  }

  if(hamburger){
    hamburger.addEventListener('click', ()=>{
      if(sidebar.classList.contains('show')) closeSidebar(); else openSidebar();
    });
  }
  if(overlay){ overlay.addEventListener('click', closeSidebar); }
  sidebar?.querySelectorAll('a').forEach(a=> a.addEventListener('click', closeSidebar));
})();
