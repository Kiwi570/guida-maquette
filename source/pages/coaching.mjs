/* Coaching : ouverture en trois cercles (professionnel, de vie, scolaire), sommaire collant, un volet par coaching. */
import { html } from '../../outils/gabarit.mjs';
import { fin } from '../gabarits/fin.mjs';

export const page = { cle: 'coaching', fichier: 'coaching', imagePartage: 'cabinet-1200.webp' };

const VOLETS = [
  { cle: 'professionnel', image: 'grok/pro-bureau', cadrage: '50% 45%' },
  { cle: 'vie', image: 'grok/vie-chemin', cadrage: '50% 55%' },
  { cle: 'scolaire', image: 'grok/scolaire-devoirs', cadrage: '50% 50%' },
];

const encadres = (c, liste) => html`<ul class="encadres" data-anime="cascade">${liste.map((e) => html`<li class="encadre">
  ${e.image ? c.media({ nom: e.image, alt: '', sizes: '(max-width: 760px) 90vw, 380px' }) : ''}
  <h3>${e.titre}</h3><p>${e.texte}</p>
  ${e.page ? c.lien(e.page, { classe: 'lien-fleche', texte: c.t('commun.decouvrir') }) : ''}
</li>`)}</ul>`;

export default (c) => {
  const d = c.donnees.coaching;
  return html`
<section class="co-tete" id="debut">
  <div>
    <p class="surtitre" data-apparait>${c.t('coaching.tete.surtitre')}</p>
    <h1 class="page-titre" data-anime="gsap"><span class="hl"><span class="hl-in">${c.t('coaching.tete.titre')}</span></span></h1>
    <p class="intro" data-apparait>${c.t('coaching.tete.texte')}</p>
    <p class="actions" data-apparait>${c.lien('rendez-vous', { classe: 'bouton', texte: c.t('coaching.tete.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    <p class="texte-doux" data-info-cle data-apparait>${c.t('coaching.tete.info')}</p>
  </div>
  <div class="trois" data-effet="trois-cercles">
    ${VOLETS.map((v, i) => html`<a href="#${v.cle}" data-sans-transition>${c.media({ nom: v.image, alt: '', cadrage: v.cadrage, sizes: '(max-width: 900px) 30vw, 220px', priorite: i === 1, attrs: i === 1 ? 'data-iris-centre="disque"' : '' })}<span>${c.t(`coaching.${v.cle}.nom`)}</span></a>`)}
  </div>
</section>

<nav class="co-nav" aria-label="${c.s('coaching.tete.sommaire')}">
  <ul>${VOLETS.map((v) => html`<li><a href="#${v.cle}" data-sans-transition>${c.t(`coaching.${v.cle}.nom`)}</a></li>`)}</ul>
</nav>

<section class="section volet" id="professionnel">
  <div class="conteneur volet-grille">
    <div>
      <p class="surtitre">${c.t('coaching.professionnel.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('coaching.professionnel.titre')}</h2>
      <p class="intro-section" data-anime>${c.t('coaching.professionnel.texte')}</p>
      <h3 class="sous">${c.t('coaching.professionnel.themes')}</h3>
      <ul class="puces" data-anime="cascade">${d.professionnel.themes.map((x) => html`<li>${x}</li>`)}</ul>
      <p class="actions" style="margin-top:28px" data-anime>${c.lien('rendez-vous', { params: 'sujet=professionnel', classe: 'bouton', texte: c.t('commun.enParler') })}</p>
    </div>
    <div class="volet-visuel">
      ${c.media({ nom: 'grok/pro-equipe', alt: '', sizes: '(max-width: 900px) 90vw, 560px', attrs: 'data-fx="parallaxe"' })}
    </div>
  </div>
  <div class="conteneur">${encadres(c, d.professionnel.encadres)}</div>
</section>

<section class="section section--ciel volet volet--inverse" id="vie">
  <div class="conteneur volet-grille">
    <div>
      <p class="surtitre">${c.t('coaching.vie.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('coaching.vie.titre')}</h2>
      <p class="intro-section" data-anime>${c.t('coaching.vie.texte')}</p>
      <h3 class="sous">${c.t('coaching.vie.situations')}</h3>
      <ul class="puces" data-anime="cascade">${d.vie.situations.map((x) => html`<li>${x}</li>`)}</ul>
      <h3 class="sous">${c.t('coaching.vie.themes')}</h3>
      <ul class="puces" data-anime="cascade">${d.vie.themes.map((x) => html`<li>${x}</li>`)}</ul>
      <p class="actions" style="margin-top:28px" data-anime>${c.lien('rendez-vous', { params: 'sujet=vie', classe: 'bouton', texte: c.t('commun.enParler') })}</p>
    </div>
    <div class="volet-visuel">
      ${c.media({ nom: 'grok/vie-bottes', alt: '', sizes: '(max-width: 900px) 90vw, 560px', attrs: 'data-fx="parallaxe"' })}
    </div>
  </div>
  <div class="conteneur">${encadres(c, d.vie.encadres)}</div>
</section>

<section class="section volet" id="scolaire">
  <div class="conteneur volet-grille">
    <div>
      <p class="surtitre">${c.t('coaching.scolaire.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('coaching.scolaire.titre')}</h2>
      <p class="intro-section" data-anime>${c.t('coaching.scolaire.texte')}</p>
      <h3 class="sous">${c.t('coaching.scolaire.themes')}</h3>
      <ul class="puces" data-anime="cascade">${d.scolaire.themes.map((x) => html`<li>${x}</li>`)}</ul>
      <blockquote class="volet-citation" data-anime>${c.t('coaching.scolaire.citation')}</blockquote>
      <p class="actions" style="margin-top:28px" data-anime>${c.lien('rendez-vous', { params: 'sujet=scolaire&pour=enfant', classe: 'bouton', texte: c.t('commun.enParler') })}</p>
    </div>
    <div class="volet-visuel">
      ${c.media({ nom: 'grok/scolaire-methode', alt: '', sizes: '(max-width: 900px) 90vw, 560px', attrs: 'data-fx="parallaxe"' })}
      ${c.media({ nom: 'bocal', alt: c.s('coaching.scolaire.legende'), cadrage: '55% 50%', classe: 'media--rond', sizes: '(max-width: 900px) 45vw, 270px', attrs: 'data-fx="zoom"' })}
    </div>
  </div>
  <div class="conteneur">${encadres(c, d.scolaire.encadres)}</div>
</section>

${fin(c)}
`;
};
