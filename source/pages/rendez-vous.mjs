/* Prendre rendez-vous : l'outil d'abord. Appel direct et formulaire en étapes (module formulaire-par-etapes),
   puis coordonnées et plan schématique de Héron. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'rendez-vous', fichier: 'rendez-vous', imagePartage: 'marieve-noir-585.webp' };

const ICONES = {
  moi: html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="11" r="5"/><path d="M7 27c1-6 5-9 9-9s8 3 9 9"/></svg>`,
  enfant: html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><path d="M5 9l11-5 11 5-11 5z"/><path d="M10 12v6c3 3 9 3 12 0v-6"/></svg>`,
  equipe: html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><circle cx="10" cy="12" r="4"/><circle cx="22" cy="12" r="4"/><path d="M3 26c1-5 4-7 7-7s6 2 7 7M15 26c1-5 4-7 7-7s6 2 7 7"/></svg>`,
  ecole: html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><path d="M4 27V13l12-7 12 7v14"/><path d="M12 27v-7h8v7"/></svg>`,
};

/* Plan schématique (repère 600 × 400), positions tirées des coordonnées des villes. */
const plan = (c) => html`<svg viewBox="0 0 600 400" role="img" aria-label="${c.s('rendezvous.carte.alt')}" data-fx="trace">
  <path class="meuse" d="M40 318 C 110 305 160 296 214 290 S 290 268 309 258 S 350 224 363 214 S 420 178 448 166 S 500 136 560 100" data-fx-trait />
  <path class="route" d="M40 296 L 132 200 L 204 192 L 316 164 L 448 127 L 560 96" data-fx-trait />
  <g class="villes">
    <circle class="ville" cx="64" cy="313" r="5" /><text x="74" y="340">Namur</text>
    <circle class="ville" cx="214" cy="288" r="5" /><text x="190" y="318">Andenne</text>
    <circle class="ville" cx="309" cy="256" r="5" /><text x="320" y="282">Huy</text>
    <circle class="ville" cx="527" cy="111" r="6" /><text x="500" y="146">Liège</text>
    <circle class="ville" cx="204" cy="65" r="5" /><text x="216" y="70">Hannut</text>
    <text class="petit" x="96" y="186">E42</text>
    <text class="petit" x="398" y="214">Meuse</text>
  </g>
  <circle class="onde-heron" cx="216" cy="222" r="14" data-boucle-css />
  <circle class="heron" cx="216" cy="222" r="8" />
  <text x="234" y="236" style="font-weight:600">Héron</text>
</svg>`;

