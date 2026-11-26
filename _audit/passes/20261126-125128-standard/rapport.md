# Rapport d’audit

Projet : `guida-maquette` · 26/11/2026 14:09:33 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261126-125128-standard` · version ?v=2
- Échecs : **4**
- À regarder : **12**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (9), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (10), films des épinglages (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (8), souris immobile (4), vitesse (5), captures (1)

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

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/` — ul.boussole-choix > li:nth-of-type(1) > button.boussole-btn > span.boussole-libelle:nth-of-type(2) « Ce qui est juste pour moi » — avec ul.boussole-choix > li:nth-of-type(2) > button.boussole-btn > span.boussole-n:nth-of-type(1) « 2 » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_

### élément recouvert (1)

- **élément recouvert** — `/` — div.boussole:nth-of-type(2) > ul.boussole-choix > li:nth-of-type(1) > button.boussole-btn « 1 Ce qui est juste pour moi » — par ul.boussole-choix > li:nth-of-type(2) > button.boussole-btn > span.boussole-n:nth-of-type(1) « 2 » _(390×844 normal)_

### débordement horizontal (1)

- **débordement horizontal** — `/` — page large de 428 px — largeurs : 400, 440 px _(balayage 320–1920 normal)_

### section sans effet au défilement (1)

- **section sans effet au défilement** — `/rendez-vous` — section#debut.rdv-tete — ses effets (cercle-rdv) ne bougent pas, ou sont cachés à cette taille _(1366×768 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/rendez-vous` — 0 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(1366×768)_

### typographie française (1)

- **typographie française** — `/` — div#reponse-doute > p.besoin-q:nth-of-type(1) « « Vous doutez de ce qui est juste pour vous » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### section sans visuel (4)

- **section sans visuel** — `/constellations` — section#situations « POUR QUELLES SITUATIONS ? Quand quelque chose se r » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/formations` — section#formations « LES FORMATIONS Onze formations, pour les équipes e » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/rendez-vous` — section#debut « Parlons‑en. 0479 21 53 83 Appeler Mariève Votre de » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/rendez-vous` — section#debut « PRENDRE RENDEZ-VOUS Parlons‑en. 0479 21 53 83 Appe » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (5.6 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 21 min de travail pour 110 min de budget, 0 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /coaching, /constellations, /formations, /rendez-vous.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2898 ms depuis le premier octet
- Ouverture /coaching (1366×768) : 2696 ms depuis le premier octet
- Ouverture /constellations (1366×768) : 2761 ms depuis le premier octet
- film de l'ouverture /constellations 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /formations (1366×768) : 2718 ms depuis le premier octet
- Ouverture /rendez-vous (1366×768) : 2888 ms depuis le premier octet
- film de l'ouverture /rendez-vous 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2895 ms depuis le premier octet
- Ouverture /coaching (390×844) : 2717 ms depuis le premier octet
- Ouverture /constellations (390×844) : 2700 ms depuis le premier octet
- film de l'ouverture /constellations 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /formations (390×844) : 2683 ms depuis le premier octet
- Ouverture /rendez-vous (390×844) : 2896 ms depuis le premier octet
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 480 images d’intro, 12 de voile et 134 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /coaching : aucune section épinglée ou plein écran.
- Tient dans l'écran /formations : aucune section épinglée ou plein écran.
- Tient dans l'écran /rendez-vous : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 398, tâche la plus longue 0 ms
- Fluidité /coaching 1366×768 (molette) : 0 % d'images lentes sur 290, tâche la plus longue 0 ms
- Fluidité /constellations 1366×768 (molette) : 0 % d'images lentes sur 295, tâche la plus longue 0 ms
- Fluidité /formations 1366×768 (molette) : 0 % d'images lentes sur 235, tâche la plus longue 0 ms
- Fluidité /rendez-vous 1366×768 (molette) : 0 % d'images lentes sur 117, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1427, tâche la plus longue 0 ms
- Fluidité /coaching 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /constellations 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /formations 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /rendez-vous 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Vitesse / : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /coaching : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /constellations : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /formations : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /rendez-vous : 0.33 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/rendez-vous --seulement=fichiers,mesures,mouvement
```
