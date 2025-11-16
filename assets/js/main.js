const toggleBtn = document.getElementById('mobile-menu-toggle');
const closeBtn = document.getElementById('close-mobile-menu');
const menu = document.getElementById('mobile-menu');
const overlay = document.querySelector('.overlay');

let isMenuOpen = false;

function openMenu() {
  menu.classList.remove('hidden');
  overlay.classList.remove('hidden');
  overlay.classList.add('open');
  document.body.classList.add('no-scroll');

  requestAnimationFrame(() => {
    menu.classList.add('show');
    isMenuOpen = true;
  });
}

function closeMenu() {
  menu.classList.remove('show');
  overlay.classList.remove('open');
  document.body.classList.remove('no-scroll');
  isMenuOpen = false;

  setTimeout(() => {
    menu.classList.add('hidden');
    overlay.classList.add('hidden'); 
  }, 300);
}

toggleBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!isMenuOpen) openMenu();
});

closeBtn?.addEventListener('click', closeMenu);
overlay?.addEventListener('click', closeMenu);

document.addEventListener('click', (e) => {
  if (isMenuOpen && !menu.contains(e.target) && !toggleBtn.contains(e.target)) {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    closeMenu();
  }
});

document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
      const dropdown = this.nextElementSibling;
      const icon = this.querySelector('.fa-chevron-down');
  
      dropdown.classList.toggle('show');
  
      icon.classList.toggle('rotate-180');
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    // Function to handle a dropdown
    function setupLanguageDropdown(buttonId, menuId, selectedId, wrapperId) {
      const langButton = document.getElementById(buttonId);
      const langMenu = document.getElementById(menuId);
      const selectedLang = document.getElementById(selectedId);
      const wrapper = document.getElementById(wrapperId);
  
      if (!langButton || !langMenu || !selectedLang || !wrapper) return;
  
      langButton.addEventListener("click", function (e) {
        e.stopPropagation();
        langMenu.classList.toggle("hidden");
      });
  
      langMenu.querySelectorAll("a[data-lang]").forEach((item) => {
        item.addEventListener("click", function (e) {
          e.preventDefault();
          const lang = this.getAttribute("data-lang");
          selectedLang.textContent = lang;
          langMenu.classList.add("hidden");
        });
      });
  
      document.addEventListener("click", function (e) {
        if (!wrapper.contains(e.target)) {
          langMenu.classList.add("hidden");
        }
      });
    }
    
    setupLanguageDropdown("language-button-desktop", "language-menu-desktop", "selected-language-desktop", "language-dropdown-desktop");
    setupLanguageDropdown("language-button-mobile", "language-menu-mobile", "selected-language-mobile", "language-dropdown-mobile");
    
    // Initialize animations
    setTimeout(animateCounters, 500);
    setTimeout(initTypewriter, 100);
});
// Hero Banner Animations
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                if (target >= 1000000) {
                    counter.textContent = (current / 1000000).toFixed(1) + 'M';
                } else if (target >= 1000) {
                    counter.textContent = (current / 1000).toFixed(0) + 'K+';
                } else {
                    counter.textContent = Math.ceil(current) + '%';
                }
                setTimeout(updateCounter, 30);
            } else {
                if (target >= 1000000) {
                    counter.textContent = (target / 1000000).toFixed(1) + 'M';
                } else if (target >= 1000) {
                    counter.textContent = (target / 1000).toFixed(0) + 'K+';
                } else {
                    counter.textContent = target + '%';
                }
            }
        };
        
        updateCounter();
    });
}

