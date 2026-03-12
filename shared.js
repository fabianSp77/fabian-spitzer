/* ══════════════════════════════════
   Fabian Spitzer — Shared JS
   ══════════════════════════════════ */

/* ── i18n ── */
const T = {
  de: {
    /* Nav */
    nav_track:'Track Record', nav_approach:'Arbeitsweise', nav_why:'Warum jetzt', nav_contact:'Kontakt', nav_cta:'Gespräch',

    /* Hero */
    hero_eyebrow:'Fabian Spitzer — Operations + AI',
    hero_h1:'Zwischen AI-Strategie und operativer Realität liegt eine Lücke.<br><em>Ich schließe sie.</em>',
    hero_sub:'18 Jahre Operations auf €4B+ skaliert. Jetzt helfe ich Unternehmen, AI vom Strategiepapier in die operative Realität zu bringen — mit den Teams, die sie bereits haben.',
    m_volume:'Ops-Volumen skaliert', m_growth:'Umsatzwachstum (24Mo)', m_ebitda:'EBITDA-Turnaround (6Mo)', m_team:'Team aufgebaut & geführt',
    cta_talk:'Gespräch vereinbaren',

    /* Proof strip */
    strip_label:'Gebaut & skaliert bei',

    /* Core argument (homepage) */
    core_h2:'Euer Team hat AI-Ideen. Berater haben eine Roadmap geliefert.<br><em>Aber nichts davon ist in Produktion.</em>',
    core_stat_label:'Die Lücke zwischen AI-Fähigkeit und tatsächlichem Einsatz ist operativ — nicht technisch.',
    core_bridge:'Nicht als Berater. Als <em>Operator, der Teams, Prozesse und Technologie zusammenbringt.</em>',
    core_link_track:'Track Record ansehen →', core_link_approach:'Arbeitsweise →', core_link_why:'Warum jetzt →',

    /* Why Now */
    wn_label:'Warum jetzt',
    wn_cap:'Theoretische AI-Fähigkeit', wn_actual:'Tatsächlich in Unternehmen im Einsatz',
    wn_text:'Die meisten Unternehmen haben eine AI-Strategie. Wenige haben jemanden, der sie tatsächlich in die Operations verdrahtet — über Teams, Prozesse und bestehende Workflows hinweg. Die Lücke zwischen AI-Fähigkeit und tatsächlichem Deployment ist kein technisches Problem. Es ist ein operatives. Und sie wächst.',
    wn_kicker:'Die Unternehmen, die diese Lücke jetzt schließen, werden führen. Der Rest wird <em>2027 noch Pilotprojekte fahren.</em>',
    wn_leg_th:'AI-Fähigkeit', wn_leg_ob:'Tatsächlich deployed', wn_chart_label:'Die <em>Lücke</em> ist ein Operations-Problem — kein technisches.',
    wn_bar_ops:'Operations', wn_bar_fin:'Finanzen', wn_bar_mgmt:'Management', wn_bar_sales:'Vertrieb',

    /* Track Record */
    track_label:'Track Record',
    t1_c:'„Das operative Rückgrat für Deutschlands größten Kreditvergleich aufbauen."', t1_a:'Volle P&L-Verantwortung als Managing Director. Team auf 50+ aufgebaut, Enterprise-Partnerschaften strukturiert, operativen Kern über ein Jahrzehnt Wachstum skaliert.', t1_l:'Jahresvolumen',
    t2_c:'„€38M-Startup. Daraus eine Wachstumsmaschine machen."', t2_a:'Operations, Vertrieb und Partner-Ökosystem als COO neu aufgebaut. Finanzierungsvolumen auf €223M in 24 Monaten skaliert.', t2_l:'Volumen-Wachstum',
    t3_c:'„€27M-Unternehmen verbrennt Cash. Sechs Monate Zeit."', t3_a:'Operative Restrukturierung, Prozessautomatisierung, Team-Neuausrichtung. €1.3M EBITDA als Interim COO geliefert.', t3_l:'EBITDA in 6Mo',
    ai_h3:'Dann bin ich hands-on gegangen, um zu verstehen, was Operationalisierung wirklich braucht.', ai_p:'Nach Jahren operativer Führung habe ich eine Applied-AI-Firma von Grund auf aufgebaut — Voice-Agents, Workflow-Automatisierung, AI-natives CRM. Nicht um Entwickler zu werden, sondern um tief zu verstehen, was es braucht, AI vom Prototyp in die Produktion realer Organisationen zu bringen.',

    /* How I Work */
    how_label:'Arbeitsweise',
    h1_t:'AI in echte Operations', h1_d:'Vom Proof-of-Concept in die Produktion — eingebettet in echte Prozesse, gemessen an KPIs, von Teams übernommen.',
    h2_t:'Workflows, die sich multiplizieren', h2_d:'Voice-Agents, Prozess-Orchestrierung, Automatisierung, die verändert, wie Teams arbeiten — nicht nur Zeit spart.',
    h3_t:'Operations, die skalieren', h3_d:'KPIs, Prozesse, Teamstrukturen, P&L-Steuerung. Von Startup-Chaos zu strukturiertem Wachstum.',
    h4_t:'Eingebettet, nicht extern', h4_d:'Ich arbeite in eurem Team, nicht daneben. Ich richte Stakeholder aus, stärke bestehende Strukturen und stelle sicher, dass das Gebaute tatsächlich hält.',
    eng_title:'Engagement-Spektrum',
    e1_label:'Primär', e1_mode:'Festanstellung oder eingebettete Transformationsrolle', e1_detail:'COO, VP Operations, Head of Applied AI. Festes Teammitglied. Volle P&L-Verantwortung.',
    e2_label:'Sekundär', e2_mode:'Interim- & fokussierte Mandate', e2_detail:'3–12 Monate. Transformation, Turnarounds oder Überbrückung von Führungslücken.',
    e3_label:'Selektiv', e3_mode:'Beratung & definierte AI-Projekte', e3_detail:'AI-Strategie, Transformations-Roadmaps oder abgegrenzte Entwicklungsprojekte. Gelieferte Systeme, keine Foliensätze.',

    /* Right Fit */
    fit_label:'Passt es?', fit_h2:'Unternehmen holen mich, wenn…',
    f1_q:'„Wir haben eine AI-Strategie, aber niemand verdrahtet sie mit unseren Operations."', f1_a:'Ich übersetze AI-Potenzial in Workflows, die eure Teams tatsächlich übernehmen — abteilungsübergreifend, nicht im Silo.',
    f2_q:'„Wir wachsen schnell und die Operations kommen nicht hinterher."', f2_a:'Ich baue das operative Rückgrat: KPIs, Prozesse, Teamstrukturen. Dreimal gemacht, von Startup bis Scale-up.',
    f3_q:'„Die Zahlen stimmen nicht. Wir brauchen einen Turnaround."', f3_a:'Restrukturierung, Automatisierung, Team-Neuausrichtung. Bewiesen: €1.3M EBITDA in 6 Monaten aus einer Krisensituation.',
    f4_q:'„Product, Engineering und Ops bewegen sich alle — aber nicht zusammen."', f4_a:'Ich sitze an der Schnittstelle. Ich bringe cross-funktionale Teams um gemeinsame Execution zusammen, nicht nur um gemeinsame Meetings.',
    f5_q:'„Wir brauchen keinen weiteren Berater. Wir brauchen jemanden, der sich einbettet."', f5_a:'Ich werde Teil eures Teams, nicht Beobachter. Ich arbeite mit Führung, Engineering und Ops zusammen — und bleibe, bis die Veränderung greift.',

    /* CTA */
    cta_h2:'Wenn AI in euren Operations nicht ankommt —<br><em>reden wir.</em>', cta_sub:'20 Minuten. Kein Pitch. Erzählt mir, wo es stockt — und ich sage euch ehrlich, ob es passt.',
    form_name:'Name', form_company:'Unternehmen + Rolle', form_message:'Worum geht es?',
    form_alt:'Oder auf <a href="https://www.linkedin.com/in/fabian-spitzer/" target="_blank" rel="noopener">LinkedIn</a> vernetzen',
    form_btn:'Nachricht senden',
    form_ok_h:'Nachricht erhalten.', form_ok_p:'Ich melde mich innerhalb von 24 Stunden. Freue mich auf das Gespräch.',
    nav_dl:'CV ↓',
    footer_cv:'CV herunterladen (PDF)',

    /* Page CTA (subpages) */
    page_cta:'Bereit zu sprechen? <em>Zum Kontakt.</em>',
    page_cta_btn:'Gespräch vereinbaren',

    /* Subpage heroes */
    track_hero_h1:'Probleme, die ich gelöst habe.<br><em>Zahlen, die ich bewegt habe.</em>',
    track_hero_sub:'11 Jahre CHECK24, COO bei zwei Scale-ups, Gründer einer Applied-AI-Firma. Hier sind die Ergebnisse.',
    approach_hero_h1:'Ein Operator.<br><em>Mehrere Modi.</em>',
    approach_hero_sub:'Operative Führung, eigenhändiger Aufbau, messbare Ergebnisse — angepasst an das, was ihr braucht.',
    whynow_hero_h1:'AI kann die Arbeit erledigen.<br><em>Niemand verankert es.</em>',
    whynow_hero_sub:'Die Lücke zwischen AI-Fähigkeit und tatsächlichem Einsatz ist operativ — nicht technisch. Und sie wächst.',
  }
};

