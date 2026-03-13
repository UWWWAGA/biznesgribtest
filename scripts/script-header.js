
document.addEventListener('DOMContentLoaded', () => {
  const burger    = document.getElementById('burgerBtn');
  const menu      = document.getElementById('mobileMenu');
  const closeBtn  = document.getElementById('closeMenu');
  const header    = document.getElementById('scrollHeader');

  if (!burger || !menu || !closeBtn || !header) {
    console.warn('Не все элементы меню найдены');
    return;
  }

  function openMenu() {
    menu.classList.add('active');
    burger.classList.add('active');           
    document.body.style.overflow = 'hidden';  
  }

  function closeMenu() {
    menu.classList.remove('active');
    burger.classList.remove('active');
    document.body.style.overflow = '';        
  }

  const mobileLinks = menu.querySelectorAll('a[href^="#"]');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  burger.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();                     
    closeMenu();
  });

  menu.addEventListener('click', (e) => {
    if (e.target === menu) {                  
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      closeMenu();
    }
  });

  const triggerPoint = 500; 
  window.addEventListener('scroll', () => {
    if (window.scrollY > triggerPoint) {
      header.classList.add('visible');
    } else {
      header.classList.remove('visible');
    }
  });
});