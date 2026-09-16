// ==========================================================================
// DR. AFAF BEN ALI - INTERACTIVE SCRIPT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    // Close mobile menu on clicking any navigation link
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // 2. Active Link Scroll Highlighter
  const sections = document.querySelectorAll('section[id], header[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      if (current) {
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href) {
            if (href === `#${current}` || href.endsWith(`#${current}`)) {
              navLinks.forEach(l => l.classList.remove('active'));
              link.classList.add('active');
            }
          }
        });
      }
    });
  }

  // 3. Stats Number Counter Animation
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  function animateCounters() {
    const statsSection = document.getElementById('stats');
    if (!statsSection || animated) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.85) {
      animated = true;

      statNumbers.forEach(counter => {
        const targetText = counter.textContent.trim();
        let targetValue = 0;
        let prefix = '+';
        let suffix = '';

        if (targetText.includes('M')) {
          targetValue = 1;
          suffix = 'M';
        } else if (targetText.includes('+')) {
          targetValue = parseInt(targetText.replace('+', ''), 10);
        } else {
          targetValue = parseInt(targetText, 10);
        }

        let startValue = 0;
        const duration = 2000;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = targetValue / steps;

        const timer = setInterval(() => {
          startValue += increment;
          if (startValue >= targetValue) {
            startValue = targetValue;
            clearInterval(timer);
          }

          if (suffix === 'M') {
            counter.textContent = `${prefix}${Math.floor(startValue)}${suffix}`;
          } else {
            counter.textContent = `${prefix}${Math.floor(startValue)}`;
          }
        }, stepTime);
      });
    }
  }

  window.addEventListener('scroll', animateCounters);
  animateCounters(); // Initial check

  // 4. Newsletter Toast Notification
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletterInput');
      if (input && input.value.trim() !== '') {
        showToast('تم الاشتراك بنجاح في النشرة البريدية!');
        input.value = '';
      }
    });
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
    
    // Style toast dynamically
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '30px',
      left: '30px',
      background: 'linear-gradient(135deg, #FF66B2 0%, #E83E8C 100%)',
      color: '#ffffff',
      padding: '16px 28px',
      borderRadius: '999px',
      boxShadow: '0 12px 30px rgba(255, 91, 180, 0.4)',
      fontWeight: '700',
      fontSize: '1rem',
      zIndex: '10000',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transform: 'translateY(100px)',
      opacity: '0',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    });

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    }, 50);

    setTimeout(() => {
      toast.style.transform = 'translateY(100px)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

});
