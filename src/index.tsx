import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()
app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <>
      {/* ══════════ NAVBAR ══════════ */}
      <nav id="nav">
        <a href="/" class="nav-logo">
          <img src="/static/logo-black.png" alt="Harlem Group" id="navLogo" />
        </a>
        <div class="nav-links">
          <div class="nav-item">
            <a href="#founder" class="nav-a">About</a>
            <span class="nav-drop-arrow">▾</span>
            <div class="nav-dropdown">
              <a href="/purpose"    class="nav-drop-link">Our Purpose</a>
              <a href="/highlights" class="nav-drop-link">Highlights</a>
              <a href="#divisions"  class="nav-drop-link">Divisions</a>
            </div>
          </div>
          <a href="#brands"       class="nav-a">Partners</a>
          <a href="/locations"    class="nav-a">Locations</a>
          <a href="/news"      class="nav-a">News</a>
          <a href="/careers"      class="nav-a">Careers</a>
        </div>
        <div class="nav-right">
          <a href="#contact" class="nav-cta">Get in Touch</a>
          <button class="hamburger" id="fsBtn" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section id="hero">
        <canvas id="p-canvas"></canvas>
        <div class="hero-bg" aria-hidden="true"></div>
        <div class="hero-grid" aria-hidden="true"></div>

        <div class="hero-imgs" aria-hidden="true">
          <div class="hero-img-panel" style="background-image:url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80')"></div>
          <div class="hero-img-panel" style="background-image:url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80')"></div>
        </div>
        <div class="hero-seam" aria-hidden="true"></div>

        <div class="hero-inner">
          <div class="hero-tag">
            <span class="hero-tag-bar"></span>
            Established 1995 — 
          </div>
          <h1 class="hero-h1">
            <span class="hero-line"><span class="hero-word w1">HARLEM</span></span>
            <span class="hero-line"><span class="hero-word w3">Excellence.</span></span>
          </h1>
          <a href="#founder" class="hero-btn">
            <span>Discover Our Story</span>
            <span class="hero-btn-arr">→</span>
          </a>
        </div>

        <div class="hero-scroll" aria-hidden="true">
          <span class="hero-scroll-txt">Scroll</span>
          <div class="hero-scroll-line"></div>
        </div>

        <div class="mq-wrap">
          <div class="mq-track">
            {['Jeep','Dodge','Chrysler','Ram','JETOUR','SOUEAST','Karry','MOPAR','Mitsubishi','Alfa Romeo','Fiat','Maserati',
              'Jeep','Dodge','Chrysler','Ram','JETOUR','SOUEAST','Karry','MOPAR','Mitsubishi','Alfa Romeo','Fiat','Maserati'].map((b)=>(
              <span class="mq-item"><span class="mq-diamond"></span>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FOUNDER / INTRO ══════════ */}
      <section id="founder">
        <div class="container">
          <div class="founder-grid">

            {/* ── LEFT: quote + body + name & title ── */}
            <div class="founder-left">
              <div class="founder-tag-row r">
                <span class="founder-tag-line"></span>
                <span class="founder-tag-label">Introduction from our Founder</span>
              </div>
              <span class="founder-deco-quote r d1" aria-hidden="true">"</span>
              <blockquote class="founder-quote r d2">
                Harlem Group stands as a beacon of excellence since its inception in 1995 — our commitment is to elevate each industry we engage with, delivering quality that is truly deserved.
              </blockquote>
              <div class="founder-body r d3">
                <p>
                  Founded in 1995, Harlem Group has grown from a single automotive agency in Iraq into a diversified multinational group spanning <strong>four countries</strong> — Iraq, Jordan, the UAE, and the USA. With over <strong>45 global facilities</strong> and partnerships with <strong>12 world-class automotive brands</strong>, we have redefined what excellence means in every market we enter.
                </p>
                <p>
                  Our philosophy is simple: quality is not a standard we meet — it is the promise we make to every customer, every partner, and every community we serve. Across Automotive, Real Estate, and Management Consultation, this promise remains the heart of everything Harlem Group does.
                </p>
              </div>
              <div class="founder-sig-wrap r d4">
                <span class="founder-sig-line"></span>
                <div>
                  <div class="founder-sig">Salah Noor</div>
                  <div class="founder-sig-title">Founder &amp; Chairman — Harlem Group</div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: photo with gold inset frame ── */}
            <div class="founder-right rr">
              <div class="founder-img-frame"></div>
              <div class="founder-img-wrap">
                <img src="/static/founder.jpg" alt="Salah Noor — Founder & Chairman, Harlem Group" loading="lazy" />
                <div class="founder-img-inset"></div>
              </div>
              <div class="founder-badge">
                <span class="founder-badge-n">30+</span>
                <span class="founder-badge-l">Years</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════ TICKER ══════════ */}
      <div class="ticker" aria-hidden="true">
        <div class="ticker-t">
          {['Automotive','Real Estate','Management Consultation',
            'Iraq','Jordan','UAE','USA','45+ Facilities','12 Automotive Partners',
            '30+ Years of Excellence','Quality You Deserve!',
            'Automotive','Real Estate','Management Consultation',
            'Iraq','Jordan','UAE','USA','45+ Facilities','12 Automotive Partners',
            '30+ Years of Excellence','Quality You Deserve!'].map((t)=>(
            <span class="t-item">{t}<span class="t-sep">✦</span></span>
          ))}
        </div>
      </div>

      {/* VMV section moved to /purpose page */}

      {/* ══════════ DIVISIONS ACCORDION ══════════ */}
      <section id="divisions">
        <div class="container">
          <div class="div-header">
            <div class="r">
              <div class="tag on-dark">Our Portfolio</div>
              <h2 class="h2 light">Three Key <em>Divisions</em></h2>
            </div>
            <div class="div-header-right r d2">
              <p class="div-header-desc">Since 1995, Harlem Group has built a diversified portfolio spanning three core industries across four countries, with over 45 facilities and 12 automotive partners worldwide.</p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="acc-card open">
            <div class="acc-bg" style="background-image:url('/static/automotive-div.jpg')"></div>
            <div class="acc-shade"></div>
            <div class="acc-vert">Automotive</div>
            <div class="acc-ghost">01</div>
            <div class="acc-content">
              <div class="acc-num">01 / 03</div>
              <h3 class="acc-title">Automotive Division</h3>
              <p class="acc-desc">As exclusive distributors of premier automotive brands, we have redefined the automotive ownership experience since 1995. commercial agencies, multi-brand showrooms, car rental, certified independent multi-brand service centers, and more across Iraq, Jordan, UAE &amp; USA.</p>
              <a href="#auto-services" class="acc-link">Explore Division →</a>
            </div>
          </div>
          <div class="acc-card">
            <div class="acc-bg" style="background-image:url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80')"></div>
            <div class="acc-shade"></div>
            <div class="acc-vert">Real Estate</div>
            <div class="acc-ghost">02</div>
            <div class="acc-content">
              <div class="acc-num">02 / 03</div>
              <h3 class="acc-title">Real Estate Division</h3>
              <p class="acc-desc">From development to trading, our real estate division is committed to shaping vibrant communities. Jidd Holdings LLC specializes in property holdings and A&amp;F Holdings LLC leads real estate development and trading within the USA.</p>
              <a href="#realestate" class="acc-link">Explore Division →</a>
            </div>
          </div>
          <div class="acc-card">
            <div class="acc-bg" style="background-image:url('/static/management-div.jpg')"></div>
            <div class="acc-shade"></div>
            <div class="acc-vert">Consulting</div>
            <div class="acc-ghost">03</div>
            <div class="acc-content">
              <div class="acc-num">03 / 03</div>
              <h3 class="acc-title">Management Consultation</h3>
              <p class="acc-desc">Guiding businesses towards success through strategic insights and tailored solutions. Al-Sayer for Management Consultation in Amman, Jordan, leverages extensive experience and industry insights to deliver innovative strategies.</p>
              <a href="#consulting" class="acc-link">Explore Division →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ AUTO SUB-SERVICES ══════════ */}
      <section id="auto-services">
        <div class="container">
          <div class="r">
            <div class="tag">Automotive Division</div>
            <h2 class="h2">Five Lines <em>of Service</em></h2>
          </div>
          <div class="services-grid">
            {[
              { n:'1.1', t:'Commercial Agencies',
                b:'Exclusive distributor for Dodge, Jeep, Chrysler, Ram, JETOUR, SOUEAST, Karry, and MOPAR in Iraq. Sole distributor for JETOUR, SOUEAST, and Karry in Jordan. Volume Cars distributes Maserati, Alfa Romeo, Fiat, and Mitsubishi in the USA.' },
              { n:'1.2', t:'Multi-Brand Showrooms',
                b:'Harlem Group operates a network of multi-brand automotive showrooms across key international markets, including the United Arab Emirates, Iraq, and the United States. These showrooms support both retail sales and wholesale export activities.' },
              { n:'1.3', t:'Car Rental & Leasing',
                b:'Vehicle rental and leasing services are offered in the United Arab Emirates and the United States, providing a wide range of vehicles from affordable daily transport to luxury options, with both short-term and long-term solutions available.' },
              { n:'1.4', t:'Certified Independent Multi-Brand Service Center',
                b:'Certified independent multi-brand service centers in the United States provide professional vehicle repair and maintenance services, committed to restoring vehicles to their optimal condition with high levels of precision, expertise, and quality standards.' },
              { n:'1.5', t:'Leather and Upholstery',
                b:'Iraq\'s only provider of high-quality leather interior upholstery. State-of-the-art factory in Erbil with OEM-level quality, CNC pattern stitching, and rigorous lab-tested materials sourced from world-leading tanneries.' },
            ].map((s,i)=>(
              <div class={`svc-card r d${(i%3)+1}`}>
                <div class="svc-num">{s.n}</div>
                <div class="svc-title">{s.t}</div>
                <p class="svc-body">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ══════════ AUTOMOTIVE BRANDS ══════════ */}
      <section id="brands">
        <div class="container">
          <div class="brands-intro">
            <div class="tag r" style="justify-content:center">Automotive Partners</div>
            <h2 class="h2 r d1">12 World-Class <em>Partners</em></h2>
            <p class="brands-desc r d2">
              Harlem Group is the exclusive distributor for 12 globally leading automotive brands across Iraq, Jordan, the UAE, and the USA — from premium American muscle to innovative Chinese SUVs and Italian luxury.
            </p>
          </div>
          <div class="brands-grid">
            {[
              { name:'JEEP',       logo:'/static/brands/jeep.png'       },
              { name:'DODGE',      logo:'/static/brands/dodge.png'      },
              { name:'CHRYSLER',   logo:'/static/brands/chrysler.png'   },
              { name:'RAM',        logo:'/static/brands/ram.png'        },
              { name:'JETOUR',     logo:'/static/brands/jetour.png'     },
              { name:'SOUEAST',    logo:'/static/brands/soueast.png'    },
              { name:'KARRY',      logo:'/static/brands/karry.png'      },
              { name:'MOPAR',      logo:'/static/brands/mopar.png'      },
              { name:'MITSUBISHI', logo:'/static/brands/mitsubishi.png' },
              { name:'ALFA ROMEO', logo:'/static/brands/alfaromeo.png'  },
              { name:'FIAT',       logo:'/static/brands/fiat.png'       },
              { name:'MASERATI',   logo:'/static/brands/maserati.png'   },
            ].map((b,i)=>(
              <div class={`brand-cell r d${(i%4)+1}`}>
                <div class="brand-logo-wrap">
                  {b.logo
                    ? <img src={b.logo} alt={b.name} class="brand-logo-img" loading="lazy" />
                    : <span class="brand-logo-text">{b.name}</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ REAL ESTATE ══════════ */}
      <section id="realestate">

        {/* ── Top: light hero band ── */}
        <div class="re-hero">
          <div class="container">
            <div class="re-hero-inner">

              {/* LEFT: tag + headline + sub + stats */}
              <div class="re-hero-left r">
                <div class="tag">Division 02</div>
                <h2 class="h2 r d1">Real Estate <em>Division</em></h2>
                <p class="re-hero-sub r d2">
                  Two dynamic entities across the USA, each bringing unique expertise in property acquisition, development, and long-term value creation — built on Harlem Group's commitment to excellence.
                </p>
                <div class="re-stats r d3">
                  <div class="re-stat">
                    <span class="re-stat-n">USA</span>
                    <span class="re-stat-l">Market</span>
                  </div>
                  <div class="re-stat-div"></div>
                  <div class="re-stat">
                    <span class="re-stat-n">2</span>
                    <span class="re-stat-l">Entities</span>
                  </div>
                  <div class="re-stat-div"></div>
                  <div class="re-stat">
                    <span class="re-stat-n">30+</span>
                    <span class="re-stat-l">Years</span>
                  </div>
                </div>
              </div>

              {/* RIGHT: image with gold corner frame + badge */}
              <div class="re-hero-right rr d2">
                <div class="re-img-frame">
                  <div class="re-img-inner">
                    <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85" alt="Real Estate Division" loading="lazy" />
                  </div>
                  <div class="re-img-badge">
                    <div class="re-img-badge-name">Jidd Holdings &amp; A&amp;F Holdings</div>
                    <div class="re-img-badge-loc">&#9670; United States of America</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* ══════════ MANAGEMENT CONSULTATION ══════════ */}
      <section id="consulting">

        {/* ── Top: dark header band ── */}
        <div class="consult-hero">
          <div class="container">
            <div class="consult-hero-inner">
              <div class="consult-hero-left r">
                <div class="tag on-dark">Division 03</div>
                <h2 class="h2 light r d1">Management <em>Consultation</em></h2>
                <p class="consult-hero-sub r d2">
                  Strategic advisory rooted in regional intelligence and global best practices — guiding businesses through complexity toward sustainable growth.
                </p>
                <div class="consult-stats r d3">
                  <div class="consult-stat">
                    <span class="consult-stat-n">1995</span>
                    <span class="consult-stat-l">Est.</span>
                  </div>
                  <div class="consult-stat-div"></div>
                  <div class="consult-stat">
                    <span class="consult-stat-n">MENA</span>
                    <span class="consult-stat-l">Region Focus</span>
                  </div>
                </div>
              </div>
              <div class="consult-hero-right rr d2">
                <div class="consult-img-frame">
                  <div class="consult-img-inner">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=85" alt="Management Consultation" loading="lazy" />
                  </div>
                  <div class="consult-img-badge">
                    <div class="consult-img-badge-name">Al-Sayer for Management Consultation</div>
                    <div class="consult-img-badge-loc">&#9670; Amman, Jordan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ══════════ LOCATIONS ══════════ */}
      <section id="locations">
        <div class="container">
          <div class="r" style="margin-bottom:8px">
            <div class="tag">Global Presence</div>
            <h2 class="h2">Four Countries, <em>One Vision</em></h2>
          </div>

          <div class="glo-wrap r d1">

            {/* ── IRAQ ── */}
            <div class="glo-country" id="glo-iraq">
              <button class="glo-country-btn" onclick="gloToggle('iraq')" aria-expanded="false">
                <div class="glo-country-left">
                  <img src="/static/flags/iraq.png" class="glo-flag" alt="Iraq" />
                  <span class="glo-country-name">Iraq</span>
                  <span class="glo-country-num">01</span>
                </div>
                <span class="glo-chevron">›</span>
              </button>
              <div class="glo-country-body" id="glo-iraq-body">
                {/* Category: Commercial Agencies */}
                <div class="glo-cat" id="glo-iraq-cat0">
                  <button class="glo-cat-btn" onclick="gloCatToggle('iraq',0)" aria-expanded="false">
                    <span class="glo-cat-icon">◈</span>
                    <span class="glo-cat-name">Commercial Agencies</span>
                    <span class="glo-cat-count">8 entities</span>

                    <span class="glo-chevron">›</span>
                  </button>
                  <div class="glo-cat-body" id="glo-iraq-cat0-body">
                    <div class="glo-entity">Jeep</div>
                    <div class="glo-entity">Dodge</div>
                    <div class="glo-entity">Chrysler</div>
                    <div class="glo-entity">Ram</div>
                    <div class="glo-entity">Jetour</div>
                    <div class="glo-entity">Soueast</div>
                    <div class="glo-entity">Karry</div>
                    <div class="glo-entity">Mopar</div>
                  </div>
                </div>
                {/* Category: Multi-brand Showrooms */}
                <div class="glo-cat glo-cat--flat" id="glo-iraq-cat1">
                  <div class="glo-cat-flat-row">
                    <span class="glo-cat-icon">◈</span>
                    <span class="glo-cat-name">Multi-brand Showrooms</span>
                  </div>
                </div>
                {/* Category: Luxury Upholstery */}
                <div class="glo-cat glo-cat--flat" id="glo-iraq-cat2">
                  <div class="glo-cat-flat-row">
                    <span class="glo-cat-icon">◈</span>
                    <span class="glo-cat-name">Leather and Upholstery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── UAE ── */}
            <div class="glo-country" id="glo-uae">
              <button class="glo-country-btn" onclick="gloToggle('uae')" aria-expanded="false">
                <div class="glo-country-left">
                  <img src="/static/flags/uae.png" class="glo-flag" alt="UAE" />
                  <span class="glo-country-name">UAE</span>
                  <span class="glo-country-num">02</span>
                </div>
                <span class="glo-chevron">›</span>
              </button>
              <div class="glo-country-body" id="glo-uae-body">
                {/* Category: Multi-Brand Showrooms */}
                <div class="glo-cat" id="glo-uae-cat0">
                  <button class="glo-cat-btn" onclick="gloCatToggle('uae',0)" aria-expanded="false">
                    <span class="glo-cat-icon">◈</span>
                    <span class="glo-cat-name">Multi-Brand Showrooms</span>
                    <span class="glo-cat-count">2 entities</span>
                    <span class="glo-chevron">›</span>
                  </button>
                  <div class="glo-cat-body" id="glo-uae-cat0-body">
                    <div class="glo-entity">Harlem Cars LLC — Dubai (DUCAMZ)</div>
                    <div class="glo-entity">Atlantic Motors LLC — Dubai (DUCAMZ)</div>
                  </div>
                </div>
                {/* Category: Central Regional Stockyard */}
                <div class="glo-cat" id="glo-uae-cat1">
                  <button class="glo-cat-btn" onclick="gloCatToggle('uae',1)" aria-expanded="false">
                    <span class="glo-cat-icon">◈</span>
                    <span class="glo-cat-name">Central Regional Stockyard</span>
                    <span class="glo-cat-count">1 entity</span>
                    <span class="glo-chevron">›</span>
                  </button>
                  <div class="glo-cat-body" id="glo-uae-cat1-body">
                    <div class="glo-entity">6-Storey Central Regional Stockyard — Jebel Ali Free Zone</div>
                  </div>
                </div>
                {/* Category: Car Rental */}
                <div class="glo-cat" id="glo-uae-cat2">
                  <button class="glo-cat-btn" onclick="gloCatToggle('uae',2)" aria-expanded="false">
                    <span class="glo-cat-icon">◈</span>
                    <span class="glo-cat-name">Car Rental</span>
                    <span class="glo-cat-count">1 entity</span>
                    <span class="glo-chevron">›</span>
                  </button>
                  <div class="glo-cat-body" id="glo-uae-cat2-body">
                    <div class="glo-entity">Atlantic Rentals LLC — Dubai</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── USA ── */}
            <div class="glo-country" id="glo-usa">
              <button class="glo-country-btn" onclick="gloToggle('usa')" aria-expanded="false">
                <div class="glo-country-left">
                  <img src="/static/flags/usa.png" class="glo-flag" alt="USA" />
                  <span class="glo-country-name">USA</span>
                  <span class="glo-country-num">03</span>
                </div>
                <span class="glo-chevron">›</span>
              </button>
              <div class="glo-country-body" id="glo-usa-body">
                {/* Category: Commercial Agencies */}
                <div class="glo-cat" id="glo-usa-cat0">
                  <button class="glo-cat-btn" onclick="gloCatToggle('usa',0)" aria-expanded="false">
                    <span class="glo-cat-icon">◈</span>
                    <span class="glo-cat-name">Commercial Agencies</span>
                    <span class="glo-cat-count">4 entities</span>
                    <span class="glo-chevron">›</span>
                  </button>
                  <div class="glo-cat-body" id="glo-usa-cat0-body">
                    <div class="glo-entity">Maserati</div>
                    <div class="glo-entity">Alfa Romeo</div>
                    <div class="glo-entity">Fiat</div>
                    <div class="glo-entity">Mitsubishi — Naperville &amp; Illinois</div>
                  </div>
                </div>
                {/* Category: Certified Independent Multi-Brand Service Center */}
                <div class="glo-cat glo-cat--flat" id="glo-usa-cat1">
                  <div class="glo-cat-flat-row">
                    <span class="glo-cat-icon">◈</span>
                    <span class="glo-cat-name">Certified Independent Multi-Brand Service Center</span>
                  </div>
                </div>
                {/* Category: Multi-brand Showrooms */}
                <div class="glo-cat glo-cat--flat" id="glo-usa-cat2">
                  <div class="glo-cat-flat-row">
                    <span class="glo-cat-icon">◈</span>
                    <span class="glo-cat-name">Multi-brand Showrooms</span>
                  </div>
                </div>
                {/* Category: Towing Services */}
                <div class="glo-cat glo-cat--flat" id="glo-usa-cat3">
                  <div class="glo-cat-flat-row">
                    <span class="glo-cat-icon">◈</span>
                    <span class="glo-cat-name">Towing Services</span>
                  </div>
                </div>
                {/* Category: Car Rental & Leasing */}
                <div class="glo-cat glo-cat--flat" id="glo-usa-cat4">
                  <div class="glo-cat-flat-row">
                    <span class="glo-cat-icon">◈</span>
                    <span class="glo-cat-name">Car Rental &amp; Leasing</span>
                  </div>
                </div>
                {/* Category: Real Estate Development & Holding */}
                <div class="glo-cat" id="glo-usa-cat5">
                  <button class="glo-cat-btn" onclick="gloCatToggle('usa',5)" aria-expanded="false">
                    <span class="glo-cat-icon">◈</span>
                    <span class="glo-cat-name">Real Estate Development &amp; Holding</span>
                    <span class="glo-cat-count">2 entities</span>
                    <span class="glo-chevron">›</span>
                  </button>
                  <div class="glo-cat-body" id="glo-usa-cat5-body">
                    <div class="glo-entity">A&amp;F Holdings LLC</div>
                    <div class="glo-entity">Jidd Holdings LLC</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── JORDAN ── */}
            <div class="glo-country" id="glo-jordan">
              <button class="glo-country-btn" onclick="gloToggle('jordan')" aria-expanded="false">
                <div class="glo-country-left">
                  <img src="/static/flags/jordan.png" class="glo-flag" alt="Jordan" />
                  <span class="glo-country-name">Jordan</span>
                  <span class="glo-country-num">04</span>
                </div>
                <span class="glo-chevron">›</span>
              </button>
              <div class="glo-country-body" id="glo-jordan-body">
                {/* Category: Commercial Agencies */}
                <div class="glo-cat" id="glo-jordan-cat0">
                  <button class="glo-cat-btn" onclick="gloCatToggle('jordan',0)" aria-expanded="false">
                    <span class="glo-cat-icon">◈</span>
                    <span class="glo-cat-name">Commercial Agencies</span>
                    <span class="glo-cat-count">3 entities</span>
                    <span class="glo-chevron">›</span>
                  </button>
                  <div class="glo-cat-body" id="glo-jordan-cat0-body">
                    <div class="glo-entity">Jetour</div>
                    <div class="glo-entity">Soueast</div>
                    <div class="glo-entity">Karry</div>
                  </div>
                </div>
                {/* Category: Management Consultation */}
                <div class="glo-cat glo-cat--flat" id="glo-jordan-cat1">
                  <div class="glo-cat-flat-row">
                    <span class="glo-cat-icon">◈</span>
                    <span class="glo-cat-name">Management Consultation</span>
                  </div>
                </div>
              </div>
            </div>

          </div>{/* /glo-wrap */}
        </div>
      </section>

      {/* ══════════ NEWS & STORIES ══════════ */}
      <section id="news">
        <div class="container">
          <div class="r">
            <div class="tag">Latest News</div>
            <h2 class="h2">Stories &amp; <em>Moments</em></h2>
          </div>

          {/* ── Article Slider ── */}
          <div class="news-slider-wrap r d1">
            <div class="news-slider-track" id="newsTrack">

              {/* ── SLIDE 1: Kurdish National Dress Day ── */}
              <div class="news-slide">
                {/* LEFT: photo slider */}
                <div class="news-photo-slider" id="photoSlider0">
                  <div class="news-photo-track" id="photoTrack0">
                    <div class="news-photo-slide">
                      <img src="/static/news/kurdish-day-1.jpg" alt="Kurdish National Dress Day" loading="lazy" />
                    </div>
                    <div class="news-photo-slide">
                      <img src="/static/news/kurdish-day-2.jpg" alt="Kurdish National Dress Day — Service Team" loading="lazy" />
                    </div>
                    <div class="news-photo-slide">
                      <img src="/static/news/kurdish-day-3.jpg" alt="Kurdish National Dress Day — Showroom Team" loading="lazy" />
                    </div>
                    <div class="news-photo-slide">
                      <img src="/static/news/kurdish-day-4.jpg" alt="Kurdish National Dress Day — Sales Team" loading="lazy" />
                    </div>
                  </div>
                  <button class="news-photo-prev" onclick="photoNav(0,-1)" aria-label="Previous photo">&#8592;</button>
                  <button class="news-photo-next" onclick="photoNav(0,1)" aria-label="Next photo">&#8594;</button>
                  <div class="news-photo-dots" id="photoDots0">
                    <div class="news-photo-dot active" onclick="photoGo(0,0)"></div>
                    <div class="news-photo-dot" onclick="photoGo(0,1)"></div>
                    <div class="news-photo-dot" onclick="photoGo(0,2)"></div>
                    <div class="news-photo-dot" onclick="photoGo(0,3)"></div>
                  </div>
                  <div class="news-photo-counter" id="photoCounter0">1 / 4</div>
                </div>
                {/* RIGHT: article text */}
                <div class="news-article-body">
                  <div class="news-date-row">
                    <span class="news-date">March 2025</span>
                    <span class="news-date-sep"></span>
                    <span class="news-category">Community &amp; Culture</span>
                  </div>
                  <h2 class="news-article-h2">
                    Harlem Group Celebrates Kurdish National Dress Day
                  </h2>
                  <div class="news-article-text">
                    <p>
                      Harlem Group proudly celebrated Kurdish National Dress Day, with employees across the company wearing traditional Kurdish attire to honour the rich culture and heritage of the Kurdistan Region.
                    </p>
                    <p>
                      The office was filled with vibrant colours and traditional designs as team members came together to celebrate the occasion, reflecting the company's deep appreciation for local traditions and cultural diversity.
                    </p>
                    <p>
                      Harlem Group remains committed to supporting cultural initiatives and celebrating the communities it serves — because our people are at the heart of everything we do.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── SLIDE 2: Ramadan Iftar ── */}
              <div class="news-slide">
                {/* LEFT: photo slider */}
                <div class="news-photo-slider" id="photoSlider1">
                  <div class="news-photo-track" id="photoTrack1">
                    <div class="news-photo-slide">
                      <img src="/static/news/ramadan-iftar-1.jpg" alt="Ramadan Iftar Erbil" loading="lazy" />
                    </div>
                    <div class="news-photo-slide">
                      <img src="/static/news/ramadan-iftar-2.jpg" alt="Ramadan Iftar team" loading="lazy" />
                    </div>
                    <div class="news-photo-slide">
                      <img src="/static/news/ramadan-iftar-3.jpg" alt="Ramadan Iftar gathering" loading="lazy" />
                    </div>
                    <div class="news-photo-slide">
                      <img src="/static/news/ramadan-iftar-4.jpg" alt="Ramadan Iftar Baghdad" loading="lazy" />
                    </div>
                  </div>
                  <button class="news-photo-prev" onclick="photoNav(1,-1)" aria-label="Previous photo">&#8592;</button>
                  <button class="news-photo-next" onclick="photoNav(1,1)" aria-label="Next photo">&#8594;</button>
                  <div class="news-photo-dots" id="photoDots1">
                    <div class="news-photo-dot active" onclick="photoGo(1,0)"></div>
                    <div class="news-photo-dot" onclick="photoGo(1,1)"></div>
                    <div class="news-photo-dot" onclick="photoGo(1,2)"></div>
                    <div class="news-photo-dot" onclick="photoGo(1,3)"></div>
                  </div>
                  <div class="news-photo-counter" id="photoCounter1">1 / 4</div>
                </div>
                {/* RIGHT: article text */}
                <div class="news-article-body">
                  <div class="news-date-row">
                    <span class="news-date">Ramadan 2025</span>
                    <span class="news-date-sep"></span>
                    <span class="news-category">Team &amp; Culture</span>
                  </div>
                  <h2 class="news-article-h2">
                    Harlem Group Hosts Annual Ramadan Iftar Gatherings in Erbil and Baghdad
                  </h2>
                  <div class="news-article-text">
                    <p>
                      Harlem Group organised its annual Ramadan Iftar gatherings in both Erbil and Baghdad, bringing together employees and management to celebrate the spirit of the holy month.
                    </p>
                    <p>
                      The events created a warm and welcoming atmosphere where team members shared the Iftar meal, strengthening connections and reflecting the values of unity, appreciation, and togetherness that Ramadan represents.
                    </p>
                    <p>
                      Harlem Group continues to value these moments that bring its teams closer, reinforcing a strong sense of community across all its locations.
                    </p>
                  </div>
                </div>
              </div>

            </div>{/* /news-slider-track */}
          </div>{/* /news-slider-wrap */}

          {/* ── Slider nav bar ── */}
          <div class="news-slider-nav r d2">
            <div class="news-article-dots">
              <div class="news-article-dot active" onclick="articleGo(0)"></div>
              <div class="news-article-dot" onclick="articleGo(1)"></div>
            </div>
            <div class="news-article-counter" id="newsCounter">01 / 02</div>
            <div class="news-slider-btns">
              <button class="news-prev-btn" onclick="articleNav(-1)" aria-label="Previous article">&#8592;</button>
              <button class="news-next-btn" onclick="articleNav(1)" aria-label="Next article">&#8594;</button>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════ CONTACT CTA ══════════ */}
      <section id="contact">
        <div class="contact-rings-wrap" aria-hidden="true">
          <div class="contact-ring"></div>
          <div class="contact-ring"></div>
          <div class="contact-ring"></div>
        </div>
        <div class="contact-inner container">
          <div class="tag contact-tag r">Let's Connect</div>
          <h2 class="contact-h r d1">
            Quality <em>You</em><br />Deserve!
          </h2>
          <div class="contact-btns r d4">
            <a href="mailto:info@harlem.group" class="btn-gold">
              <span>Contact Us</span>
              <span>→</span>
            </a>

          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer>
        <div class="container">
          <div class="ft-grid">
            <div>
              <img src="/static/logo-white.png" alt="Harlem Group" class="ft-logo" />
              <div class="ft-slogan">Quality You Deserve!</div>
              <p class="ft-about">
                Harlem Group — a beacon of excellence since 1995. Operating across Automotive, Real Estate, and Management Consultation across Iraq, Jordan, UAE, and USA.
              </p>
              <div class="ft-socials">
                <a href="#" class="ft-soc" aria-label="LinkedIn">in</a>
                <a href="#" class="ft-soc" aria-label="Instagram">◈</a>
                <a href="#" class="ft-soc" aria-label="Facebook">f</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Divisions</div>
              <div class="ft-links">
                <a href="#auto-services">Automotive Division</a>
                <a href="#realestate">Real Estate</a>
                <a href="#consulting">Management Consultation</a>
                <a href="#news">News &amp; Stories</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Company</div>
              <div class="ft-links">
                <a href="#founder">About Harlem Group</a>
                <a href="/purpose">Vision &amp; Mission</a>
                <a href="/highlights">Achievements</a>
                <a href="#brands">Our Partners</a>
                <a href="/locations">Locations</a>
                <a href="#news">News &amp; Stories</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Contact</div>
              <div class="ft-contact-row">
                <div>
                  <div class="ft-contact-lbl">Email</div>
                  <div class="ft-contact-val">info@harlem.group</div>
                </div>
                <div>
                  <div class="ft-contact-lbl">Operations</div>
                  <div class="ft-contact-val">Iraq · Jordan · UAE · USA</div>
                </div>
              </div>
            </div>
          </div>
          <div class="ft-bottom">
            <span>© 2025 Harlem Group. All rights reserved.</span>
            <div style="display:flex;gap:28px">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ══════════ LOGO SWAP SCRIPT ══════════ */}
      <script dangerouslySetInnerHTML={{ __html: `
        /* ── Global Operations accordion ── */
        window.gloToggle = function(id){
          var el = document.getElementById('glo-' + id);
          if(!el) return;
          var isOpen = el.classList.contains('open');
          /* close all countries */
          document.querySelectorAll('.glo-country').forEach(function(c){ c.classList.remove('open'); c.querySelector('.glo-country-btn').setAttribute('aria-expanded','false'); });
          /* close all cats */
          document.querySelectorAll('.glo-cat').forEach(function(c){ c.classList.remove('open'); });
          if(!isOpen){ el.classList.add('open'); el.querySelector('.glo-country-btn').setAttribute('aria-expanded','true'); }
        };
        window.gloCatToggle = function(country, idx){
          var el = document.getElementById('glo-' + country + '-cat' + idx);
          if(!el) return;
          var isOpen = el.classList.contains('open');
          /* close sibling cats */
          var parent = document.getElementById('glo-' + country + '-body');
          if(parent) parent.querySelectorAll('.glo-cat').forEach(function(c){ c.classList.remove('open'); var btn=c.querySelector('.glo-cat-btn'); if(btn) btn.setAttribute('aria-expanded','false'); });
          if(!isOpen){ el.classList.add('open'); var btn=el.querySelector('.glo-cat-btn'); if(btn) btn.setAttribute('aria-expanded','true'); }
        };

        /* Swap logo to white on dark (non-scrolled) state */
        (function(){
          var nav = document.getElementById('nav');
          var logo = document.getElementById('navLogo');
          function updateLogo(){
            if(nav.classList.contains('scrolled')){
              logo.src = '/static/logo-black.png';
              logo.style.filter = 'none';
            } else {
              logo.src = '/static/logo-white.png';
              logo.style.filter = 'none';
            }
          }
          var origScroll = window.onscroll;
          window.addEventListener('scroll', updateLogo, {passive:true});
          // Initial state — hero is dark so use white logo
          logo.src = '/static/logo-white.png';
          logo.style.filter = 'none';
          // Watch for nav class change
          var obs = new MutationObserver(updateLogo);
          obs.observe(nav, {attributes:true, attributeFilter:['class']});
        })();
      `}} />
    </>
  )
})

