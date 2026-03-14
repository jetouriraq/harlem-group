import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HARLEM GROUP — Quality You Deserve!</title>
        <meta name="description" content="Harlem Group — Beacon of excellence since 1995. Automotive, Real Estate, Luxury Watches & Jewellery, Management Consultation." />
        <link rel="icon" type="image/png" href="/static/logo-black.png" />
        <link rel="shortcut icon" href="/static/logo-black.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
/* ═══════════════════════════════════════════════
   ROOT VARIABLES — LIGHT & REFINED PALETTE
═══════════════════════════════════════════════ */
:root {
  --font:   'DM Sans', 'Helvetica Neue', Arial, sans-serif;
  --serif:  'Playfair Display', Georgia, serif;

  /* Light monochromatic palette */
  --white:      #ffffff;
  --snow:       #fafaf9;
  --pearl:      #f4f3f1;
  --silver:     #e8e7e4;
  --ash:        #d0cec9;
  --slate:      #9a9690;
  --charcoal:   #4a4844;
  --ink:        #2a2826;
  --black:      #141210;

  /* Silver accent */
  --gold:       #bebfc3;
  --gold-lt:    #d4d5d8;
  --gold-dk:    #8e8f93;
  --gold-bg:    #f2f2f3;

  /* Accent dark panels */
  --panel:      #1c1a18;
  --panel2:     #242220;

  /* Functional */
  --nav-h:  88px;
  --radius: 2px;
  --pad:    100px;
  --ease:   cubic-bezier(0.4, 0, 0.2, 1);
  --spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ═══════════════════════════════════════════════
   RESET
═══════════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; overflow-x: hidden; }
body {
  font-family: var(--font);
  background: var(--white);
  color: var(--ink);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: none;
}
a { text-decoration: none; color: inherit; }
img { max-width: 100%; display: block; }
ul { list-style: none; }
button { cursor: none; font-family: var(--font); border: none; background: none; }

/* ═══════════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════════ */
#cur-ring {
  position: fixed; top: 0; left: 0; z-index: 99999;
  width: 40px; height: 40px; border-radius: 50%;
  border: 1.5px solid rgba(184,146,74,0.6);
  transform: translate(-50%,-50%);
  pointer-events: none;
  transition: width .35s var(--ease), height .35s var(--ease), border-color .35s, opacity .3s, background .3s;
  mix-blend-mode: multiply;
}
#cur-dot {
  position: fixed; top: 0; left: 0; z-index: 99999;
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--gold);
  transform: translate(-50%,-50%);
  pointer-events: none;
  transition: width .15s, height .15s, opacity .15s;
}
body.c-hover #cur-ring {
  width: 64px; height: 64px;
  border-color: var(--gold);
  background: rgba(184,146,74,0.07);
}
body.c-hover #cur-dot  { opacity: 0; }
body.c-click #cur-ring { width: 24px; height: 24px; }
@media (max-width:768px){
  #cur-ring,#cur-dot { display:none; }
  body { cursor: auto; }
  button, a { cursor: pointer; }
}

/* ═══════════════════════════════════════════════
   NOISE OVERLAY
═══════════════════════════════════════════════ */
.noise {
  position: fixed; inset: 0; z-index: 9998; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: .12;
}

/* ═══════════════════════════════════════════════
   PRELOADER
═══════════════════════════════════════════════ */
#loader {
  position: fixed; inset: 0; z-index: 99990;
  background: var(--black);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  transition: opacity .9s var(--ease), visibility .9s;
}
#loader.out { opacity: 0; visibility: hidden; }
.loader-logo {
  width: 260px; margin-bottom: 48px;
  opacity: 0; transform: translateY(24px);
  animation: loaderUp .8s .2s var(--ease) forwards;
}
.loader-slogan {
  font-family: var(--serif); font-style: italic;
  font-size: 15px; color: var(--gold); letter-spacing: 3px;
  margin-bottom: 40px; opacity: 0;
  animation: loaderUp .8s .5s var(--ease) forwards;
}
.loader-track {
  width: 200px; height: 1px; background: rgba(255,255,255,.08); overflow: hidden;
}
.loader-fill {
  height: 100%; width: 0;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
  animation: loaderFill 2.4s .6s var(--ease) forwards;
}
.loader-count {
  font-size: 10px; letter-spacing: 5px; color: rgba(255,255,255,.25);
  margin-top: 18px; font-weight: 300; text-transform: uppercase;
}
@keyframes loaderUp  { to { opacity:1; transform:none; } }
@keyframes loaderFill{ to { width:100%; } }

/* ═══════════════════════════════════════════════
   FULLSCREEN MENU
═══════════════════════════════════════════════ */
#fs-menu {
  position: fixed; inset: 0; z-index: 5000;
  background: var(--black);
  clip-path: circle(0% at calc(100% - 64px) 44px);
  transition: clip-path .9s cubic-bezier(.76,0,.24,1);
  display: flex; align-items: center; justify-content: center;
  pointer-events: none; overflow: hidden;
}
#fs-menu::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 60% at 80% 20%, rgba(184,146,74,.08) 0%, transparent 60%);
  pointer-events: none;
}
#fs-menu.open {
  clip-path: circle(160% at calc(100% - 64px) 44px);
  pointer-events: all;
}
.fs-close {
  position: absolute; top: 28px; right: 52px;
  color: rgba(255,255,255,.4); font-size: 11px; letter-spacing: 4px;
  text-transform: uppercase; display: flex; align-items: center; gap: 12px;
  transition: color .3s;
}
.fs-close:hover { color: rgba(255,255,255,.9); }
.fs-close-x { font-size: 28px; font-weight: 100; line-height: 1; }
.fs-body {
  display: flex; gap: 120px; align-items: center;
}
.fs-nav { }
.fs-link {
  display: block; font-family: var(--serif);
  font-size: clamp(42px, 6.5vw, 88px); font-weight: 400; line-height: 1.15;
  color: rgba(255,255,255,.12); letter-spacing: -1px;
  opacity: 0; transform: translateY(36px);
  transition: opacity .5s, transform .5s, color .4s;
  position: relative; overflow: hidden;
}
.fs-link::after {
  content: attr(data-text);
  position: absolute; left: 0; top: 0;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
  clip-path: inset(0 100% 0 0);
  transition: clip-path .5s var(--ease);
}
.fs-link:hover::after { clip-path: inset(0 0% 0 0); }
#fs-menu.open .fs-link { opacity: 1; transform: none; }
#fs-menu.open .fs-link:nth-child(1){ transition-delay:.1s; }
#fs-menu.open .fs-link:nth-child(2){ transition-delay:.16s; }
#fs-menu.open .fs-link:nth-child(3){ transition-delay:.22s; }
#fs-menu.open .fs-link:nth-child(4){ transition-delay:.28s; }
#fs-menu.open .fs-link:nth-child(5){ transition-delay:.34s; }
#fs-menu.open .fs-link:nth-child(6){ transition-delay:.40s; }
#fs-menu.open .fs-link:nth-child(7){ transition-delay:.46s; }
.fs-link:hover { color: rgba(255,255,255,.85); }
/* fs sub-links under About */
.fs-sub-group { margin-left: 4px; }
.fs-sub-link {
  display: block;
  font-size: 13px; letter-spacing: 3px; text-transform: uppercase; font-weight: 400;
  color: rgba(255,255,255,.28);
  padding: 3px 0 3px 20px;
  border-left: 1px solid rgba(184,146,74,.3);
  margin: 5px 0;
  transition: color .3s, border-color .3s, padding-left .3s;
  opacity: 0; transform: translateX(-12px);
  transition: opacity .4s, transform .4s, color .3s, border-color .3s;
}
#fs-menu.open .fs-sub-link { opacity: 1; transform: none; }
#fs-menu.open .fs-sub-link:nth-child(1){ transition-delay:.22s; }
#fs-menu.open .fs-sub-link:nth-child(2){ transition-delay:.28s; }
#fs-menu.open .fs-sub-link:nth-child(3){ transition-delay:.34s; }
.fs-sub-link:hover { color: var(--gold-lt); border-color: var(--gold); padding-left: 26px; }

.fs-sidebar {
  width: 280px; opacity: 0; transform: translateX(24px);
  transition: opacity .5s .5s, transform .5s .5s;
  border-left: 1px solid rgba(255,255,255,.08);
  padding-left: 48px;
}
#fs-menu.open .fs-sidebar { opacity: 1; transform: none; }
.fs-sidebar-lbl {
  font-size: 9px; letter-spacing: 4px; text-transform: uppercase;
  color: var(--gold); margin-bottom: 20px;
}
.fs-sidebar-contact {
  font-size: 13.5px; line-height: 2;
  color: rgba(255,255,255,.38); font-weight: 300;
}
.fs-sidebar-contact strong { color: rgba(255,255,255,.7); font-weight: 400; }

.fs-footer {
  position: absolute; bottom: 44px; left: 52px;
  display: flex; gap: 40px; opacity: 0; transition: opacity .5s .7s;
}
#fs-menu.open .fs-footer { opacity: 1; }
.fs-footer a {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
  color: rgba(255,255,255,.22); transition: color .3s;
}
.fs-footer a:hover { color: rgba(255,255,255,.7); }

/* ═══════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════ */
#nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  height: var(--nav-h); padding: 0 60px;
  display: flex; align-items: center; justify-content: space-between;
  transition: background .5s var(--ease), border-bottom-color .5s, height .4s;
  border-bottom: 1px solid transparent;
}
#nav.scrolled {
  background: rgba(255,255,255,.94);
  backdrop-filter: blur(24px) saturate(180%);
  border-bottom-color: rgba(0,0,0,.07);
  height: 72px;
  box-shadow: 0 2px 32px rgba(0,0,0,.06);
}
/* Sub-pages: dark nav always */
#nav.scrolled.nav-dark {
  background: rgba(14,12,10,.92);
  border-bottom-color: rgba(255,255,255,.06);
  box-shadow: 0 2px 32px rgba(0,0,0,.3);
}
#nav.scrolled.nav-dark .nav-logo img { filter: none; } /* white logo stays white */
#nav.scrolled.nav-dark .nav-a { color: rgba(255,255,255,.75); }
#nav.scrolled.nav-dark .nav-a:hover { color: var(--white); }
#nav.scrolled.nav-dark .nav-drop-arrow { color: rgba(255,255,255,.5); }
#nav.scrolled.nav-dark .nav-cta {
  border-color: rgba(255,255,255,.3); color: rgba(255,255,255,.85);
}
#nav.scrolled.nav-dark .nav-cta:hover { background: var(--gold); border-color: var(--gold); color: var(--white); }
#nav.scrolled.nav-dark .hamburger span { background: rgba(255,255,255,.8); }
#nav.scrolled.nav-dark .nav-dropdown {
  background: rgba(14,12,10,.96); border-color: rgba(255,255,255,.08);
}
#nav.scrolled.nav-dark .nav-drop-link { color: rgba(255,255,255,.7); }
#nav.scrolled.nav-dark .nav-drop-link:hover { color: var(--gold); }
.nav-logo {
  display: flex; align-items: center;
  flex-shrink: 0;
}
.nav-logo img {
  height: 64px;
  width: auto;
  object-fit: contain;
  transition: height .4s, filter .3s, opacity .3s;
  filter: brightness(0) invert(1);
}
#nav.scrolled .nav-logo img {
  height: 52px;
  filter: none;
}
.nav-logo img:hover { opacity: .85; }

.nav-links {
  display: flex; align-items: center; gap: 40px;
  position: absolute; left: 50%; transform: translateX(-50%);
}
.nav-a {
  font-size: 11px; letter-spacing: 2.5px; text-transform: uppercase; font-weight: 500;
  color: rgba(255,255,255,.65); position: relative; padding: 4px 0;
  transition: color .3s;
}
#nav.scrolled .nav-a { color: var(--charcoal); }
.nav-a::after {
  content: ''; position: absolute; bottom: -4px; left: 0; right: 0; height: 1px;
  background: var(--gold); transform: scaleX(0); transform-origin: left;
  transition: transform .4s var(--ease);
}
.nav-a:hover { color: var(--ink); }
.nav-a:hover::after, .nav-a.active::after { transform: scaleX(1); }
#nav:not(.scrolled) .nav-a:hover { color: rgba(255,255,255,1); }

/* ── Nav dropdown ── */
.nav-item {
  position: relative; display: flex; align-items: center; gap: 5px;
}
.nav-item > .nav-a::before {
  content: ''; position: absolute; bottom: -28px; left: 0; right: 0; height: 28px;
  /* invisible bridge keeps dropdown open on hover gap */
}
.nav-drop-arrow {
  font-size: 8px; color: rgba(255,255,255,.4);
  transition: color .3s, transform .3s;
  pointer-events: none; line-height: 1; margin-top: 1px;
}
#nav.scrolled .nav-drop-arrow { color: var(--charcoal); }
.nav-item:hover .nav-drop-arrow { transform: rotate(180deg); color: var(--gold); }
.nav-dropdown {
  position: absolute; top: calc(100% + 20px); left: 50%; transform: translateX(-50%);
  background: var(--white);
  border: 1px solid var(--silver);
  border-top: 2px solid var(--gold);
  min-width: 180px;
  box-shadow: 0 16px 48px rgba(0,0,0,.12);
  opacity: 0; visibility: hidden; pointer-events: none;
  transform: translateX(-50%) translateY(-8px);
  transition: opacity .25s var(--ease), transform .25s var(--ease), visibility .25s;
  z-index: 200;
}
.nav-item:hover .nav-dropdown {
  opacity: 1; visibility: visible; pointer-events: all;
  transform: translateX(-50%) translateY(0);
}
.nav-drop-link {
  display: block;
  padding: 12px 20px;
  font-size: 10px; letter-spacing: 2px; text-transform: uppercase; font-weight: 500;
  color: var(--charcoal);
  transition: background .2s, color .2s, padding-left .2s;
  border-bottom: 1px solid var(--pearl);
  white-space: nowrap;
}
.nav-drop-link:last-child { border-bottom: none; }
.nav-drop-link:hover {
  background: var(--pearl); color: var(--gold-dk); padding-left: 26px;
}

.nav-right { display: flex; align-items: center; gap: 20px; }
.nav-cta {
  font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; font-weight: 600;
  padding: 10px 24px; border: 1px solid rgba(255,255,255,.3);
  color: rgba(255,255,255,.85); border-radius: var(--radius);
  transition: all .3s; white-space: nowrap;
}
#nav.scrolled .nav-cta {
  border-color: var(--gold);
  color: var(--gold);
}
.nav-cta:hover {
  background: var(--gold); color: var(--white) !important;
  border-color: var(--gold) !important;
}
.hamburger {
  display: flex; flex-direction: column; gap: 5.5px;
  padding: 8px; position: relative; z-index: 1;
}
.hamburger span {
  display: block; width: 24px; height: 1.5px;
  background: rgba(255,255,255,.8);
  transition: all .35s var(--ease);
}
#nav.scrolled .hamburger span { background: var(--ink); }
.hamburger:hover span { background: var(--gold) !important; }
.hamburger span:last-child { width: 16px; }
.hamburger:hover span:last-child { width: 24px; }

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
#hero {
  position: relative;
  height: 100vh; min-height: 740px;
  display: flex; align-items: center;
  overflow: hidden;
  background: var(--black);
}
.hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 90% 70% at 15% 50%, rgba(184,146,74,.1) 0%, transparent 55%),
    radial-gradient(ellipse 50% 50% at 85% 30%, rgba(255,255,255,.04) 0%, transparent 50%);
}
.hero-grid {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px);
  background-size: 80px 80px;
  animation: gridDrift 30s linear infinite;
  mask-image: radial-gradient(ellipse 95% 90% at 50% 40%, black 20%, transparent 100%);
}
@keyframes gridDrift { from{transform:translateY(0)} to{transform:translateY(80px)} }
#p-canvas { position: absolute; inset: 0; pointer-events: none; }

