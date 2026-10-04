* {
  box-sizing: border-box;
}

:root {
  --bg: #0c0d10;
  --bg-soft: #16181d;
  --panel: rgba(22, 24, 29, 0.9);
  --panel-strong: #111317;
  --card: #191c22;
  --line: rgba(255, 255, 255, 0.08);
  --text: #f3f3f3;
  --muted: #a8acb4;
  --silver: #d7dfe8;
  --gold: #c7a97a;
  --shadow: 0 30px 60px rgba(0, 0, 0, 0.45);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top, rgba(199, 169, 122, 0.17), transparent 30%),
    linear-gradient(180deg, #090a0d 0%, #0c0d10 18%, #0d0e12 100%);
  color: var(--text);
  font-family: "Inter", sans-serif;
}

img {
  max-width: 100%;
  display: block;
}

button,
input {
  font: inherit;
}

.page-shell {
  width: min(1280px, calc(100% - 40px));
  margin: 28px auto 50px;
  background: rgba(12, 13, 16, 0.8);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.topbar,
.footer,
.hero,
.featured,
.lookbook,
.artists,
.newsletter {
  padding-left: clamp(20px, 4vw, 60px);
  padding-right: clamp(20px, 4vw, 60px);
}

.topbar,
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90px;
  border-bottom: 1px solid var(--line);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  font-family: "Cormorant Garamond", serif;
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--gold);
}

.brand-name {
  letter-spacing: 0.2rem;
  font-size: 0.82rem;
  text-transform: uppercase;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 26px;
}

.main-nav a,
.footer-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.75rem;
  letter-spacing: 0.16rem;
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.main-nav a:hover,
.footer-links a:hover,
.inline-link:hover {
  color: var(--text);
}

.nav-cta,
.btn,
.newsletter-actions button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 24px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  font-size: 0.72rem;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  cursor: pointer;
}

.nav-cta:hover,
.btn:hover,
.newsletter-actions button:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.3);
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;
  min-height: 720px;
  padding-top: 50px;
  padding-bottom: 50px;
}

.eyebrow {
  margin: 0 0 16px;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.18rem;
  font-size: 0.72rem;
}

.hero-copy h1,
.section-heading h2,
.newsletter-panel h2 {
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  font-weight: 600;
  line-height: 0.92;
}

.hero-copy h1 {
  font-size: clamp(4rem, 8vw, 8rem);
  letter-spacing: -0.06em;
}

.hero-copy h1 span {
  display: block;
  color: var(--silver);
}

.subtitle {
  max-width: 560px;
  margin-top: 22px;
  color: var(--muted);
  font-size: 1.02rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 28px;
}

.btn-primary {
  background: linear-gradient(135deg, #f2ebde 0%, #cba878 100%);
  color: #111;
  border-color: transparent;
  font-weight: 700;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.02);
}

.hero-metrics {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  padding: 0;
  margin: 40px 0 0;
}

.hero-metrics li {
  min-width: 120px;
}

.hero-metrics strong {
  display: block;
  font-size: 2.2rem;
  font-family: "Cormorant Garamond", serif;
  color: var(--text);
}

.hero-metrics span {
  color: var(--muted);
  font-size: 0.75rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
}

.hero-visual {
  position: relative;
  display: grid;
  place-items: center;
  height: 670px;
}

.visual-card {
  border: 1px solid var(--line);
  background: rgba(15, 16, 20, 0.8);
  box-shadow: var(--shadow);
}

.card-main {
  position: relative;
  width: min(420px, 90%);
  height: 590px;
  padding: 22px;
  overflow: hidden;
}

.card-label {
  position: absolute;
  top: 22px;
  left: 22px;
  z-index: 2;
  color: var(--silver);
  letter-spacing: 0.18rem;
  font-size: 0.7rem;
  text-transform: uppercase;
}

.portrait {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: contrast(1.12) saturate(1.06);
}

.portrait-one {
  background:
    linear-gradient(180deg, rgba(12, 13, 16, 0.18), rgba(12, 13, 16, 0.5)),
    url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat;
}

.card-float {
  position: absolute;
  right: 0;
  bottom: 26px;
  display: grid;
  place-items: center;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(17, 19, 23, 0.9);
  color: var(--silver);
  font-size: 0.8rem;
  letter-spacing: 0.18rem;
  text-transform: uppercase;
}