/* ═══════════════════════════════════════════════════════════════
   HIGHLIGHTS PAGE — Facts, Figures & Brand Achievements
═══════════════════════════════════════════════════════════════ */
app.get('/highlights', (c) => {
  return c.render(
    <>
      {/* ══════════ NAVBAR ══════════ */}
      <nav id="nav" class="scrolled nav-dark">
        <a href="/" class="nav-logo">
          <img src="/static/logo-white.png" alt="Harlem Group" id="navLogo" />
        </a>
        <div class="nav-links">
          <div class="nav-item">
            <a href="/#founder" class="nav-a">About</a>
            <span class="nav-drop-arrow">▾</span>
            <div class="nav-dropdown">
              <a href="/purpose"    class="nav-drop-link">Our Purpose</a>
              <a href="/highlights" class="nav-drop-link active">Highlights</a>
              <a href="/#divisions"  class="nav-drop-link">Divisions</a>
            </div>
          </div>
          <a href="/#brands"       class="nav-a">Partners</a>
          <a href="/locations"    class="nav-a">Locations</a>
          <a href="/news"         class="nav-a">News</a>
          <a href="/careers"       class="nav-a">Careers</a>
        </div>
        <div class="nav-right">
          <a href="/#contact" class="nav-cta">Get in Touch</a>
          <button class="hamburger" id="fsBtn" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ══════════ PAGE HERO ══════════ */}
      <section class="hl-hero">
        <div class="hl-hero-bg" aria-hidden="true"></div>
        <div class="hl-hero-grid" aria-hidden="true"></div>
        <div class="container hl-hero-inner">
          <div class="tag on-dark r">Facts &amp; Figures</div>
          <h1 class="hl-hero-h1 r d1">Numbers That<br/><em>Define Us</em></h1>
          <p class="hl-hero-sub r d2">
            Record-breaking market positions, globally recognized achievements, and a continuously growing footprint across four countries — since 1995.
          </p>
        </div>
      </section>

      {/* ══════════ CORE STATS ══════════ */}
      <section class="hl-stats">
        <div class="container">
          <div class="hl-stats-grid">
            {[
              { v:1995, l:'Year Founded',           p:'', raw:true  },              { v:45,   l:'Global Facilities',      p:'+', raw:false },
              { v:12,   l:'Automotive Partners',    p:'', raw:false  },
              { v:4,    l:'Countries of Operation', p:'', raw:false  },
            ].map((f,i)=>(
              <div class={`hl-stat-card r d${i+1}`}>
                <div class="hl-stat-val">
                  <span data-count={f.v} data-raw={f.raw ? 'true' : 'false'}>0</span>
                  {f.p && <span class="hl-stat-p">{f.p}</span>}
                </div>
                <div class="hl-stat-label">{f.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BRAND ACHIEVEMENTS — FAQ ACCORDION ══════════ */}
      <section class="hl-brands">
        <div class="container">
          <div class="r" style="margin-bottom:72px">
            <div class="tag">Brand Achievements</div>
            <h2 class="h2">Market Leadership<br/><em>by Brand</em></h2>
            <p class="hl-brands-sub r d2">
              Explore Harlem Group's record-breaking market share milestones, ranked by brand — each a testament to our commitment to quality and partnership excellence.
            </p>
          </div>

          {/* ── FAQ ACCORDION ── */}
          <div class="faq-list">

            {/* JETOUR */}
            <div class="faq-item" data-brand="jetour">
              <button class="faq-q" aria-expanded="false">
                <div class="faq-q-left">
                  <div class="faq-brand-logo-wrap">
                    <img src="/static/brands/jetour.png" alt="JETOUR" class="faq-brand-logo" />
                  </div>
                  <div class="faq-q-text">
                    <span class="faq-brand-name">JETOUR</span>
                    <span class="faq-brand-cat">Iraq &amp; Jordan</span>
                  </div>
                </div>
                <div class="faq-icon">
                  <span class="faq-icon-bar faq-icon-h"></span>
                  <span class="faq-icon-bar faq-icon-v"></span>
                </div>
              </button>
              <div class="faq-a">
                <div class="faq-a-inner">
                  <p class="faq-intro">
                    The <strong>#1 Chinese brand across every segment of presence in Iraq and Jordan</strong>. Since becoming the exclusive distributor, Harlem Group has driven JETOUR to unprecedented market dominance in the Iraqi and Jordanian markets.
                  </p>
                  <div class="faq-achievements">
                    {[
                      { badge:'#1', text:'Highest Chinese brand market share in every single segment of presence in Iraq', years:'' },
                      { badge:'#1 JO', text:'Highest selling SUV brand in Jordan', years:'' },
                      { badge:'#1 JO', text:'Overall highest selling ICE brand in Jordan', years:'' },
                      { badge:'SUV-B IQ', text:'Dashing: Highest market share SUV-B in Iraq', years:'2024 · 2025 · 2026 YTD' },
                      { badge:'SUV-B JO', text:'Dashing: Highest market share SUV-B in Jordan', years:'2025 · 2026 YTD' },
                      { badge:'SUV-C IQ', text:'T2 & X70 Plus: The two highest market share Chinese SUV-C in Iraq', years:'2023 · 2024 · 2025 · 2026 YTD' },
                      { badge:'SUV-C JO', text:'T2: The highest market share Chinese SUV-C in Jordan', years:'2025 · 2026 YTD' },
                      { badge:'SUV-D IQ', text:'X90 Plus: Highest market share Chinese SUV-D in Iraq', years:'2023 · 2024 · 2025 · 2026 YTD' },
                      { badge:'↑62%', text:'Fastest growing brand in Iraq', years:'2025' },
                      { badge:'↑725%', text:'Fastest growing brand in Jordan', years:'2025' },
                      { badge:'ME #1', text:'Largest network of showrooms and service centers for Jetour in the Middle East', years:'' },
                      { badge:'ME #1', text:'Largest showroom for Jetour in the Middle East — Erbil, Iraq', years:'' },
                      { badge:'ME #1', text:'Largest service center for Jetour in the Middle East — Erbil, Iraq', years:'' },
                    ].map((a)=>(
                      <div class="faq-ach-row">
                        <div class="faq-ach-badge">{a.badge}</div>
                        <div class="faq-ach-info">
                          <div class="faq-ach-text">{a.text}</div>
                          {a.years && <div class="faq-ach-years">{a.years}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SOUEAST */}
            <div class="faq-item" data-brand="soueast">
              <button class="faq-q" aria-expanded="false">
                <div class="faq-q-left">
                  <div class="faq-brand-logo-wrap">
                    <img src="/static/brands/soueast.png" alt="SOUEAST" class="faq-brand-logo" />
                  </div>
                  <div class="faq-q-text">
                    <span class="faq-brand-name">SOUEAST</span>
                    <span class="faq-brand-cat">Iraq &amp; Jordan</span>
                  </div>
                </div>
                <div class="faq-icon">
                  <span class="faq-icon-bar faq-icon-h"></span>
                  <span class="faq-icon-bar faq-icon-v"></span>
                </div>
              </button>
              <div class="faq-a">
                <div class="faq-a-inner">
                  <p class="faq-intro">
                    SOUEAST leads the E-Sedan and sedan category under Harlem Group's exclusive distribution in Iraq and Jordan.
                  </p>
                  <div class="faq-achievements">
                    {[
                      { badge:'ME #1', text:'Largest network of showrooms and service centers for Soueast in the Middle East', years:'' },
                      { badge:'ME #1', text:'First and largest showroom for Soueast in the Middle East — Erbil, Iraq', years:'' },
                      { badge:'ME #1', text:'Largest service center for Soueast in the Middle East — Erbil, Iraq', years:'' },
                      { badge:'Award', text:'Winner of \'SOUEAST Star 2025\' Award', years:'2025' },
                    ].map((a)=>(
                      <div class="faq-ach-row">
                        <div class="faq-ach-badge">{a.badge}</div>
                        <div class="faq-ach-info">
                          <div class="faq-ach-text">{a.text}</div>
                          {a.years && <div class="faq-ach-years">{a.years}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* JEEP */}
            <div class="faq-item" data-brand="jeep">
              <button class="faq-q" aria-expanded="false">
                <div class="faq-q-left">
                  <div class="faq-brand-logo-wrap">
                    <img src="/static/brands/jeep.png" alt="JEEP" class="faq-brand-logo" />
                  </div>
                  <div class="faq-q-text">
                    <span class="faq-brand-name">JEEP</span>
                    <span class="faq-brand-cat">Iraq</span>
                  </div>
                </div>
                <div class="faq-icon">
                  <span class="faq-icon-bar faq-icon-h"></span>
                  <span class="faq-icon-bar faq-icon-v"></span>
                </div>
              </button>
              <div class="faq-a">
                <div class="faq-a-inner">
                  <p class="faq-intro">
                    Jeep is the cornerstone of Harlem Group's Stellantis portfolio in Iraq. The Grand Cherokee, in particular, has cemented an extraordinary global record under Harlem Group's stewardship — the highest market share globally for <strong>6 consecutive years</strong>.
                  </p>
                  <div class="faq-achievements">
                    {[
                      { badge:'Global #1', text:'Highest Jeep Grand Cherokee market share worldwide', years:'6 Consecutive Years' },
                      { badge:'ME #1', text:'Highest overall Stellantis market share across the Middle East', years:'5 Consecutive Years' },
                    ].map((a)=>(
                      <div class="faq-ach-row">
                        <div class="faq-ach-badge">{a.badge}</div>
                        <div class="faq-ach-info">
                          <div class="faq-ach-text">{a.text}</div>
                          <div class="faq-ach-years">{a.years}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* DODGE */}
            <div class="faq-item" data-brand="dodge">
              <button class="faq-q" aria-expanded="false">
                <div class="faq-q-left">
                  <div class="faq-brand-logo-wrap">
                    <img src="/static/brands/dodge.png" alt="DODGE" class="faq-brand-logo" />
                  </div>
                  <div class="faq-q-text">
                    <span class="faq-brand-name">DODGE</span>
                    <span class="faq-brand-cat">Iraq</span>
                  </div>
                </div>
                <div class="faq-icon">
                  <span class="faq-icon-bar faq-icon-h"></span>
                  <span class="faq-icon-bar faq-icon-v"></span>
                </div>
              </button>
              <div class="faq-a">
                <div class="faq-a-inner">
                  <p class="faq-intro">
                    Dodge — the iconic American muscle brand — is a key pillar of Harlem Group's Stellantis distribution in Iraq. The Dodge Charger has led the E-Sedan category to record-breaking performance.
                  </p>
                  <div class="faq-achievements">
                    {[
                      { badge:'E-Sedan #1', text:'Highest E-Sedan share: Dodge Charger (alongside Chrysler 300C)', years:'5 Consecutive Years' },
                      { badge:'ME #1', text:'Contributing to the highest overall Stellantis market share in the Middle East', years:'5 Consecutive Years' },
                    ].map((a)=>(
                      <div class="faq-ach-row">
                        <div class="faq-ach-badge">{a.badge}</div>
                        <div class="faq-ach-info">
                          <div class="faq-ach-text">{a.text}</div>
                          <div class="faq-ach-years">{a.years}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CHRYSLER */}
            <div class="faq-item" data-brand="chrysler">
              <button class="faq-q" aria-expanded="false">
                <div class="faq-q-left">
                  <div class="faq-brand-logo-wrap">
                    <img src="/static/brands/chrysler.png" alt="CHRYSLER" class="faq-brand-logo" />
                  </div>
                  <div class="faq-q-text">
                    <span class="faq-brand-name">CHRYSLER</span>
                    <span class="faq-brand-cat">Iraq</span>
                  </div>
                </div>
                <div class="faq-icon">
                  <span class="faq-icon-bar faq-icon-h"></span>
                  <span class="faq-icon-bar faq-icon-v"></span>
                </div>
              </button>
              <div class="faq-a">
                <div class="faq-a-inner">
                  <p class="faq-intro">
                    Chrysler brings American luxury to Iraq through Harlem Group's exclusive distribution. The Chrysler 300C has dominated the E-Sedan category alongside the Dodge Charger, a record held for five consecutive years.
                  </p>
                  <div class="faq-achievements">
                    {[
                      { badge:'E-Sedan #1', text:'Highest E-Sedan share: Chrysler 300C (alongside Dodge Charger)', years:'5 Consecutive Years' },
                      { badge:'ME #1', text:'Part of the highest overall Stellantis market share in the Middle East', years:'5 Consecutive Years' },
                    ].map((a)=>(
                      <div class="faq-ach-row">
                        <div class="faq-ach-badge">{a.badge}</div>
                        <div class="faq-ach-info">
                          <div class="faq-ach-text">{a.text}</div>
                          <div class="faq-ach-years">{a.years}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RAM */}
            <div class="faq-item" data-brand="ram">
              <button class="faq-q" aria-expanded="false">
                <div class="faq-q-left">
                  <div class="faq-brand-logo-wrap">
                    <img src="/static/brands/ram.png" alt="RAM" class="faq-brand-logo" />
                  </div>
                  <div class="faq-q-text">
                    <span class="faq-brand-name">RAM</span>
                    <span class="faq-brand-cat">Iraq</span>
                  </div>
                </div>
                <div class="faq-icon">
                  <span class="faq-icon-bar faq-icon-h"></span>
                  <span class="faq-icon-bar faq-icon-v"></span>
                </div>
              </button>
              <div class="faq-a">
                <div class="faq-a-inner">
                  <p class="faq-intro">
                    RAM Trucks is a standout performer in Harlem Group's portfolio — achieving the <strong>highest RAM 1500 market share globally</strong> in both 2023 and 2026 YTD, a remarkable feat that highlights Harlem Group's mastery of the Iraqi premium truck market.
                  </p>
                  <div class="faq-achievements">
                    {[
                      { badge:'Global #1', text:'Highest RAM 1500 market share worldwide — 2026', years:'2026 YTD' },
                      { badge:'ME #1', text:'Part of the highest overall Stellantis market share in the Middle East', years:'5 Consecutive Years' },
                    ].map((a)=>(
                      <div class="faq-ach-row">
                        <div class="faq-ach-badge">{a.badge}</div>
                        <div class="faq-ach-info">
                          <div class="faq-ach-text">{a.text}</div>
                          <div class="faq-ach-years">{a.years}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>{/* /faq-list */}
        </div>
      </section>

      {/* ══════════ COMPANY PROFILE DOWNLOAD ══════════ */}
      <section class="hl-profile">
        <div class="container">
          <div class="hl-profile-inner r">
            <div class="hl-profile-left">
              <div class="hl-profile-icon" aria-hidden="true">
                <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 0H22L36 14V40C36 42.2 34.2 44 32 44H4C1.8 44 0 42.2 0 40V4C0 1.8 1.8 0 4 0Z" fill="rgba(208,206,201,0.12)" stroke="rgba(208,206,201,0.5)" stroke-width="1"/>
                  <path d="M22 0V14H36" stroke="rgba(208,206,201,0.5)" stroke-width="1" fill="none"/>
                  <line x1="8" y1="22" x2="28" y2="22" stroke="rgba(208,206,201,0.45)" stroke-width="1.5"/>
                  <line x1="8" y1="28" x2="24" y2="28" stroke="rgba(208,206,201,0.45)" stroke-width="1.5"/>
                  <line x1="8" y1="34" x2="20" y2="34" stroke="rgba(208,206,201,0.45)" stroke-width="1.5"/>
                </svg>
              </div>
              <div class="hl-profile-meta">
                <div class="tag on-dark" style="margin-bottom:14px">Company Profile</div>
                <h2 class="hl-profile-h2">Download Our<br/><em>Corporate Profile</em></h2>
                <p class="hl-profile-body">
                  Get the full picture — our history, divisions, achievements, global footprint, and vision all in one document. The Harlem Group Corporate Profile is your comprehensive guide to who we are and what we do.
                </p>
                <div class="hl-profile-info">
                  <span class="hl-profile-tag">PDF</span>
                  <span class="hl-profile-tag">5.3 MB</span>
                  <span class="hl-profile-tag">Updated 2025</span>
                </div>
              </div>
            </div>
            <a href="/static/HG-Corp-Profile.pdf" download="HG-Corp-Profile.pdf" class="hl-profile-btn">
              <span class="hl-profile-btn-icon">↓</span>
              <span class="hl-profile-btn-text">
                <span class="hl-profile-btn-label">Download</span>
                <span class="hl-profile-btn-sub">Corporate Profile · PDF</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer>
        <div class="container">
          <div class="ft-grid">
            <div>
              <img src="/static/logo-white.png" alt="Harlem Group" class="ft-logo" />
              <div class="ft-slogan">Quality You Deserve!</div>
              <p class="ft-about">
                Harlem Group — a beacon of excellence since 1995. Operating across Automotive, Real Estate, and Management Consultation across Iraq, Jordan, UAE, and USA.
              </p>
              <div class="ft-socials">
                <a href="#" class="ft-soc" aria-label="LinkedIn">in</a>
                <a href="#" class="ft-soc" aria-label="Instagram">◈</a>
                <a href="#" class="ft-soc" aria-label="Facebook">f</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Divisions</div>
              <div class="ft-links">
                <a href="/#auto-services">Automotive Division</a>
                <a href="/#realestate">Real Estate</a>
                <a href="/#consulting">Management Consultation</a>
                <a href="/news">News &amp; Stories</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Company</div>
              <div class="ft-links">
                <a href="/#founder">About Harlem Group</a>
                <a href="/purpose">Vision &amp; Mission</a>
                <a href="/highlights">Achievements</a>
                <a href="/#brands">Our Partners</a>
                <a href="/locations">Locations</a>
                <a href="/news">News &amp; Stories</a>
                <a href="/#contact">Contact</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Contact</div>
              <div class="ft-contact-row">
                <div>
                  <div class="ft-contact-lbl">Email</div>
                  <div class="ft-contact-val">info@harlem.group</div>
                </div>
                <div>
                  <div class="ft-contact-lbl">Operations</div>
                  <div class="ft-contact-val">Iraq · Jordan · UAE · USA</div>
                </div>
              </div>
            </div>
          </div>
          <div class="ft-bottom">
            <span>© 2025 Harlem Group. All rights reserved.</span>
            <div style="display:flex;gap:28px">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ══════════ PAGE SCRIPTS ══════════ */}
      <script dangerouslySetInnerHTML={{ __html: `
        /* Counter animation */
        (function(){
          var counters=document.querySelectorAll('[data-count]');
          var io=new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){
                var el=e.target, target=parseInt(el.getAttribute('data-count'));
                var raw=el.getAttribute('data-raw')==='true';
                function fmt(n){ return raw ? String(n) : n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
                var start=0, duration=2000, step=target/duration*16;
                function tick(){
                  start+=step;
                  if(start>=target){ el.textContent=fmt(target); return; }
                  el.textContent=fmt(Math.floor(start));
                  requestAnimationFrame(tick);
                }
                tick();
                io.unobserve(el);
              }
            });
          },{threshold:.5});
          counters.forEach(function(c){ io.observe(c); });
        })();

        /* FAQ Accordion */
        document.querySelectorAll('.faq-item').forEach(function(item){
          var btn = item.querySelector('.faq-q');
          var ans = item.querySelector('.faq-a');
          var inner = item.querySelector('.faq-a-inner');
          btn.addEventListener('click', function(){
            var isOpen = item.classList.contains('open');
            /* Close all */
            document.querySelectorAll('.faq-item').forEach(function(it){
              it.classList.remove('open');
              it.querySelector('.faq-q').setAttribute('aria-expanded','false');
              it.querySelector('.faq-a').style.maxHeight = '0';
            });
            /* Open clicked if it was closed */
            if(!isOpen){
              item.classList.add('open');
              btn.setAttribute('aria-expanded','true');
              ans.style.maxHeight = inner.scrollHeight + 'px';
            }
          });
        });


        /* ── News: Article Slider ── */
        (function(){
          var track = document.getElementById('newsTrack');
          var dots  = document.querySelectorAll('.news-article-dot');
          var counter = document.getElementById('newsCounter');
          var total = 2;
          var cur = 0;
          function articleGo(n){
            cur = ((n % total) + total) % total;
            if(track) track.style.transform = 'translateX(-' + (cur * 100) + '%)';
            dots.forEach(function(d,i){ d.classList.toggle('active', i===cur); });
            if(counter) counter.textContent = String(cur+1).padStart(2,'0') + ' / ' + String(total).padStart(2,'0');
          }
          window.articleGo = articleGo;
          window.articleNav = function(dir){ articleGo(cur + dir); };
        })();

        /* ── News: Per-slide photo sliders ── */
        (function(){
          var sliders = [
            { track: document.getElementById('photoTrack0'), dots: document.querySelectorAll('#photoDots0 .news-photo-dot'), counter: document.getElementById('photoCounter0'), cur: 0, total: 4 },
            { track: document.getElementById('photoTrack1'), dots: document.querySelectorAll('#photoDots1 .news-photo-dot'), counter: document.getElementById('photoCounter1'), cur: 0, total: 4 }
          ];
          function photoGo(sliderIdx, n){
            var s = sliders[sliderIdx];
            if(!s || !s.track) return;
            s.cur = ((n % s.total) + s.total) % s.total;
            s.track.style.transform = 'translateX(-' + (s.cur * 100) + '%)';
            s.dots.forEach(function(d,i){ d.classList.toggle('active', i===s.cur); });
            if(s.counter) s.counter.textContent = (s.cur+1) + ' / ' + s.total;
          }
          window.photoGo = photoGo;
          window.photoNav = function(sliderIdx, dir){ photoGo(sliderIdx, sliders[sliderIdx].cur + dir); };
          /* Auto-advance photo sliders every 4s */
          setInterval(function(){ photoGo(0, sliders[0].cur + 1); }, 4000);
          setInterval(function(){ photoGo(1, sliders[1].cur + 1); }, 4600);
        })();

        /* Scroll reveal */
        (function(){
          var els=document.querySelectorAll('.r,.rl,.rr');
          var io=new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){ e.target.classList.add('v'); io.unobserve(e.target); }
            });
          },{threshold:.1,rootMargin:'0px 0px -48px 0px'});
          els.forEach(function(el){ io.observe(el); });
        })();
      `}} />
    </>
  )
})

/* ═══════════════════════════════════════════════════════════════
   OUR PURPOSE PAGE — Vision, Mission & Values
═══════════════════════════════════════════════════════════════ */
app.get('/purpose', (c) => {
  return c.render(
    <>
      {/* ══════════ NAVBAR ══════════ */}
      <nav id="nav" class="scrolled nav-dark">
        <a href="/" class="nav-logo">
          <img src="/static/logo-white.png" alt="Harlem Group" id="navLogo" />
        </a>
        <div class="nav-links">
          <div class="nav-item">
            <a href="/#founder" class="nav-a">About</a>
            <span class="nav-drop-arrow">▾</span>
            <div class="nav-dropdown">
              <a href="/purpose"    class="nav-drop-link active">Our Purpose</a>
              <a href="/highlights" class="nav-drop-link">Highlights</a>
              <a href="/#divisions"  class="nav-drop-link">Divisions</a>
            </div>
          </div>
          <a href="/#brands"       class="nav-a">Partners</a>
          <a href="/locations"    class="nav-a">Locations</a>
          <a href="/news"         class="nav-a">News</a>
          <a href="/careers"       class="nav-a">Careers</a>
        </div>
        <div class="nav-right">
          <a href="/#contact" class="nav-cta">Get in Touch</a>
          <button class="hamburger" id="fsBtn" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ══════════ PAGE HERO ══════════ */}
      <section class="pur-hero">
        <div class="pur-hero-bg" aria-hidden="true"></div>
        <div class="pur-hero-grid" aria-hidden="true"></div>
        <div class="container pur-hero-inner">
          <div class="tag on-dark r">Our Purpose</div>
          <h1 class="pur-hero-h1 r d1">Vision, Mission<br/><em>&amp; Values</em></h1>
          <p class="pur-hero-sub r d2">
            The principles that have guided Harlem Group since 1995 — a commitment to quality, ethical conduct, and excellence across every industry and market we serve.
          </p>
        </div>
        <div class="pur-hero-scroll" aria-hidden="true">
          <div class="pur-scroll-line"></div>
        </div>
      </section>

      {/* ══════════ VISION & MISSION ══════════ */}
      <section class="pur-vm">
        <div class="container">
          <div class="pur-vm-grid">

            {/* VISION */}
            <div class="pur-vm-card r d1">
              <div class="pur-vm-bg-label">Vision</div>
              <div class="pur-vm-icon">◎</div>
              <div class="pur-vm-label">Vision</div>
              <h2 class="pur-vm-title">The Standard-Bearer<br/>for Quality</h2>
              <p class="pur-vm-body">
                At Harlem Group, we strive to be the standard-bearer for quality and value, continuously raising the bar in our industries. We aim to deliver superior experiences and lasting value for our customers, setting new benchmarks of excellence in every market we serve.
              </p>
              <div class="pur-vm-rule"></div>
              <ul class="pur-vm-pillars">
                {['Global Excellence','Lasting Value','Benchmark Setting','Industry Leadership'].map((p)=>(
                  <li class="pur-vm-pillar"><span class="pur-vm-dot"></span>{p}</li>
                ))}
              </ul>
            </div>

            {/* MISSION */}
            <div class="pur-vm-card pur-vm-card--dark r d2">
              <div class="pur-vm-bg-label">Mission</div>
              <div class="pur-vm-icon">◈</div>
              <div class="pur-vm-label">Mission</div>
              <h2 class="pur-vm-title">Delivering Exceptional<br/>Quality</h2>
              <p class="pur-vm-body">
                Harlem Group is committed to delivering exceptional quality and meaningful value to our customers. Through a diverse portfolio and global presence, we focus on enhancing customer satisfaction, maintaining the highest standards, and consistently improving the quality of our offerings across all our ventures.
              </p>
              <div class="pur-vm-rule"></div>
              <ul class="pur-vm-pillars">
                {['Customer Satisfaction','Highest Standards','Continuous Improvement','Meaningful Value'].map((p)=>(
                  <li class="pur-vm-pillar"><span class="pur-vm-dot"></span>{p}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════ SLOGAN DIVIDER ══════════ */}
      <div class="pur-slogan-strip">
        <div class="pur-slogan-track">
          {['Quality You Deserve!','◆','Since 1995','◆','Quality You Deserve!','◆','Since 1995','◆',
            'Quality You Deserve!','◆','Since 1995','◆','Quality You Deserve!','◆','Since 1995','◆'].map((t,i)=>(
            <span class="pur-slogan-item" key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* ══════════ CORE VALUES ══════════ */}
      <section class="pur-values">
        <div class="container">
          <div class="r" style="text-align:center;margin-bottom:80px">
            <div class="tag" style="justify-content:center">Core Values</div>
            <h2 class="h2">What We <em>Stand For</em></h2>
            <p class="pur-values-sub r d2">Four principles that form the foundation of every decision, relationship, and achievement at Harlem Group.</p>
          </div>
          <div class="pur-vals-grid">
            {[
              {
                n:'01', t:'Quality',
                icon:'◎',
                b:'We take pride in delivering unparalleled quality across our products, services, and customer interactions, drawing inspiration from the depth of our cultural heritage. Our commitment to excellence serves as our guiding force.',
                points:['Uncompromising standards','Cultural inspiration','Excellence in every interaction','Continuous quality improvement']
              },
              {
                n:'02', t:'Employee Focus',
                icon:'◈',
                b:'We foster a supportive and empowering environment that enables our employees to thrive and contribute their best. Our commitment includes embracing diversity and fostering unity among our team members.',
                points:['Empowering environment','Diversity & inclusion','Team unity','Individual growth']
              },
              {
                n:'03', t:'Collaboration',
                icon:'◇',
                b:'We cultivate meaningful partnerships with our network of partners, recognising the collective strength that arises from collaboration. Through communication, engagement, and a shared commitment to success, we foster synergies that drive shared success.',
                points:['Strategic partnerships','Collective strength','Open communication','Shared success']
              },
              {
                n:'04', t:'Customer-Centricity',
                icon:'◉',
                b:'Placing our customers at the heart of everything we do, our approach is grounded in the principles of respect, hospitality, and personalized care, ensuring an exceptional experience in all our endeavours.',
                points:['Customer at the core','Respect & hospitality','Personalised care','Exceptional experiences']
              },
            ].map((v,i)=>(
              <div class={`pur-val-card r d${i+1}`}>
                <div class="pur-val-top">
                  <div class="pur-val-icon">{v.icon}</div>
                  <div class="pur-val-num">{v.n}</div>
                </div>
                <div class="pur-val-title">{v.t}</div>
                <p class="pur-val-body">{v.b}</p>
                <ul class="pur-val-points">
                  {v.points.map((p)=>(
                    <li class="pur-val-point"><span class="pur-val-pt-dot"></span>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FOUNDER QUOTE ══════════ */}
      <section class="pur-fq">
        <div class="container">
          <div class="pur-fq-inner r">
            <div class="pur-fq-photo rr">
              <img src="/static/founder.jpg" alt="Salah Noor — Founder & Chairman, Harlem Group" loading="lazy" />
              <div class="pur-fq-photo-frame"></div>
            </div>
            <div class="pur-fq-content">
              <div class="pur-fq-mark">"</div>
              <blockquote class="pur-fq-quote">
                Quality is not just a standard we meet — it is the promise we make to every customer, every partner, and every community we serve. Since 1995, this promise has been the heart of everything Harlem Group does.
              </blockquote>
              <div class="pur-fq-sig">
                <div class="pur-fq-name">Salah Noor</div>
                <div class="pur-fq-title">Founder &amp; Chairman — Harlem Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer>
        <div class="container">
          <div class="ft-grid">
            <div>
              <img src="/static/logo-white.png" alt="Harlem Group" class="ft-logo" />
              <div class="ft-slogan">Quality You Deserve!</div>
              <p class="ft-about">
                Harlem Group — a beacon of excellence since 1995. Operating across Automotive, Real Estate, and Management Consultation across Iraq, Jordan, UAE, and USA.
              </p>
              <div class="ft-socials">
                <a href="#" class="ft-soc" aria-label="LinkedIn">in</a>
                <a href="#" class="ft-soc" aria-label="Instagram">◈</a>
                <a href="#" class="ft-soc" aria-label="Facebook">f</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Divisions</div>
              <div class="ft-links">
                <a href="/#auto-services">Automotive Division</a>
                <a href="/#realestate">Real Estate</a>
                <a href="/#consulting">Management Consultation</a>
                <a href="/news">News &amp; Stories</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Company</div>
              <div class="ft-links">
                <a href="/#founder">About Harlem Group</a>
                <a href="/purpose">Vision &amp; Mission</a>
                <a href="/highlights">Achievements</a>
                <a href="/#brands">Our Partners</a>
                <a href="/locations">Locations</a>
                <a href="/news">News &amp; Stories</a>
                <a href="/#contact">Contact</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Contact</div>
              <div class="ft-contact-row">
                <div>
                  <div class="ft-contact-lbl">Email</div>
                  <div class="ft-contact-val">info@harlem.group</div>
                </div>
                <div>
                  <div class="ft-contact-lbl">Operations</div>
                  <div class="ft-contact-val">Iraq · Jordan · UAE · USA</div>
                </div>
              </div>
            </div>
          </div>
          <div class="ft-bottom">
            <span>© 2025 Harlem Group. All rights reserved.</span>
            <div style="display:flex;gap:28px">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ══════════ PAGE SCRIPTS ══════════ */}
      <script dangerouslySetInnerHTML={{ __html: `
        /* Scroll reveal */
        (function(){
          var els=document.querySelectorAll('.r,.rl,.rr');
          var io=new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){ e.target.classList.add('v'); io.unobserve(e.target); }
            });
          },{threshold:.1,rootMargin:'0px 0px -48px 0px'});
          els.forEach(function(el){ io.observe(el); });
        })();
      `}} />
    </>
  )
})

/* ══════════════════════════════════════════════════════════
   NEWS PAGE
══════════════════════════════════════════════════════════ */
app.get('/news', (c) => {
  return c.render(
    <>
      {/* ══════════ NAVBAR ══════════ */}
      <nav id="nav" class="scrolled nav-dark">
        <a href="/" class="nav-logo">
          <img src="/static/logo-white.png" alt="Harlem Group" id="navLogo" />
        </a>
        <div class="nav-links">
          <div class="nav-item">
            <a href="/#founder" class="nav-a">About</a>
            <span class="nav-drop-arrow">▾</span>
            <div class="nav-dropdown">
              <a href="/purpose"    class="nav-drop-link">Our Purpose</a>
              <a href="/highlights" class="nav-drop-link">Highlights</a>
              <a href="/#divisions"  class="nav-drop-link">Divisions</a>
            </div>
          </div>
          <a href="/#brands"       class="nav-a">Partners</a>
          <a href="/locations"    class="nav-a">Locations</a>
          <a href="/news"          class="nav-a active">News</a>
          <a href="/careers"       class="nav-a">Careers</a>
        </div>
        <div class="nav-right">
          <a href="/#contact" class="nav-cta">Get in Touch</a>
          <button class="hamburger" id="fsBtn" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ══════════ NEWS HERO ══════════ */}
      <section class="np-hero">
        <div class="np-hero-bg" aria-hidden="true"></div>
        <div class="np-hero-grid" aria-hidden="true"></div>
        <div class="container np-hero-inner">
          <div class="tag on-dark r">Latest News</div>
          <h1 class="np-hero-h1 r d1">Stories &amp; <em>Moments</em></h1>
          <p class="np-hero-sub r d2">
            Celebrating our people, our culture, and our community — stories from across Harlem Group.
          </p>
        </div>
      </section>

      {/* ══════════ NEWS ARTICLES ══════════ */}
      <section class="np-articles">
        <div class="container">

          {/* ── Article 1: Kurdish National Dress Day ── */}
          <article class="np-article r">
            <div class="np-article-photos">
              <div class="np-photo-slider" id="npSlider0">
                <div class="np-photo-track" id="npTrack0">
                  <div class="np-photo-slide">
                    <img src="/static/news/kurdish-day-1.jpg" alt="Kurdish National Dress Day" loading="lazy" />
                  </div>
                  <div class="np-photo-slide">
                    <img src="/static/news/kurdish-day-2.jpg" alt="Kurdish National Dress Day — Service Team" loading="lazy" />
                  </div>
                  <div class="np-photo-slide">
                    <img src="/static/news/kurdish-day-3.jpg" alt="Kurdish National Dress Day — Showroom Team" loading="lazy" />
                  </div>
                  <div class="np-photo-slide">
                    <img src="/static/news/kurdish-day-4.jpg" alt="Kurdish National Dress Day — Sales Team" loading="lazy" />
                  </div>
                </div>
                <button class="np-prev" onclick="npNav(0,-1)" aria-label="Previous">&#8592;</button>
                <button class="np-next" onclick="npNav(0,1)"  aria-label="Next">&#8594;</button>
                <div class="np-dots">
                  <span class="np-dot active" onclick="npGo(0,0)"></span>
                  <span class="np-dot" onclick="npGo(0,1)"></span>
                  <span class="np-dot" onclick="npGo(0,2)"></span>
                  <span class="np-dot" onclick="npGo(0,3)"></span>
                </div>
                <div class="np-counter">1 / 4</div>
              </div>
            </div>
            <div class="np-article-body">
              <div class="np-meta">
                <span class="np-date">March 2025</span>
                <span class="np-sep"></span>
                <span class="np-cat">Community &amp; Culture</span>
              </div>
              <h2 class="np-title">Harlem Group Celebrates Kurdish National Dress Day</h2>
              <div class="np-text">
                <p>Harlem Group proudly celebrated Kurdish National Dress Day, with employees across the company wearing traditional Kurdish attire to honour the rich culture and heritage of the Kurdistan Region.</p>
                <p>The office was filled with vibrant colours and traditional designs as team members came together to celebrate the occasion, reflecting the company's deep appreciation for local traditions and cultural diversity.</p>
                <p>Harlem Group remains committed to supporting cultural initiatives and celebrating the communities it serves — because our people are at the heart of everything we do.</p>
              </div>
            </div>
          </article>

          <div class="np-divider"></div>

          {/* ── Article 2: Ramadan Iftar ── */}
          <article class="np-article r d1">
            <div class="np-article-photos">
              <div class="np-photo-slider" id="npSlider1">
                <div class="np-photo-track" id="npTrack1">
                  <div class="np-photo-slide">
                    <img src="/static/news/ramadan-iftar-1.jpg" alt="Ramadan Iftar Erbil" loading="lazy" />
                  </div>
                  <div class="np-photo-slide">
                    <img src="/static/news/ramadan-iftar-2.jpg" alt="Ramadan Iftar team" loading="lazy" />
                  </div>
                  <div class="np-photo-slide">
                    <img src="/static/news/ramadan-iftar-3.jpg" alt="Ramadan Iftar gathering" loading="lazy" />
                  </div>
                  <div class="np-photo-slide">
                    <img src="/static/news/ramadan-iftar-4.jpg" alt="Ramadan Iftar Baghdad" loading="lazy" />
                  </div>
                </div>
                <button class="np-prev" onclick="npNav(1,-1)" aria-label="Previous">&#8592;</button>
                <button class="np-next" onclick="npNav(1,1)"  aria-label="Next">&#8594;</button>
                <div class="np-dots">
                  <span class="np-dot active" onclick="npGo(1,0)"></span>
                  <span class="np-dot" onclick="npGo(1,1)"></span>
                  <span class="np-dot" onclick="npGo(1,2)"></span>
                  <span class="np-dot" onclick="npGo(1,3)"></span>
                </div>
                <div class="np-counter">1 / 4</div>
              </div>
            </div>
            <div class="np-article-body">
              <div class="np-meta">
                <span class="np-date">Ramadan 2025</span>
                <span class="np-sep"></span>
                <span class="np-cat">Team &amp; Culture</span>
              </div>
              <h2 class="np-title">Harlem Group Hosts Annual Ramadan Iftar Gatherings in Erbil and Baghdad</h2>
              <div class="np-text">
                <p>Harlem Group organised its annual Ramadan Iftar gatherings in both Erbil and Baghdad, bringing together employees and management to celebrate the spirit of the holy month.</p>
                <p>The events created a warm and welcoming atmosphere where team members shared the Iftar meal, strengthening connections and reflecting the values of unity, appreciation, and togetherness that Ramadan represents.</p>
                <p>Harlem Group continues to value these moments that bring its teams closer, reinforcing a strong sense of community across all its locations.</p>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer>
        <div class="container">
          <div class="ft-grid">
            <div>
              <img src="/static/logo-white.png" alt="Harlem Group" class="ft-logo" />
              <div class="ft-slogan">Quality You Deserve!</div>
              <p class="ft-about">
                Harlem Group — a beacon of excellence since 1995. Operating across Automotive, Real Estate, and Management Consultation across Iraq, Jordan, UAE, and USA.
              </p>
              <div class="ft-socials">
                <a href="#" class="ft-soc" aria-label="LinkedIn">in</a>
                <a href="#" class="ft-soc" aria-label="Instagram">◈</a>
                <a href="#" class="ft-soc" aria-label="Facebook">f</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Divisions</div>
              <div class="ft-links">
                <a href="/#auto-services">Automotive Division</a>
                <a href="/#realestate">Real Estate</a>
                <a href="/#consulting">Management Consultation</a>
                <a href="/news">News &amp; Stories</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Company</div>
              <div class="ft-links">
                <a href="/#founder">About Harlem Group</a>
                <a href="/purpose">Vision &amp; Mission</a>
                <a href="/highlights">Achievements</a>
                <a href="/#brands">Our Partners</a>
                <a href="/locations">Locations</a>
                <a href="/news">News &amp; Stories</a>
                <a href="/#contact">Contact</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Contact</div>
              <div class="ft-contact-row">
                <div>
                  <div class="ft-contact-lbl">Email</div>
                  <div class="ft-contact-val">info@harlem.group</div>
                </div>
                <div>
                  <div class="ft-contact-lbl">Operations</div>
                  <div class="ft-contact-val">Iraq · Jordan · UAE · USA</div>
                </div>
              </div>
            </div>
          </div>
          <div class="ft-bottom">
            <span>© 2025 Harlem Group. All rights reserved.</span>
            <div style="display:flex;gap:28px">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: `
/* ── NEWS PAGE PHOTO SLIDERS ── */
(function(){
  var sliders = document.querySelectorAll('.np-photo-slider');
  sliders.forEach(function(slider, si){
    var track = slider.querySelector('.np-photo-track');
    var dots  = slider.querySelectorAll('.np-dot');
    var ctr   = slider.querySelector('.np-counter');
    var total = track ? track.querySelectorAll('.np-photo-slide').length : 0;
    var cur   = 0;
    if(!track || total === 0) return;
    function go(n){
      cur = ((n % total) + total) % total;
      track.style.transform = 'translateX(-' + (cur * 100) + '%)';
      dots.forEach(function(d,i){ d.classList.toggle('active', i===cur); });
      if(ctr) ctr.textContent = (cur+1) + ' / ' + total;
    }
    slider.querySelector('.np-prev').onclick = function(){ go(cur-1); };
    slider.querySelector('.np-next').onclick = function(){ go(cur+1); };
    dots.forEach(function(d,i){ d.onclick = function(){ go(i); }; });
    setInterval(function(){ go(cur+1); }, 4000 + si*700);
    slider._go = go; slider._cur = function(){ return cur; };
  });
  window.npNav = function(si,dir){ var s=sliders[si]; if(s&&s._go) s._go(s._cur()+dir); };
  window.npGo  = function(si,n){  var s=sliders[si]; if(s&&s._go) s._go(n); };
})();
/* scroll-reveal */
(function(){
  var els=document.querySelectorAll('.r');
  if(!els.length) return;
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('v'); io.unobserve(e.target); } });
  },{threshold:.1,rootMargin:'0px 0px -48px 0px'});
  els.forEach(function(el){ io.observe(el); });
})();
      `}} />
    </>
  )
})

/* ══════════════════════════════════════════════════════════
   CAREERS PAGE
══════════════════════════════════════════════════════════ */
app.get('/careers', (c) => {
  return c.render(
    <>
      {/* ══════════ NAVBAR ══════════ */}
      <nav id="nav" class="scrolled nav-dark">
        <a href="/" class="nav-logo">
          <img src="/static/logo-white.png" alt="Harlem Group" id="navLogo" />
        </a>
        <div class="nav-links">
          <div class="nav-item">
            <a href="/#founder" class="nav-a">About</a>
            <span class="nav-drop-arrow">▾</span>
            <div class="nav-dropdown">
              <a href="/purpose"    class="nav-drop-link">Our Purpose</a>
              <a href="/highlights" class="nav-drop-link">Highlights</a>
              <a href="/#divisions"  class="nav-drop-link">Divisions</a>
            </div>
          </div>
          <a href="/#brands"       class="nav-a">Partners</a>
          <a href="/locations"    class="nav-a">Locations</a>
          <a href="/news"         class="nav-a">News</a>
          <a href="/careers"       class="nav-a active">Careers</a>
        </div>
        <div class="nav-right">
          <a href="/#contact" class="nav-cta">Get in Touch</a>
          <button class="hamburger" id="fsBtn" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ══════════ CAREERS HERO ══════════ */}
      <section class="car-hero">
        <div class="car-hero-bg" aria-hidden="true"></div>
        <div class="car-hero-grid" aria-hidden="true"></div>
        <div class="container car-hero-inner">
          <div class="tag on-dark r">Join Our Team</div>
          <h1 class="car-hero-h1 r d1">Build Your Career<br/><em>With Harlem Group</em></h1>
          <p class="car-hero-sub r d2">
            Join a team of professionals shaping industries across Iraq, Jordan, UAE and USA.
            We invest in people who are driven, curious, and committed to excellence.
          </p>
          <div class="car-hero-btns r d3">
            <a href="#openings" class="hero-btn">
              <span>View Open Positions</span>
              <span class="hero-btn-arr">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ WHY HARLEM ══════════ */}
      <section class="car-why">
        <div class="container">
          <div class="tag r" style="justify-content:center">Why Harlem Group</div>
          <h2 class="h2 r d1" style="text-align:center">Where Talent <em>Thrives</em></h2>
          <div class="car-why-grid">
            {[
              { icon:'◈', title:'Global Exposure', body:'Work across four countries — Iraq, Jordan, UAE, and USA — gaining unmatched regional and international experience.' },
              { icon:'◇', title:'Growth & Learning', body:'Structured career paths, mentorship programmes, and continuous learning opportunities at every level.' },
              { icon:'◉', title:'Diverse Divisions', body:'From automotive showrooms to real estate ventures and management consulting — find your fit across multiple industries.' },
              { icon:'◈', title:'Inclusive Culture', body:'A workplace that celebrates diversity, local heritage, and the collective strength of our multicultural team.' },
              { icon:'◇', title:'Competitive Rewards', body:'Market-leading compensation, performance bonuses, and comprehensive benefits tailored to each region.' },
              { icon:'◉', title:'Impact & Purpose', body:'Be part of a group that has been transforming communities and economies for over 30 years.' },
            ].map((w, i) => (
              <div class={`car-why-card r d${i+1}`}>
                <div class="car-why-icon">{w.icon}</div>
                <h3 class="car-why-title">{w.title}</h3>
                <p class="car-why-body">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ OPEN POSITIONS ══════════ */}
      <section class="car-openings" id="openings">
        <div class="container">
          <div class="tag r" style="justify-content:center">Current Opportunities</div>
          <h2 class="h2 r d1" style="text-align:center">Open <em>Positions</em></h2>

          <div class="car-jobs-grid">

            {[
              { title:'Receptionist', loc:'Erbil, Iraq', type:'Full-time', dept:'Soueast Erbil', brand:'Soueast' },
              { title:'Receptionist', loc:'Baghdad, Iraq', type:'Full-time', dept:'Jetour Baghdad', brand:'Jetour' },
              { title:'HR Business Partner Specialist (HRBP)', loc:'Baghdad, Iraq', type:'Full-time', dept:'Human Resources', brand:'Corporate' },
            ].map((j, i) => (
              <div class={`car-job-card r d${i+1}`}>
                <div class="car-job-left">
                  <div class="car-job-dept">{j.dept}</div>
                  <h3 class="car-job-title">{j.title}</h3>
                  <div class="car-job-meta">
                    <span class="car-job-loc">📍 {j.loc}</span>
                    <span class="car-job-type">{j.type}</span>
                  </div>
                </div>
                <a href="#apply" class="car-job-apply">Apply →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ APPLY BANNER ══════════ */}
      <section class="car-apply" id="apply">
        <div class="container">
          <div class="car-apply-inner r">
            <div class="car-apply-left">
              <div class="tag on-dark">Don't See Your Role?</div>
              <h2 class="car-apply-h2">Send Us Your <em>CV Anyway</em></h2>
              <p class="car-apply-body">
                We're always looking for exceptional talent. Send us your CV and a brief note about the role you're interested in — we'll be in touch when the right opportunity arises.
              </p>
            </div>
            <div class="car-apply-form">
              <div class="car-form-row">
                <input type="text"  class="car-input" placeholder="Full Name" />
                <input type="email" class="car-input" placeholder="Email Address" />
              </div>
              <div class="car-form-row">
                <select class="car-input car-select">
                  <option value="">Position of Interest</option>
                  <option>Receptionist — Soueast Erbil</option>
                  <option>Receptionist — Jetour Baghdad</option>
                  <option>HR Business Partner Specialist (HRBP) — Baghdad</option>
                  <option>Other</option>
                </select>
                <select class="car-input car-select">
                  <option value="">Country</option>
                  <option>Iraq</option>
                  <option>UAE</option>
                  <option>USA</option>
                  <option>Jordan</option>
                </select>
              </div>
              <textarea class="car-input car-textarea" placeholder="Brief introduction &amp; motivation (optional)"></textarea>
              <div class="car-upload-wrap">
                <label class="car-upload-label" for="cvUpload">
                  <span class="car-upload-icon">↑</span>
                  <span class="car-upload-text">Upload CV / Resume</span>
                  <span class="car-upload-hint">PDF, DOC or DOCX — max 5 MB</span>
                </label>
                <input type="file" id="cvUpload" class="car-upload-input" accept=".pdf,.doc,.docx" onchange="carFileChange(this)" />
                <div class="car-upload-name" id="carFileName">No file chosen</div>
              </div>
              <button class="car-submit">Submit Application</button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer>
        <div class="container">
          <div class="ft-grid">
            <div>
              <img src="/static/logo-white.png" alt="Harlem Group" class="ft-logo" />
              <div class="ft-slogan">Quality You Deserve!</div>
              <p class="ft-about">
                Harlem Group — a beacon of excellence since 1995. Operating across Automotive, Real Estate, and Management Consultation across Iraq, Jordan, UAE, and USA.
              </p>
              <div class="ft-socials">
                <a href="#" class="ft-soc" aria-label="LinkedIn">in</a>
                <a href="#" class="ft-soc" aria-label="Instagram">◈</a>
                <a href="#" class="ft-soc" aria-label="Facebook">f</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Divisions</div>
              <div class="ft-links">
                <a href="/#auto-services">Automotive Division</a>
                <a href="/#realestate">Real Estate</a>
                <a href="/#consulting">Management Consultation</a>
                <a href="/news">News &amp; Stories</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Company</div>
              <div class="ft-links">
                <a href="/#founder">About Harlem Group</a>
                <a href="/purpose">Vision &amp; Mission</a>
                <a href="/highlights">Achievements</a>
                <a href="/#brands">Our Partners</a>
                <a href="/locations">Locations</a>
                <a href="/news">News &amp; Stories</a>
                <a href="/#contact">Contact</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Contact</div>
              <div class="ft-contact-row">
                <div>
                  <div class="ft-contact-lbl">Email</div>
                  <div class="ft-contact-val">info@harlem.group</div>
                </div>
                <div>
                  <div class="ft-contact-lbl">Operations</div>
                  <div class="ft-contact-val">Iraq · Jordan · UAE · USA</div>
                </div>
              </div>
            </div>
          </div>
          <div class="ft-bottom">
            <span>© 2025 Harlem Group. All rights reserved.</span>
            <div style="display:flex;gap:28px">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: `
        /* CV upload filename display */
        window.carFileChange = function(input){
          var label = document.getElementById('carFileName');
          if(!label) return;
          if(input.files && input.files[0]){
            label.textContent = input.files[0].name;
            label.style.color = 'var(--gold)';
          } else {
            label.textContent = 'No file chosen';
          }
        };
        /* scroll-reveal */
        (function(){
          var els = document.querySelectorAll('.r');
          if(!els.length) return;
          var io = new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){ e.target.classList.add('v'); io.unobserve(e.target); }
            });
          },{threshold:.1,rootMargin:'0px 0px -48px 0px'});
          els.forEach(function(el){ io.observe(el); });
        })();
      `}} />
    </>
  )
})


app.get('/locations', (c) => {
  return c.render(
    <>
      {/* ══════════ NAVBAR ══════════ */}
      <nav id="nav" class="scrolled nav-dark">
        <a href="/" class="nav-logo">
          <img src="/static/logo-white.png" alt="Harlem Group" id="navLogo" />
        </a>
        <div class="nav-links">
          <div class="nav-item">
            <a href="/#founder" class="nav-a">About</a>
            <span class="nav-drop-arrow">▾</span>
            <div class="nav-dropdown">
              <a href="/purpose"    class="nav-drop-link">Our Purpose</a>
              <a href="/highlights" class="nav-drop-link">Highlights</a>
              <a href="/#divisions" class="nav-drop-link">Divisions</a>
            </div>
          </div>
          <a href="/#brands"    class="nav-a">Partners</a>
          <a href="/locations"  class="nav-a active">Locations</a>
          <a href="/news"       class="nav-a">News</a>
          <a href="/careers"    class="nav-a">Careers</a>
        </div>
        <div class="nav-right">
          <a href="/#contact" class="nav-cta">Get in Touch</a>
          <button class="hamburger" id="fsBtn" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ══════════ FULLSCREEN MENU ══════════ */}
      <div id="fs-menu">
        <button class="fs-close" id="fsClose"><span class="fs-close-x">×</span>Close</button>
        <div class="fs-body">
          <nav class="fs-nav">
            <a href="/#founder"   class="fs-link" data-text="About">About</a>
            <div class="fs-sub-group">
              <a href="/purpose"    class="fs-sub-link">Our Purpose</a>
              <a href="/highlights" class="fs-sub-link">Highlights</a>
              <a href="/#divisions" class="fs-sub-link">Divisions</a>
            </div>
            <a href="/#brands"    class="fs-link" data-text="Partners">Partners</a>
            <a href="/locations"  class="fs-link" data-text="Locations">Locations</a>
            <a href="/news"       class="fs-link" data-text="News">News</a>
            <a href="/careers"    class="fs-link" data-text="Careers">Careers</a>
            <a href="/#contact"   class="fs-link" data-text="Contact">Contact</a>
          </nav>
          <div class="fs-sidebar">
            <div class="fs-sidebar-lbl">Get In Touch</div>
            <div class="fs-sidebar-contact">
              <strong>Email</strong><br/>info@harlem.group<br/><br/>
              <strong>Headquarters</strong><br/>Erbil, Iraq
            </div>
          </div>
        </div>
        <div class="fs-footer">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">© 2025 Harlem Group</a>
        </div>
      </div>

      {/* ══════════ HERO ══════════ */}
      <section class="loc-hero">
        <div class="loc-hero-bg"></div>
        <div class="loc-hero-imgs">
          <div class="loc-hero-img" style="background-image:url('/static/iraq-hero.jpg')"></div>
          <div class="loc-hero-img loc-hero-img--2" style="background-image:url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80')"></div>
          <div class="loc-hero-img loc-hero-img--3" style="background-image:url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1400&q=80')"></div>
          <div class="loc-hero-img loc-hero-img--4" style="background-image:url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1400&q=80')"></div>
        </div>
        <div class="loc-hero-overlay"></div>
        <div class="loc-hero-grid"></div>
        <div class="container loc-hero-inner">
          <div class="loc-hero-tag r">Global Presence</div>
          <h1 class="loc-hero-h1 r d1">Our <em>Locations</em></h1>
          <p class="loc-hero-sub r d2">Four countries. Forty-five facilities. One uncompromising standard of excellence — spanning Iraq, Jordan, UAE, and USA since 1995.</p>
          <div class="loc-hero-countries r d3">
            <a href="#loc-iraq"   class="loc-hero-ctry"><img src="/static/flags/iraq.png"   alt="Iraq"/>   Iraq</a>
            <a href="#loc-jordan" class="loc-hero-ctry"><img src="/static/flags/jordan.png" alt="Jordan"/> Jordan</a>
            <a href="#loc-uae"    class="loc-hero-ctry"><img src="/static/flags/uae.png"    alt="UAE"/>    UAE</a>
            <a href="#loc-usa"    class="loc-hero-ctry"><img src="/static/flags/usa.png"    alt="USA"/>    USA</a>
          </div>
        </div>
        <div class="loc-hero-scroll">
          <span>Scroll</span>
          <div class="loc-hero-scroll-line"></div>
        </div>
      </section>

      {/* ══════════ STATS STRIP ══════════ */}
      <div class="loc-stats">
        <div class="container loc-stats-inner">
          <div class="loc-stat r"><span class="loc-stat-n">4</span><span class="loc-stat-l">Countries</span></div>
          <div class="loc-stat-div"></div>
          <div class="loc-stat r d1"><span class="loc-stat-n">45+</span><span class="loc-stat-l">Facilities</span></div>
          <div class="loc-stat-div"></div>
          <div class="loc-stat r d2"><span class="loc-stat-n">12</span><span class="loc-stat-l">Brands</span></div>
          <div class="loc-stat-div"></div>
          <div class="loc-stat r d3"><span class="loc-stat-n">30+</span><span class="loc-stat-l">Years</span></div>
        </div>
      </div>

      {/* ══════════ FILTER BAR ══════════ */}
      <div class="loc-filters" id="loc-filters">
        <div class="container loc-filters-inner">
          <button class="loc-flt active" onclick="locFilter('all',this)">All Countries</button>
          <button class="loc-flt" onclick="locFilter('iraq',this)">
            <img src="/static/flags/iraq.png" class="loc-flt-flag" alt=""/>Iraq
          </button>
          <button class="loc-flt" onclick="locFilter('jordan',this)">
            <img src="/static/flags/jordan.png" class="loc-flt-flag" alt=""/>Jordan
          </button>
          <button class="loc-flt" onclick="locFilter('uae',this)">
            <img src="/static/flags/uae.png" class="loc-flt-flag" alt=""/>UAE
          </button>
          <button class="loc-flt" onclick="locFilter('usa',this)">
            <img src="/static/flags/usa.png" class="loc-flt-flag" alt=""/>USA
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          IRAQ
      ══════════════════════════════════════════ */}
      <section class="loc-country" data-country="iraq" id="loc-iraq">
        <div class="loc-country-banner loc-country-banner--video">
          <iframe
            class="loc-country-banner-video"
            src="https://www.youtube.com/embed/Vh2gadJW51U?autoplay=1&mute=1&loop=1&playlist=Vh2gadJW51U&controls=0&showinfo=0&rel=0&modestbranding=1"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
          <div class="loc-country-banner-shade"></div>
          <div class="container loc-country-banner-inner">
            <div class="loc-country-tag">01 / 04</div>
            <div class="loc-country-banner-row">
              <img src="/static/flags/iraq.png" class="loc-country-flag" alt="Iraq"/>
              <h2 class="loc-country-title">Iraq</h2>
            </div>
            <p class="loc-country-desc">Harlem Group's founding market — home to its largest automotive network, exclusive brand agencies, multi-brand showrooms, and Iraq's only luxury upholstery factory.</p>
            <div class="loc-country-pills">
              <span class="loc-pill">Commercial Agencies</span>
              <span class="loc-pill">Multi-brand Showrooms</span>
              <span class="loc-pill">Leather &amp; Upholstery</span>
            </div>
          </div>
        </div>

        {/* ── IRAQ: Commercial Agencies ── */}
        <div class="container">
          <div class="loc-cat-row r">
            <span class="loc-cat-icon">◈</span>
            <span class="loc-cat-name">Commercial Agencies</span>
            <span class="loc-cat-count">5 brands</span>
          </div>

          <div class="loc-location-grid">

            {/* Jeep · Dodge · Chrysler · Ram — merged card */}
            <div class="lloc-card r">
              <div class="lloc-slider">
                <div class="lloc-slides">
                  <div class="lloc-slide" style="background-image:url('/static/locations/iraq-fca/0yEpykaC.png')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/iraq-fca/CfrCjCKE.png')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/iraq-fca/Tg3M7Sve.png')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/iraq-fca/D1X1epnY.png')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/iraq-fca/ygmzs7P2.png')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/iraq-fca/6YXB1fY7.png')"></div>
                </div>
                <div class="lloc-photo-shade"></div>
                <div class="lloc-country-chip"><img src="/static/flags/iraq.png" alt=""/>Iraq</div>
                <button class="lloc-arrow lloc-arrow--prev" aria-label="Previous photo">&#8249;</button>
                <button class="lloc-arrow lloc-arrow--next" aria-label="Next photo">&#8250;</button>
                <div class="lloc-dots"></div>
              </div>
              <div class="lloc-body">
                <div class="lloc-type">Commercial Agencies · Exclusive Distributor</div>
                <h3 class="lloc-name">Jeep · Dodge · Chrysler · Ram — Iraq</h3>
                <div class="lloc-cities">
                  <span class="lloc-city-dot"></span>
                  Erbil · Baghdad · Kirkuk
                </div>
                <p class="lloc-desc">Exclusive distributor of four iconic American brands across Iraq. <strong>Jeep</strong> holds the highest Grand Cherokee market share globally for 6 consecutive years. <strong>Ram</strong> ranks #1 globally in RAM 1500 sales. <strong>Dodge</strong> leads the E-Sedan market. <strong>Chrysler 300C</strong> dominates the executive luxury segment.</p>
              </div>
            </div>

            {/* Jetour Iraq */}
            <div class="lloc-card lloc-card--featured r d2">
              <div class="lloc-slider">
                <div class="lloc-slides">
                  <div class="lloc-slide" style="background-image:url('/static/locations/jetour-iraq/PWVHefuR.png')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/jetour-iraq/RWRRP63N.png')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/jetour-iraq/wEygs5qg.jpg')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/jetour-iraq/uZALHQbq.jpg')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/jetour-iraq/wsfr1vnr.jpg')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/jetour-iraq/Q56pCdQM.jpg')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/jetour-iraq/ZOiAA6mN.png')"></div>
                </div>
                <div class="lloc-photo-shade"></div>
                <div class="lloc-country-chip"><img src="/static/flags/iraq.png" alt=""/>Iraq</div>
                <div class="lloc-featured-ribbon">Top Performer</div>
                <button class="lloc-arrow lloc-arrow--prev" aria-label="Previous photo">&#8249;</button>
                <button class="lloc-arrow lloc-arrow--next" aria-label="Next photo">&#8250;</button>
                <div class="lloc-dots"></div>
              </div>
              <div class="lloc-body">
                <div class="lloc-type">Commercial Agency · Exclusive Distributor</div>
                <h3 class="lloc-name">Jetour Iraq</h3>
                <div class="lloc-cities">
                  <span class="lloc-city-dot"></span>
                  Erbil · Baghdad · Kirkuk · Najaf · Sulaymaniyah · Duhok
                </div>
                <p class="lloc-desc"><strong>#1 Chinese brand across every segment in Iraq.</strong> Home to the largest Jetour showroom &amp; service center in the entire Middle East — located in Erbil, with a nationwide footprint across 6 cities.</p>
              </div>
            </div>

            {/* Soueast Iraq */}
            <div class="lloc-card r d1">
              <div class="lloc-slider">
                <div class="lloc-slides">
                  <div class="lloc-slide" style="background-image:url('/static/locations/soueast-iraq/soueast-iraq-1.jpg')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/soueast-iraq/soueast-iraq-2.jpg')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/soueast-iraq/soueast-iraq-3.jpg')"></div>
                </div>
                <div class="lloc-photo-shade"></div>
                <div class="lloc-country-chip"><img src="/static/flags/iraq.png" alt=""/>Iraq</div>
                <button class="lloc-arrow lloc-arrow--prev" aria-label="Previous photo">&#8249;</button>
                <button class="lloc-arrow lloc-arrow--next" aria-label="Next photo">&#8250;</button>
                <div class="lloc-dots"></div>
              </div>
              <div class="lloc-body">
                <div class="lloc-type">Commercial Agency · Exclusive Distributor</div>
                <h3 class="lloc-name">Soueast Iraq</h3>
                <div class="lloc-cities">
                  <span class="lloc-city-dot"></span>
                  Erbil · Baghdad · Kirkuk
                </div>
                <p class="lloc-desc">Exclusive Soueast distributor in Iraq. Recipient of the prestigious <strong>SOUEAST Star 2025 Award</strong> — recognizing outstanding sales performance and brand representation across the region.</p>
              </div>
            </div>

            {/* Mopar Iraq */}
            <div class="lloc-card r d1">
              <div class="lloc-slider">
                <div class="lloc-slides">
                  <div class="lloc-slide" style="background-image:url('/static/locations/iraq-mopar/VZ17axNs.png')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/iraq-mopar/BJhYBJZB.png')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/iraq-mopar/eiPoKZED.png')"></div>
                </div>
                <div class="lloc-photo-shade"></div>
                <div class="lloc-country-chip"><img src="/static/flags/iraq.png" alt=""/>Iraq</div>
                <button class="lloc-arrow lloc-arrow--prev" aria-label="Previous photo">&#8249;</button>
                <button class="lloc-arrow lloc-arrow--next" aria-label="Next photo">&#8250;</button>
                <div class="lloc-dots"></div>
              </div>
              <div class="lloc-body">
                <div class="lloc-type">Commercial Agency · Official Distributor</div>
                <h3 class="lloc-name">Mopar Iraq</h3>
                <div class="lloc-cities">
                  <span class="lloc-city-dot"></span>
                  Erbil · Baghdad · Kirkuk
                </div>
                <p class="lloc-desc">Official Mopar <strong>parts &amp; accessories distributor</strong> in Iraq. Ensuring authentic OEM-quality parts are available to all FCA vehicle owners across the country.</p>
              </div>
            </div>

          </div>{/* /loc-location-grid — commercial agencies */}

          {/* ── IRAQ: Multi-brand Showrooms ── */}
          <div class="loc-cat-row r">
            <span class="loc-cat-icon">◈</span>
            <span class="loc-cat-name">Multi-brand Showrooms</span>
          </div>
          <div class="loc-location-grid">
            <div class="lloc-card r">
              <div class="lloc-slider">
                <div class="lloc-slides">
                  <div class="lloc-slide" style="background-image:url('/static/locations/iraq-showrooms/7CY0U92U.png')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/iraq-showrooms/GZrbmbVR.png')"></div>
                </div>
                <div class="lloc-photo-shade"></div>
                <div class="lloc-country-chip"><img src="/static/flags/iraq.png" alt=""/>Iraq</div>
                <button class="lloc-arrow lloc-arrow--prev" aria-label="Previous photo">&#8249;</button>
                <button class="lloc-arrow lloc-arrow--next" aria-label="Next photo">&#8250;</button>
                <div class="lloc-dots"></div>
              </div>
              <div class="lloc-body">
                <div class="lloc-type">Multi-brand Showroom Network</div>
                <h3 class="lloc-name">Harlem Group Multi-brand Showrooms</h3>
                <div class="lloc-cities">
                  <span class="lloc-city-dot"></span>
                  Erbil · Baghdad · Kirkuk · Sulaymaniyah
                </div>
                <p class="lloc-desc">A network of <strong>multi-brand automotive showrooms</strong> across Iraq's major cities, offering customers access to Harlem Group's complete brand portfolio under one roof — retail sales and export operations.</p>
              </div>
            </div>
          </div>

          {/* ── IRAQ: Leather & Upholstery ── */}
          <div class="loc-cat-row r">
            <span class="loc-cat-icon">◈</span>
            <span class="loc-cat-name">Leather &amp; Upholstery Factory</span>
            <span class="loc-cat-count">Iraq's Only</span>
          </div>
          <div class="loc-location-grid">
            <div class="lloc-card lloc-card--featured r">
              <div class="lloc-slider">
                <div class="lloc-slides">
                  <div class="lloc-slide" style="background-image:url('/static/locations/iraq-leather/2J7Fg0CA.png')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/iraq-leather/dgyB6Zsl.png')"></div>
                </div>
                <div class="lloc-photo-shade"></div>
                <div class="lloc-country-chip"><img src="/static/flags/iraq.png" alt=""/>Iraq</div>
                <div class="lloc-featured-ribbon">Iraq Exclusive</div>
                <button class="lloc-arrow lloc-arrow--prev" aria-label="Previous photo">&#8249;</button>
                <button class="lloc-arrow lloc-arrow--next" aria-label="Next photo">&#8250;</button>
                <div class="lloc-dots"></div>
              </div>
              <div class="lloc-body">
                <div class="lloc-type">Premium Automotive Interior · Specialty Manufacturing</div>
                <h3 class="lloc-name">Harlem Leather &amp; Upholstery Factory</h3>
                <div class="lloc-cities">
                  <span class="lloc-city-dot"></span>
                  Erbil, Iraq
                </div>
                <p class="lloc-desc"><strong>Iraq's only provider of high-quality leather interior upholstery.</strong> State-of-the-art CNC-equipped factory in Erbil producing OEM-level quality finishes — lab-tested materials sourced from world-leading tanneries, with precision pattern stitching.</p>
              </div>
            </div>
          </div>

        </div>{/* /container Iraq */}
      </section>

      {/* ══════════════════════════════════════════
          JORDAN
      ══════════════════════════════════════════ */}
      <section class="loc-country loc-country--alt" data-country="jordan" id="loc-jordan">
        <div class="loc-country-banner" style="background-image:url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1600&q=80')">
          <div class="loc-country-banner-shade"></div>
          <div class="container loc-country-banner-inner">
            <div class="loc-country-tag">02 / 04</div>
            <div class="loc-country-banner-row">
              <img src="/static/flags/jordan.png" class="loc-country-flag" alt="Jordan"/>
              <h2 class="loc-country-title">Jordan</h2>
            </div>
            <p class="loc-country-desc">Harlem Group's MENA expansion hub — exclusive Chinese brand agencies and strategic management consultation operations, anchored in Amman.</p>
            <div class="loc-country-pills">
              <span class="loc-pill">Commercial Agencies</span>
            </div>
          </div>
        </div>

        <div class="container">
          {/* ── Jordan: Commercial Agencies ── */}
          <div class="loc-cat-row r">
            <span class="loc-cat-icon">◈</span>
            <span class="loc-cat-name">Commercial Agencies</span>
            <span class="loc-cat-count">1 brand</span>
          </div>
          <div class="loc-location-grid">

            <div class="lloc-card lloc-card--featured r">
              <div class="lloc-slider">
                <div class="lloc-slides">
                  <div class="lloc-slide" style="background-image:url('/static/locations/jetour-jordan/vmdhRVPK.png')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/jetour-jordan/ZHttYQtW.png')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/jetour-jordan/wfoeiN9Z.png')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/locations/jetour-jordan/wn0wH8yH.png')"></div>
                </div>
                <div class="lloc-photo-shade"></div>
                <div class="lloc-country-chip"><img src="/static/flags/jordan.png" alt=""/>Jordan</div>
                <div class="lloc-featured-ribbon">Top Performer</div>
                <button class="lloc-arrow lloc-arrow--prev" aria-label="Previous photo">&#8249;</button>
                <button class="lloc-arrow lloc-arrow--next" aria-label="Next photo">&#8250;</button>
                <div class="lloc-dots"></div>
              </div>
              <div class="lloc-body">
                <div class="lloc-type">Commercial Agency · Exclusive Distributor</div>
                <h3 class="lloc-name">Jetour Jordan</h3>
                <div class="lloc-cities">
                  <span class="lloc-city-dot"></span>
                  Amman, Jordan
                </div>
                <p class="lloc-desc"><strong>#1 SUV brand and highest ICE brand in Jordan</strong> — with a staggering <strong>725% growth in 2025</strong>. Exclusive Jetour distributor for Jordan, capturing the market with premium Chinese SUV design and technology.</p>
              </div>
            </div>



          </div>

        </div>{/* /container Jordan */}
      </section>


      {/* ══════════════════════════════════════════
          UAE
      ══════════════════════════════════════════ */}
      <section class="loc-country" data-country="uae" id="loc-uae">
        <div class="loc-country-banner" style="background-image:url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80')">
          <div class="loc-country-banner-shade"></div>
          <div class="container loc-country-banner-inner">
            <div class="loc-country-tag">03 / 04</div>
            <div class="loc-country-banner-row">
              <img src="/static/flags/uae.png" class="loc-country-flag" alt="UAE"/>
              <h2 class="loc-country-title">United Arab Emirates</h2>
            </div>
            <p class="loc-country-desc">Harlem Group's regional hub — featuring multi-brand showrooms in DUCAMZ and a 6-storey central stockyard in Jebel Ali Free Zone.</p>
            <div class="loc-country-pills">
              <span class="loc-pill">Multi-brand Showrooms</span>
              <span class="loc-pill">Regional Stockyard</span>
            </div>
          </div>
        </div>

        <div class="container">
          {/* ── UAE: Multi-brand Showrooms ── */}
          <div class="loc-cat-row r">
            <span class="loc-cat-icon">◈</span>
            <span class="loc-cat-name">Multi-brand Showrooms</span>
            <span class="loc-cat-count">Dubai — DUCAMZ</span>
          </div>
          <div class="loc-location-grid">

            <div class="lloc-card r">
              <div class="lloc-slider">
                <div class="lloc-slides">
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80')"></div>
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80')"></div>
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80')"></div>
                </div>
                <div class="lloc-photo-shade"></div>
                <div class="lloc-country-chip"><img src="/static/flags/uae.png" alt=""/>UAE</div>
                <button class="lloc-arrow lloc-arrow--prev" aria-label="Previous photo">&#8249;</button>
                <button class="lloc-arrow lloc-arrow--next" aria-label="Next photo">&#8250;</button>
                <div class="lloc-dots"></div>
              </div>
              <div class="lloc-body">
                <div class="lloc-type">Multi-brand Showroom · Retail &amp; Export</div>
                <h3 class="lloc-name">Harlem Cars LLC</h3>
                <div class="lloc-cities">
                  <span class="lloc-city-dot"></span>
                  Dubai Cars &amp; Automotive Zone (DUCAMZ), Dubai
                </div>
                <p class="lloc-desc">Multi-brand automotive showroom in <strong>Dubai's premier automotive hub — DUCAMZ</strong>. Serving both local retail customers and international wholesale export clients across Harlem Group's full brand portfolio.</p>
              </div>
            </div>

            <div class="lloc-card r d1">
              <div class="lloc-slider">
                <div class="lloc-slides">
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80')"></div>
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80')"></div>
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=800&q=80')"></div>
                </div>
                <div class="lloc-photo-shade"></div>
                <div class="lloc-country-chip"><img src="/static/flags/uae.png" alt=""/>UAE</div>
                <button class="lloc-arrow lloc-arrow--prev" aria-label="Previous photo">&#8249;</button>
                <button class="lloc-arrow lloc-arrow--next" aria-label="Next photo">&#8250;</button>
                <div class="lloc-dots"></div>
              </div>
              <div class="lloc-body">
                <div class="lloc-type">Multi-brand Showroom · Retail &amp; Export</div>
                <h3 class="lloc-name">Atlantic Motors LLC</h3>
                <div class="lloc-cities">
                  <span class="lloc-city-dot"></span>
                  Dubai Cars &amp; Automotive Zone (DUCAMZ), Dubai
                </div>
                <p class="lloc-desc">A premier multi-brand showroom operating in <strong>DUCAMZ, Dubai</strong>. Atlantic Motors LLC delivers a curated automotive retail experience alongside active export and wholesale operations to regional markets.</p>
              </div>
            </div>

          </div>

          {/* ── UAE: Central Regional Stockyard ── */}
          <div class="loc-cat-row r">
            <span class="loc-cat-icon">◈</span>
            <span class="loc-cat-name">Central Regional Stockyard</span>
            <span class="loc-cat-count">Jebel Ali Free Zone</span>
          </div>
          <div class="loc-location-grid">
            <div class="lloc-card lloc-card--dark r">
              <div class="lloc-slider">
                <div class="lloc-slides">
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80')"></div>
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80')"></div>
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80')"></div>
                </div>
                <div class="lloc-photo-shade"></div>
                <div class="lloc-country-chip"><img src="/static/flags/uae.png" alt=""/>UAE</div>
                <div class="lloc-featured-ribbon">Regional Hub</div>
                <button class="lloc-arrow lloc-arrow--prev" aria-label="Previous photo">&#8249;</button>
                <button class="lloc-arrow lloc-arrow--next" aria-label="Next photo">&#8250;</button>
                <div class="lloc-dots"></div>
              </div>
              <div class="lloc-body">
                <div class="lloc-type">Logistics &amp; Distribution · Jebel Ali Free Zone</div>
                <h3 class="lloc-name">6-Storey Central Regional Stockyard</h3>
                <div class="lloc-cities">
                  <span class="lloc-city-dot"></span>
                  Jebel Ali Free Zone (JAFZA), Dubai
                </div>
                <p class="lloc-desc">Harlem Group's <strong>6-storey vehicle stockyard in Jebel Ali Free Zone</strong> — the central regional hub for vehicle storage, preparation, and distribution across the Middle East and beyond. A strategic logistics asset at the world's leading free zone.</p>
              </div>
            </div>
          </div>


        </div>{/* /container UAE */}
      </section>


      {/* ══════════════════════════════════════════
          USA
      ══════════════════════════════════════════ */}
      <section class="loc-country loc-country--alt" data-country="usa" id="loc-usa">
        <div class="loc-country-banner" style="background-image:url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1600&q=80')">
          <div class="loc-country-banner-shade"></div>
          <div class="container loc-country-banner-inner">
            <div class="loc-country-tag">04 / 04</div>
            <div class="loc-country-banner-row">
              <img src="/static/flags/usa.png" class="loc-country-flag" alt="USA"/>
              <h2 class="loc-country-title">United States</h2>
            </div>
            <p class="loc-country-desc">Harlem Group's North American division — operating luxury brand agencies, multi-brand showrooms, certified service centers, car rental, and real estate entities across Illinois.</p>
            <div class="loc-country-pills">
              <span class="loc-pill">Commercial Agencies</span>
              <span class="loc-pill">Service Centers</span>
              <span class="loc-pill">Car Rental</span>
              <span class="loc-pill">Real Estate</span>
            </div>
          </div>
        </div>

        <div class="container">
          {/* ── USA: Commercial Agencies ── */}
          <div class="loc-cat-row r">
            <span class="loc-cat-icon">◈</span>
            <span class="loc-cat-name">Commercial Agencies</span>
            <span class="loc-cat-count">Illinois</span>
          </div>
          <div class="loc-location-grid">

            <div class="lloc-card lloc-card--featured r" style="grid-column: span 2;">
              <div class="lloc-slider">
                <div class="lloc-slides">
                  <div class="lloc-slide" style="background-image:url('/static/alfaromeo-dealership.jpg')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/maserati-showroom.jpg')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/alfaromeo-showroom.jpg')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/fiat-showroom.jpg')"></div>
                </div>
                <div class="lloc-photo-shade"></div>
                <div class="lloc-country-chip"><img src="/static/flags/usa.png" alt=""/>USA</div>
                <div class="lloc-featured-ribbon">3 Italian Brands</div>
                <button class="lloc-arrow lloc-arrow--prev" aria-label="Previous photo">&#8249;</button>
                <button class="lloc-arrow lloc-arrow--next" aria-label="Next photo">&#8250;</button>
                <div class="lloc-dots"></div>
              </div>
              <div class="lloc-body">
                <div class="lloc-type">Commercial Agency · Volume Cars · Illinois, USA</div>
                <h3 class="lloc-name">Maserati · Alfa Romeo · Fiat</h3>
                <div class="lloc-cities">
                  <span class="lloc-city-dot"></span>
                  Illinois, USA
                </div>
                <p class="lloc-desc">
                  Harlem Group's flagship Italian automotive hub in Illinois, housing three world-class brands under one roof.<br/>
                  <strong>Maserati</strong> — Italian luxury and performance at its peak.&nbsp;
                  <strong>Alfa Romeo</strong> — bold design and legendary driving dynamics.&nbsp;
                  <strong>Fiat</strong> — iconic Italian compact ingenuity and style.
                </p>

              </div>
            </div>

            <div class="lloc-card r d1">
              <div class="lloc-slider">
                <div class="lloc-slides">
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80')"></div>
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80')"></div>
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80')"></div>
                </div>
                <div class="lloc-photo-shade"></div>
                <div class="lloc-country-chip"><img src="/static/flags/usa.png" alt=""/>USA</div>
                <button class="lloc-arrow lloc-arrow--prev" aria-label="Previous photo">&#8249;</button>
                <button class="lloc-arrow lloc-arrow--next" aria-label="Next photo">&#8250;</button>
                <div class="lloc-dots"></div>
              </div>
              <div class="lloc-body">
                <div class="lloc-type">Commercial Agency · Dual Dealerships</div>
                <h3 class="lloc-name">Mitsubishi — Jidd Motors &amp; Countryside</h3>
                <div class="lloc-cities">
                  <span class="lloc-city-dot"></span>
                  Naperville · Countryside, Illinois
                </div>
                <p class="lloc-desc">Dual Mitsubishi dealerships in Illinois — <strong>Jidd Motors Mitsubishi (Naperville)</strong> and <strong>Countryside Mitsubishi (Illinois)</strong> — offering the full Mitsubishi lineup with complete sales and aftersales services.</p>
              </div>
            </div>

          </div>

          {/* ── USA: Multi-brand Showroom ── */}
          <div class="loc-cat-row r">
            <span class="loc-cat-icon">◈</span>
            <span class="loc-cat-name">Multi-brand Showroom</span>
          </div>
          <div class="loc-location-grid">
            <div class="lloc-card r">
              <div class="lloc-slider">
                <div class="lloc-slides">
                  <div class="lloc-slide" style="background-image:url('/static/fiat-showroom.jpg')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/alfaromeo-showroom.jpg')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/maserati-showroom.jpg')"></div>
                  <div class="lloc-slide" style="background-image:url('/static/alfaromeo-dealership.jpg')"></div>
                </div>
                <div class="lloc-photo-shade"></div>
                <div class="lloc-country-chip"><img src="/static/flags/usa.png" alt=""/>USA</div>
                <button class="lloc-arrow lloc-arrow--prev" aria-label="Previous photo">&#8249;</button>
                <button class="lloc-arrow lloc-arrow--next" aria-label="Next photo">&#8250;</button>
                <div class="lloc-dots"></div>
              </div>
              <div class="lloc-body">
                <div class="lloc-type">Multi-brand Showroom</div>
                <h3 class="lloc-name">Volume Cars</h3>
                <div class="lloc-cities">
                  <span class="lloc-city-dot"></span>
                  Illinois, USA
                </div>
                <p class="lloc-desc"><strong>Harlem Group's flagship multi-brand showroom in the USA</strong> — housing Maserati, Alfa Romeo, and Fiat under one roof. Volume Cars is the premier destination for Italian luxury and performance in Illinois.</p>
              </div>
            </div>
          </div>

          {/* ── USA: Certified Service Center ── */}
          <div class="loc-cat-row r">
            <span class="loc-cat-icon">◈</span>
            <span class="loc-cat-name">Certified Multi-Brand Service Center</span>
          </div>
          <div class="loc-location-grid">
            <div class="lloc-card lloc-card--dark r">
              <div class="lloc-slider">
                <div class="lloc-slides">
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80')"></div>
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1619767886558-efdc259b6e09?w=800&q=80')"></div>
                  <div class="lloc-slide" style="background-image:url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80')"></div>
                </div>
                <div class="lloc-photo-shade"></div>
                <div class="lloc-country-chip"><img src="/static/flags/usa.png" alt=""/>USA</div>
                <div class="lloc-featured-ribbon">Certified</div>
                <button class="lloc-arrow lloc-arrow--prev" aria-label="Previous photo">&#8249;</button>
                <button class="lloc-arrow lloc-arrow--next" aria-label="Next photo">&#8250;</button>
                <div class="lloc-dots"></div>
              </div>
              <div class="lloc-body">
                <div class="lloc-type">Certified Independent Multi-Brand Service</div>
                <h3 class="lloc-name">Jidd Motors Service Center</h3>
                <div class="lloc-cities">
                  <span class="lloc-city-dot"></span>
                  Chicago, Illinois
                </div>
                <p class="lloc-desc"><strong>Certified independent multi-brand service center</strong> in Chicago — professional vehicle repair and maintenance to the highest quality standards. Expert technicians, state-of-the-art equipment, and a commitment to restoring every vehicle to its optimal condition.</p>
              </div>
            </div>
          </div>


        </div>{/* /container USA */}
      </section>


      {/* ══════════ CTA STRIP ══════════ */}
      <div class="loc-cta-strip">
        <div class="container loc-cta-inner">
          <div class="loc-cta-left r">
            <div class="loc-cta-label">Connect With Us</div>
            <h3 class="loc-cta-h3">Find a location near you</h3>
          </div>
          <a href="/#contact" class="loc-cta-btn r d2">Get in Touch <span>→</span></a>
        </div>
      </div>

      {/* ══════════ FOOTER ══════════ */}
      <footer>
        <div class="container">
          <div class="ft-grid">
            <div>
              <img src="/static/logo-white.png" alt="Harlem Group" class="ft-logo" />
              <div class="ft-slogan">Quality You Deserve!</div>
              <p class="ft-about">Harlem Group — a beacon of excellence since 1995. Operating across Automotive, Real Estate, and Management Consultation across Iraq, Jordan, UAE, and USA.</p>
              <div class="ft-socials">
                <a href="#" class="ft-soc" aria-label="LinkedIn">in</a>
                <a href="#" class="ft-soc" aria-label="Instagram">◈</a>
                <a href="#" class="ft-soc" aria-label="Facebook">f</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Divisions</div>
              <div class="ft-links">
                <a href="/#auto-services">Automotive Division</a>
                <a href="/#realestate">Real Estate</a>
                <a href="/#consulting">Management Consultation</a>
                <a href="/news">News &amp; Stories</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Company</div>
              <div class="ft-links">
                <a href="/#founder">About Harlem Group</a>
                <a href="/purpose">Vision &amp; Mission</a>
                <a href="/highlights">Achievements</a>
                <a href="/#brands">Our Partners</a>
                <a href="/locations">Locations</a>
                <a href="/news">News &amp; Stories</a>
                <a href="/#contact">Contact</a>
              </div>
            </div>
            <div>
              <div class="ft-col-h">Contact</div>
              <div class="ft-contact-row">
                <div><div class="ft-contact-lbl">Email</div><div class="ft-contact-val">info@harlem.group</div></div>
                <div><div class="ft-contact-lbl">Operations</div><div class="ft-contact-val">Iraq · Jordan · UAE · USA</div></div>
              </div>
            </div>
          </div>
          <div class="ft-bottom">
            <span>© 2025 Harlem Group. All rights reserved.</span>
            <div style="display:flex;gap:28px"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a></div>
          </div>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: `
        /* ── country filter ── */
        window.locFilter = function(country, btn){
          document.querySelectorAll('.loc-flt').forEach(function(b){ b.classList.remove('active'); });
          btn.classList.add('active');
          document.querySelectorAll('.loc-country').forEach(function(s){
            s.style.display = (country === 'all' || s.getAttribute('data-country') === country) ? '' : 'none';
          });
        };

        /* ── location card sliders ── */
        (function(){
          document.querySelectorAll('.lloc-slider').forEach(function(slider){
            var slides = slider.querySelectorAll('.lloc-slide');
            var dotsContainer = slider.querySelector('.lloc-dots');
            var prevBtn = slider.querySelector('.lloc-arrow--prev');
            var nextBtn = slider.querySelector('.lloc-arrow--next');
            var total = slides.length;
            var cur = 0;

            /* Build dots */
            for(var i = 0; i < total; i++){
              var dot = document.createElement('button');
              dot.className = 'lloc-dot' + (i === 0 ? ' active' : '');
              dot.setAttribute('aria-label', 'Photo ' + (i+1));
              dot.setAttribute('data-idx', i);
              dotsContainer.appendChild(dot);
            }
            var dots = dotsContainer.querySelectorAll('.lloc-dot');

            function goTo(n){
              slides[cur].classList.remove('active');
              dots[cur].classList.remove('active');
              cur = (n + total) % total;
              slides[cur].classList.add('active');
              dots[cur].classList.add('active');
            }

            /* activate first slide */
            slides[0].classList.add('active');

            prevBtn.addEventListener('click', function(e){
              e.stopPropagation();
              goTo(cur - 1);
            });
            nextBtn.addEventListener('click', function(e){
              e.stopPropagation();
              goTo(cur + 1);
            });
            dots.forEach(function(dot){
              dot.addEventListener('click', function(e){
                e.stopPropagation();
                goTo(parseInt(this.getAttribute('data-idx')));
              });
            });

            /* auto-advance every 4 s — only when no hover */
            var autoTimer;
            function startAuto(){ autoTimer = setInterval(function(){ goTo(cur+1); }, 4000); }
            function stopAuto(){ clearInterval(autoTimer); }
            startAuto();
            slider.addEventListener('mouseenter', stopAuto);
            slider.addEventListener('mouseleave', startAuto);
          });
        })();

        /* ── scroll reveal ── */
        (function(){
          var els = document.querySelectorAll('.r,.rr,.rl');
          if(!els.length) return;
          var io = new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){ e.target.classList.add('v'); io.unobserve(e.target); }
            });
          },{threshold:.08,rootMargin:'0px 0px -40px 0px'});
          els.forEach(function(el){ io.observe(el); });
        })();

        /* ── fullscreen menu ── */
        var fsBtn   = document.getElementById('fsBtn');
        var fsClose = document.getElementById('fsClose');
        var fsMenu  = document.getElementById('fs-menu');
        if(fsBtn && fsMenu){
          fsBtn.addEventListener('click', function(){ fsMenu.classList.add('open'); });
          fsClose.addEventListener('click', function(){ fsMenu.classList.remove('open'); });
        }

        /* ── sticky nav scroll ── */
        (function(){
          var nav = document.getElementById('nav');
          window.addEventListener('scroll', function(){
            nav.classList.toggle('scrolled', window.scrollY > 20);
          }, {passive:true});
        })();

        /* ── hero image fade-in ── */
        document.querySelectorAll('.loc-hero-img').forEach(function(el,i){
          setTimeout(function(){ el.style.opacity = '1'; }, 300 + i * 200);
        });
      `}} />
    </>
  )
})



export default app