.hero-imgs {
  position: absolute; inset: 0;
  pointer-events: none;
  background-image: url('/static/hero-bg.png');
  background-size: auto;
  background-position: center top;
  background-repeat: repeat;
  opacity: 1;
}
.hero-img-panel {
  display: none;
}
.hero-img-panel.show { opacity: 1; }
.hero-seam {
  position: absolute; top: 0; bottom: 0; left: 55%;
  width: 1px;
  background: linear-gradient(to bottom,
    transparent 0%,
    rgba(184,146,74,.6) 20%,
    rgba(212,175,114,.9) 50%,
    rgba(184,146,74,.6) 80%,
    transparent 100%);
  opacity: .4;
}

.hero-inner {
  position: relative; z-index: 10;
  width: 100%; padding: 0 80px; padding-top: var(--nav-h);
}
.hero-tag {
  display: inline-flex; align-items: center; gap: 16px; margin-bottom: 32px;
  font-size: 10px; letter-spacing: 5px; text-transform: uppercase; font-weight: 600;
  color: var(--gold-lt);
  opacity: 0; animation: fadeSlideUp .9s 2.8s var(--ease) forwards;
}
.hero-tag-bar { width: 40px; height: 1px; background: var(--gold-lt); }

.hero-h1 {
  font-family: var(--serif);
  font-size: clamp(56px, 8vw, 120px);
  font-weight: 400; letter-spacing: -2px; line-height: .95;
  color: var(--white);
}
.hero-line { display: block; overflow: hidden; }
.hero-word {
  display: inline-block;
  opacity: 0; transform: translateY(110%);
  animation: wordUp 1.1s var(--ease) forwards;
}
.hero-word.w1 { animation-delay: 2.85s; }
.hero-word.w2 { animation-delay: 3.0s; }
.hero-word.w3 { animation-delay: 3.15s; font-style: italic; color: var(--gold-lt); }

.hero-row2 {
  display: flex; align-items: flex-end; justify-content: space-between;
  margin-top: 36px;
  opacity: 0; animation: fadeSlideUp 1s 3.3s var(--ease) forwards;
}
.hero-sub {
  font-family: var(--serif); font-style: italic;
  font-size: clamp(26px, 3.8vw, 52px); font-weight: 400;
  color: rgba(255,255,255,.42); letter-spacing: -1px;
}
.hero-right { max-width: 360px; text-align: right; }
.hero-desc {
  font-size: 13.5px; line-height: 1.9;
  color: rgba(255,255,255,.4); font-weight: 300;
  margin-bottom: 28px;
}
.hero-btn {
  display: inline-flex; align-items: center; gap: 14px;
  font-size: 10px; letter-spacing: 3.5px; text-transform: uppercase; font-weight: 600;
  color: var(--white); padding: 15px 34px;
  border: 1px solid rgba(255,255,255,.22); border-radius: var(--radius);
  position: relative; overflow: hidden; transition: color .4s, border-color .4s;
  margin-top: 40px;
}
.hero-btn::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
  transform: translateX(-110%); transition: transform .45s var(--ease);
}
.hero-btn:hover { color: var(--black); border-color: var(--gold-lt); }
.hero-btn:hover::before { transform: none; }
.hero-btn span, .hero-btn-arr { position: relative; z-index: 1; }
.hero-btn-arr { transition: transform .3s; }
.hero-btn:hover .hero-btn-arr { transform: translateX(5px); }

.hero-scroll {
  position: absolute; bottom: 48px; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  opacity: 0; animation: fadeSlideUp 1s 3.6s forwards;
}
.hero-scroll-txt {
  font-size: 8px; letter-spacing: 5px; text-transform: uppercase;
  color: rgba(255,255,255,.28);
}
.hero-scroll-line {
  width: 1px; height: 56px;
  background: linear-gradient(to bottom, rgba(184,146,74,.5), transparent);
  animation: lineAnim 2s ease-in-out infinite;
}
@keyframes lineAnim {
  0%  { transform:scaleY(0); transform-origin:top; }
  50% { transform:scaleY(1); transform-origin:top; }
  51% { transform:scaleY(1); transform-origin:bottom; }
  100%{ transform:scaleY(0); transform-origin:bottom; }
}

/* Marquee */
.mq-wrap {
  position: absolute; bottom: 0; left: 0; right: 0;
  border-top: 1px solid rgba(255,255,255,.05); overflow: hidden;
}
.mq-track {
  display: flex; white-space: nowrap;
  animation: mqRun 36s linear infinite;
}
.mq-item {
  display: inline-flex; align-items: center; gap: 22px; padding: 16px 30px;
  font-size: 9.5px; letter-spacing: 4px; text-transform: uppercase; font-weight: 500;
  color: rgba(255,255,255,.2);
}
.mq-diamond { width: 5px; height: 5px; background: var(--gold); transform: rotate(45deg); flex-shrink: 0; opacity: .5; }
@keyframes mqRun { from{transform:translateX(0)} to{transform:translateX(-50%)} }
@keyframes fadeSlideUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
@keyframes wordUp { from{opacity:0;transform:translateY(110%)} to{opacity:1;transform:none} }

/* ═══════════════════════════════════════════════
   SHARED SECTION HELPERS
═══════════════════════════════════════════════ */
.container { max-width: 1320px; margin: 0 auto; padding: 0 60px; }
.tag {
  display: inline-flex; align-items: center; gap: 14px; margin-bottom: 20px;
  font-size: 9.5px; letter-spacing: 5px; text-transform: uppercase; font-weight: 700;
  color: var(--gold);
}
.tag::before { content: ''; width: 30px; height: 1px; background: var(--gold); flex-shrink: 0; }
.tag.on-dark { color: var(--gold-lt); }
.tag.on-dark::before { background: var(--gold-lt); }

.h2 {
  font-family: var(--serif);
  font-size: clamp(36px, 4.8vw, 68px); font-weight: 400;
  letter-spacing: -1.5px; line-height: 1.05; color: var(--ink);
}
.h2 em { font-style: italic; color: var(--ash); }
.h2.light { color: var(--white); }
.h2.light em { color: rgba(255,255,255,.35); }

/* Scroll reveal */
.r  { opacity: 0; transform: translateY(38px); transition: opacity .85s var(--ease), transform .85s var(--ease); }
.r.v { opacity: 1; transform: none; }
.rl { opacity: 0; transform: translateX(-38px); transition: opacity .85s var(--ease), transform .85s var(--ease); }
.rl.v { opacity: 1; transform: none; }
.rr { opacity: 0; transform: translateX(38px); transition: opacity .85s var(--ease), transform .85s var(--ease); }
.rr.v { opacity: 1; transform: none; }
.d1{transition-delay:.08s} .d2{transition-delay:.16s} .d3{transition-delay:.24s}
.d4{transition-delay:.32s} .d5{transition-delay:.40s} .d6{transition-delay:.48s}

/* ═══════════════════════════════════════════════
   INTRO / FOUNDER — FULL-BLEED EDITORIAL LAYOUT
═══════════════════════════════════════════════ */
#founder {
  background: var(--panel);
  padding: var(--pad) 0;
  overflow: hidden;
}
.founder-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* ══ LEFT: quote panel ══ */
.founder-left {
  display: flex; flex-direction: column; justify-content: center;
  position: relative;
}
/* giant decorative opening quote */
.founder-deco-quote {
  font-family: var(--serif); font-size: 180px; line-height: .7;
  color: var(--gold); opacity: .18;
  pointer-events: none; user-select: none;
  margin-bottom: -28px;
  display: block;
}
/* section label */
.founder-tag-row {
  display: flex; align-items: center; gap: 14px; margin-bottom: 32px;
}
.founder-tag-line {
  width: 36px; height: 1px;
  background: linear-gradient(to right, var(--gold), transparent);
  flex-shrink: 0;
}
.founder-tag-label {
  font-size: 9px; letter-spacing: 4px; text-transform: uppercase;
  font-weight: 600; color: var(--gold);
}
/* quote with gold left border */
.founder-quote {
  font-family: var(--serif);
  font-size: clamp(20px, 1.9vw, 28px); font-weight: 400; font-style: italic;
  line-height: 1.7; color: rgba(255,255,255,.88);
  border-left: 3px solid var(--gold); padding-left: 28px;
  margin-bottom: 40px;
}
/* name & title */
.founder-sig-wrap {
  display: flex; align-items: center; gap: 16px;
  padding-left: 31px;
}
/* body paragraphs */
.founder-body {
  display: flex; flex-direction: column; gap: 18px;
  padding-left: 31px;
  margin-bottom: 36px;
}
.founder-body p {
  font-size: 14.5px; line-height: 1.88; color: rgba(255,255,255,.55); font-weight: 300;
}
.founder-body p strong { color: rgba(255,255,255,.82); font-weight: 500; }
.founder-sig-line {
  width: 28px; height: 1px; background: var(--gold); flex-shrink: 0;
}
.founder-sig {
  font-family: var(--serif); font-size: 20px; font-style: italic;
  color: var(--white); line-height: 1.2;
}
.founder-sig-title {
  font-size: 9.5px; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--gold-lt); margin-top: 5px; font-weight: 400;
}

/* ══ RIGHT: photo with gold inset frame ══ */
.founder-right {
  position: relative;
}
/* outer decorative frame — offset gold border */
.founder-img-frame {
  position: absolute;
  top: 20px; right: -20px; bottom: -20px; left: 20px;
  border: 1.5px solid var(--gold);
  opacity: .45;
  pointer-events: none; z-index: 0;
}
/* photo container */
.founder-img-wrap {
  position: relative; z-index: 1;
  overflow: hidden;
  aspect-ratio: 3/4;
  background: var(--silver);
}
.founder-img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center top;
  transition: transform 1.2s var(--ease);
  display: block;
}
.founder-right:hover .founder-img-wrap img { transform: scale(1.04); }
/* gold inset frame border inside the photo */
.founder-img-inset {
  position: absolute; inset: 14px; z-index: 2;
  border: 1.5px solid rgba(184,146,74,.55);
  pointer-events: none;
}
/* badge */
.founder-badge {
  position: absolute; bottom: -12px; left: 8px; z-index: 3;
  width: 100px; height: 100px; border-radius: 50%;
  background: var(--ink); color: var(--white);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  box-shadow: 0 12px 40px rgba(0,0,0,.22);
  border: 2px solid var(--gold);
}
.founder-badge-n {
  font-family: var(--serif); font-size: 26px; font-weight: 400; line-height: 1;
}
.founder-badge-l {
  font-size: 7px; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--gold-lt); margin-top: 4px;
}

/* ═══════════════════════════════════════════════
   TICKER
═══════════════════════════════════════════════ */
.ticker {
  padding: 20px 0; background: var(--ink);
  overflow: hidden;
}
.ticker-t {
  display: flex; white-space: nowrap;
  animation: tRun 32s linear infinite;
}
.ticker-t:hover { animation-play-state: paused; }
.t-item {
  display: inline-flex; align-items: center; gap: 22px; padding: 0 30px;
  font-size: 10.5px; letter-spacing: 3.5px; text-transform: uppercase; font-weight: 500;
  color: rgba(255,255,255,.3); transition: color .3s;
}
.t-item:hover { color: rgba(255,255,255,.75); }
.t-sep { color: var(--gold-lt); font-size: 12px; opacity: .6; }
@keyframes tRun { from{transform:translateX(0)} to{transform:translateX(-50%)} }

/* ═══════════════════════════════════════════════
   VISION / MISSION / VALUES
═══════════════════════════════════════════════ */
#vmv {
  background: var(--white);
  padding: var(--pad) 0;
}
.vmv-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 2px;
  margin-top: 72px;
}
.vmv-card {
  padding: 56px 52px;
  background: var(--pearl); border: 1px solid var(--silver);
  position: relative; overflow: hidden;
  transition: background .4s, border-color .4s, transform .4s;
}
.vmv-card:hover { background: var(--snow); border-color: var(--gold); transform: translateY(-4px); }
.vmv-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold), var(--gold-lt), transparent);
  opacity: 0; transition: opacity .4s;
}
.vmv-card:hover::before { opacity: 1; }
.vmv-card-icon {
  font-family: var(--serif); font-size: 72px; font-weight: 400; line-height: 1;
  color: rgba(184,146,74,.1); position: absolute; top: 24px; right: 32px;
  pointer-events: none;
}
.vmv-card-label {
  font-size: 9.5px; letter-spacing: 4.5px; text-transform: uppercase; font-weight: 700;
  color: var(--gold); margin-bottom: 18px;
}
.vmv-card-title {
  font-family: var(--serif); font-size: 30px; font-weight: 400;
  color: var(--ink); line-height: 1.25; margin-bottom: 20px; letter-spacing: -.4px;
}
.vmv-card-body {
  font-size: 15px; line-height: 1.88; color: var(--charcoal); font-weight: 300;
}

.vals-grid {
  display: grid; grid-template-columns: repeat(4,1fr); gap: 2px;
  margin-top: 2px;
}
.val-card {
  padding: 44px 36px;
  background: var(--pearl); border: 1px solid var(--silver);
  position: relative; overflow: hidden;
  transition: all .4s var(--ease);
}
.val-card:hover {
  background: var(--white); transform: translateY(-6px);
  border-color: var(--gold);
  box-shadow: 0 20px 60px rgba(0,0,0,.07);
}
.val-num {
  font-family: var(--serif); font-size: 52px; font-weight: 400;
  color: rgba(184,146,74,.12); line-height: 1; margin-bottom: 14px;
}
.val-title {
  font-size: 11.5px; letter-spacing: 3px; text-transform: uppercase; font-weight: 700;
  color: var(--gold-dk); margin-bottom: 14px;
}
.val-body { font-size: 13.5px; line-height: 1.82; color: var(--charcoal); font-weight: 300; }

/* ═══════════════════════════════════════════════
   DIVISIONS ACCORDION
═══════════════════════════════════════════════ */
#divisions { background: var(--ink); padding: var(--pad) 0; overflow: hidden; }
.div-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 72px;
}
.div-header-right { max-width: 400px; }
.div-header-desc { font-size: 15px; line-height: 1.88; color: rgba(255,255,255,.44); font-weight: 300; }

