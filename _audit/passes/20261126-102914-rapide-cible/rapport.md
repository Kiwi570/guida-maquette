# Rapport d’audit

Projet : `guida-maquette` · 26/11/2026 11:41:01 · 12 min · 5 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /coaching,/constellations,/formations,/rendez-vous,/404

## Résumé

- Statut : **16 échec(s)**
- Passe : `20261126-102914-rapide-cible` · version ?v=1
- Échecs : **16**
- À regarder : **15**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (30), films d’ouverture (8), films de transition (8), bords de l’écran (4), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens vers la page en cours (4), changements de hauteur (4), tient dans l’écran (2), films des épinglages (1), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (8), souris immobile (3), vitesse (4), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261126-102309-rapide | rapide | toutes | toutes | 14 | 12 | 1 | échecs |
| **20261126-102914-rapide-cible** (celle-ci) | rapide | /coaching,/constellations,/formations,/rendez-vous,/404 | toutes | 16 | 15 | 1 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (4)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div > p.actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Revenir à l'accueil » _(844×390 normal)_
- **premier écran : bouton principal hors de l’écran** — `/constellations` — section#debut > p.actions:nth-of-type(3) > a.bouton « Prendre rendez-vous » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/formations` — section#debut > div:nth-of-type(1) > p.actions:nth-of-type(3) > a.bouton « Demander un devis » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/rendez-vous` — section#debut > div.rdv-intro:nth-of-type(1) > p.actions:nth-of-type(4) > a.bouton « Appeler Mariève » _(320×568 sansJs)_

### premier écran : information clé hors de l’écran (5)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div > p.texte-doux:nth-of-type(4) « 0479 21 53 83 » _(844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/coaching` — section#debut > div > p.texte-doux:nth-of-type(4) « Tarif et durée précisés au premier échange » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/constellations` — section#debut > p.info:nth-of-type(4) « Constellation individuelle, sur rendez-vous » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/formations` — section#debut > div.fo-chiffres:nth-of-type(2) > span.texte-doux « Dates et thèmes annoncés sur les réseaux sociaux » _(844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/rendez-vous` — section#debut > div.rdv-intro:nth-of-type(1) > p.info:nth-of-type(3) « 0479 21 53 83 » _(320×568 sansJs)_

### zone tactile sous 44 px (4)

- **zone tactile sous 44 px** — `/404` — section#debut > div > p.texte-doux:nth-of-type(4) > a « 0479 21 53 83 » — 107 × 19 px _(390×844 sansWebgl, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/rendez-vous` — section#debut > div.rdv-intro:nth-of-type(1) > p.info:nth-of-type(3) > a.rdv-tel « 0479 21 53 83 » — 158 × 36 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/rendez-vous` — dl.coord-liste.fx-fini > div:nth-of-type(1) > dd > a « 0479 21 53 83 » — 122 × 22 px _(390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **zone tactile sous 44 px** — `/rendez-vous` — dl.coord-liste > div:nth-of-type(1) > dd > a « 0479 21 53 83 » — 122 × 22 px _(390×844 sansJs, 320×568 sansJs)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/formations` — section#debut > div.fo-chiffres:nth-of-type(2) > p:nth-of-type(1) « 6 ateliers » — avec section#debut > div.fo-chiffres:nth-of-type(2) > p:nth-of-type(2) « 11 formations » _(1366×768 normal, 320×568 sansJs)_

### section sans effet au défilement (2)

- **section sans effet au défilement** — `/constellations` — section#debut.cs-tete — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_
- **section sans effet au défilement** — `/formations` — section#debut.fo-tete — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_

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

### section sans visuel (6)

- **section sans visuel** — `/constellations` — section#debut « CONSTELLATIONS FAMILIALES ET SYSTÉMIQUES Trouver s » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/constellations` — section#situations « POUR QUELLES SITUATIONS ? Quand quelque chose se r » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/constellations` — section#debut « Trouver sa place dans son histoire. Prendre rendez » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal)_
- **section sans visuel** — `/formations` — section#debut « FORMATIONS ET ATELIERS Des ateliers pour avancer,  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/formations` — section#debut « Des ateliers pour avancer, seul ou en équipe. Dema » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal)_
- **section sans visuel** — `/rendez-vous` — section#debut « PRENDRE RENDEZ-VOUS Parlons‑en. 0479 21 53 83 Appe » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal)_

### photo moyenne affichée en très grand (1)

- **photo moyenne affichée en très grand** — `/formations` — div.conteneur.fo-liste-grille > figure.media > picture > img « Une formation en entreprise » — salle-reunion (3/5, 65 % de l'écran) : une image notée 4 ou 5 à cette taille _(390×844 normal)_

### texte de contenu sous 13 px (ordinateur) (1)

- **texte de contenu sous 13 px (ordinateur)** — `/rendez-vous` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · POUR QUI ? » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### typographie française (2)

- **typographie française** — `/rendez-vous` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere.est-actif:nth-of-type(1) > span.fpe__nom:nth-of-type(2) « Pour qui ? » — espace insécable manquante avant ou après « ? » _(1366×768 normal)_
- **typographie française** — `/rendez-vous` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · POUR QUI ? » — espace insécable manquante avant ou après « ? » _(1366×768 normal)_

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
- Audit rapide : étapes lourdes sur /coaching, /constellations, /formations, /rendez-vous.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture /coaching (1366×768) : 2685 ms depuis le premier octet
- Ouverture /constellations (1366×768) : 2694 ms depuis le premier octet
- Ouverture /formations (1366×768) : 2705 ms depuis le premier octet
- Ouverture /rendez-vous (1366×768) : 2863 ms depuis le premier octet
- film de l'ouverture /rendez-vous 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /coaching (390×844) : 2728 ms depuis le premier octet
- Ouverture /constellations (390×844) : 2749 ms depuis le premier octet
- Ouverture /formations (390×844) : 2704 ms depuis le premier octet
- Ouverture /rendez-vous (390×844) : 2903 ms depuis le premier octet
- Bords de l’écran : 328 images d’intro, 9 de voile et 89 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun lien profond vers une section d’une autre page.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /coaching : aucune section épinglée ou plein écran.
- Tient dans l'écran /formations : aucune section épinglée ou plein écran.
- Tient dans l'écran /rendez-vous : aucune section épinglée ou plein écran.
- Fluidité /coaching 1366×768 (molette) : 0 % d'images lentes sur 288, tâche la plus longue 0 ms
- Fluidité /constellations 1366×768 (molette) : 0 % d'images lentes sur 289, tâche la plus longue 0 ms
- Fluidité /formations 1366×768 (molette) : 0 % d'images lentes sur 229, tâche la plus longue 0 ms
- Fluidité /rendez-vous 1366×768 (molette) : 0 % d'images lentes sur 132, tâche la plus longue 0 ms
- Fluidité /coaching 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /constellations 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /formations 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /rendez-vous 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Vitesse /coaching : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /constellations : 0.27 s de calcul au chargement (téléphone ralenti).
- Vitesse /formations : 0.32 s de calcul au chargement (téléphone ralenti).
- Vitesse /rendez-vous : 0.32 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --pages=/,/404,/coaching,/constellations,/formations,/rendez-vous --seulement=fichiers,mesures,mouvement
```