export default (c) => {
  const k = c.site.contact;
  const f = (cle) => c.t(`rendezvous.form.${cle}`);
  const sujets = ['professionnel', 'vie', 'scolaire', 'constellations', 'formation', 'autre'];
  return html`
<section class="rdv-tete" id="debut">
  <div class="rdv-intro">
    <div class="rdv-portrait">
      ${c.media({ nom: 'marieve-noir', alt: c.donnees.images?.['marieve-noir']?.alt || '', cadrage: '50% 22%', priorite: true, sizes: '132px', attrs: 'data-iris-centre="disque"' })}
      <svg viewBox="0 0 132 132" aria-hidden="true" data-effet="cercle-rdv"><circle cx="66" cy="66" r="65" /></svg>
    </div>
    <p class="surtitre" data-apparait>${c.t('rendezvous.tete.surtitre')}</p>
    <h1 class="page-titre" data-anime="gsap"><span class="hl"><span class="hl-in">${c.t('rendezvous.tete.titre')}</span></span></h1>
    <p class="page-intro" data-apparait>${c.t('rendezvous.tete.texte')}</p>
    <p class="info" data-info-cle data-apparait><a class="rdv-tel" href="tel:${k.telephoneLien}">${k.telephone}</a></p>
    <p class="actions" data-apparait><a class="bouton" href="tel:${k.telephoneLien}" data-action-principale>${c.t('rendezvous.tete.action')}</a></p>
  </div>

  <div class="fpe" data-module="formulaire-par-etapes" id="demande">
    <div class="fpe__carton" data-apparait>
      <h2 class="visuellement-cache">${f('titre')}</h2>
      <form class="fpe__form" action="#" method="post" novalidate>
        <div class="fpe__progression">
          <ol class="fpe__reperes" aria-label="Progression"></ol>
          <div class="fpe__barre" aria-hidden="true"><span></span></div>
          <p class="fpe__etat" aria-live="polite"></p>
        </div>

        <fieldset class="fpe__etape" data-etape="${c.s('rendezvous.form.etapePour')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${f('pourQuestion')}</h3></legend>
          <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('rendezvous.form.etapePour')}">
            ${[['moi', 'pourMoi'], ['enfant', 'pourEnfant'], ['equipe', 'pourEquipe'], ['ecole', 'pourEcole']].map(([v, cle], i) => html`<label class="fpe__carte"><input type="radio" name="pour" value="${v}"${i === 0 ? html` required` : ''}>${ICONES[v]}<span class="fpe__carte-titre">${f(cle)}</span><span class="fpe__carte-texte">${f(cle + 'Texte')}</span></label>`)}
          </div>
        </fieldset>

        <fieldset class="fpe__etape" data-etape="${c.s('rendezvous.form.etapeSujet')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${f('sujetQuestion')}</h3></legend>
          <div class="fpe__groupe fpe__puces" data-libelle="${c.s('rendezvous.form.etapeSujet')}">
            ${sujets.map((s, i) => html`<label class="fpe__puce"><input type="radio" name="sujet" value="${s}"${i === 0 ? html` required` : ''}><span class="fpe__choix-texte">${f(s)}</span></label>`)}
          </div>
        </fieldset>

        <fieldset class="fpe__etape" data-etape="${c.s('rendezvous.form.etapeCoord')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${f('coordQuestion')}</h3></legend>
          <div class="fpe__grille">
            <div class="fpe__champ"><label for="rdv-prenom">${f('prenom')} <i aria-hidden="true">*</i></label><input id="rdv-prenom" name="prenom" autocomplete="given-name" required></div>
            <div class="fpe__champ"><label for="rdv-nom">${f('nom')} <i aria-hidden="true">*</i></label><input id="rdv-nom" name="nom" autocomplete="family-name" required></div>
            <div class="fpe__champ"><label for="rdv-tel">${f('tel')} <i aria-hidden="true">*</i></label><input id="rdv-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" pattern="[0-9 +().\\-]{8,20}" required></div>
            <div class="fpe__champ"><label for="rdv-email">${f('email')}</label><input id="rdv-email" name="email" type="email" autocomplete="email"></div>
          </div>
          <div class="fpe__champ"><label for="rdv-message">${f('message')}</label><textarea id="rdv-message" name="message" rows="4" placeholder="${c.s('rendezvous.form.messageAide')}"></textarea></div>
          <label class="fpe__case"><input type="checkbox" name="accord" value="oui" required data-libelle="Accord" data-hors-recap><span class="fpe__choix-texte">${f('accord')} <i aria-hidden="true">*</i></span></label>
          <p class="fpe__aide mention-donnees">${f('donnees')}</p>
        </fieldset>

        <fieldset class="fpe__etape" data-etape="${c.s('rendezvous.form.etapeRecap')}" data-recap>
          <legend class="fpe__legende"><h3 class="fpe__titre">${f('recapQuestion')}</h3></legend>
          <div class="fpe__recap"><p>…</p></div>
        </fieldset>

        <div class="fpe__nav">
          <button class="fpe__bouton fpe__bouton--ligne" type="button" data-precedent>${f('retour')}</button>
          <button class="fpe__bouton" type="button" data-suivant>${f('continuer')}</button>
          <button class="fpe__bouton" type="submit">${f('envoyer')}</button>
        </div>
      </form>

      <div class="fpe__fin" hidden>
        <svg class="fpe__coche" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28"/><path d="M20 33l8 8 16-17"/></svg>
        <h3>${f('merci')}</h3>
        <p data-resume></p>
        <p>${f('simule')}</p>
        <div class="fpe__fin-actions"><button class="fpe__bouton fpe__bouton--ligne" type="button" data-recommencer>${f('recommencer')}</button></div>
      </div>
    </div>
  </div>
</section>

<section class="section section--ciel" id="coordonnees">
  <div class="conteneur coord-grille">
    <div>
      <p class="surtitre">${c.t('rendezvous.coord.titre')}</p>
      <h2 data-anime="lignes">${c.t('rendezvous.carte.titre')}</h2>
      <dl class="coord-liste" data-anime="cascade">
        <div><dt>${c.t('rendezvous.coord.telephone')}</dt><dd><a href="tel:${k.telephoneLien}">${k.telephone}</a></dd></div>
        <div><dt>${c.t('rendezvous.coord.email')}</dt><dd class="selectionnable">${k.email}</dd></div>
        <div><dt>${c.t('rendezvous.coord.adresse')}</dt><dd>${k.adresse}</dd></div>
        <div><dt>${c.t('commun.reseaux')}</dt><dd><a href="https://www.facebook.com/coaching.guida/" target="_blank" rel="noopener">Facebook</a> · <a href="https://www.instagram.com/marievegerard/" target="_blank" rel="noopener">Instagram</a> · <a href="https://www.tiktok.com/@marievegerardcoaching" target="_blank" rel="noopener">TikTok</a></dd></div>
      </dl>
      <p class="texte-doux" style="margin-top:22px" data-anime>${c.t('rendezvous.coord.horaires')}</p>
    </div>
    <figure class="plan" data-visuel>
      ${plan(c)}
      <figcaption class="visuellement-cache">${c.t('rendezvous.carte.texte')}</figcaption>
    </figure>
  </div>
</section>
`;
};