.accordion { display: flex; gap: 2px; height: 620px; overflow: hidden; }
.acc-card {
  position: relative; overflow: hidden; flex: 1; min-width: 72px;
  transition: flex .75s cubic-bezier(.76,0,.24,1); cursor: none;
  border: 1px solid rgba(255,255,255,.04);
}
.acc-card.open { flex: 5.5; }
.acc-bg {
  position: absolute; inset: 0; background-size: cover; background-position: center;
  filter: grayscale(30%) brightness(.55);
  transition: filter .65s var(--ease), transform .85s var(--ease);
}
.acc-card.open .acc-bg { filter: grayscale(0%) brightness(.70); }
.acc-card:hover .acc-bg { filter: grayscale(0%) brightness(.65); transform: scale(1.05); }
.acc-shade {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(10,10,8,.60) 0%, rgba(10,10,8,.10) 50%, transparent 100%);
}
.acc-vert {
  position: absolute; left: 0; top: 0; bottom: 0;
  display: flex; align-items: center; justify-content: center;
  writing-mode: vertical-rl; padding: 28px 26px;
  font-size: 9.5px; letter-spacing: 3.5px; text-transform: uppercase; font-weight: 600;
  color: rgba(255,255,255,.4); white-space: nowrap;
  transition: opacity .35s;
}
.acc-card.open .acc-vert { opacity: 0; }
.acc-ghost {
  position: absolute; top: 24px; right: 28px;
  font-family: var(--serif); font-size: 100px; font-weight: 400; line-height: 1;
  color: rgba(255,255,255,.04); pointer-events: none;
  opacity: 0; transition: opacity .4s .3s;
}
.acc-card.open .acc-ghost { opacity: 1; }
.acc-content {
  position: absolute; bottom: 0; left: 0; right: 0; padding: 44px 48px;
  opacity: 0; transform: translateY(20px);
  transition: opacity .5s .28s var(--ease), transform .5s .28s var(--ease);
}
.acc-card.open .acc-content { opacity: 1; transform: none; }
.acc-num { font-size: 9.5px; letter-spacing: 4px; color: var(--gold-lt); margin-bottom: 12px; }
.acc-title {
  font-family: var(--serif); font-size: 38px; font-weight: 400;
  color: var(--white); margin-bottom: 14px; letter-spacing: -.5px;
}
.acc-desc {
  font-size: 13.5px; line-height: 1.78; color: rgba(255,255,255,.55);
  max-width: 380px; margin-bottom: 28px; font-weight: 300;
}
.acc-link {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 9.5px; letter-spacing: 3.5px; text-transform: uppercase; font-weight: 600;
  color: var(--gold-lt); transition: gap .3s;
}
.acc-link:hover { gap: 16px; }

/* ═══════════════════════════════════════════════
   AUTO SERVICES
═══════════════════════════════════════════════ */
#auto-services { background: var(--snow); padding: var(--pad) 0; }
.services-grid {
  display: grid;
  /* 6-col base: row 1 → 3 cards × 2col each; row 2 → 2 cards × 3col each */
  grid-template-columns: repeat(6, 1fr);
  gap: 1px;
  background: var(--silver); border: 1px solid var(--silver);
  margin-top: 72px;
}
/* row 1: cards 1-3 each take 2 of 6 columns */
.svc-card:nth-child(-n+3) { grid-column: span 2; }
/* row 2: cards 4-5 each take 3 of 6 columns — fills the full row */
.svc-card:nth-child(n+4)  { grid-column: span 3; }
.svc-card {
  background: var(--snow); padding: 52px 44px;
  position: relative; overflow: hidden;
  transition: background .35s, transform .35s;
  display: flex; flex-direction: column;
}
.svc-card:hover {
  background: var(--white); transform: translateY(-5px); z-index: 1;
  box-shadow: 0 20px 60px rgba(0,0,0,.08);
}
.svc-card::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
  transform: scaleX(0); transform-origin: left; transition: transform .4s var(--ease);
}
.svc-card:hover::after { transform: scaleX(1); }
.svc-num {
  font-family: var(--serif); font-size: 56px; font-weight: 400; line-height: 1;
  color: rgba(0,0,0,.055); margin-bottom: 16px;
}
.svc-title {
  font-size: 13px; letter-spacing: 2.5px; text-transform: uppercase; font-weight: 700;
  color: var(--charcoal); margin-bottom: 14px;
}
.svc-body { font-size: 14px; line-height: 1.82; color: var(--slate); font-weight: 300; }

/* ═══════════════════════════════════════════════
   FACTS & FIGURES
═══════════════════════════════════════════════ */
#facts { background: var(--panel); padding: var(--pad) 0; }
.facts-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 80px;
}
.facts-intro { max-width: 480px; font-size: 15px; line-height: 1.88; color: rgba(255,255,255,.44); font-weight: 300; }
.facts-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: rgba(255,255,255,.05); }
.fact-card {
  padding: 56px 40px; background: var(--panel2);
  text-align: center; position: relative; overflow: hidden;
  transition: background .4s;
}
.fact-card:hover { background: rgba(255,255,255,.04); }
.fact-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold-lt), transparent);
  opacity: 0; transition: opacity .4s;
}
.fact-card:hover::before { opacity: 1; }
.fact-val {
  font-family: var(--serif); font-size: clamp(48px,5vw,72px); font-weight: 400;
  color: var(--white); line-height: 1; margin-bottom: 16px;
  display: flex; align-items: flex-start; justify-content: center;
}
.fact-val .p { font-size: .55em; margin-top: 6px; color: var(--gold-lt); font-weight: 300; }
.fact-label { font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: rgba(255,255,255,.4); font-weight: 500; }

/* Achievements */
.achievements { margin-top: 72px; }
.ach-title {
  font-size: 10px; letter-spacing: 4px; text-transform: uppercase; font-weight: 700;
  color: var(--gold-lt); margin-bottom: 28px;
}
.ach-list { display: flex; flex-wrap: wrap; gap: 10px; }
.ach-pill {
  padding: 10px 20px;
  background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.08);
  font-size: 13px; line-height: 1.6; color: rgba(255,255,255,.58); font-weight: 300;
  border-radius: var(--radius); transition: background .3s, border-color .3s;
}
.ach-pill:hover { background: rgba(255,255,255,.07); border-color: rgba(184,146,74,.3); }
.ach-pill strong { color: rgba(255,255,255,.88); font-weight: 600; }

/* ═══════════════════════════════════════════════
   IMAGE STRIP
═══════════════════════════════════════════════ */
.img-strip { overflow: hidden; height: 200px; position: relative; }
.img-strip-t {
  display: flex; height: 100%; white-space: nowrap;
  animation: stripRun 30s linear infinite;
}
.strip-item {
  min-width: 300px; height: 100%;
  background-size: cover; background-position: center;
  filter: grayscale(20%);
  transition: filter .4s; flex-shrink: 0;
}
.strip-item:hover { filter: none; }
@keyframes stripRun { from{transform:translateX(0)} to{transform:translateX(-50%)} }

/* ═══════════════════════════════════════════════
   BRANDS / PARTNERS
═══════════════════════════════════════════════ */
#brands { background: var(--white); padding: var(--pad) 0; }
.brands-intro { text-align: center; max-width: 680px; margin: 0 auto 72px; }
.brands-desc {
  font-size: 15.5px; line-height: 1.88; color: var(--charcoal); font-weight: 300;
  margin-top: 20px;
}
/* ═══════════════════════════════════════════════
   BRANDS / PARTNERS
═══════════════════════════════════════════════ */
#brands { background: var(--white); padding: var(--pad) 0; }
.brands-intro { text-align: center; max-width: 680px; margin: 0 auto 72px; }
.brands-desc {
  font-size: 15.5px; line-height: 1.88; color: var(--charcoal); font-weight: 300;
  margin-top: 20px;
}
.brands-grid {
  display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
  background: var(--silver); border: 1px solid var(--silver);
}
.brand-cell {
  background: var(--white); padding: 32px 24px;
  display: flex; align-items: center; justify-content: center;
  height: 120px;
  transition: background .35s, transform .35s, box-shadow .35s;
  position: relative; overflow: hidden;
}
.brand-cell:hover {
  background: var(--pearl); transform: translateY(-4px); z-index: 1;
  box-shadow: 0 16px 48px rgba(0,0,0,.08);
}
.brand-cell::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
  transform: scaleX(0); transform-origin: center; transition: transform .4s;
}
.brand-cell:hover::after { transform: scaleX(1); }

/* Single unified logo rule — every image gets the SAME box */
.brand-logo-wrap {
  width: 160px; height: 60px;
  display: flex; align-items: center; justify-content: center;
}
.brand-logo-img {
  width: 160px; height: 60px;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.7);
  transition: filter .4s var(--ease), transform .35s var(--ease);
}
.brand-cell:hover .brand-logo-img {
  filter: grayscale(0%) brightness(1);
  transform: scale(1.05);
}

/* Text fallback for brands without a logo */
.brand-logo-text {
  font-size: 12px; letter-spacing: 3.5px; text-transform: uppercase; font-weight: 700;
  color: var(--ink); text-align: center;
}

/* ═══════════════════════════════════════════════
   REAL ESTATE
═══════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════
   DIVISION 02 — REAL ESTATE
═══════════════════════════════════════════════ */
#realestate { background: var(--pearl); }

/* ── Hero band (light) ── */
.re-hero {
  background: var(--pearl);
  padding: var(--pad) 0 calc(var(--pad) + 40px);
  position: relative; overflow: hidden;
}
.re-hero::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 70% at 75% 50%, rgba(184,146,74,.06) 0%, transparent 65%);
  pointer-events: none;
}
.re-hero-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.re-hero-sub {
  font-size: 15.5px; line-height: 1.85; font-weight: 300;
  color: var(--charcoal); margin-top: 20px; margin-bottom: 40px;
  max-width: 480px;
}

/* Stats row */
.re-stats {
  display: flex; align-items: center; gap: 28px;
}
.re-stat { display: flex; flex-direction: column; gap: 4px; }
.re-stat-n {
  font-family: var(--serif); font-size: 28px; font-weight: 500;
  color: var(--gold-dk); line-height: 1;
}
.re-stat-l {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
  font-weight: 600; color: var(--slate);
}
.re-stat-div {
  width: 1px; height: 44px; background: var(--ash);
}

/* Image frame (right side of hero) */
.re-img-frame { position: relative; }
.re-img-inner {
  overflow: hidden;
  aspect-ratio: 4/3;
  border: 1px solid var(--silver);
}
.re-img-inner img {
  width: 100%; height: 100%; object-fit: cover;
  object-position: center;
  transition: transform 1s var(--ease);
  display: block;
}
.re-img-frame:hover .re-img-inner img { transform: scale(1.04); }
/* Gold corner accents */
.re-img-frame::before {
  content: '';
  position: absolute; top: -10px; right: -10px;
  width: 60px; height: 60px;
  border-top: 2px solid var(--gold);
  border-right: 2px solid var(--gold);
  pointer-events: none; z-index: 2;
}
.re-img-frame::after {
  content: '';
  position: absolute; bottom: -10px; left: -10px;
  width: 60px; height: 60px;
  border-bottom: 2px solid var(--gold);
  border-left: 2px solid var(--gold);
  pointer-events: none; z-index: 2;
}
/* Badge below image */
.re-img-badge {
  padding: 18px 24px;
  background: var(--white);
  border-left: 3px solid var(--gold);
  border: 1px solid var(--silver);
  border-left: 3px solid var(--gold);
}
.re-img-badge-name {
  font-size: 13px; font-weight: 600; color: var(--ink);
  margin-bottom: 5px; letter-spacing: .3px;
}
.re-img-badge-loc {
  font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
  color: var(--gold-dk); font-weight: 500;
}

/* ── Cards wrap (white) ── */
.re-cards-wrap {
  background: var(--white);
  padding: 72px 0 var(--pad);
}
.re-cards {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 2px; background: var(--silver);
  border: 1px solid var(--silver);
}
.re-card {
  background: var(--white); padding: 52px 44px 56px;
  position: relative; overflow: hidden;
  transition: background .3s;
}
.re-card::after {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt), transparent);
  transform: scaleX(0); transform-origin: left;
  transition: transform .4s var(--ease);
}
.re-card:hover { background: var(--snow); }
.re-card:hover::after { transform: scaleX(1); }
.re-card-num {
  font-family: var(--serif); font-size: 48px; font-weight: 400;
  color: var(--silver); line-height: 1; margin-bottom: 24px;
  transition: color .3s;
}
.re-card:hover .re-card-num { color: var(--gold-lt); }
.re-card-title {
  font-family: var(--serif); font-size: clamp(20px, 1.8vw, 26px);
  font-weight: 400; color: var(--ink);
  margin-bottom: 16px; letter-spacing: -.2px;
}
.re-card-body {
  font-size: 14.5px; line-height: 1.85; color: var(--charcoal);
  font-weight: 300; margin-bottom: 28px;
}
.re-card-tag {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
  font-weight: 700; color: var(--gold-dk);
  padding-top: 20px; border-top: 1px solid var(--silver);
}

/* ── Responsive ── */
@media (max-width: 1100px) {
  .re-hero-inner { gap: 48px; }
}
@media (max-width: 880px) {
  .re-hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .re-cards { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .re-stats { gap: 20px; }
  .re-card { padding: 40px 28px 44px; }
}

/* ═══════════════════════════════════════════════
   MANAGEMENT CONSULTATION
═══════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════
   DIVISION 03 — MANAGEMENT CONSULTATION
═══════════════════════════════════════════════ */
#consulting { background: var(--snow); }

/* ── Hero band (dark) ── */
.consult-hero {
  background: var(--ink);
  padding: var(--pad) 0 calc(var(--pad) + 40px);
  position: relative; overflow: hidden;
}
.consult-hero::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 80% at 80% 50%, rgba(184,146,74,.10) 0%, transparent 65%);
  pointer-events: none;
}
.consult-hero-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.consult-hero-sub {
  font-size: 15.5px; line-height: 1.85; font-weight: 300;
  color: rgba(255,255,255,.55); margin-top: 20px; margin-bottom: 40px;
  max-width: 480px;
}

/* Stats row */
.consult-stats {
  display: flex; align-items: center; gap: 28px;
  margin-top: 4px;
}
.consult-stat { display: flex; flex-direction: column; gap: 4px; }
.consult-stat-n {
  font-family: var(--serif); font-size: 28px; font-weight: 500;
  color: var(--gold); line-height: 1;
}
.consult-stat-l {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
  font-weight: 600; color: rgba(255,255,255,.35);
}
.consult-stat-div {
  width: 1px; height: 44px; background: rgba(255,255,255,.12);
}

/* Image frame (right side of hero) */
.consult-img-frame {
  position: relative;
}
.consult-img-inner {
  overflow: hidden;
  aspect-ratio: 4/3;
  border: 1px solid rgba(255,255,255,.08);
}
.consult-img-inner img {
  width: 100%; height: 100%; object-fit: cover;
  object-position: center top;
  transition: transform 1s var(--ease);
  display: block;
}
.consult-img-frame:hover .consult-img-inner img { transform: scale(1.04); }
/* Gold corner accent */
.consult-img-frame::before {
  content: '';
  position: absolute; top: -10px; right: -10px;
  width: 60px; height: 60px;
  border-top: 2px solid var(--gold);
  border-right: 2px solid var(--gold);
  pointer-events: none; z-index: 2;
}
.consult-img-frame::after {
  content: '';
  position: absolute; bottom: -10px; left: -10px;
  width: 60px; height: 60px;
  border-bottom: 2px solid var(--gold);
  border-left: 2px solid var(--gold);
  pointer-events: none; z-index: 2;
}
/* Badge below image */
.consult-img-badge {
  margin-top: 0;
  padding: 18px 24px;
  background: var(--panel);
  border-left: 3px solid var(--gold);
}
.consult-img-badge-name {
  font-size: 13px; font-weight: 600; color: var(--white);
  margin-bottom: 5px; letter-spacing: .3px;
}
.consult-img-badge-loc {
  font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
  color: var(--gold); font-weight: 500;
}

