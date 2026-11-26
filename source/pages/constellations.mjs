/* Constellations familiales : la vraie salle dans une arche qui s'ouvre, de quoi il s'agit, situations,
   quatre étapes en schéma épinglé (module schema-epingle-etapes) : des points qui trouvent leur place en cercle. */
import { html } from '../../outils/gabarit.mjs';
import { fin } from '../gabarits/fin.mjs';

export const page = { cle: 'constellations', fichier: 'constellations', imagePartage: 'salle-arche-1200.webp' };

/* Six points : étape 1 dispersés, étapes 2 et 3 posés dans l'espace, étape 4 en cercle (repère 400 × 300). */
const POINTS = [
  { moi: true, p1: [62, 64], p2: [196, 168], p4: [200, 55] },
  { p1: [334, 72], p2: [140, 104], p4: [282, 102] },
  { p1: [88, 232], p2: [266, 92], p4: [282, 198] },
  { p1: [352, 236], p2: [122, 214], p4: [200, 245] },
  { p1: [206, 38], p2: [300, 214], p4: [118, 198] },
  { p1: [252, 268], p2: [214, 246], p4: [118, 102] },
];
const LIENS = [[0, 1], [0, 2], [0, 3], [1, 4], [2, 5], [3, 5], [1, 2]];

const vars = (p) => `--x1:${p.p1[0]}px;--y1:${p.p1[1]}px;--x2:${p.p2[0]}px;--y2:${p.p2[1]}px;--x4:${p.p4[0]}px;--y4:${p.p4[1]}px`;

const situationIcone = (i) => {
  const a = [[8, 30, 26, 12, 34, 32], [6, 8, 20, 22, 34, 10], [10, 20, 30, 20, 20, 34]][i % 3];
  return html`<svg viewBox="0 0 40 40" aria-hidden="true" data-visuel><circle cx="${a[0]}" cy="${a[1]}" r="5" /><circle class="c-a" cx="${a[2]}" cy="${a[3]}" r="6" /><circle cx="${a[4]}" cy="${a[5]}" r="4" /></svg>`;
};

export default (c) => {
  const d = c.donnees.constellations;
  return html`
<section class="cs-tete" id="debut">
  <p class="surtitre" data-apparait>${c.t('constellations.tete.surtitre')}</p>
  <h1 class="page-titre" data-anime="gsap"><span class="hl"><span class="hl-in">${c.t('constellations.tete.titre')}</span></span></h1>
  <p class="page-intro" data-apparait>${c.t('constellations.tete.texte')}</p>
  <p class="actions" data-apparait>${c.lien('rendez-vous', { params: 'sujet=constellations', classe: 'bouton', texte: c.t('constellations.tete.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
  <p class="info" data-info-cle data-apparait>${c.t('constellations.tete.info')}</p>
  <div class="arche-scene">
  ${c.media({ nom: 'salle-arche', alt: c.donnees.images?.['salle-arche']?.alt || '', cadrage: '50% 62%', priorite: true, classe: 'arche', sizes: '(max-width: 760px) 92vw, 1100px', attrs: 'data-iris-centre data-effet="arche"' })}
  </div>
</section>

<section class="section" id="quoi">
  <div class="conteneur cs-quoi-grille">
    ${c.media({ nom: 'grok/constellation-figurines', alt: c.donnees.images?.['grok/constellation-figurines']?.alt || '', sizes: '(max-width: 900px) 90vw, 560px', attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre">${c.t('constellations.quoi.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('constellations.quoi.titre')}</h2>
      <p data-anime>${c.t('constellations.quoi.texte1')}</p>
      <p data-anime>${c.t('constellations.quoi.texte2')}</p>
      <p class="note" data-anime>${c.t('constellations.quoi.note')}</p>
    </div>
  </div>
</section>

<section class="section section--ciel" id="situations">
  <div class="conteneur">
    <p class="surtitre">${c.t('constellations.situations.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('constellations.situations.titre')}</h2>
    <ul class="cs-situations" data-anime="cascade">${d.situations.map((s, i) => html`<li>${situationIcone(i)}${s}</li>`)}</ul>
  </div>
</section>

<section class="see" id="etapes" data-module="schema-epingle-etapes" data-epingle aria-labelledby="etapes-titre">
  <div class="see__scene">
    <div class="see__grille socle-cadre">
      <div class="see__texte" data-tient="texte">
        <p class="socle-surtitre see__surtitre">${c.t('constellations.etapes.surtitre')}</p>
        <h2 class="see__titre" id="etapes-titre">${c.t('constellations.etapes.titre')}</h2>
        <ol class="see__etapes">
          ${d.etapes.map((e, i) => html`<li class="see__etape"><p class="see__n">${c.t('constellations.etapes.etape')} 0${i + 1}</p><h3>${e.titre}</h3><p>${e.texte}</p></li>`)}
        </ol>
      </div>
      <figure class="see__schema" data-tient="schéma">
        <div class="see__plan">
          <svg class="see__svg" viewBox="0 0 400 300" aria-hidden="true">
            <ellipse class="sol" cx="200" cy="160" rx="150" ry="112" data-see-des="2" />
            <g class="liens" data-see-partie="3">${LIENS.map(([a, b]) => html`<line class="lien-pt" x1="${POINTS[a].p2[0]}" y1="${POINTS[a].p2[1]}" x2="${POINTS[b].p2[0]}" y2="${POINTS[b].p2[1]}" />`)}</g>
            <circle class="cercle-final" cx="200" cy="150" r="95" data-see-des="4" />
            ${POINTS.map((p, i) => html`<g class="pt${p.moi ? ' pt-moi' : ''}" style="${vars(p)}"${i === 0 ? html` data-effet="points-en-cercle"` : ''}><circle r="${p.moi ? 11 : 9}" /></g>`)}
          </svg>
        </div>
        <figcaption class="socle-sr">${c.t('constellations.etapes.schema')}</figcaption>
      </figure>
    </div>
  </div>
</section>

${fin(c, { titre: c.t('constellations.fin.titre'), texte: c.t('constellations.fin.texte'), sujet: 'constellations' })}
`;
};
