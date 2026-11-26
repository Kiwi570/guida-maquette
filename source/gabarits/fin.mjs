/* Appel final commun à toutes les pages : portrait dans un cercle qui se dessine, titre, actions, coordonnées. */
import { html } from '../../outils/gabarit.mjs';

export function fin(c, { surtitre, titre, texte, sujet = '' } = {}) {
  const k = c.site.contact;
  return html`<section class="section section--ciel" id="fin">
  <div class="conteneur fin-bloc">
    <div class="fin-portrait">
      ${c.media({ nom: 'marieve-noir', alt: c.s('accueil.qui.titre'), cadrage: '50% 22%', sizes: '210px', classe: 'fin-media' })}
      <svg viewBox="0 0 200 200" aria-hidden="true" data-fx="trace"><circle cx="100" cy="100" r="98" /></svg>
    </div>
    <div class="fin-texte">
      <p class="surtitre">${surtitre ?? c.t('commun.fin.surtitre')}</p>
      <h2 data-anime="lignes">${titre ?? c.t('commun.fin.titre')}</h2>
      <p data-anime>${texte ?? c.t('commun.fin.texte')}</p>
      <p class="actions fin-actions" data-anime>
        ${c.lien('rendez-vous', { params: sujet ? `sujet=${sujet}` : '', classe: 'bouton', texte: c.t('commun.fin.rdv'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour" href="tel:${k.telephoneLien}">${c.t('commun.fin.appel')}</a>
      </p>
    </div>
    <div class="fin-coord" data-anime>
      <span>${k.adresse}</span>
      <a href="tel:${k.telephoneLien}">${k.telephone}</a>
      <span class="selectionnable">${k.email}</span>
    </div>
  </div>
</section>`;
}
