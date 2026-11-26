# Rapport d’audit

Projet : `guida-maquette` · 26/11/2026 11:27:54 · 5 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison

## Résumé

- Statut : **14 échec(s)**
- Passe : `20261126-102309-rapide` · version ?v=1
- Échecs : **14**
- À regarder : **12**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (8), liens vers la page en cours (1), changements de hauteur (1), tient dans l’écran (2), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (8), souris immobile (1), vitesse (1), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (5)

- **image de partage** — `coaching.html` — fichier introuvable : /assets/partage/coaching-fr.jpg
- **image de partage** — `constellations.html` — fichier introuvable : /assets/partage/constellations-fr.jpg
- **image de partage** — `formations.html` — fichier introuvable : /assets/partage/formations-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `rendez-vous.html` — fichier introuvable : /assets/partage/rendez-vous-fr.jpg

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(4) « Un premier échange de quelques minutes : 0479 21 5 » _(844×390 normal)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — div.conteneur > div.acc-tete > div > p.surtitre « LES ACCOMPAGNEMENTS » — avec div.conteneur > div.acc-tete > div > h2 « Au travail, dans la vie, à l'école, en famille. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#fin > div.conteneur.fin-bloc > div.fin-texte:nth-of-type(2) > p.surtitre:nth-of-type(1) « UNE QUESTION ? ENVIE D'EN PARLER ? » — avec section#fin > div.conteneur.fin-bloc > div.fin-texte:nth-of-type(2) > h2 « Un premier échange de quelques minutes, pour faire » _(320×568 sansJs)_

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/` — section#fin > div.conteneur.fin-bloc > div.fin-coord:nth-of-type(3) > a « 0479 21 53 83 » — 358 × 26 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_

### accessibilité (axe) : aria-prohibited-attr (1)

- **accessibilité (axe) : aria-prohibited-attr** — `/` — .mmm__texte — Elements must only use permitted ARIA attributes _(1366×768 normal, 390×844 normal)_

### transition : élément visible, caché puis réaffiché (flash) (4)

- **transition : élément visible, caché puis réaffiché (flash)** — `/ → /coaching` — section#debut > nav.trois > a « Illustration générée Professionnel » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/ → /coaching` — nav.trois > a > figure.media « Illustration générée » _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/ → /coaching` — figure.media > picture > img _(1366×768 film, 390×844 film)_
- **transition : élément visible, caché puis réaffiché (flash)** — `/ → /coaching` — section#debut > nav.trois > a « Illustration générée Scolaire » _(1366×768 film, 390×844 film)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes/module.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (4)

- **texte de contenu sous 13 px (ordinateur)** — `/` — li:nth-of-type(1) > a.acc-carte > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li:nth-of-type(2) > a.acc-carte > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li:nth-of-type(3) > a.acc-carte > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#citation > div > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (1)

- **section sans visuel** — `/` — section#besoin « PAR OÙ COMMENCER De quoi avez-vous besoin aujourd' » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (5.5 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 39 min de travail pour 75 min de budget, 18 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2889 ms depuis le premier octet
- Ouverture / (390×844) : 2893 ms depuis le premier octet
- Bords de l’écran : 80 images d’intro, 2 de voile et 22 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 390, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1416, tâche la plus longue 0 ms
- Vitesse / : 0.36 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,films
```