function initTypewriter() {
    const titles = [
        'Reduce. Reuse. Recycle.',
        'Clean Today. Green Future.',
        'Waste Less. Live More.'
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById('typewriter');
    
    if (!typewriterElement) {
        return;
    }
    
    
    function typeWriter() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentTitle.length) {
            typeSpeed = 3000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    // Start immediately
    typeWriter();
}

// Slogan swiper
if (document.querySelector('.slogan-swiper')) {
    const sloganSwiper = new Swiper('.slogan-swiper', {
        speed: 3000,
        centeredSlides: true,
        autoplay: {
            delay: 1,
        },
        loop: true,
        slidesPerView: 'auto',
        allowTouchMove: false,
        disableOnInteraction: true
    });
}

// category swiper
if (document.querySelector('.category-swiper')) {
    const categorySwiper = new Swiper('.category-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        ...(document.documentElement.dir === 'rtl' ? { rtl: true } : {}),
        speed: 500,
        navigation: {
          nextEl: ".category-arrow.swiper-button-next",
          prevEl: ".category-arrow.swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 24,
            },
        }
    });
  }

  // testimonial swiper
if (document.querySelector('.testimonial-swiper')) {
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        ...(document.documentElement.dir === 'rtl' ? { rtl: true } : {}),
        speed: 500,
        navigation: {
          nextEl: ".testimonial-arrow.swiper-button-next",
          prevEl: ".testimonial-arrow.swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
        }
    });
  }
  if (document.querySelector('.blog-swiper')) {
    const blogSwiper = new Swiper('.blog-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        ...(document.documentElement.dir === 'rtl' ? { rtl: true } : {}),
        speed: 500,
        navigation: {
          nextEl: ".blog-arrow.swiper-button-next",
          prevEl: ".blog-arrow.swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
  }


  // Custom Date Picker
function createCustomDatePicker() {
  document.querySelectorAll('input[type="date"]').forEach(input => {
    input.style.display = 'none';

    const container = document.createElement('div');
    container.className = 'custom-date-picker relative focus:ring-primary focus:border-primary w-full';

    const displayInput = Object.assign(document.createElement('input'), {
      type: 'text',
      className: input.className,
      placeholder: 'Select date',
      readOnly: true,
      style: 'cursor: pointer'
    });

    const dropdown = document.createElement('div');
    dropdown.className = 'absolute z-50 top-full left-0 w-full bg-white border border-gray-300 shadow-lg hidden rounded-lg';

    const calendar = document.createElement('div');
    calendar.className = 'p-3';
    dropdown.appendChild(calendar);
    container.append(displayInput, dropdown);
    input.parentNode.insertBefore(container, input);

    let currentDate = new Date(), selectedDate = null;

    const renderCalendar = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      calendar.innerHTML = `
                <div class="flex justify-between items-center mb-2">
                    <button class="prev-month flex items-center justify-center w-9 text-primary hover:bg-primary/10 rounded-md p-2"><i class="fas fa-chevron-left"></i></button>
                    <h3 class="font-semibold text-lg">${currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
                    <button class="next-month flex items-center justify-center w-9 text-primary hover:bg-primary/10 rounded-md p-2"><i class="fas fa-chevron-right"></i></button>
                </div>
                <div class="grid grid-cols-7 gap-1 text-center text-sm mb-1">
                    ${['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => `<div class="font-medium text-gray-600 p-2">${d}</div>`).join('')}
                </div>
                <div class="grid grid-cols-7 gap-1 text-center text-sm" id="calendar-days"></div>
            `;

      const daysContainer = calendar.querySelector('#calendar-days');
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      daysContainer.innerHTML = '<div class="p-2"></div>'.repeat(firstDay);

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        date.setHours(0, 0, 0, 0);
        const isToday = date.getTime() === today.getTime();
        const isSelected = selectedDate?.getTime() === date.getTime();
        const isPast = date < today;

        let classes = 'flex items-center justify-center p-1.5 leading-none transition-colors duration-300';
        if (isPast) {
          classes += ' text-gray-300 cursor-not-allowed';
        } else {
          classes += ' cursor-pointer hover:bg-primary hover:text-white rounded-md';
          if (isToday && !isSelected) classes += ' bg-primary/20 font-semibold text-primary border-2 border-primary';
          if (isSelected) classes += ' bg-primary text-white font-semibold';
        }

        const dayEl = document.createElement('div');
        dayEl.className = classes;
        dayEl.textContent = day;
        if (!isPast) {
          dayEl.dataset.date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        }
        daysContainer.appendChild(dayEl);
      }

      calendar.querySelector('.prev-month').onclick = e => {
        e.stopPropagation();
        currentDate.setMonth(month - 1);
        renderCalendar();
      };
      calendar.querySelector('.next-month').onclick = e => {
        e.stopPropagation();
        currentDate.setMonth(month + 1);
        renderCalendar();
      };

      daysContainer.onclick = e => {
        const dateStr = e.target.dataset.date;
        if (dateStr) {
          selectedDate = new Date(dateStr);
          selectedDate.setHours(0, 0, 0, 0);
          input.value = dateStr;
          displayInput.value = selectedDate.toLocaleDateString();
          dropdown.classList.add('hidden');
          renderCalendar();
        }
      };
    };

    displayInput.onclick = e => {
      e.stopPropagation();
      dropdown.classList.toggle('hidden');
      if (!dropdown.classList.contains('hidden')) renderCalendar();
    };

    calendar.onclick = e => e.stopPropagation();
    document.addEventListener('click', e => {
      if (!container.contains(e.target)) dropdown.classList.add('hidden');
    });

    // Optional: Handle calendar icon click
    const icon = input.parentNode.querySelector('#date-picker-icon');
    if (icon) {
      icon.addEventListener('click', e => {
        e.stopPropagation();
        displayInput.click();
      });
    }
  });
}
createCustomDatePicker();