/* ── Body wrap (light) ── */
.consult-body-wrap {
  background: var(--snow);
  padding: 72px 0 var(--pad);
}
.consult-intro {
  font-size: 15.5px; line-height: 1.9; color: var(--charcoal); font-weight: 300;
  max-width: 780px; margin-bottom: 56px;
}
.consult-intro strong { color: var(--ink); font-weight: 600; }

/* Service pillars grid */
.consult-pillars {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 2px; background: var(--silver);
  border: 1px solid var(--silver);
}
.consult-pillar {
  background: var(--white);
  padding: 40px 32px 44px;
  position: relative; overflow: hidden;
  transition: background .3s;
}
.consult-pillar::after {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold), var(--gold-lt), transparent);
  transform: scaleX(0); transform-origin: left;
  transition: transform .4s var(--ease);
}
.consult-pillar:hover { background: var(--pearl); }
.consult-pillar:hover::after { transform: scaleX(1); }
.consult-pillar-icon {
  font-size: 20px; color: var(--gold);
  margin-bottom: 20px; display: block;
  transition: transform .3s;
}
.consult-pillar:hover .consult-pillar-icon { transform: scale(1.2); }
.consult-pillar-title {
  font-size: 13px; letter-spacing: 1px; font-weight: 700;
  color: var(--ink); margin-bottom: 14px; text-transform: uppercase;
}
.consult-pillar-body {
  font-size: 13.5px; line-height: 1.8; color: var(--charcoal); font-weight: 300;
}

/* ── Responsive ── */
@media (max-width: 1100px) {
  .consult-hero-inner { gap: 48px; }
}
@media (max-width: 880px) {
  .consult-hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .consult-pillars { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .consult-pillars { grid-template-columns: 1fr; }
  .consult-stats { gap: 20px; }
}

/* ═══════════════════════════════════════════════
   LOCATIONS
═══════════════════════════════════════════════ */
#locations { background: var(--white); padding: var(--pad) 0; }

/* ── Global Operations: Expandable Hierarchy ── */
.glo-wrap {
  margin-top: 72px;
  display: flex; flex-direction: column; gap: 0;
  border: 1px solid var(--silver);
}

/* Country row */
.glo-country { border-bottom: 1px solid var(--silver); }
.glo-country:last-child { border-bottom: none; }

.glo-country-btn {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  padding: 28px 36px; background: none; border: none; cursor: pointer;
  text-align: left; font-family: inherit;
  transition: background .25s;
  position: relative;
}
.glo-country-btn::before {
  content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
  background: linear-gradient(180deg, var(--gold), var(--gold-lt));
  opacity:0; transition: opacity .3s;
}
.glo-country-btn:hover,
.glo-country.open .glo-country-btn { background: var(--pearl); }
.glo-country.open .glo-country-btn::before { opacity: 1; }

.glo-country-left { display: flex; align-items: center; gap: 20px; }
.glo-flag { width: 52px; height: 34px; object-fit: cover; border-radius: 3px; box-shadow: 0 2px 8px rgba(0,0,0,.12); flex-shrink:0; }
.glo-country-name {
  font-family: var(--serif); font-size: clamp(26px,3vw,36px); font-weight: 400;
  color: var(--ink); line-height:1;
}
.glo-country-num {
  font-size: 10px; letter-spacing: 3px; color: var(--ash); font-weight: 500;
  margin-top: 4px; align-self: flex-end;
}
.glo-chevron {
  font-size: 20px; color: var(--gold); line-height:1;
  transition: transform .35s cubic-bezier(.76,0,.24,1);
  display: inline-block;
}
.glo-country.open .glo-chevron,
.glo-cat.open .glo-chevron { transform: rotate(90deg); }

/* Country body */
.glo-country-body {
  max-height: 0; overflow: hidden;
  transition: max-height .45s cubic-bezier(.76,0,.24,1);
}
.glo-country.open .glo-country-body { max-height: 2000px; }

/* Category row */
.glo-cat { border-top: 1px solid var(--silver); }
.glo-cat:first-child { border-top: none; }

.glo-cat-btn {
  width: 100%; display: flex; align-items: center; gap: 14px;
  padding: 18px 36px 18px 60px; background: none; border: none; cursor: pointer;
  text-align: left; font-family: inherit;
  transition: background .2s;
}
.glo-cat-btn:hover,
.glo-cat.open .glo-cat-btn { background: rgba(193,155,90,.06); }

.glo-cat-icon { font-size: 10px; color: var(--gold); flex-shrink: 0; }
.glo-cat-name {
  font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
  font-weight: 600; color: var(--ink); flex: 1;
}
.glo-cat-count {
  font-size: 10px; letter-spacing: 1px; color: var(--ash);
  background: var(--pearl); padding: 3px 10px;
  border: 1px solid var(--silver); margin-right: 12px;
}

/* Category body */
.glo-cat-body {
  max-height: 0; overflow: hidden;
  transition: max-height .35s cubic-bezier(.76,0,.24,1);
}
.glo-cat.open .glo-cat-body { max-height: 800px; }

/* Flat categories (no dropdown toggle) */
.glo-cat--flat .glo-cat-flat-row {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 20px 14px 20px;
  border-top: 1px solid rgba(0,0,0,.06);
  font-size: 13px; font-weight: 600; color: var(--charcoal);
  letter-spacing: .3px;
}
.glo-cat--flat .glo-cat-flat-row .glo-cat-icon { color: var(--gold); font-size: 12px; }
.glo-cat--flat .glo-cat-body--open { max-height: 800px; }

/* Entity items */
.glo-entity {
  padding: 11px 36px 11px 80px;
  font-size: 13.5px; color: var(--charcoal); line-height: 1.5;
  border-top: 1px solid rgba(0,0,0,.04);
  position: relative;
  transition: background .2s, color .2s;
}
.glo-entity::before {
  content:''; position:absolute; left: 64px; top: 50%;
  width: 8px; height: 1px; background: var(--gold);
}
.glo-entity:hover { background: var(--pearl); color: var(--ink); }

/* ═══════════════════════════════════════════════
   NEWS & STORIES — SLIDER
═══════════════════════════════════════════════ */
#news { background: var(--pearl); padding: var(--pad) 0; overflow: hidden; }

/* ── Outer article slider ── */
.news-slider-wrap {
  position: relative; margin-top: 72px;
  overflow: hidden;
}
.news-slider-track {
  display: flex;
  transition: transform .72s cubic-bezier(.76,0,.24,1);
  will-change: transform;
}
.news-slide {
  flex: 0 0 100%; width: 100%;
  display: grid; grid-template-columns: 1fr 1fr;
  border: 1px solid var(--silver);
  overflow: hidden;
  background: var(--white);
}

/* ── Photo slider (left panel) ── */
.news-photo-slider {
  position: relative; overflow: hidden;
  background: var(--ink);
  height: 520px;
  min-height: 0;
}
.news-photo-track {
  display: flex; height: 100%;
  transition: transform .65s cubic-bezier(.76,0,.24,1);
  will-change: transform;
}
.news-photo-slide {
  flex: 0 0 100%; width: 100%; height: 100%;
  overflow: hidden; position: relative;
}
.news-photo-slide img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; object-position: center center;
  transition: transform 1.2s var(--ease);
  display: block;
}
.news-photo-slide:hover img { transform: scale(1.04); }

/* Photo nav arrows */
.news-photo-prev,
.news-photo-next {
  position: absolute; top: 50%; transform: translateY(-50%);
  z-index: 10; width: 40px; height: 40px;
  background: rgba(0,0,0,.45); backdrop-filter: blur(4px);
  border: 1px solid rgba(255,255,255,.15);
  color: rgba(255,255,255,.8); font-size: 16px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: background .3s, color .3s, border-color .3s;
}
.news-photo-prev:hover,
.news-photo-next:hover {
  background: var(--gold); border-color: var(--gold); color: var(--white);
}
.news-photo-prev { left: 14px; }
.news-photo-next { right: 14px; }

/* Photo dot indicators */
.news-photo-dots {
  position: absolute; bottom: 16px; left: 0; right: 0;
  display: flex; align-items: center; justify-content: center; gap: 6px;
  z-index: 10;
}
.news-photo-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: rgba(255,255,255,.3);
  transition: background .3s, transform .3s;
  cursor: pointer;
}
.news-photo-dot.active {
  background: var(--gold); transform: scale(1.4);
}

/* Photo counter badge */
.news-photo-counter {
  position: absolute; top: 16px; left: 16px; z-index: 10;
  padding: 5px 12px;
  background: rgba(0,0,0,.5); backdrop-filter: blur(4px);
  border: 1px solid rgba(255,255,255,.1);
  font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
  color: rgba(255,255,255,.7); font-weight: 500;
}

/* ── Article text panel (right) ── */
.news-article-body {
  padding: 60px 56px;
  display: flex; flex-direction: column; justify-content: center;
  position: relative; background: var(--white);
}
.news-article-body::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--gold), var(--gold-lt), transparent);
}
.news-date-row {
  display: flex; align-items: center; gap: 16px;
  margin-bottom: 28px;
}
.news-date {
  font-size: 9.5px; letter-spacing: 3px; text-transform: uppercase; font-weight: 600;
  color: var(--gold);
}
.news-date-sep { width: 24px; height: 1px; background: var(--ash); flex-shrink: 0; }
.news-category {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase; font-weight: 500;
  color: var(--slate);
}
.news-article-h2 {
  font-family: var(--serif);
  font-size: clamp(22px, 2.2vw, 34px); font-weight: 400; line-height: 1.3;
  color: var(--ink); letter-spacing: -.4px; margin-bottom: 24px;
}
.news-article-text {
  font-size: 14.5px; line-height: 1.9; color: var(--charcoal); font-weight: 300;
  margin-bottom: 40px;
}
.news-article-text p + p { margin-top: 14px; }
.news-read-more {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 9.5px; letter-spacing: 3px; text-transform: uppercase; font-weight: 700;
  color: var(--gold-dk); transition: gap .3s;
  align-self: flex-start;
}
.news-read-more:hover { gap: 16px; color: var(--gold); }
.news-read-more-arr {
  display: inline-flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; border-radius: 50%;
  border: 1px solid var(--gold); color: var(--gold);
  font-size: 14px; transition: background .3s, color .3s;
}
.news-read-more:hover .news-read-more-arr { background: var(--gold); color: var(--white); }

/* ── Article slider nav (bottom bar) ── */
.news-slider-nav {
  display: flex; align-items: center; justify-content: space-between;
  margin-top: 28px; padding: 0 2px;
}
.news-article-dots {
  display: flex; align-items: center; gap: 10px;
}
.news-article-dot {
  width: 28px; height: 2px; background: var(--ash);
  cursor: pointer; transition: background .3s, width .3s;
}
.news-article-dot.active { background: var(--gold); width: 48px; }
.news-slider-btns {
  display: flex; gap: 10px;
}
.news-prev-btn,
.news-next-btn {
  width: 48px; height: 48px;
  border: 1px solid var(--silver);
  background: var(--white);
  color: var(--charcoal); font-size: 18px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: background .3s, border-color .3s, color .3s, transform .2s;
}
.news-prev-btn:hover,
.news-next-btn:hover {
  background: var(--gold); border-color: var(--gold);
  color: var(--white); transform: scale(1.05);
}
.news-article-counter {
  font-size: 10px; letter-spacing: 3px; color: var(--slate);
  font-weight: 500; text-transform: uppercase;
}

/* ── Responsive ── */
@media (max-width: 1100px) {
  .news-slide { grid-template-columns: 1fr; }
  .news-photo-slider { min-height: 360px; }
  .news-article-body { padding: 44px 40px; }
}
@media (max-width: 560px) {
  .news-article-body { padding: 32px 24px; }
  .news-photo-slider { min-height: 260px; }
  .news-prev-btn, .news-next-btn { width: 40px; height: 40px; font-size: 15px; }
}

/* ═══════════════════════════════════════════════
   CONTACT CTA
═══════════════════════════════════════════════ */
#contact {
  background: var(--black);
  padding: var(--pad) 0 80px;
  text-align: center; position: relative; overflow: hidden;
}
#contact::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 80% 80% at 50% 50%,
    rgba(184,146,74,.1) 0%, transparent 60%);
  pointer-events: none;
}
.contact-rings-wrap { position: absolute; inset: 0; pointer-events: none; display: flex; align-items: center; justify-content: center; }
.contact-ring {
  position: absolute; border-radius: 50%;
  border: 1px solid rgba(184,146,74,.12);
  animation: ringPulse 4s ease-in-out infinite;
}
.contact-ring:nth-child(1) { width: 300px; height: 300px; }
.contact-ring:nth-child(2) { width: 500px; height: 500px; animation-delay: .8s; }
.contact-ring:nth-child(3) { width: 720px; height: 720px; animation-delay: 1.6s; }
@keyframes ringPulse { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:.15;transform:scale(1.04)} }
.contact-inner { position: relative; z-index: 2; }
.contact-tag { justify-content: center; }
.contact-h {
  font-family: var(--serif);
  font-size: clamp(52px,7vw,100px); font-weight: 400; line-height: 1.05;
  color: var(--white); letter-spacing: -2px; margin-bottom: 24px;
}
.contact-h em { font-style: italic; color: var(--gold-lt); }
.contact-slogan {
  font-family: var(--serif); font-style: italic;
  font-size: 18px; color: rgba(255,255,255,.35); margin-bottom: 24px;
}
.contact-sub { font-size: 15.5px; line-height: 1.85; color: rgba(255,255,255,.42); max-width: 560px; margin: 0 auto 48px; font-weight: 300; }
.contact-btns { display: flex; align-items: center; justify-content: center; gap: 20px; }
.btn-gold {
  display: inline-flex; align-items: center; gap: 12px;
  padding: 16px 40px; background: var(--gold);
  color: var(--white); font-size: 10.5px; letter-spacing: 2.5px; text-transform: uppercase;
  font-weight: 600; border-radius: var(--radius);
  transition: background .3s, transform .3s;
}
.btn-gold:hover { background: var(--gold-lt); transform: translateY(-2px); }
.btn-outline-w {
  display: inline-flex; align-items: center; gap: 12px;
  padding: 15px 38px; border: 1px solid rgba(255,255,255,.22);
  color: rgba(255,255,255,.75); font-size: 10.5px; letter-spacing: 2.5px; text-transform: uppercase;
  font-weight: 600; border-radius: var(--radius);
  transition: border-color .3s, color .3s, transform .3s;
}
.btn-outline-w:hover { border-color: var(--white); color: var(--white); transform: translateY(-2px); }

