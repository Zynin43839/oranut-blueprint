// RAG-Diary portfolio: small progressive-enhancement script (no dependencies)
(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // mobile navigation
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'ปิดเมนู' : 'เปิดเมนู');
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // reveal on scroll
  const revealTargets = document.querySelectorAll(
    '.section-head, .role-card, .method-card, .shot-card, .diagram, .doc-group, .honest-note, .contact-card, .metric'
  );
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce && 'IntersectionObserver' in window) {
    revealTargets.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    revealTargets.forEach((el) => io.observe(el));
  }

  // diagram lightbox
  const dialog = document.getElementById('lightbox');
  const dialogImg = document.getElementById('lightbox-img');
  if (dialog && dialogImg) {
    document.querySelectorAll('.diagram').forEach((btn) => {
      btn.addEventListener('click', () => {
        const full = btn.getAttribute('data-full');
        const img = btn.querySelector('img');
        if (!full) return;
        dialogImg.src = full;
        dialogImg.alt = img ? img.alt : '';
        dialog.showModal();
      });
    });
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    const closeBtn = dialog.querySelector('.lightbox-close');
    if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());
  }
})();

// inline PDF reader for the document list
(() => {
  const modal = document.getElementById('pdf-modal');
  const frame = document.getElementById('pdf-modal-frame');
  const title = document.getElementById('pdf-modal-title');
  const external = document.getElementById('pdf-modal-external');
  const close = document.getElementById('pdf-modal-close');
  if (!modal || !frame) return;

  const open = (href, label) => {
    frame.src = href + '#view=FitH';
    title.textContent = label || 'เอกสาร';
    external.href = href;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    close.focus();
  };
  const shut = () => {
    modal.classList.remove('is-open');
    frame.src = 'about:blank';
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.doc-link').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const row = link.closest('.doc-row');
      const code = row ? row.querySelector('.doc-code')?.textContent : '';
      const name = row ? row.querySelector('.doc-name')?.textContent : '';
      open(link.getAttribute('href'), `${code} ${name}`.trim());
    });
  });

  close.addEventListener('click', shut);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) shut();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) shut();
  });
})();
