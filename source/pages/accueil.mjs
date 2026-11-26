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
  <div class="conteneur besoin-grille">
    <div class="besoin-tete">
      <p class="surtitre">${c.t('accueil.besoin.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.besoin.titre')}</h2>
      <p class="intro-section" data-anime>${c.t('accueil.besoin.texte')}</p>
      <svg class="besoin-deco" viewBox="0 0 180 180" aria-hidden="true" data-visuel data-fx="trace"><circle class="plein" cx="90" cy="90" r="62" /><circle cx="90" cy="90" r="86" /><circle cx="90" cy="90" r="62" /><path d="M66 114 L114 66 M84 66 H114 V96" /></svg>
    </div>
    <div class="besoin-outil">
      <ul class="besoin-liste" data-anime="cascade">
        ${sit.map((s, i) => html`<li><button type="button" class="besoin-choix" data-cle="${s.cle}" aria-pressed="${i === 0 ? 'true' : 'false'}" aria-controls="reponse-${s.cle}"><span class="pastille" aria-hidden="true"></span><span>${s.question}</span></button></li>`)}
      </ul>
      <span class="besoin-anneau" aria-hidden="true" data-superpose data-effet="rond-qui-se-pose"></span>
      <div class="besoin-reponses" aria-live="polite">
        ${sit.map((s, i) => html`<div class="besoin-r${i === 0 ? ' est-active' : ''}" id="reponse-${s.cle}" data-cle="${s.cle}" role="region" aria-label="${s.titre}">
          <h3>${s.titre}</h3>
          <p>${s.reponse}</p>
          <p class="actions">${c.lien(s.page, { ancre: s.ancre, classe: 'bouton', texte: c.t('commun.decouvrir') })}${c.lien('rendez-vous', { params: `sujet=${s.sujet}`, classe: 'lien-fleche', texte: c.t('commun.enParler') })}</p>
        </div>`)}
      </div>
    </div>
  </div>
</section>

<section class="section section--ciel" id="accompagnements">
  <div class="conteneur">
    <div class="acc-tete">
      <div><p class="surtitre">${c.t('accueil.accompagnements.surtitre')}</p><h2 data-anime="lignes">${c.t('accueil.accompagnements.titre')}</h2></div>
      <p data-anime>${c.t('accueil.accompagnements.texte')}</p>
    </div>
    <ul class="acc-grille" data-anime="cascade">
      ${c.donnees.accompagnements.map((a, i) => html`<li>${c.lien(a.page, { ancre: a.ancre, classe: 'acc-carte', texte: html`<span class="acc-pastille" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>${c.media({ nom: a.image, alt: '', cadrage: a.cadrage, sizes: '(max-width: 600px) 100vw, (max-width: 960px) 50vw, 400px' })}<div class="acc-corps"><h3>${a.titre}</h3><p>${a.texte}</p><span class="lien-fleche">${c.t('commun.decouvrir')}</span></div>` })}</li>`)}
      <li class="acc-mot"><p>${c.t('accueil.approche.domaines')}</p>${c.lien('rendez-vous', { classe: 'lien-fleche', texte: c.t('commun.enParler') })}</li>
    </ul>
  </div>
</section>

<section class="section" id="qui">
  <div class="conteneur qui-grille">
    <figure class="qui-photo">
      ${c.media({ nom: 'marieve-porte', alt: c.s('accueil.qui.legende'), cadrage: '44% 50%', sizes: '(max-width: 900px) 90vw, 460px', attrs: 'data-anime="rideau"' })}
      <figcaption class="qui-legende">${c.t('accueil.qui.legende')}</figcaption>
    </figure>
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

<section class="citation" id="citation" style="--fx-longueur: 200svh" data-fx="plein-ecran" data-fx-depart="inset(16% 20% 16% 20% round 999px)">
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
      ${c.media({ nom: 'salle-reunion', alt: c.s('formations.legendeSalle'), cadrage: '50% 55%', sizes: '(max-width: 900px) 80vw, 420px', attrs: 'data-anime="rideau"' })}
    </div>
  </div>
</section>

${fin(c)}
`;
};