/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
footer {
  background: var(--black); color: rgba(255,255,255,.55);
  padding: 80px 0 40px;
  border-top: 1px solid rgba(255,255,255,.05);
}
.ft-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1.2fr; gap: 60px; }
.ft-logo { height: 60px; width: auto; margin-bottom: 20px; }
.ft-slogan {
  font-family: var(--serif); font-style: italic;
  font-size: 15px; color: var(--gold-lt); margin-bottom: 18px;
}
.ft-about { font-size: 13.5px; line-height: 1.82; color: rgba(255,255,255,.3); font-weight: 300; max-width: 320px; margin-bottom: 28px; }
.ft-socials { display: flex; gap: 14px; }
.ft-soc {
  width: 36px; height: 36px; border: 1px solid rgba(255,255,255,.12); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; color: rgba(255,255,255,.4);
  transition: border-color .3s, color .3s, background .3s;
}
.ft-soc:hover { border-color: var(--gold); color: var(--gold); background: rgba(184,146,74,.08); }
.ft-col-h { font-size: 9.5px; letter-spacing: 4px; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,.4); margin-bottom: 22px; }
.ft-links { display: flex; flex-direction: column; gap: 11px; }
.ft-links a { font-size: 13px; color: rgba(255,255,255,.35); transition: color .3s; font-weight: 300; }
.ft-links a:hover { color: var(--gold-lt); }
.ft-contact-row { display: flex; flex-direction: column; gap: 16px; }
.ft-contact-lbl { font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: var(--gold-dk); margin-bottom: 2px; }
.ft-contact-val { font-size: 13px; color: rgba(255,255,255,.4); font-weight: 300; line-height: 1.7; }
.ft-bottom {
  margin-top: 56px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.05);
  display: flex; align-items: center; justify-content: space-between;
  font-size: 11px; color: rgba(255,255,255,.2);
}
.ft-bottom a { color: rgba(255,255,255,.25); transition: color .3s; }
.ft-bottom a:hover { color: var(--gold-lt); }

/* ═══════════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════════ */
@media (max-width: 1100px) {
  :root { --pad: 72px; }
  .container { padding: 0 40px; }
  .facts-grid { grid-template-columns: repeat(2,1fr); }
  .brands-grid { grid-template-columns: repeat(3,1fr); }
  .ft-grid { grid-template-columns: 1fr 1fr; gap: 48px; }
  .founder-grid { gap: 56px; }
  .founder-deco-quote { font-size: 140px; }
}
@media (max-width: 880px) {
  :root { --pad: 56px; }
  .container { padding: 0 28px; }
  #nav { padding: 0 28px; }
  .nav-links { display: none; }
  .nav-cta { display: none; }
  .founder-grid { grid-template-columns: 1fr; gap: 48px; min-height: auto; }
  .founder-right { margin-top: 0; }
  .founder-left { padding: 0; }
  .founder-badge { bottom: -12px; left: 8px; }
  .founder-img-frame { top: 14px; right: -14px; bottom: -14px; left: 14px; }
  .vmv-grid, .vals-grid { grid-template-columns: 1fr; }
  .accordion { flex-direction: column; height: auto; gap: 4px; }
  .acc-card { min-height: 80px; }
  .acc-card.open { flex: 1; min-height: 440px; }
  .acc-vert { writing-mode: horizontal-tb; padding: 24px; }
  .services-grid { grid-template-columns: repeat(4, 1fr); }
  .svc-card:nth-child(-n+3) { grid-column: span 2; }
  .svc-card:nth-child(n+4)  { grid-column: span 2; }
  .brands-grid { grid-template-columns: repeat(3,1fr); }
  .glo-country-btn { padding: 22px 24px; }
  .glo-cat-btn { padding: 16px 24px 16px 44px; }
  .glo-entity { padding: 10px 24px 10px 60px; }
  .glo-entity::before { left: 44px; }
  .ft-grid { grid-template-columns: 1fr; gap: 40px; }
  .div-header { flex-direction: column; align-items: flex-start; gap: 20px; }
  .facts-header { flex-direction: column; align-items: flex-start; gap: 20px; }
  .hero-row2 { flex-direction: column; align-items: flex-start; gap: 20px; }
  .hero-inner { padding: 0 28px; padding-top: var(--nav-h); }
}
@media (max-width: 560px) {
  .services-grid { grid-template-columns: 1fr; }
  .svc-card:nth-child(-n+3) { grid-column: span 1; }
  .svc-card:nth-child(n+4)  { grid-column: span 1; }
  .brands-grid { grid-template-columns: repeat(2,1fr); }
  .glo-country-btn { padding: 18px 16px; }
  .glo-cat-btn { padding: 14px 16px 14px 32px; }
  .glo-entity { padding: 9px 16px 9px 46px; }
  .glo-entity::before { left: 32px; }
  .vals-grid { grid-template-columns: 1fr 1fr; }
  .contact-h { font-size: 48px; }
  .fs-body { flex-direction: column; gap: 32px; }
  .fs-sidebar { display: none; }
}

/* ═══════════════════════════════════════════════
   OUR PURPOSE PAGE
═══════════════════════════════════════════════ */

/* Hero */
.pur-hero {
  position: relative;
  background: var(--black);
  padding: 180px 0 110px;
  overflow: hidden;
}
.pur-hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 80% at 20% 50%, rgba(184,146,74,.1) 0%, transparent 55%),
    radial-gradient(ellipse 50% 50% at 80% 20%, rgba(255,255,255,.03) 0%, transparent 50%);
}
.pur-hero-grid {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
  background-size: 80px 80px;
  animation: gridDrift 30s linear infinite;
  mask-image: radial-gradient(ellipse 90% 85% at 50% 50%, black 20%, transparent 100%);
}
.pur-hero-inner { position: relative; z-index: 2; max-width: 760px; }
.pur-hero-h1 {
  font-family: var(--serif);
  font-size: clamp(44px, 6vw, 88px);
  font-weight: 400; letter-spacing: -2px; line-height: 1.05;
  color: var(--white); margin-bottom: 28px;
}
.pur-hero-h1 em { font-style: italic; color: var(--gold-lt); }
.pur-hero-sub {
  font-size: 16px; line-height: 1.88;
  color: rgba(255,255,255,.42); font-weight: 300; max-width: 560px;
}
.pur-hero-scroll {
  position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center;
}
.pur-scroll-line {
  width: 1px; height: 56px;
  background: linear-gradient(to bottom, rgba(184,146,74,.5), transparent);
  animation: lineAnim 2s ease-in-out infinite;
}

/* Vision / Mission cards */
.pur-vm { background: var(--white); padding: var(--pad) 0; }
.pur-vm-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 2px;
}
.pur-vm-card {
  position: relative; overflow: hidden;
  padding: 72px 64px;
  background: var(--pearl); border: 1px solid var(--silver);
  transition: transform .4s var(--ease), box-shadow .4s;
}
.pur-vm-card:hover { transform: translateY(-6px); box-shadow: 0 24px 64px rgba(0,0,0,.07); }
.pur-vm-card--dark {
  background: var(--ink); border-color: transparent;
}
.pur-vm-card--dark .pur-vm-label { color: var(--gold-lt); }
.pur-vm-card--dark .pur-vm-title { color: var(--white); }
.pur-vm-card--dark .pur-vm-body { color: rgba(255,255,255,.5); }
.pur-vm-card--dark .pur-vm-rule { background: rgba(255,255,255,.1); }
.pur-vm-card--dark .pur-vm-pillar { color: rgba(255,255,255,.6); }
.pur-vm-card--dark .pur-vm-dot { background: var(--gold-lt); }

.pur-vm-bg-label {
  position: absolute; bottom: -10px; right: -10px;
  font-family: var(--serif); font-size: 120px; font-weight: 400; line-height: 1;
  color: rgba(0,0,0,.03); pointer-events: none; user-select: none; white-space: nowrap;
}
.pur-vm-card--dark .pur-vm-bg-label { color: rgba(255,255,255,.03); }

.pur-vm-icon {
  font-family: var(--serif); font-size: 40px;
  color: var(--gold); line-height: 1; margin-bottom: 24px;
}
.pur-vm-card--dark .pur-vm-icon { color: var(--gold-lt); }
.pur-vm-label {
  font-size: 9.5px; letter-spacing: 5px; text-transform: uppercase; font-weight: 700;
  color: var(--gold-dk); margin-bottom: 20px;
}
.pur-vm-title {
  font-family: var(--serif); font-size: clamp(28px, 3vw, 44px); font-weight: 400;
  color: var(--ink); line-height: 1.2; letter-spacing: -.5px; margin-bottom: 24px;
}
.pur-vm-body {
  font-size: 15px; line-height: 1.88; color: var(--charcoal); font-weight: 300;
  margin-bottom: 32px;
}
.pur-vm-rule { height: 1px; background: var(--silver); margin-bottom: 28px; }
.pur-vm-pillars { display: flex; flex-direction: column; gap: 10px; list-style: none; }
.pur-vm-pillar {
  display: flex; align-items: center; gap: 12px;
  font-size: 13px; color: var(--charcoal); font-weight: 400;
}
.pur-vm-dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--gold); flex-shrink: 0;
}

/* Slogan strip */
.pur-slogan-strip {
  background: var(--gold); padding: 18px 0; overflow: hidden;
}
.pur-slogan-track {
  display: flex; white-space: nowrap;
  animation: mqRun 28s linear infinite;
}
.pur-slogan-item {
  display: inline-flex; align-items: center;
  padding: 0 28px;
  font-family: var(--serif); font-style: italic;
  font-size: 18px; color: rgba(255,255,255,.85); letter-spacing: .5px;
}

/* Core Values */
.pur-values { background: var(--pearl); padding: var(--pad) 0; }
.pur-values-sub {
  font-size: 15.5px; line-height: 1.88; color: var(--charcoal); font-weight: 300;
  max-width: 560px; margin: 16px auto 0;
}
.pur-vals-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px;
}
.pur-val-card {
  background: var(--white); padding: 52px 40px;
  border: 1px solid var(--silver); position: relative; overflow: hidden;
  transition: transform .4s var(--ease), box-shadow .4s, border-color .4s;
}
.pur-val-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 64px rgba(0,0,0,.08);
  border-color: var(--gold);
}
.pur-val-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
  opacity: 0; transition: opacity .4s;
}
.pur-val-card:hover::before { opacity: 1; }
.pur-val-top {
  display: flex; align-items: flex-start; justify-content: space-between;
  margin-bottom: 24px;
}
.pur-val-icon {
  font-family: var(--serif); font-size: 32px; color: var(--gold); line-height: 1;
}
.pur-val-num {
  font-family: var(--serif); font-size: 48px; font-weight: 400; line-height: 1;
  color: rgba(184,146,74,.12);
}
.pur-val-title {
  font-size: 11px; letter-spacing: 3.5px; text-transform: uppercase; font-weight: 700;
  color: var(--gold-dk); margin-bottom: 16px;
}
.pur-val-body {
  font-size: 13.5px; line-height: 1.82; color: var(--charcoal); font-weight: 300;
  margin-bottom: 28px;
}
.pur-val-points { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.pur-val-point {
  display: flex; align-items: center; gap: 10px;
  font-size: 12.5px; color: var(--slate); font-weight: 400;
}
.pur-val-pt-dot {
  width: 5px; height: 5px; border-radius: 50%; background: var(--gold-lt); flex-shrink: 0;
}

/* Founder quote */
.pur-fq { background: var(--ink); padding: var(--pad) 0; }
.pur-fq-inner {
  display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
  align-items: center; max-width: 1100px; margin: 0 auto;
}
.pur-fq-photo {
  position: relative; border-radius: 4px; overflow: hidden;
  aspect-ratio: 4/3;
  box-shadow: 0 32px 80px rgba(0,0,0,.5);
}
.pur-fq-photo img {
  width: 100%; height: 100%; object-fit: cover; object-position: center top;
  filter: grayscale(10%);
  transition: transform .9s var(--ease);
}
.pur-fq-photo:hover img { transform: scale(1.04); }
.pur-fq-photo-frame {
  position: absolute; inset: 16px; border: 1px solid rgba(184,146,74,.3);
  border-radius: 2px; pointer-events: none; z-index: 1;
}
.pur-fq-content { display: flex; flex-direction: column; gap: 28px; }
.pur-fq-mark {
  font-family: var(--serif); font-size: 120px; line-height: .6;
  color: rgba(184,146,74,.18);
  pointer-events: none; margin-bottom: -16px;
}
.pur-fq-quote {
  font-family: var(--serif); font-style: italic;
  font-size: clamp(20px, 2.2vw, 30px); font-weight: 400; line-height: 1.65;
  color: rgba(255,255,255,.85); letter-spacing: -.2px;
  border-left: 2px solid var(--gold); padding-left: 24px;
  border-top: none; padding-top: 0;
}
.pur-fq-sig { }
.pur-fq-name {
  font-family: var(--serif); font-size: 20px; font-style: italic;
  color: var(--gold-lt); margin-bottom: 6px;
}
.pur-fq-title {
  font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
  color: rgba(255,255,255,.3); font-weight: 400;
}

/* Responsive — purpose page */
@media (max-width: 1100px) {
  .pur-vals-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 880px) {
  .pur-vm-grid { grid-template-columns: 1fr; }
  .pur-vm-card { padding: 52px 40px; }
  .pur-vals-grid { grid-template-columns: repeat(2, 1fr); }
  .pur-fq-inner { grid-template-columns: 1fr; gap: 48px; }
  .pur-fq-photo { max-width: 480px; }
}
@media (max-width: 560px) {
  .pur-vals-grid { grid-template-columns: 1fr; }
  .pur-vm-card { padding: 40px 28px; }
  .pur-fq-mark { font-size: 80px; }
  .pur-fq-photo { max-width: 100%; }
}

/* Hero */
.hl-hero {
  position: relative;
  background: var(--black);
  padding: 180px 0 100px;
  overflow: hidden;
}
.hl-hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 70% at 15% 50%, rgba(184,146,74,.09) 0%, transparent 55%),
    radial-gradient(ellipse 40% 50% at 85% 30%, rgba(255,255,255,.03) 0%, transparent 50%);
}
.hl-hero-grid {
  position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
  background-size: 80px 80px;
  animation: gridDrift 30s linear infinite;
  mask-image: radial-gradient(ellipse 90% 85% at 50% 50%, black 20%, transparent 100%);
}
.hl-hero-inner { position: relative; z-index: 2; }
.hl-hero-h1 {
  font-family: var(--serif);
  font-size: clamp(44px, 6vw, 88px);
  font-weight: 400; letter-spacing: -2px; line-height: 1.05;
  color: var(--white); margin-bottom: 28px;
}
.hl-hero-h1 em { font-style: italic; color: var(--gold-lt); }
.hl-hero-sub {
  font-size: 16px; line-height: 1.85;
  color: rgba(255,255,255,.42); font-weight: 300;
  max-width: 560px;
}

