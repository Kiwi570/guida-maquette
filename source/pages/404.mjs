/* Page 404 : un poteau indicateur à la fourche de deux chemins. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  <div>
    <p class="surtitre" data-apparait>404</p>
    <h1 class="page-titre" data-anime="gsap"><span class="hl"><span class="hl-in">${c.t('introuvable.titre')}</span></span></h1>
    <p class="page-intro" data-apparait>${c.t('introuvable.texte')}</p>
    <p class="actions" data-apparait>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('rendez-vous', { classe: 'lien-fleche', texte: c.t('commun.actionEntete') })}</p>
    <p class="texte-doux" data-info-cle data-apparait><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
  </div>
  ${c.media({ nom: 'grok/carrefour-404', alt: c.donnees.images?.['grok/carrefour-404']?.alt || '', priorite: true, sizes: '(max-width: 760px) 92vw, 640px', attrs: 'data-iris-centre data-fx="zoom"' })}
</section>
`;