.featured,
.lookbook,
.artists,
.newsletter {
  padding-top: 26px;
  padding-bottom: 26px;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
}

.section-heading h2,
.newsletter-panel h2 {
  font-size: clamp(2.5rem, 5vw, 4.2rem);
}

.product-grid,
.artist-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.product-card,
.artist-card {
  overflow: hidden;
  border: 1px solid var(--line);
  background: rgba(19, 21, 27, 0.9);
}

.product-image,
.artist-image {
  height: 360px;
  background-size: cover;
  background-position: center;
}

.image-one {
  background:
    linear-gradient(180deg, rgba(8, 9, 11, 0.1), rgba(8, 9, 11, 0.5)),
    url("https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.image-two {
  background:
    linear-gradient(180deg, rgba(8, 9, 11, 0.1), rgba(8, 9, 11, 0.5)),
    url("https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.image-three {
  background:
    linear-gradient(180deg, rgba(8, 9, 11, 0.1), rgba(8, 9, 11, 0.5)),
    url("https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.product-info,
.artist-info {
  padding: 18px 18px 22px;
}

.product-info p,
.artist-info p {
  margin: 0;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  font-size: 0.7rem;
}

.product-info h3,
.artist-info h3 {
  margin: 12px 0 0;
  font-size: clamp(1.5rem, 1.5vw, 2.1rem);
  font-weight: 600;
}

.meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 18px;
  color: var(--muted);
  font-size: 0.8rem;
}

.meta-row strong {
  color: var(--text);
  font-size: 1rem;
}

.split {
  align-items: center;
}

.inline-link {
  color: var(--silver);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.14rem;
  font-size: 0.72rem;
}

.lookbook-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr 1fr;
  grid-template-rows: 260px 220px;
  gap: 18px;
}

.lookbook-tile {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  background-size: cover;
  background-position: center;
}

.lookbook-tile span {
  position: absolute;
  left: 18px;
  bottom: 18px;
  display: inline-block;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(15, 16, 20, 0.42);
  color: var(--silver);
  font-size: 0.75rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}

.tile-one {
  grid-row: span 2;
  background: url("https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80") center/cover no-repeat;
}

.tile-two {
  background: url("https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.tile-three {
  background: url("https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.tile-four {
  grid-column: 2 / span 2;
  background: url("https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat;
}

.artist-one {
  background: url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.artist-two {
  background: url("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.artist-three {
  background: url("https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.artist-info p {
  margin-top: 12px;
  line-height: 1.6;
  color: var(--muted);
  letter-spacing: 0.08rem;
  text-transform: none;
}

.newsletter-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: clamp(24px, 4vw, 36px);
  border: 1px solid var(--line);
  background: linear-gradient(135deg, rgba(255,255,255,0.02), rgba(199,169,122,0.08));
}

.newsletter-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  width: min(480px, 100%);
}

.newsletter-actions input {
  flex: 1 1 auto;
  min-height: 48px;
  padding: 0 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(9, 10, 12, 0.7);
  color: var(--text);
}

.newsletter-actions button {
  min-width: 160px;
  background: linear-gradient(135deg, #f2ebde 0%, #cba878 100%);
  border-color: transparent;
  color: #111;
  font-weight: 700;
}

.footer {
  border-top: 1px solid var(--line);
  border-bottom: none;
  min-height: 88px;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 22px;
}

.footer p {
  color: var(--muted);
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

@media (max-width: 980px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 30px;
  }

  .product-grid,
  .artist-grid {
    grid-template-columns: 1fr;
  }

  .lookbook-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 240px 220px 220px;
  }

  .tile-one {
    grid-row: auto;
    grid-column: 1 / span 2;
    min-height: 260px;
  }

  .tile-four {
    grid-column: 1 / span 2;
  }

  .newsletter-panel {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 720px) {
  .page-shell {
    width: min(100% - 16px, 1280px);
    margin-top: 12px;
  }

  .topbar,
  .footer {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    padding-top: 18px;
    padding-bottom: 18px;
  }

  .main-nav,
  .footer-links {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-copy h1 {
    font-size: 3.4rem;
  }

  .newsletter-actions {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }

  .newsletter-actions button,
  .newsletter-actions input {
    width: 100%;
  }
}
"},{