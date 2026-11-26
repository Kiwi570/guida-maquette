/* Formations et ateliers : grand titre puis bandeau de la grange, ateliers filtrables (chacun sa figure dessinée),
   les onze formations, IFAPME, demande de devis. */
import { html } from '../../outils/gabarit.mjs';
import { fin } from '../gabarits/fin.mjs';

export const page = { cle: 'formations', fichier: 'formations', imagePartage: 'grange-1200.webp' };

/* Petites figures des outils, dessinées en SVG (repère 84 × 84). */
const FIGURES = {
  trois: html`<circle cx="30" cy="34" r="18" /><circle cx="54" cy="34" r="18" /><circle cx="42" cy="54" r="18" /><circle class="plein" cx="42" cy="41" r="5" />`,
  ikigai: html`<circle cx="42" cy="24" r="18" /><circle cx="60" cy="42" r="18" /><circle cx="42" cy="60" r="18" /><circle cx="24" cy="42" r="18" /><circle class="plein" cx="42" cy="42" r="5" />`,
  enneagramme: html`<circle class="doux" cx="42" cy="42" r="34" /><polyline points="42,8 75.5,48 60,72 24,72 8.5,48 42,8" /><path d="M64 16 L20 16 L76 54 L42 76 L8 54 Z" class="doux" /><circle class="plein" cx="42" cy="8" r="4" />`,
  blocs: html`<rect x="10" y="14" width="64" height="58" rx="8" /><path d="M10 30 H74 M31 14 V72 M52 14 V72" class="doux" /><rect class="plein" x="35" y="36" width="13" height="12" rx="3" />`,
  table: html`<circle cx="42" cy="42" r="20" /><circle class="plein" cx="42" cy="10" r="5" /><circle class="plein" cx="74" cy="42" r="5" /><circle class="plein" cx="42" cy="74" r="5" /><circle class="plein" cx="10" cy="42" r="5" /><circle class="plein" cx="65" cy="19" r="5" /><circle class="plein" cx="19" cy="65" r="5" />`,
  fleche: html`<circle class="doux" cx="42" cy="42" r="34" /><path d="M24 60 L60 24 M38 24 H60 V46" />`,
};

const PUBLICS = ['particuliers', 'entreprises', 'ecoles'];

export default (c) => {
  const ateliers = c.donnees.ateliers;
  const formations = c.donnees.formations;
  const groupes = ['entreprises', 'ecoles', 'accompagnants'];
  return html`
<section class="fo-tete" id="debut">
  <div>
    <p class="surtitre" data-apparait>${c.t('formations.tete.surtitre')}</p>
    <h1 class="page-titre" data-anime="gsap"><span class="hl"><span class="hl-in">${c.t('formations.tete.titre')}</span></span></h1>
    <p class="page-intro" data-apparait>${c.t('formations.tete.texte')}</p>
    <p class="actions" data-apparait>${c.lien('rendez-vous', { params: 'sujet=formation', classe: 'bouton', texte: c.t('formations.tete.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
  </div>
  <div class="fo-chiffres" data-apparait>
    <p>${c.t('formations.tete.chiffre1')}</p><p>${c.t('formations.tete.chiffre2')}</p>
    <span class="texte-doux" data-info-cle>${c.t('formations.tete.info')}</span>
  </div>
  <div class="bandeau-scene">
  ${c.media({ nom: 'grange-bandeau', alt: c.donnees.images?.['grange-bandeau']?.alt || '', cadrage: '50% 52%', priorite: true, classe: 'bandeau', sizes: '(max-width: 760px) 92vw, 1400px', attrs: 'data-iris-centre data-effet="bandeau-grange"' })}
  </div>
</section>

<section class="section" id="ateliers">
  <div class="conteneur">
    <p class="surtitre">${c.t('formations.ateliers.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('formations.ateliers.titre')}</h2>
    <div class="filtres" role="group" aria-label="${c.s('formations.ateliers.filtre')}" data-filtres>
      <p>${c.t('formations.ateliers.filtre')}</p>
      <button type="button" class="filtre" data-filtre="tous" aria-pressed="true">${c.t('formations.ateliers.tous')}</button>
      ${PUBLICS.map((p) => html`<button type="button" class="filtre" data-filtre="${p}" aria-pressed="false">${c.t(`formations.ateliers.${p}`)}</button>`)}
      <p class="filtres-compte" aria-live="polite"><span data-compte>${ateliers.length}</span> ${c.t('formations.ateliers.compte')}</p>
    </div>
    <ul class="ateliers" data-anime="cascade">
      ${ateliers.map((a) => html`<li class="atelier" id="atelier-${a.cle}" data-publics="${a.publics.join(' ')}">
        <svg viewBox="0 0 84 84" aria-hidden="true">${FIGURES[a.figure]}</svg>
        <h3>${a.titre}</h3>
        <p>${a.texte}</p>
        <ul class="formats">${a.formats.map((f) => html`<li>${f}</li>`)}</ul>
        ${c.lien('rendez-vous', { params: `sujet=formation&atelier=${encodeURIComponent(a.titre)}`, classe: 'lien-fleche', texte: c.t('formations.ateliers.demande') })}
      </li>`)}
    </ul>
  </div>
</section>

<section class="section section--profond" id="formations">
  <div class="conteneur fo-liste-grille">
    <div>
      <p class="surtitre">${c.t('formations.liste.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('formations.liste.titre')}</h2>
      <div class="colonnes" data-anime="cascade">
        ${groupes.map((g) => html`<div><h3>${c.t(`formations.liste.${g}`)}</h3><ul>${formations.filter((f) => f.public === g).map((f) => html`<li>${f.titre}</li>`)}</ul></div>`)}
      </div>
      <p class="fo-ifapme" data-anime>${c.t('formations.liste.ifapme')} <a href="https://www.ifapme.be" target="_blank" rel="noopener">${c.t('formations.liste.ifapmeLien')}</a></p>
    </div>
    ${c.media({ nom: 'salle-reunion', alt: c.s('formations.legendeSalle'), cadrage: '50% 55%', sizes: '(max-width: 900px) 80vw, 420px', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

${fin(c, { titre: c.t('formations.devis.titre'), texte: c.t('formations.devis.texte'), sujet: 'formation' })}
`;
};
