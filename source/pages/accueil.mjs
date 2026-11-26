/* Accueil : le cercle. Ouverture (portrait dans le cercle du logo), « De quoi avez-vous besoin ? »,
   accompagnements, qui suis-je et parcours, approche mot à mot, citation en plein écran, écoles et entreprises, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { fin } from '../gabarits/fin.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'marieve-cercle-1200.webp' };

const fleche = html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export default (c) => {
  const k = c.site.contact;
  const sit = c.donnees.situations;
  return html`
<section class="hero" id="debut">
  <div class="hero-texte">
    <p class="surtitre" data-apparait>${c.t('accueil.hero.surtitre')}</p>
    <h1 class="hero-titre" data-anime="gsap"><span class="hl"><span class="hl-in">${c.t('accueil.hero.titre1')}</span></span><span class="hl"><span class="hl-in">${c.t('accueil.hero.titre2')} <span class="rond">${c.t('accueil.hero.titreMot')}</span></span></span><span class="hl"><span class="hl-in">${c.t('accueil.hero.titre3')}</span></span></h1>
    <p class="hero-intro" data-apparait>${c.t('accueil.hero.texte')}</p>
    <p class="actions" data-apparait>
      ${c.lien('rendez-vous', { classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
    </p>
    <p class="hero-info" data-info-cle data-apparait>${c.t('accueil.hero.info')} <a href="tel:${k.telephoneLien}">${k.telephone}</a></p>
  </div>
  <div class="hero-visuel" data-effet="cercle-portrait">
    <svg class="hero-halo" viewBox="0 0 200 200" aria-hidden="true"><circle class="halo-1" cx="100" cy="100" r="99" /><circle class="halo-2" cx="100" cy="100" r="90" /></svg>
    ${c.media({ nom: 'marieve-cercle', alt: c.s('accueil.qui.titre') + ' Mariève Gérard, coach.', cadrage: '50% 34%', priorite: true, classe: 'hero-cercle', sizes: '(max-width: 760px) 80vw, 520px', attrs: 'data-iris-centre="disque"' })}
    <div class="orbite" aria-hidden="true"><i style="--c: var(--ciel); --t: 18px"></i><i style="--c: var(--abricot); --t: 12px"></i><i style="--c: var(--accent); --t: 10px"></i></div>
    <a class="hero-fleche" href="#besoin" data-sans-transition>${fleche}<span>${c.t('accueil.hero.suite')}</span></a>
  </div>
</section>

<section class="section" id="besoin">
  <div class="conteneur boussole-grille">
    <div class="besoin-tete">
      <p class="surtitre">${c.t('accueil.besoin.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.besoin.titre')}</h2>
      <p class="intro-section" data-anime>${c.t('accueil.besoin.texte')}</p>
      <p class="besoin-aide" data-anime><span data-souris-txt>${c.t('accueil.besoin.aideSouris')}</span><span data-tactile>${c.t('accueil.besoin.aide')}</span></p>
    </div>
    <div class="boussole" data-boussole role="group" aria-label="${c.s('accueil.besoin.boussole')}">
      <div class="boussole-cadran" aria-hidden="true">
        <span class="boussole-anneau" data-effet="rond-qui-se-pose"></span>
        <svg class="boussole-svg" viewBox="0 0 400 400">
          <circle class="cadran-fond" cx="200" cy="200" r="150" />
          <circle class="cadran-trait" cx="200" cy="200" r="150" />
          ${sit.map((s, i) => { const a = (-90 + i * 60) * Math.PI / 180; return html`<g class="cadran-repere" data-cle="${s.cle}"><circle cx="${Math.round(200 + Math.cos(a) * 150)}" cy="${Math.round(200 + Math.sin(a) * 150)}" r="13" /><text x="${Math.round(200 + Math.cos(a) * 150)}" y="${Math.round(200 + Math.sin(a) * 150) + 5}" text-anchor="middle">${i + 1}</text></g>`; })}
        </svg>
        <span class="boussole-rayon"></span>
        <span class="boussole-centre disque-logo"><svg class="aiguille" viewBox="0 0 100 100"><path class="aiguille-tige" d="M50 58 V16" /><path class="aiguille-tete" d="M38 28 L50 13 L62 28" /><circle class="aiguille-axe" cx="50" cy="50" r="7" /></svg></span>
      </div>
      <ul class="boussole-choix">
        ${sit.map((s, i) => html`<li style="--a:${-90 + i * 60}deg"><button type="button" class="boussole-btn" data-cle="${s.cle}" data-angle="${-90 + i * 60}" aria-pressed="${i === 0 ? 'true' : 'false'}" aria-controls="reponse-${s.cle}"><span class="boussole-n" aria-hidden="true">${i + 1}</span><span class="boussole-libelle">${s.court}</span></button></li>`)}
      </ul>
    </div>
    <div class="besoin-reponses" aria-live="polite">
      ${sit.map((s, i) => html`<div class="besoin-r${i === 0 ? ' est-active' : ''}" id="reponse-${s.cle}" data-cle="${s.cle}" role="region" aria-label="${s.titre}">
        <p class="besoin-q">« ${s.question} »</p>
        <h3>${s.titre}</h3>
        <p>${s.reponse}</p>
        <p class="actions">${c.lien(s.page, { ancre: s.ancre, classe: 'bouton', texte: c.t('commun.decouvrir') })}${c.lien('rendez-vous', { params: `sujet=${s.sujet}`, classe: 'lien-fleche', texte: c.t('commun.enParler') })}</p>
      </div>`)}
    </div>
  </div>
</section>

<section class="section section--ciel" id="accompagnements">
  <div class="conteneur">
    <div class="acc-tete">
      <div><p class="surtitre">${c.t('accueil.accompagnements.surtitre')}</p><h2 data-anime="lignes">${c.t('accueil.accompagnements.titre')}</h2></div>
      <p data-anime>${c.t('accueil.accompagnements.texte')}</p>
    </div>
    <ul class="acc-trois" data-anime="cascade">
      ${c.donnees.accompagnements.slice(0, 3).map((a, i) => html`<li>${c.lien(a.page, { ancre: a.ancre, classe: 'acc-rond', texte: html`<span class="acc-pastille" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>${c.media({ nom: a.image, alt: '', cadrage: a.cadrage, classe: 'acc-cercle', sizes: '220px' })}<div class="acc-corps"><h3>${a.titre}</h3><p>${a.texte}</p><span class="lien-fleche">${c.t('commun.decouvrir')}</span></div>` })}</li>`)}
    </ul>
    <ul class="acc-deux" data-anime="cascade">
      ${c.donnees.accompagnements.slice(3).map((a, i) => html`<li>${c.lien(a.page, { ancre: a.ancre, classe: 'acc-large', texte: html`<span class="acc-pastille" aria-hidden="true">${String(i + 4).padStart(2, '0')}</span>${c.media({ nom: a.image, alt: '', cadrage: a.cadrage, sizes: '(max-width: 760px) 100vw, 300px' })}<div class="acc-corps"><h3>${a.titre}</h3><p>${a.texte}</p><span class="lien-fleche">${c.t('commun.decouvrir')}</span></div>` })}</li>`)}
    </ul>
    <p class="acc-hesiter" data-anime><strong>${c.t('accueil.accompagnements.hesiter')}</strong> ${c.t('accueil.accompagnements.hesiterTexte')} ${c.lien('rendez-vous', { classe: 'lien-fleche', texte: c.t('commun.enParler') })}</p>
  </div>
</section>

<section class="section section--lin" id="qui">
  <div class="conteneur qui-grille">
    <div class="qui-photo">
      ${c.media({ nom: 'marieve-noir', alt: c.s('accueil.qui.alt'), cadrage: '50% 30%', classe: 'qui-portrait', sizes: '(max-width: 900px) 260px, 400px', attrs: 'data-anime="rideau"' })}
      <figure class="qui-vignette">
        ${c.media({ nom: 'marieve-porte', alt: c.s('accueil.qui.legende'), cadrage: '46% 24%', sizes: '180px' })}
        <figcaption class="qui-legende">${c.t('accueil.qui.legende')}</figcaption>
      </figure>
    </div>
    <div class="qui-texte">
      <p class="surtitre">${c.t('accueil.qui.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.qui.titre')}</h2>
      <p data-anime>${c.t('accueil.qui.texte1')}</p>
      <p data-anime>${c.t('accueil.qui.texte2')}</p>
      <h3 class="visuellement-cache">${c.t('accueil.qui.frise')}</h3>
      <div class="parcours-zone">
        <span class="parcours-fil" aria-hidden="true"><span data-effet="frise-parcours"></span></span>
        <ol class="parcours" data-anime="cascade">
          ${c.donnees.parcours.map((p) => html`<li><strong>${p.repere}</strong><p>${p.texte}</p></li>`)}
        </ol>
      </div>
    </div>
  </div>
</section>

<section class="section section--ciel" id="approche">
  <div class="conteneur approche-grille">
    <div class="mmm" data-module="manifeste-mot-a-mot">
      <div class="mmm__cadre">
        <p class="surtitre">${c.t('accueil.approche.surtitre')}</p>
        <h2 class="mmm__texte">${c.t('accueil.approche.texte')}</h2>
        <p class="mmm__signature">${c.t('accueil.approche.domaines')}</p>
      </div>
    </div>
    <figure class="approche-photo">
      ${c.media({ nom: 'cabinet', alt: c.s('accueil.approche.legende'), cadrage: '45% 45%', sizes: '(max-width: 900px) 80vw, 400px', attrs: 'data-fx="parallaxe"' })}
      <figcaption class="qui-legende">${c.t('accueil.approche.legende')}</figcaption>
    </figure>
  </div>
</section>

<section class="citation" id="citation" style="--fx-longueur: 170svh" data-fx="plein-ecran" data-fx-depart="inset(16% 20% 16% 20% round 999px)">
  <div data-collant>
    ${c.media({ nom: 'grok/bureau-matin', alt: '', cadrage: '62% 50%', sizes: '100vw' })}
    <p class="citation-mots" aria-hidden="true" data-audit-ignorer><span data-fx-ecarte="g">${c.t('accueil.citation.gauche')}</span><span data-fx-ecarte="d">${c.t('accueil.citation.droite')}</span></p>
    <div class="citation-carte" data-fx-apres>
      <blockquote>${c.t('accueil.citation.texte')}</blockquote>
      <p>${c.t('accueil.citation.source')}</p>
    </div>
  </div>
</section>

<section class="section section--profond" id="pros">
  <div class="conteneur pros-grille">
    <div>
      <p class="surtitre">${c.t('accueil.pros.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.pros.titre')}</h2>
      <p class="texte-doux" data-anime>${c.t('accueil.pros.texte')}</p>
      <ul class="pros-liste" data-anime="cascade">${c.s('accueil.pros.liste').split(' · ').map((x) => html`<li>${x}</li>`)}</ul>
      <p class="actions" data-anime>
        ${c.lien('rendez-vous', { params: 'sujet=formation', classe: 'bouton', texte: c.t('accueil.pros.devis') })}
        ${c.lien('formations', { classe: 'bouton bouton--contour', texte: c.t('accueil.pros.voir') })}
      </p>
    </div>
    <div class="pros-photo">
      ${c.media({ nom: 'grok/pro-equipe', alt: c.donnees.images?.['grok/pro-equipe']?.alt || '', sizes: '(max-width: 900px) 80vw, 520px', attrs: 'data-anime="rideau"' })}
    </div>
  </div>
</section>

${fin(c, { logo: true })}
`;
};
