/* Coaching Guida : effets propres au projet (direction « Le cercle »).
   Le socle gère l'ouverture, le voile, l'en-tête, le menu, les mesures et la bibliothèque d'effets.
   Effets du plan (data-effet) : cercle-portrait, rond-qui-se-pose, frise-parcours, trois-cercles, arche,
   points-en-cercle, bandeau-grange, cercle-rdv. Les modules de la bibliothèque (manifeste, schéma en étapes,
   formulaire par étapes) sont repris tels quels depuis assets/js/modules/. */
import { demarrer, boucle, versObjet, rafraichir } from './socle/index.js?v=1';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- Ouverture de chaque page (pendant l'intro ou pendant que le voile se retire) ---------- */
function ouverturePage(tl, t0) {
  const h1 = $('h1[data-anime="gsap"]');
  if (h1) tl.call(() => h1.classList.add('vu'), null, t0);
  const lignes = $$('.hl-in');
  if (lignes.length) {
    tl.fromTo(lignes, { yPercent: 115, y: 0 }, { yPercent: 0, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' }, t0);
    tl.call(() => $$('.hl').forEach((l) => l.classList.add('hl--fini')), null, t0 + 0.9 + 0.12 * lignes.length);
  }
  const apparait = $$('[data-apparait]');
  if (apparait.length) tl.fromTo(apparait, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'power2.out' }, t0 + 0.15);
  /* Accueil : le rond se dessine autour de « juste » (hors de la timeline : il ne l'allonge pas). */
  const rond = $('.rond');
  if (rond) tl.call(() => gsap.fromTo(rond, { '--trace': 0 }, { '--trace': 1, duration: 0.9, ease: 'power2.inOut' }), null, t0 + 0.6);
  const fleche = $('.hero-fleche');
  if (fleche) tl.fromTo(fleche, { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.8)' }, t0 + 0.35);
  /* Coaching : les deux cercles autour de celui d'ouverture roulent jusqu'à leur place. */
  const trois = $$('.trois > a');
  if (trois.length) {
    tl.fromTo([trois[0], trois[2]], { opacity: 0, x: (i) => (i ? -60 : 60), scale: 0.7 }, { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power3.out' }, t0);
    tl.fromTo($$('.trois span'), { opacity: 0 }, { opacity: 1, duration: 0.4, stagger: 0.08 }, t0 + 0.4);
  }
  /* Rendez-vous : le cercle pointillé fait le tour du portrait. */
  const rdv = $('.rdv-portrait svg circle');
  if (rdv) tl.fromTo(rdv, { strokeDashoffset: 420 }, { strokeDashoffset: 0, duration: 1.2, ease: 'power2.out' }, t0);
  return tl;
}

function etatFinalPage() {
  $$('h1[data-anime="gsap"]').forEach((h) => h.classList.add('vu'));
  $$('.hl').forEach((l) => l.classList.add('hl--fini'));
  gsap.set('.hl-in', { yPercent: 0, y: 0 });
  gsap.set('[data-apparait]', { opacity: 1, y: 0 });
  const rond = $('.rond'); if (rond) gsap.set(rond, { '--trace': 1 });
  gsap.set('.hero-fleche', { scale: 1, opacity: 1 });
  gsap.set('.trois > a, .trois span', { opacity: 1, x: 0, scale: 1 });
  gsap.set('.rdv-portrait svg circle', { strokeDashoffset: 0 });
}

/* ---------- Accueil ---------- */
function cerclePortrait() {
  const v = $('.hero-visuel');
  if (!v) return;
  const points = $$('.orbite i', v);
  const rayons = [0.5, 0.47, 0.5], vitesses = [0.09, -0.06, 0.05], depart = [-0.4, 2.1, 3.6];
  let taille = v.offsetWidth;
  new ResizeObserver(() => { taille = v.offsetWidth; }).observe(v);
  /* Une seule boucle (une par élément dans le socle) : trois ronds qui tournent lentement autour du portrait,
     le portrait qui respire, l'anneau pointillé qui tourne. Seulement à l'écran, onglet visible. */
  const img = $('.hero-cercle img', v), anneau = $('.halo-2', v);
  boucle(v, (dt, t) => {
    points.forEach((p, i) => {
      const a = depart[i] + t * vitesses[i] * Math.PI * 2 * 0.25;
      const r = rayons[i] * taille;
      p.style.translate = `${Math.cos(a) * r}px ${Math.sin(a) * r}px`;
    });
    if (img) img.style.scale = String(1.045 + 0.035 * Math.sin(t * 0.55));
    if (anneau) anneau.style.rotate = `${(t * 9) % 360}deg`;
  });
  /* Au défilement : le cercle descend doucement, le halo tourne. */
  gsap.fromTo(v, { yPercent: 0 }, { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.fromTo('.hero-halo', { rotate: 0 }, { rotate: 60, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
}

function rondQuiSePose() {
  const outil = $('.besoin-outil');
  if (!outil) return;
  const anneau = $('.besoin-anneau', outil);
  const choix = $$('.besoin-choix', outil);
  const reponses = $$('.besoin-r', outil);
  let courant = choix.findIndex((b) => b.getAttribute('aria-pressed') === 'true');
  if (courant < 0) courant = 0;
  const position = (i) => {
    const p = $('.pastille', choix[i]);
    let x = 0, y = 0, el = p;
    while (el && el !== outil) { x += el.offsetLeft; y += el.offsetTop; el = el.offsetParent; }
    return { x: x - 0, y: y - 0 };
  };
  const placer = (i, anime) => {
    const { x, y } = position(i);
    gsap.to(anneau, { x, y, duration: anime ? 0.55 : 0, ease: 'power3.inOut', overwrite: 'auto' });
  };
  choix.forEach((b, i) => b.addEventListener('click', () => {
    if (i === courant) return;
    choix[courant].setAttribute('aria-pressed', 'false');
    b.setAttribute('aria-pressed', 'true');
    reponses[courant].classList.remove('est-active');
    reponses[i].classList.add('est-active');
    gsap.fromTo(reponses[i], { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' });
    courant = i;
    placer(i, true);
  }));
  placer(courant, false);
  new ResizeObserver(() => placer(courant, false)).observe(outil);
  /* Au défilement, l'anneau pointillé tourne sur lui-même. */
  gsap.fromTo(anneau, { rotate: 0 }, { rotate: 240, ease: 'none', scrollTrigger: { trigger: outil, start: 'top bottom', end: 'bottom top', scrub: true } });
}

/* Citation : les deux mots s'effacent quand la carte arrive sur l'image ouverte. */
function citationMots() {
  const mots = $('.citation-mots');
  if (!mots) return;
  gsap.fromTo(mots, { opacity: 1 }, { opacity: 0, ease: 'none', scrollTrigger: { trigger: '.citation', start: 'top+=45% top', end: 'top+=75% top', scrub: true } });
}

function friseParcours() {
  const fil = $('[data-effet="frise-parcours"]');
  if (!fil) return;
  gsap.fromTo(fil, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.parcours', start: 'top 75%', end: 'bottom 60%', scrub: true } });
}

/* ---------- Pages intérieures ---------- */
function troisCercles() {
  const t = $('.trois');
  if (!t) return;
  gsap.fromTo(t, { yPercent: 0 }, { yPercent: -8, ease: 'none', scrollTrigger: { trigger: '.co-tete', start: 'top top', end: 'bottom top', scrub: true } });
}

/* Sommaire collant de la page Coaching : le volet courant se calcule à partir des positions gardées
   (mesurées au recalcul, jamais pendant le défilement) ; aucun au-dessus du premier volet. */
function sommaireCoaching() {
  const nav = $('.co-nav');
  if (!nav) return;
  const liens = $$('a[href^="#"]', nav);
  const cibles = liens.map((a) => document.getElementById(a.hash.slice(1)));
  let hauts = [];
  const maj = (self) => {
    const y = self.scroll() + innerHeight * 0.35;
    let i = -1;
    hauts.forEach((h, k) => { if (h <= y) i = k; });
    liens.forEach((a, k) => (k === i ? a.setAttribute('aria-current', 'location') : a.removeAttribute('aria-current')));
  };
  window.ScrollTrigger.create({
    trigger: document.body, start: 'top top', end: 'bottom bottom',
    onRefresh: (self) => { hauts = cibles.map((c) => (c ? c.getBoundingClientRect().top + scrollY : Infinity)); maj(self); },
    onUpdate: maj,
  });
}

function arche() {
  const a = $('[data-effet="arche"]');
  if (!a) return;
  gsap.fromTo(a, { clipPath: 'inset(0% 10% 0% 10% round 600px 600px 18px 18px)' }, {
    clipPath: 'inset(0% 0% 0% 0% round 60px 60px 18px 18px)', ease: 'none',
    scrollTrigger: { trigger: a, start: 'top 85%', end: 'bottom 40%', scrub: true },
  });
  const img = $('img', a);
  if (img) gsap.fromTo(img, { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: a, start: 'top bottom', end: 'bottom top', scrub: true } });
}

function bandeauGrange() {
  const b = $('[data-effet="bandeau-grange"]');
  if (!b) return;
  gsap.fromTo(b, { clipPath: 'inset(0% 6% 0% 6% round 18px)' }, {
    clipPath: 'inset(0% 0% 0% 0% round 18px)', ease: 'none',
    scrollTrigger: { trigger: b, start: 'top 80%', end: 'bottom 30%', scrub: true },
  });
  const img = $('img', b);
  if (img) gsap.fromTo(img, { yPercent: -6, scale: 1.14 }, { yPercent: 6, scale: 1.14, ease: 'none', scrollTrigger: { trigger: b, start: 'top bottom', end: 'bottom top', scrub: true } });
}

function cercleRdv() {
  const s = $('[data-effet="cercle-rdv"]');
  if (!s) return;
  gsap.fromTo(s, { rotate: 0 }, { rotate: 120, ease: 'none', scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: true } });
}

function filtresAteliers() {
  const zone = $('[data-filtres]');
  if (!zone) return;
  const boutons = $$('[data-filtre]', zone);
  const cartes = $$('.atelier');
  const compte = $('[data-compte]', zone);
  const appliquer = (p, maj = true) => {
    boutons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtre === p)));
    let n = 0;
    cartes.forEach((c) => {
      const garde = p === 'tous' || c.dataset.publics.split(' ').includes(p);
      if (garde) n++;
      c.classList.toggle('est-cache', !garde);
      if (garde) gsap.fromTo(c, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', clearProps: 'transform,opacity' });
    });
    compte.textContent = n;
    if (maj) {
      const u = new URL(location.href);
      if (p === 'tous') u.searchParams.delete('public'); else u.searchParams.set('public', p);
      history.replaceState(history.state, '', u);
    }
    rafraichir();
  };
  boutons.forEach((b) => b.addEventListener('click', () => appliquer(b.dataset.filtre)));
  const depart = new URLSearchParams(location.search).get('public');
  if (depart && boutons.some((b) => b.dataset.filtre === depart)) appliquer(depart, false);
}

/* ---------- Modules de la bibliothèque ---------- */
async function modules() {
  const mmm = $('[data-module="manifeste-mot-a-mot"]');
  if (mmm) { const { init } = await import('./modules/manifeste-mot-a-mot/module.js?v=1'); init(mmm, { opacite: 1, parallaxe: 0, debut: 'top 75%', fin: 'bottom 55%' }); }
  const see = $('[data-module="schema-epingle-etapes"]');
  if (see) { const { init } = await import('./modules/schema-epingle-etapes/module.js?v=1'); init(see, { telephone: 'compact', pas: 60 }); }
  const fpe = $('[data-module="formulaire-par-etapes"]');
  if (fpe) {
    const { init } = await import('./modules/formulaire-par-etapes/module.js?v=1');
    /* Préremplissage d'après le bouton d'où l'on vient (?sujet=…&pour=…&atelier=…). */
    const p = new URLSearchParams(location.search);
    ['sujet', 'pour'].forEach((n) => {
      const v = p.get(n);
      const champ = v && fpe.querySelector(`input[name="${n}"][value="${CSS.escape(v)}"]`);
      if (champ) champ.checked = true;
    });
    if (p.get('sujet') === 'formation' && !p.get('pour')) { const e = fpe.querySelector('input[name="pour"][value="equipe"]'); if (e) e.checked = true; }
    const atelier = p.get('atelier');
    const msg = fpe.querySelector('textarea[name="message"]');
    if (atelier && msg && !msg.value) msg.value = `Atelier : ${atelier}`;
    init(fpe, { mailto: '' });
    fpe.addEventListener('formulaire:envoye', () => {
      const finBloc = $('.fpe__fin', fpe);
      if (finBloc) setTimeout(() => finBloc.scrollIntoView({ block: 'center', behavior: 'smooth' }), 120);
    });
  }
  /* Scènes créées après celles du socle : remises dans l'ordre de la page, puis recalculées. */
  if (window.ScrollTrigger) { window.ScrollTrigger.sort(); rafraichir(); }
}

demarrer({
  preparer() {
    if (!gsap) return;
    cerclePortrait();
    rondQuiSePose();
    friseParcours();
    citationMots();
    troisCercles();
    sommaireCoaching();
    arche();
    bandeauGrange();
    cercleRdv();
    filtresAteliers();
  },
  /* Intro : le disque blanc du logo apparaît, un cercle bleu en fait le tour, puis le disque glisse jusqu'à
     l'objet d'ouverture de la page (le portrait sur l'accueil) et le panneau s'ouvre en cercle depuis lui. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    versObjet(tl, { a: 1.0, duree: 0.5, ouverture: 0.8, echelleMax: 6 });
    tl.fromTo('.ouverture-disque', { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.45 }, 0)
      .fromTo('.ouverture-fleche circle', { strokeDashoffset: 302 }, { strokeDashoffset: 0, duration: 0.7, ease: 'power2.inOut' }, 0.15)
      .fromTo('.ouverture-ligne', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, 0.3)
      .to('.ouverture-ligne, .ouverture-fleche', { opacity: 0, duration: 0.25 }, 0.9);
    ouverturePage(tl, 1.55);
    return tl;
  },
  etatFinal() { if (gsap) etatFinalPage(); },
  arrivee() {
    if (!gsap) return;
    ouverturePage(gsap.timeline({ delay: 0.15 }), 0);
  },
  pret: [modules().catch((e) => console.error('[guida] modules', e))],
});
