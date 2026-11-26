/* Appel final commun à toutes les pages : portrait (ou rond du logo) dans un cercle qui se dessine, titre, actions,
   coordonnées avec copie de l'adresse e-mail, et retour vers les situations de l'accueil. Fond lin : la section « personne ». */
import { html } from '../../outils/gabarit.mjs';

export function copierEmail(c) {
  const k = c.site.contact;
  return html`<span class="email-ligne"><span class="selectionnable">${k.email}</span><button type="button" class="copier" data-copier="${k.email}" data-copie="${c.s('commun.copie')}"><span data-libelle-bouton>${c.t('commun.copier')}</span></button></span>`;
}

export function fin(c, { surtitre, titre, texte, sujet = '', logo = false } = {}) {
  const k = c.site.contact;
  return html`<section class="section section--lin" id="fin">
  <div class="conteneur fin-bloc">
    <div class="fin-portrait">
      ${logo
        ? html`<span class="disque-logo fin-disque"><img src="/assets/images/logo-guida.svg" alt="" width="108" height="64" loading="lazy"></span>`
        : c.media({ nom: 'marieve-noir', alt: c.s('accueil.qui.alt'), cadrage: '50% 22%', sizes: '210px', classe: 'fin-media' })}
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
      ${c.page.cle !== 'accueil' ? html`<p class="fin-revoir">${c.lien('accueil', { ancre: 'besoin', classe: 'lien-fleche', texte: c.t('commun.fin.revoir') })}</p>` : ''}
    </div>
    <div class="fin-coord" data-anime>
      <span>${k.adresse}</span>
      <a href="tel:${k.telephoneLien}">${k.telephone}</a>
      ${copierEmail(c)}
    </div>
  </div>
</section>`;
}
