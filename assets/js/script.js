    // ----- navbar toggle -----
    function toggleMobileMenu() {
      const menu = document.getElementById('mobileMenu');
      const icon = document.getElementById('menuIcon');
      const isHidden = menu.classList.contains('hidden');

      if (isHidden) {
        // Open Menu
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        
        // Switch Icon to Close (X)
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        icon.style.transform = 'rotate(90deg)';
      } else {
        // Close Menu
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        
        // Switch Icon back to Bars
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        icon.style.transform = 'rotate(0deg)';
      }
    }

    // ------ Enquiry Form Open----
    function toggleModal() {
      const modal = document.getElementById('enquiryModal');
      const content = document.getElementById('modalContent');
      const isHidden = modal.classList.contains('hidden');

      if (isHidden) {
        modal.classList.remove('hidden');
        document.body.classList.add('modal-active');
        setTimeout(() => {
          content.classList.replace('scale-95', 'scale-100');
          content.classList.replace('opacity-0', 'opacity-100');
        }, 10);
      } else {
        content.classList.replace('scale-100', 'scale-95');
        content.classList.replace('opacity-100', 'opacity-0');
        setTimeout(() => {
          modal.classList.add('hidden');
          document.body.classList.remove('modal-active');
        }, 200);
      }
    }
    // ------ from Handler -------
    function handleFormSubmit(e) {
      e.preventDefault();
      const btn = document.getElementById('submitBtn');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Transmitting...';
      btn.disabled = true;

      setTimeout(() => {
        document.getElementById('contactForm').classList.add('hidden');
        document.getElementById('successMsg').classList.remove('hidden');
      }, 1500);
    }

    // ---------- Gallery -------
    function filterGallery(category) {
      const items = document.querySelectorAll('.gallery-item');
      const buttons = document.querySelectorAll('.filter-btn');

      buttons.forEach(btn => {
        btn.classList.remove('active', 'bg-slate-950', 'text-white');
        btn.classList.add('bg-white', 'text-slate-500');
      });

      event.currentTarget.classList.add('active', 'bg-slate-950', 'text-white');

      items.forEach(item => {
        item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        if (category === 'all' || item.classList.contains(category)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => { item.style.display = 'none'; }, 400);
        }
      });
    }
    function openLightbox(imgSrc, caption) {
      const lb = document.getElementById('lightbox');
      document.getElementById('lightboxImg').src = imgSrc;
      document.getElementById('lightboxCaption').innerText = caption;
      lb.classList.remove('hidden');
      lb.classList.add('flex', 'fade-in');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      document.getElementById('lightbox').classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    // ------- Tabs -----
    function switchBaseTab(tabId) {
      document.querySelectorAll('.base-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.base-tab').forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'shadow-lg');
        b.classList.add('text-slate-500');
      });

      document.getElementById('content-' + tabId).classList.remove('hidden');
      document.getElementById('content-' + tabId).classList.add('fade-in');
      
      const activeBtn = document.getElementById('tab-' + tabId);
      activeBtn.classList.add('bg-blue-600', 'text-white', 'shadow-lg');
    }

    // ---- Swiper Slider -------
    document.addEventListener('DOMContentLoaded', () => {
      new Swiper('.compactDeploymentSwiper', {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 12,
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        navigation: {
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }
      });
    });