let lang = localStorage.getItem('fsLang') || 'en';

function setLang(l) {
  lang = l;
  localStorage.setItem('fsLang', l);
  const btn = document.getElementById('langBtn');
  if (btn) btn.textContent = l === 'en' ? 'DE' : 'EN';
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (l === 'de' && T.de[k]) el.innerHTML = T.de[k];
    else if (l === 'en' && el._en) el.innerHTML = el._en;
  });
}
function toggleLang() { setLang(lang === 'en' ? 'de' : 'en'); }

/* ── Counter animation ── */
function counter(el, target, pre, suf, dur) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const start = performance.now();
  const isF = String(target).includes('.');
  (function step(now) {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.querySelector('span').textContent = pre + (isF ? (target * e).toFixed(1) : Math.round(target * e)) + suf;
    if (p < 1) requestAnimationFrame(step);
  })(performance.now());
}

document.addEventListener('DOMContentLoaded', () => {
  // Store EN originals
  document.querySelectorAll('[data-i18n]').forEach(el => { el._en = el.innerHTML; });
  if (lang === 'de') setLang('de');

  // Scroll progress
  const prog = document.querySelector('.scroll-progress');
  if (prog) {
    window.addEventListener('scroll', () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = h > 0 ? (window.scrollY / h * 100) + '%' : '0';
    }, { passive: true });
  }

  // Counter animation
  const cObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        counter(el, parseFloat(el.dataset.count), el.dataset.prefix || '', el.dataset.suffix || '', 1400);
        cObs.unobserve(el);
      }
    });
  }, { threshold: .5 });
  document.querySelectorAll('[data-count]').forEach(el => cObs.observe(el));

  // Reveal on scroll
  const rObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('v'); rObs.unobserve(e.target); } });
  }, { threshold: .06, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.r').forEach(el => rObs.observe(el));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      const t = document.querySelector(this.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Active nav state
  const path = location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && !href.startsWith('#') && path.includes(href.replace('/fabian-spitzer/', ''))) {
      a.classList.add('active');
    }
  });

  // ── Mobile menu ──
  const burger = document.getElementById('navBurger');
  const navEl = document.querySelector('nav');
  if (burger && navEl) {
    const menu = document.getElementById('navMenu');

    function toggleMenu(force) {
      const opening = force !== undefined ? force : !navEl.classList.contains('menu-open');
      navEl.classList.toggle('menu-open', opening);
      burger.setAttribute('aria-expanded', String(opening));
      burger.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('menu-locked', opening);
      if (opening && menu) {
        const first = menu.querySelector('a');
        if (first) setTimeout(() => first.focus(), 100);
      }
    }

    burger.addEventListener('click', () => toggleMenu());

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navEl.classList.contains('menu-open')) {
        toggleMenu(false);
        burger.focus();
      }
    });

    if (menu) {
      menu.addEventListener('click', e => {
        if (e.target.matches('a')) toggleMenu(false);
      });
    }

    document.addEventListener('click', e => {
      if (navEl.classList.contains('menu-open') && !navEl.contains(e.target)) {
        toggleMenu(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navEl.classList.contains('menu-open')) {
        toggleMenu(false);
      }
    }, { passive: true });

    if (menu) {
      menu.addEventListener('keydown', e => {
        if (e.key !== 'Tab' || !navEl.classList.contains('menu-open')) return;
        const focusable = [burger, ...menu.querySelectorAll('a, button')];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      });
    }
  }

  // Contact form (AJAX submit)
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      const orig = btn.textContent;
      btn.disabled = true;
      btn.textContent = '...';
      try {
        const res = await fetch(form.action, { method:'POST', body:new FormData(form), headers:{'Accept':'application/json'} });
        if (res.ok || res.status === 200) {
          form.style.display = 'none';
          success.classList.add('show');
        } else { throw new Error(); }
      } catch {
        btn.disabled = false;
        btn.textContent = orig;
        form.submit();
      }
    });
  }
});
