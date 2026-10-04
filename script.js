document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (event) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const pageShell = document.querySelector('.page-shell');
if (pageShell) {
  pageShell.style.opacity = '0.95';
  pageShell.style.transition = 'opacity 0.6s ease-in-out';
}

const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

const lookbookTiles = document.querySelectorAll('.lookbook-tile');
lookbookTiles.forEach((tile) => {
  tile.addEventListener('mouseenter', () => {
    tile.style.filter = 'brightness(1.1)';
  });

  tile.addEventListener('mouseleave', () => {
    tile.style.filter = 'brightness(1)';
  });
});

const newsletterButton = document.querySelector('.newsletter-actions button');
if (newsletterButton) {
  newsletterButton.addEventListener('click', () => {
    window.location.href = 'mailto:adredluxe@gmail.com';
  });
}