/* Stats band */
.hl-stats { background: var(--pearl); padding: 80px 0; }
.hl-stats-grid {
  display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
  background: var(--silver); border: 1px solid var(--silver);
}
.hl-stat-card {
  background: var(--white); padding: 52px 32px;
  text-align: center; position: relative; overflow: hidden;
  transition: background .4s;
}
.hl-stat-card:hover { background: var(--snow); }
.hl-stat-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold-dk), var(--gold-lt));
  opacity: 0; transition: opacity .4s;
}
.hl-stat-card:hover::before { opacity: 1; }
.hl-stat-val {
  font-family: var(--serif); font-size: clamp(44px, 5vw, 68px); font-weight: 400;
  color: var(--ink); line-height: 1; margin-bottom: 14px;
  display: flex; align-items: flex-start; justify-content: center;
}
.hl-stat-p { font-size: .55em; margin-top: 6px; color: var(--gold); font-weight: 300; }
.hl-stat-label {
  font-size: 10px; letter-spacing: 3.5px; text-transform: uppercase;
  color: var(--slate); font-weight: 600;
}

/* Brand section */
.hl-brands { background: var(--white); padding: var(--pad) 0; }
.hl-brands-sub {
  font-size: 15.5px; line-height: 1.88; color: var(--charcoal); font-weight: 300;
  max-width: 600px; margin-top: 20px;
}

/* FAQ List */
.faq-list { display: flex; flex-direction: column; gap: 2px; }

.faq-item {
  border: 1px solid var(--silver);
  background: var(--white);
  overflow: hidden;
  transition: border-color .35s, box-shadow .35s;
}
.faq-item.open {
  border-color: var(--gold);
  box-shadow: 0 8px 40px rgba(184,146,74,.1);
}
.faq-item:hover { border-color: var(--ash); }
.faq-item.open:hover { border-color: var(--gold); }

/* FAQ question row */
.faq-q {
  width: 100%; padding: 32px 40px;
  display: flex; align-items: center; justify-content: space-between;
  background: none; cursor: pointer;
  transition: background .3s;
  text-align: left;
}
.faq-q:hover { background: var(--pearl); }
.faq-item.open .faq-q { background: var(--gold-bg); }

.faq-q-left {
  display: flex; align-items: center; gap: 32px;
}
.faq-brand-logo-wrap {
  width: 120px; height: 44px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.faq-brand-logo {
  width: 120px; height: 44px; object-fit: contain;
  filter: none;
  transition: transform .35s;
}
.faq-item.open .faq-brand-logo,
.faq-q:hover .faq-brand-logo { filter: none; }

.faq-q-text {
  display: flex; flex-direction: column; gap: 4px;
}
.faq-brand-name {
  font-family: var(--serif); font-size: 22px; font-weight: 400;
  color: var(--ink); letter-spacing: -.3px;
}
.faq-brand-cat {
  font-size: 10.5px; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--slate); font-weight: 500;
}

/* Plus / Minus icon */
.faq-icon {
  width: 28px; height: 28px; flex-shrink: 0;
  position: relative;
  border: 1px solid var(--ash); border-radius: 50%;
  transition: background .3s, border-color .3s;
}
.faq-item.open .faq-icon { background: var(--gold); border-color: var(--gold); }
.faq-icon-bar {
  position: absolute; background: var(--charcoal);
  left: 50%; top: 50%; border-radius: 1px;
  transform: translate(-50%,-50%);
  transition: transform .35s, opacity .35s, background .3s;
}
.faq-item.open .faq-icon-bar { background: var(--white); }
.faq-icon-h { width: 12px; height: 1.5px; }
.faq-icon-v { width: 1.5px; height: 12px; }
.faq-item.open .faq-icon-v {
  transform: translate(-50%,-50%) rotate(90deg);
  opacity: 0;
}

/* FAQ answer panel */
.faq-a {
  max-height: 0; overflow: hidden;
  transition: max-height .55s cubic-bezier(.76,0,.24,1);
}
.faq-a-inner { padding: 0 40px 44px; }

.faq-intro {
  font-size: 15px; line-height: 1.88; color: var(--charcoal); font-weight: 300;
  margin-bottom: 36px; padding-top: 4px;
  border-left: 2px solid var(--gold-lt); padding-left: 20px;
}
.faq-intro strong { color: var(--ink); font-weight: 600; }

/* Achievement rows */
.faq-achievements { display: flex; flex-direction: column; gap: 12px; margin-bottom: 36px; }
.faq-ach-row {
  display: flex; align-items: flex-start; gap: 20px;
  padding: 18px 24px;
  background: var(--pearl); border: 1px solid var(--silver);
  border-radius: var(--radius);
  transition: border-color .3s, transform .3s;
}
.faq-ach-row:hover { border-color: var(--gold-lt); transform: translateX(4px); }
.faq-ach-badge {
  padding: 5px 12px;
  background: var(--gold); color: var(--white);
  font-size: 9px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700;
  border-radius: var(--radius); white-space: nowrap; flex-shrink: 0;
  margin-top: 2px;
}
.faq-ach-info { flex: 1; }
.faq-ach-text {
  font-size: 14px; line-height: 1.65; color: var(--ink); font-weight: 400;
  margin-bottom: 4px;
}
.faq-ach-years {
  font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--gold-dk); font-weight: 600;
}

/* Model tags */
.faq-models-lbl {
  font-size: 9.5px; letter-spacing: 4px; text-transform: uppercase;
  color: var(--slate); font-weight: 700; margin-bottom: 14px;
}
.faq-models-grid { display: flex; flex-wrap: wrap; gap: 8px; }
.faq-model-tag {
  padding: 7px 16px;
  border: 1px solid var(--silver);
  font-size: 12px; letter-spacing: 1px; color: var(--charcoal);
  border-radius: var(--radius);
  transition: border-color .3s, color .3s, background .3s;
}
.faq-model-tag:hover { border-color: var(--gold); color: var(--ink); background: var(--gold-bg); }

/* Stellantis overall band */
.hl-stellantis {
  background: var(--panel);
  padding: var(--pad) 0;
}
.hl-stl-inner {
  display: flex; align-items: center; gap: 80px;
}
.hl-stl-badge {
  flex-shrink: 0;
  width: 160px; height: 160px; border-radius: 50%;
  background: var(--gold);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  box-shadow: 0 0 0 20px rgba(184,146,74,.1);
}
.hl-stl-n {
  font-family: var(--serif); font-size: 64px; font-weight: 400;
  color: var(--white); line-height: 1;
}
.hl-stl-l {
  font-size: 8px; letter-spacing: 2.5px; text-transform: uppercase;
  color: rgba(255,255,255,.75); margin-top: 4px; text-align: center; line-height: 1.6;
}
.hl-stl-body {
  font-size: 15.5px; line-height: 1.88; color: rgba(255,255,255,.48); font-weight: 300;
  margin-top: 24px;
}
.hl-stl-body strong { color: rgba(255,255,255,.85); font-weight: 600; }

/* CTA strip */
.hl-cta { background: var(--pearl); padding: 64px 0; }
.hl-cta-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 24px; }
.hl-cta-text { font-family: var(--serif); font-size: 28px; font-weight: 400; color: var(--ink); }

/* Company profile download */
.hl-profile {
  background: var(--black);
  padding: 80px 0;
  border-top: 1px solid rgba(193,155,90,.15);
}
.hl-profile-inner {
  display: flex; align-items: center;
  justify-content: space-between; gap: 64px;
  flex-wrap: wrap;
}
.hl-profile-left {
  display: flex; align-items: flex-start; gap: 32px; flex: 1; min-width: 280px;
}
.hl-profile-icon {
  flex-shrink: 0; margin-top: 6px;
}
.hl-profile-meta { flex: 1; }
.hl-profile-h2 {
  font-family: var(--serif);
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 400; line-height: 1.15;
  color: var(--white); margin-bottom: 18px;
}
.hl-profile-h2 em { font-style: italic; color: var(--gold-lt); }
.hl-profile-body {
  font-size: 14px; line-height: 1.8;
  color: rgba(255,255,255,.5); max-width: 520px;
  margin-bottom: 20px;
}
.hl-profile-info { display: flex; gap: 10px; flex-wrap: wrap; }
.hl-profile-tag {
  font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase;
  padding: 4px 12px;
  border: 1px solid rgba(193,155,90,.3);
  color: rgba(193,155,90,.7);
}
/* Download button */
.hl-profile-btn {
  display: flex; align-items: center; gap: 20px;
  padding: 24px 36px;
  background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dk) 100%);
  color: var(--white); text-decoration: none;
  flex-shrink: 0;
  transition: transform .25s, box-shadow .25s;
  box-shadow: 0 8px 32px rgba(193,155,90,.25);
}
.hl-profile-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 40px rgba(193,155,90,.4);
}
.hl-profile-btn-icon {
  font-size: 28px; line-height: 1;
  width: 48px; height: 48px; border-radius: 50%;
  background: rgba(255,255,255,.15);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.hl-profile-btn-text { display: flex; flex-direction: column; gap: 4px; }
.hl-profile-btn-label {
  font-size: 13px; letter-spacing: 2.5px; text-transform: uppercase;
  font-weight: 700;
}
.hl-profile-btn-sub {
  font-size: 10px; letter-spacing: 1.5px; opacity: .75;
}
@media (max-width: 880px) {
  .hl-profile-inner { flex-direction: column; align-items: flex-start; gap: 40px; }
  .hl-profile-btn { width: 100%; justify-content: center; }
}
@media (max-width: 560px) {
  .hl-profile-left { flex-direction: column; gap: 20px; }
}

/* Responsive — highlights */
@media (max-width: 1100px) {
  .hl-stats-grid { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 880px) {
  .hl-stl-inner { flex-direction: column; align-items: flex-start; gap: 40px; }
  .faq-q { padding: 24px 28px; }
  .faq-q-left { gap: 20px; }
  .faq-a-inner { padding: 0 28px 36px; }
  .hl-cta-inner { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 560px) {
  .hl-stats-grid { grid-template-columns: 1fr 1fr; }
  .faq-brand-logo-wrap { width: 80px; height: 36px; }
  .faq-brand-logo { width: 80px; height: 36px; }
  .faq-brand-name { font-size: 18px; }
  .hl-stl-badge { width: 120px; height: 120px; }
  .hl-stl-n { font-size: 48px; }
}

/* ═══════════════════════════════════════════════
   CAREERS PAGE
═══════════════════════════════════════════════ */
.car-hero {
  position: relative; min-height: 640px;
  display: flex; align-items: center;
  background: var(--black); overflow: hidden;
}
.car-hero-bg {
  position: absolute; inset: 0;
  background:
    linear-gradient(135deg, rgba(20,18,16,.98) 0%, rgba(30,26,22,.92) 60%, rgba(14,12,10,.95) 100%);
}
.car-hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(193,155,90,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(193,155,90,.04) 1px, transparent 1px);
  background-size: 80px 80px;
}
.car-hero-inner {
  position: relative; z-index: 2;
  padding-top: 160px; padding-bottom: 100px;
  max-width: 820px;
}
.car-hero-h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 600; line-height: 1.12; letter-spacing: -1px;
  color: var(--white); margin: 20px 0 28px;
}
.car-hero-h1 em { font-style: italic; color: var(--gold-lt); }
.car-hero-sub {
  font-size: 16px; line-height: 1.75; color: rgba(255,255,255,.65);
  max-width: 600px; margin-bottom: 40px;
}
.car-hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }

/* Why section */
.car-why { background: var(--snow); padding: var(--pad) 0; }
.car-why-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 32px; margin-top: 64px;
}
.car-why-card {
  background: var(--white); padding: 40px 36px;
  border: 1px solid var(--silver);
  transition: transform .4s var(--ease), box-shadow .4s;
}
.car-why-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 48px rgba(0,0,0,.08);
}
.car-why-icon {
  font-size: 22px; color: var(--gold); margin-bottom: 20px;
}
.car-why-title {
  font-family: 'Playfair Display', serif;
  font-size: 18px; font-weight: 600; color: var(--ink);
  margin-bottom: 14px;
}
.car-why-body { font-size: 14px; line-height: 1.75; color: var(--slate); }

/* Openings */
.car-openings { background: var(--white); padding: var(--pad) 0; }
.car-jobs-grid { margin-top: 56px; }
.car-division-label {
  font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
  font-weight: 600; color: var(--gold);
  padding: 40px 0 20px;
  border-top: 1px solid var(--silver);
  margin-top: 16px;
}
.car-division-label:first-child { border-top: none; margin-top: 0; padding-top: 0; }
.car-job-card {
  display: flex; align-items: center; justify-content: space-between;
  padding: 28px 32px;
  border: 1px solid var(--silver);
  margin-bottom: 12px;
  transition: border-color .3s, background .3s, transform .3s;
}
.car-job-card:hover {
  border-color: var(--gold); background: var(--snow);
  transform: translateX(6px);
}
.car-job-dept {
  font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--gold); font-weight: 600; margin-bottom: 8px;
}
.car-job-title {
  font-family: 'Playfair Display', serif;
  font-size: 18px; font-weight: 500; color: var(--ink);
  margin-bottom: 10px;
}
.car-job-meta { display: flex; gap: 20px; align-items: center; }
.car-job-loc { font-size: 12.5px; color: var(--slate); }
.car-job-type {
  font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
  background: var(--pearl); color: var(--charcoal);
  padding: 4px 10px;
}
.car-job-apply {
  font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
  font-weight: 600; color: var(--gold);
  border: 1px solid var(--gold); padding: 10px 24px;
  white-space: nowrap;
  transition: background .3s, color .3s;
}
.car-job-apply:hover { background: var(--gold); color: var(--white); }