// faq js
  document.querySelectorAll('.faq-toggle').forEach(btn => {
      btn.onclick = () => {
          const content = btn.nextElementSibling;
          const icon = btn.querySelector('.faq-icon');
          const isCurrentlyOpen = !content.classList.contains('hidden');
          
          // Close all FAQs
          document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
          document.querySelectorAll('.faq-icon').forEach(i => i.className = 'faq-icon fas fa-plus');
          
          if (!isCurrentlyOpen) {
              content.classList.remove('hidden');
              icon.className = 'faq-icon fas fa-minus';
          }
      }
  });
 

// team swiper
if (document.querySelector('.team-swiper')) {
  const teamSwiper = new Swiper('.team-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      // loop: true,
      ...(document.documentElement.dir === 'rtl' ? { rtl: true } : {}),
      speed: 500,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
          640: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          1024: {
              slidesPerView: 3,
              spaceBetween: 24,
          },
          1280: {
              slidesPerView: 4,
              spaceBetween: 24,
          },
      }
  });
}


// service-details tab functionality
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('border-primary', 'text-primary');
        btn.classList.add('border-transparent', 'text-gray-800');
    });
    document.getElementById(tabId).classList.remove('hidden');
    const activeBtn = document.getElementById('tab-' + tabId);
    activeBtn.classList.add('border-primary', 'text-primary');
    activeBtn.classList.remove('border-transparent', 'text-gray-800');
}

// Review system
document.addEventListener('DOMContentLoaded', () => {
    const starRating = document.getElementById('star-rating');
    if (!starRating) return;
    
    const stars = starRating.querySelectorAll('i');
    const ratingInput = document.getElementById('review-rating');
    const form = document.getElementById('review-form');
    const success = document.getElementById('review-success');
    let rating = 0;

    const updateStars = (count) => {
        stars.forEach((star, i) => {
            star.className = i < count ? 'fas fa-star text-2xl text-yellow-400 cursor-pointer' : 'fas fa-star text-2xl text-gray-300 cursor-pointer';
        });
    };

    stars.forEach((star, i) => {
        star.onclick = () => {
            rating = i + 1;
            ratingInput.value = rating;
            updateStars(rating);
        };
        star.onmouseenter = () => updateStars(i + 1);
    });

    starRating.onmouseleave = () => updateStars(rating);

    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            if (!rating) return alert('Please select a rating');
            success.classList.remove('hidden');
            form.reset();
            rating = 0;
            updateStars(0);
            setTimeout(() => success.classList.add('hidden'), 3000);
        };
    }
});