/* Apply / CTA */
.car-apply { background: var(--black); padding: var(--pad) 0; }
.car-apply-inner {
  display: grid; grid-template-columns: 1fr 1.4fr;
  gap: 80px; align-items: start;
}
.car-apply-h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 3.5vw, 44px); font-weight: 600;
  color: var(--white); line-height: 1.2; margin: 20px 0 24px;
}
.car-apply-h2 em { font-style: italic; color: var(--gold-lt); }
.car-apply-body { font-size: 14.5px; line-height: 1.8; color: rgba(255,255,255,.6); }
.car-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.car-input {
  width: 100%; padding: 14px 18px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.12);
  color: rgba(255,255,255,.9); font-size: 13.5px;
  outline: none; font-family: inherit;
  transition: border-color .3s, background .3s;
  box-sizing: border-box;
}
.car-input::placeholder { color: rgba(255,255,255,.3); }
.car-input:focus { border-color: var(--gold); background: rgba(255,255,255,.08); }
.car-select { cursor: pointer; }
.car-select option { background: #1c1a18; color: #e8e0d4; }
.car-textarea { min-height: 120px; resize: vertical; margin-bottom: 16px; display: block; }
/* CV upload */
.car-upload-wrap { margin-bottom: 24px; }
.car-upload-input { display: none; }
.car-upload-label {
  display: flex; align-items: center; gap: 14px;
  padding: 14px 18px; cursor: pointer;
  border: 1px dashed rgba(193,155,90,.45);
  background: rgba(193,155,90,.04);
  transition: border-color .3s, background .3s;
}
.car-upload-label:hover { border-color: var(--gold); background: rgba(193,155,90,.09); }
.car-upload-icon {
  width: 36px; height: 36px; flex-shrink: 0;
  background: rgba(193,155,90,.15); border: 1px solid rgba(193,155,90,.3);
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; color: var(--gold);
}
.car-upload-text { font-size: 13px; color: rgba(255,255,255,.85); font-weight: 500; }
.car-upload-hint { font-size: 11px; color: rgba(255,255,255,.35); letter-spacing: .5px; margin-left: auto; }
.car-upload-name {
  margin-top: 8px; font-size: 11px; letter-spacing: .5px;
  color: var(--gold); padding-left: 4px;
}
.car-submit {
  width: 100%; padding: 16px;
  background: var(--gold); color: var(--white);
  border: none; font-size: 11px; letter-spacing: 2.5px;
  text-transform: uppercase; font-weight: 600; cursor: pointer;
  font-family: inherit;
  transition: background .3s, transform .2s;
}
.car-submit:hover { background: var(--gold-dk); transform: translateY(-2px); }

/* Responsive */
@media (max-width: 1024px) {
  .car-why-grid { grid-template-columns: repeat(2, 1fr); }
  .car-apply-inner { grid-template-columns: 1fr; gap: 56px; }
}
@media (max-width: 680px) {
  .car-why-grid { grid-template-columns: 1fr; }
  .car-form-row { grid-template-columns: 1fr; }
  .car-job-card { flex-direction: column; align-items: flex-start; gap: 16px; }
}

/* ═══════════════════════════════════════════════
   LOCATIONS PAGE — ENHANCED
═══════════════════════════════════════════════ */

/* ── Hero ── */
.loc-hero {
  position: relative; height: 100vh; min-height: 640px;
  display: flex; align-items: center;
  background: var(--black); overflow: hidden;
}
.loc-hero-bg {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 80% 70% at 20% 50%, rgba(184,146,74,.12) 0%, transparent 60%);
}
.loc-hero-imgs {
  position: absolute; inset: 0;
  display: grid; grid-template-columns: repeat(4,1fr);
}
.loc-hero-img {
  background-size: cover; background-position: center;
  opacity: 0; transition: opacity 1.4s ease;
  filter: grayscale(100%) brightness(.22);
}
.loc-hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.3) 100%);
}
.loc-hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 95% 90% at 50% 40%, black 20%, transparent 100%);
}
.loc-hero-inner {
  position: relative; z-index: 10;
  padding-top: var(--nav-h);
  padding-bottom: 60px;
}
.loc-hero-tag {
  font-size: 9.5px; letter-spacing: 5px; text-transform: uppercase;
  color: var(--gold); font-weight: 600;
  display: flex; align-items: center; gap: 14px; margin-bottom: 24px;
}
.loc-hero-tag::before { content:''; width:30px; height:1px; background:var(--gold); }
.loc-hero-h1 {
  font-family: var(--serif); font-size: clamp(52px,7vw,96px);
  font-weight: 400; line-height: .95; letter-spacing: -2px;
  color: var(--white); margin-bottom: 24px;
}
.loc-hero-h1 em { font-style: italic; color: var(--gold-lt); }
.loc-hero-sub {
  font-size: 15px; line-height: 1.8; color: rgba(255,255,255,.5);
  max-width: 480px; font-weight: 300; margin-bottom: 48px;
}
.loc-hero-countries {
  display: flex; gap: 12px; flex-wrap: wrap;
}
.loc-hero-ctry {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 10px 20px; border: 1px solid rgba(255,255,255,.15);
  color: rgba(255,255,255,.65); font-size: 11px; letter-spacing: 2px;
  text-transform: uppercase; font-weight: 500;
  transition: all .3s; border-radius: 2px;
}
.loc-hero-ctry img { width: 22px; height: 15px; object-fit:cover; border-radius:2px; }
.loc-hero-ctry:hover { border-color: var(--gold); color: var(--gold); background: rgba(184,146,74,.08); }
.loc-hero-scroll {
  position: absolute; bottom: 44px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 10px;
}
.loc-hero-scroll span {
  font-size: 8px; letter-spacing: 5px; text-transform: uppercase;
  color: rgba(255,255,255,.25);
}
.loc-hero-scroll-line {
  width: 1px; height: 52px;
  background: linear-gradient(to bottom, rgba(184,146,74,.5), transparent);
  animation: lineAnim 2s ease-in-out infinite;
}

/* ── Stats strip ── */
.loc-stats {
  background: var(--panel); border-bottom: 1px solid rgba(255,255,255,.06);
}
.loc-stats-inner {
  display: flex; align-items: center; justify-content: center;
  gap: 0; padding: 0;
}
.loc-stat {
  flex: 1; text-align: center; padding: 36px 24px;
  border-right: 1px solid rgba(255,255,255,.06);
}
.loc-stat:last-child { border-right: none; }
.loc-stat-n {
  font-family: var(--serif); font-size: 44px; color: var(--gold);
  line-height: 1; display: block; margin-bottom: 6px;
}
.loc-stat-l {
  font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
  color: rgba(255,255,255,.35); font-weight: 400;
}
.loc-stat-div { display: none; }

/* ── Filter bar ── */
.loc-filters {
  background: var(--white); border-bottom: 1px solid var(--silver);
  position: sticky; top: 72px; z-index: 90;
  box-shadow: 0 2px 20px rgba(0,0,0,.06);
}
.loc-filters-inner {
  display: flex; gap: 0; overflow-x: auto; scrollbar-width: none;
}
.loc-filters-inner::-webkit-scrollbar { display: none; }
.loc-flt {
  flex-shrink: 0; display: inline-flex; align-items: center; gap: 8px;
  padding: 18px 28px;
  font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--ash); background: none; border: none;
  border-bottom: 2px solid transparent;
  transition: color .2s, border-color .2s; cursor: pointer;
}
.loc-flt-flag { width: 20px; height: 14px; object-fit: cover; border-radius: 2px; }
.loc-flt:hover { color: var(--charcoal); }
.loc-flt.active { color: var(--gold-dk); border-bottom-color: var(--gold); }

/* ── Country sections ── */
.loc-country { background: var(--white); }
.loc-country--alt { background: var(--snow); }

/* Country banner */
.loc-country-banner {
  position: relative; height: 420px;
  background-size: cover; background-position: center;
  display: flex; align-items: flex-end; overflow: hidden;
}
.loc-country-banner-shade {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,.88) 0%, rgba(0,0,0,.3) 60%, rgba(0,0,0,.1) 100%);
}
.loc-country-banner-inner {
  position: relative; z-index: 2;
  padding-bottom: 56px;
}
.loc-country-tag {
  font-size: 9px; letter-spacing: 4px; text-transform: uppercase;
  color: var(--gold); font-weight: 600; margin-bottom: 16px;
  display: flex; align-items: center; gap: 12px;
}
.loc-country-tag::before { content:''; width:24px; height:1px; background:var(--gold); }
.loc-country-banner-row {
  display: flex; align-items: center; gap: 20px; margin-bottom: 16px;
}
.loc-country-flag {
  width: 52px; height: 35px; object-fit: cover;
  border-radius: 3px; box-shadow: 0 3px 16px rgba(0,0,0,.4);
}
.loc-country-title {
  font-family: var(--serif); font-size: clamp(36px,5vw,68px);
  font-weight: 400; color: #fff; line-height: 1; letter-spacing: -1px;
}
.loc-country-desc {
  font-size: 14.5px; color: rgba(255,255,255,.6); max-width: 600px;
  line-height: 1.7; font-weight: 300; margin-bottom: 24px;
}
.loc-country-pills { display: flex; gap: 8px; flex-wrap: wrap; }
.loc-pill {
  padding: 6px 14px; border: 1px solid rgba(184,146,74,.4);
  color: rgba(255,255,255,.7); font-size: 10px; letter-spacing: 1.5px;
  text-transform: uppercase; font-weight: 500; border-radius: 2px;
  background: rgba(184,146,74,.08);
}

/* ── Category row ── */
.loc-cat-row {
  display: flex; align-items: center; gap: 14px;
  margin-top: 56px; margin-bottom: 28px; padding-bottom: 16px;
  border-bottom: 1px solid var(--silver);
}
.loc-cat-row:first-of-type { margin-top: 56px; }
.loc-cat-icon { color: var(--gold); font-size: 13px; flex-shrink: 0; }
.loc-cat-name {
  font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
  font-weight: 700; color: var(--charcoal);
}
.loc-cat-count {
  margin-left: auto; font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
  color: var(--gold); font-weight: 600;
  padding: 4px 12px; border: 1px solid rgba(184,146,74,.3); border-radius: 2px;
}

/* ── Location cards grid ── */
.loc-location-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 24px; padding-bottom: 12px;
}

/* ── Individual location card ── */
.lloc-card {
  border-radius: 4px; overflow: hidden;
  background: var(--white); border: 1px solid var(--silver);
  transition: transform .3s, box-shadow .3s;
  display: flex; flex-direction: column;
}
.lloc-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0,0,0,.12);
}
.lloc-card--dark { background: var(--panel); border-color: rgba(184,146,74,.2); }
.lloc-card--featured { border-color: rgba(184,146,74,.5); }

/* card photo */
/* ── Location card slider ── */
.lloc-slider {
  position: relative; height: 280px;
  overflow: hidden; flex-shrink: 0;
  background: #111;
}
.lloc-slides {
  position: absolute; inset: 0;
  pointer-events: none;
}
.lloc-slide {
  position: absolute; inset: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity .6s ease;
}
.lloc-slide.active { opacity: 1; }
/* Featured (wide) card gets taller slider */
.lloc-card--featured .lloc-slider { height: 360px; }

/* arrows */
.lloc-arrow {
  position: absolute; top: 50%; transform: translateY(-50%);
  z-index: 6;
  background: rgba(0,0,0,.55); backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,.18);
  color: #fff; font-size: 26px; line-height: 1;
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%; cursor: pointer;
  opacity: 0;
  transition: opacity .25s, background .25s;
}
.lloc-slider:hover .lloc-arrow { opacity: 1; }
.lloc-arrow:hover { background: var(--gold); color: var(--black); border-color: var(--gold); }
.lloc-arrow--prev { left: 10px; }
.lloc-arrow--next { right: 10px; }

/* dots */
.lloc-dots {
  position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);
  display: flex; gap: 6px; z-index: 6;
}
.lloc-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: rgba(255,255,255,.4); border: none; cursor: pointer;
  padding: 0; transition: background .25s, transform .25s;
}
.lloc-dot.active { background: var(--gold); transform: scale(1.3); }

/* shade & badges (same as before, now inside .lloc-slider) */
.lloc-photo-shade {
  position: absolute; inset: 0; z-index: 2;
  background: linear-gradient(to top, rgba(0,0,0,.72) 0%, rgba(0,0,0,.1) 60%);
  pointer-events: none;
}
.lloc-brand-badge {
  position: absolute; bottom: 14px; left: 16px;
  z-index: 4;
  font-family: var(--serif); font-size: 18px; font-style: italic;
  color: #fff; font-weight: 400;
  text-shadow: 0 2px 8px rgba(0,0,0,.5);
}
.lloc-brand-badge--gold { color: var(--gold-lt); }
.lloc-country-chip {
  position: absolute; top: 12px; right: 12px;
  z-index: 4;
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(0,0,0,.6); backdrop-filter: blur(8px);
  padding: 5px 10px; border-radius: 20px;
  font-size: 10px; letter-spacing: 1px; text-transform: uppercase;
  color: rgba(255,255,255,.85); font-weight: 500;
}
.lloc-country-chip img { width: 16px; height: 11px; object-fit:cover; border-radius:1px; }
.lloc-featured-ribbon {
  position: absolute; top: 14px; left: 14px;
  z-index: 4;
  background: var(--gold); color: var(--black);
  font-size: 8.5px; letter-spacing: 2px; text-transform: uppercase;
  font-weight: 700; padding: 4px 10px; border-radius: 2px;
}

/* card body */
.lloc-body {
  padding: 24px 24px 28px;
  display: flex; flex-direction: column; flex: 1;
}
.lloc-type {
  font-size: 9.5px; letter-spacing: 2px; text-transform: uppercase;
  color: var(--gold); font-weight: 600; margin-bottom: 10px;
}
.lloc-card--dark .lloc-type { color: var(--gold-lt); }
.lloc-name {
  font-family: var(--serif); font-size: 20px; font-weight: 600;
  color: var(--charcoal); line-height: 1.25; margin-bottom: 12px;
}
.lloc-card--dark .lloc-name { color: #fff; }
.lloc-cities {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; color: var(--slate); margin-bottom: 14px;
}
.lloc-city-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--gold); flex-shrink: 0;
}
.lloc-card--dark .lloc-cities { color: rgba(255,255,255,.4); }
.lloc-desc {
  font-size: 13px; line-height: 1.75; color: var(--charcoal);
  font-weight: 300; flex: 1; margin-bottom: 18px;
}
.lloc-card--dark .lloc-desc { color: rgba(255,255,255,.55); }
.lloc-desc strong { color: var(--charcoal); font-weight: 600; }
.lloc-card--dark .lloc-desc strong { color: #fff; }

/* achievement tags */
.lloc-tags {
  display: flex; gap: 6px; flex-wrap: wrap; margin-top: auto;
}
.lloc-tag {
  font-size: 9px; letter-spacing: 1.2px; text-transform: uppercase;
  font-weight: 600; padding: 4px 9px; border-radius: 2px;
  background: var(--pearl); color: var(--charcoal); border: 1px solid var(--silver);
}
.lloc-tag--gold {
  background: rgba(184,146,74,.1);
  color: var(--gold-dk); border-color: rgba(184,146,74,.35);
}
.lloc-card--dark .lloc-tag {
  background: rgba(255,255,255,.06);
  color: rgba(255,255,255,.5); border-color: rgba(255,255,255,.1);
}
.lloc-card--dark .lloc-tag--gold {
  background: rgba(184,146,74,.15);
  color: var(--gold-lt); border-color: rgba(184,146,74,.4);
}

/* container padding inside country sections */
.loc-country > .container { padding-top: 16px; padding-bottom: 80px; }

/* ── CTA strip ── */
.loc-cta-strip {
  background: var(--panel);
  border-top: 1px solid rgba(255,255,255,.06);
}
.loc-cta-inner {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 64px; padding-bottom: 64px; gap: 40px; flex-wrap: wrap;
}
.loc-cta-label {
  font-size: 9px; letter-spacing: 4px; text-transform: uppercase;
  color: var(--gold); font-weight: 600; margin-bottom: 10px;
  display: flex; align-items: center; gap: 12px;
}
.loc-cta-label::before { content:''; width:24px; height:1px; background:var(--gold); }
.loc-cta-h3 {
  font-family: var(--serif); font-size: clamp(26px,3vw,44px);
  color: #fff; font-weight: 400; letter-spacing: -1px;
}
.loc-cta-btn {
  display: inline-flex; align-items: center; gap: 14px;
  padding: 16px 40px; background: var(--gold);
  color: var(--black); font-size: 10px; letter-spacing: 3px;
  text-transform: uppercase; font-weight: 700; border-radius: 2px;
  transition: background .3s, transform .3s; white-space: nowrap;
}
.loc-cta-btn:hover { background: var(--gold-lt); transform: translateY(-2px); }

/* ── Responsive ── */
@media (max-width: 1100px) {
  .loc-location-grid { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 768px) {
  .loc-stats-inner { flex-wrap: wrap; }
  .loc-stat { flex: 1 1 40%; border-right: none; border-bottom: 1px solid rgba(255,255,255,.06); }
  .loc-country-banner { height: 320px; }
  .loc-hero-h1 { font-size: clamp(44px,12vw,72px); }
  .loc-hero-imgs { display: none; }
}
@media (max-width: 600px) {
  .loc-location-grid { grid-template-columns: 1fr; }
  .loc-flt { padding: 14px 16px; font-size: 10px; }
  .loc-cta-inner { flex-direction: column; align-items: flex-start; }
}

/* ═══════════════════════════════════════════════
   NEWS PAGE
═══════════════════════════════════════════════ */
.np-hero {
  position: relative; min-height: 380px;
  display: flex; align-items: flex-end;
  background: var(--black); overflow: hidden;
  padding-bottom: 80px;
}
.np-hero-bg {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(20,18,16,.98) 0%, rgba(30,26,22,.90) 100%);
}
.np-hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(193,155,90,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(193,155,90,.04) 1px, transparent 1px);
  background-size: 80px 80px;
}
.np-hero-inner {
  position: relative; z-index: 2;
  padding-top: 160px;
}
.np-hero-h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 600; line-height: 1.1; letter-spacing: -1px;
  color: var(--white); margin: 16px 0 20px;
}
.np-hero-h1 em { font-style: italic; color: var(--gold-lt); }
.np-hero-sub {
  font-size: 15px; color: rgba(255,255,255,.55);
  line-height: 1.7; max-width: 560px;
}

/* Articles list */
.np-articles {
  background: var(--white);
  padding: 80px 0 100px;
}
.np-article {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: start;
  padding: 72px 0;
}
/* Alternate image side every other article */
.np-article:nth-child(odd)  .np-article-photos { order: 1; }
.np-article:nth-child(odd)  .np-article-body   { order: 2; }
.np-article:nth-child(even) .np-article-photos { order: 2; }
.np-article:nth-child(even) .np-article-body   { order: 1; }

.np-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--silver), transparent);
}

/* Photo slider */
.np-photo-slider {
  position: relative;
  overflow: hidden;
  height: 460px;
  background: var(--ink);
}
.np-photo-track {
  display: flex; height: 100%;
  transition: transform .65s cubic-bezier(.76,0,.24,1);
}
.np-photo-slide {
  flex: 0 0 100%; width: 100%; height: 100%;
  position: relative; overflow: hidden;
}
.np-photo-slide img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; object-position: center;
  display: block;
  transition: transform 1.2s cubic-bezier(0.4,0,0.2,1);
}
.np-photo-slide:hover img { transform: scale(1.04); }

/* Nav arrows */
.np-prev, .np-next {
  position: absolute; top: 50%; transform: translateY(-50%);
  z-index: 10; width: 42px; height: 42px;
  background: rgba(0,0,0,.45); backdrop-filter: blur(4px);
  border: 1px solid rgba(255,255,255,.15);
  color: rgba(255,255,255,.8); font-size: 16px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: background .3s, border-color .3s;
}
.np-prev:hover, .np-next:hover {
  background: var(--gold); border-color: var(--gold); color: var(--white);
}
.np-prev { left: 14px; }
.np-next { right: 14px; }

/* Dots */
.np-dots {
  position: absolute; bottom: 14px; left: 0; right: 0;
  display: flex; justify-content: center; gap: 6px; z-index: 10;
}
.np-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: rgba(255,255,255,.3); cursor: pointer;
  transition: background .3s, transform .3s;
}
.np-dot.active { background: var(--gold); transform: scale(1.5); }

/* Counter */
.np-counter {
  position: absolute; top: 14px; left: 14px; z-index: 10;
  padding: 4px 12px;
  background: rgba(0,0,0,.5); backdrop-filter: blur(4px);
  border: 1px solid rgba(255,255,255,.1);
  font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
  color: rgba(255,255,255,.7);
}

/* Article text */
.np-article-body { padding: 8px 0; }
.np-meta {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 20px;
}
.np-date {
  font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--slate); font-weight: 500;
}
.np-sep {
  width: 24px; height: 1px; background: var(--ash); flex-shrink: 0;
}
.np-cat {
  font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
  color: var(--gold); font-weight: 600;
}
.np-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(24px, 2.4vw, 34px); font-weight: 500;
  color: var(--ink); line-height: 1.3; letter-spacing: -.5px;
  margin-bottom: 28px;
}
.np-text p {
  font-size: 14.5px; line-height: 1.88; color: var(--slate);
  margin-bottom: 16px;
}
.np-text p:last-child { margin-bottom: 0; }

/* Responsive */
@media (max-width: 900px) {
  .np-article {
    grid-template-columns: 1fr;
    gap: 40px; padding: 56px 0;
  }
  .np-article:nth-child(odd)  .np-article-photos,
  .np-article:nth-child(even) .np-article-photos { order: 1; }
  .np-article:nth-child(odd)  .np-article-body,
  .np-article:nth-child(even) .np-article-body   { order: 2; }
  .np-photo-slider { height: 320px; }
}
@media (max-width: 560px) {
  .np-photo-slider { height: 240px; }
  .np-hero-inner { padding-top: 120px; }
}
        `}} />
      </head>
      <body>
        <div class="noise" aria-hidden="true"></div>
        <div id="cur-ring" aria-hidden="true"></div>
        <div id="cur-dot"  aria-hidden="true"></div>

        {/* PRELOADER */}
        <div id="loader">
          <img src="/static/logo-white.png" alt="Harlem Group" class="loader-logo" />
          <div class="loader-slogan">Quality You Deserve!</div>
          <div class="loader-track"><div class="loader-fill"></div></div>
          <div class="loader-count" id="lCount">Loading...</div>
        </div>

        {/* FULLSCREEN MENU */}
        <div id="fs-menu" aria-hidden="true" role="dialog">
          <button class="fs-close" id="fsClose" aria-label="Close menu">
            <span class="fs-close-x">×</span>
            <span>Close</span>
          </button>
          <div class="fs-body">
            <nav class="fs-nav" aria-label="Fullscreen navigation">
              <a href="/#founder"   class="fs-link" data-text="About"    onclick="closeFsMenu()">About</a>
              <div class="fs-sub-group">
                <a href="/purpose"   class="fs-sub-link" onclick="closeFsMenu()">Our Purpose</a>
                <a href="/highlights" class="fs-sub-link" onclick="closeFsMenu()">Highlights</a>
                <a href="/#divisions" class="fs-sub-link" onclick="closeFsMenu()">Divisions</a>
              </div>
              <a href="/#brands"    class="fs-link" data-text="Partners" onclick="closeFsMenu()">Partners</a>
              <a href="/locations" class="fs-link" data-text="Locations" onclick="closeFsMenu()">Locations</a>
              <a href="/news"       class="fs-link" data-text="News"      onclick="closeFsMenu()">News</a>
              <a href="/careers"   class="fs-link" data-text="Careers"   onclick="closeFsMenu()">Careers</a>
              <a href="/#contact"   class="fs-link" data-text="Contact"  onclick="closeFsMenu()">Contact</a>
            </nav>
            <div class="fs-sidebar">
              <div class="fs-sidebar-lbl">Get in Touch</div>
              <div class="fs-sidebar-contact">
                <strong>Iraq (HQ)</strong><br />
                Erbil, Iraq<br /><br />
                <strong>Email</strong><br />
                info@harlemgroup.com<br /><br />
                <strong>Operating in</strong><br />
                Iraq · UAE · USA · Jordan
              </div>
            </div>
          </div>
          <div class="fs-footer">
            <a href="/#founder">About HG</a>
            <a href="/#divisions">Divisions</a>
            <a href="/locations">Locations</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>

        {children}

        <script dangerouslySetInnerHTML={{ __html: `
/* ── CURSOR ── */
(function(){
  var ring=document.getElementById('cur-ring'),
      dot =document.getElementById('cur-dot');
  var rx=0,ry=0,mx=0,my=0;
  document.addEventListener('mousemove',function(e){
    mx=e.clientX; my=e.clientY;
    dot.style.left=mx+'px'; dot.style.top=my+'px';
  });
  function animCursor(){
    rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();
  document.querySelectorAll('a,button,[class*="acc-card"],[class*="brand-cell"],[class*="svc-card"],[class*="val-card"],[class*="vmv-card"]').forEach(function(el){
    el.addEventListener('mouseenter',function(){ document.body.classList.add('c-hover'); });
    el.addEventListener('mouseleave',function(){ document.body.classList.remove('c-hover'); });
  });
  document.addEventListener('mousedown',function(){ document.body.classList.add('c-click'); });
  document.addEventListener('mouseup',function(){ document.body.classList.remove('c-click'); });
})();

/* ── PRELOADER ── */
(function(){
  var loader=document.getElementById('loader');
  var count=document.getElementById('lCount');
  var n=0;
  var iv=setInterval(function(){
    n+=Math.floor(Math.random()*8+4);
    if(n>=100){n=100;clearInterval(iv);}
    count.textContent=n+'%';
  },80);
  window.addEventListener('load',function(){
    setTimeout(function(){
      loader.classList.add('out');
      setTimeout(function(){ loader.style.display='none'; },900);
    },400);
  });
  setTimeout(function(){
    loader.classList.add('out');
    setTimeout(function(){ loader.style.display='none'; },900);
  },3200);
})();

/* ── NAVBAR ── */
(function(){
  var nav=document.getElementById('nav');
  function onScroll(){
    if(window.scrollY>60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();
})();

/* ── FULLSCREEN MENU ── */
var fsMenu=document.getElementById('fs-menu');
document.getElementById('fsBtn').addEventListener('click',function(){
  fsMenu.classList.add('open');
  fsMenu.removeAttribute('aria-hidden');
});
document.getElementById('fsClose').addEventListener('click',function(){
  fsMenu.classList.remove('open');
  fsMenu.setAttribute('aria-hidden','true');
});
function closeFsMenu(){
  fsMenu.classList.remove('open');
  fsMenu.setAttribute('aria-hidden','true');
}
document.addEventListener('keydown',function(e){ if(e.key==='Escape') closeFsMenu(); });

/* ── ACCORDION ── */
document.querySelectorAll('.acc-card').forEach(function(card){
  card.addEventListener('click',function(){
    document.querySelectorAll('.acc-card').forEach(function(c){ c.classList.remove('open'); });
    card.classList.add('open');
  });
});

/* ── PARTICLES CANVAS ── */
(function(){
  var canvas=document.getElementById('p-canvas');
  if(!canvas)return;
  var ctx=canvas.getContext('2d');
  var pts=[];
  function resize(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
  resize();
  window.addEventListener('resize',resize);
  for(var i=0;i<55;i++){
    pts.push({
      x:Math.random()*window.innerWidth,
      y:Math.random()*window.innerHeight,
      vx:(Math.random()-.5)*.25,
      vy:(Math.random()-.5)*.25,
      r:Math.random()*1.5+.4,
      a:Math.random()*.4+.06
    });
  }
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pts.forEach(function(p){
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>canvas.width)p.vx*=-1;
      if(p.y<0||p.y>canvas.height)p.vy*=-1;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(184,146,74,'+p.a+')';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── HERO IMAGE PANELS ── */
setTimeout(function(){
  document.querySelectorAll('.hero-img-panel').forEach(function(p){
    p.classList.add('show');
  });
},500);

/* ── SCROLL REVEAL ── */
(function(){
  var els=document.querySelectorAll('.r,.rl,.rr');
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('v'); io.unobserve(e.target); }
    });
  },{threshold:.1,rootMargin:'0px 0px -48px 0px'});
  els.forEach(function(el){ io.observe(el); });
})();

/* ── COUNTER ANIMATION ── */
(function(){
  var counters=document.querySelectorAll('[data-count]');
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        var el=e.target, target=parseInt(el.getAttribute('data-count'));
        var start=0, duration=2000, step=target/duration*16;
        function tick(){
          start+=step;
          if(start>=target){ el.textContent=target.toLocaleString(); return; }
          el.textContent=Math.floor(start).toLocaleString();
          requestAnimationFrame(tick);
        }
        tick();
        io.unobserve(el);
      }
    });
  },{threshold:.5});
  counters.forEach(function(c){ io.observe(c); });
})();

/* ── ACTIVE NAV LINK ── */
(function(){
  var secs=document.querySelectorAll('section[id],div[id]');
  var links=document.querySelectorAll('.nav-a');
  window.addEventListener('scroll',function(){
    var scrollY=window.scrollY+200;
    secs.forEach(function(sec){
      if(scrollY>=sec.offsetTop && scrollY<sec.offsetTop+sec.offsetHeight){
        links.forEach(function(l){ l.classList.remove('active'); });
        var active=document.querySelector('.nav-a[href="#'+sec.id+'"]');
        if(active) active.classList.add('active');
      }
    });
  },{passive:true});
})();

/* ── NEWS ARTICLE SLIDER ── */
(function(){
  var track = document.getElementById('newsTrack');
  if(!track) return;
  var dots = document.querySelectorAll('.news-article-dot');
  var counter = document.getElementById('newsCounter');
  var total = track.querySelectorAll('.news-slide').length;
  var cur = 0;
  function articleGo(n){
    cur = ((n % total) + total) % total;
    track.style.transform = 'translateX(-' + (cur * 100) + '%)';
    dots.forEach(function(d,i){ d.classList.toggle('active', i===cur); });
    if(counter) counter.textContent = String(cur+1).padStart(2,'0') + ' / ' + String(total).padStart(2,'0');
  }
  window.articleGo = articleGo;
  window.articleNav = function(dir){ articleGo(cur + dir); };
  /* Auto-advance articles every 7 seconds */
  setInterval(function(){ articleGo(cur + 1); }, 7000);
})();

/* ── NEWS PHOTO SLIDERS ── */
(function(){
  var photoSliders = document.querySelectorAll('.news-photo-slider');
  photoSliders.forEach(function(slider, si){
    var pt = slider.querySelector('.news-photo-track');
    var dots = slider.querySelectorAll('.news-photo-dot');
    var counter = slider.querySelector('.news-photo-counter');
    var total = pt ? pt.querySelectorAll('.news-photo-slide').length : 0;
    var cur = 0;
    if(!pt || total === 0) return;
    function go(n){
      cur = ((n % total) + total) % total;
      pt.style.transform = 'translateX(-' + (cur * 100) + '%)';
      dots.forEach(function(d,i){ d.classList.toggle('active', i===cur); });
      if(counter) counter.textContent = (cur+1) + ' / ' + total;
    }
    /* Attach prev/next buttons */
    var prev = slider.querySelector('.news-photo-prev');
    var next = slider.querySelector('.news-photo-next');
    if(prev) prev.onclick = function(){ go(cur - 1); };
    if(next) next.onclick = function(){ go(cur + 1); };
    /* Attach dots */
    dots.forEach(function(d, i){ d.onclick = function(){ go(i); }; });
    /* Auto-advance */
    setInterval(function(){ go(cur + 1); }, 4000 + si * 600);
    /* Store go on element for external access */
    slider._go = go;
    slider._getCur = function(){ return cur; };
  });

  /* Override global photoNav/photoGo to use the per-slider go function */
  window.photoNav = function(si, dir){
    var s = photoSliders[si];
    if(s && s._go) s._go(s._getCur() + dir);
  };
  window.photoGo = function(si, n){
    var s = photoSliders[si];
    if(s && s._go) s._go(n);
  };
})();
        `}} />
      </body>
    </html>
  )
})
