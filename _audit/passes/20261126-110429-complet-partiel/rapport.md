# Rapport d’audit

Projet : `guida-maquette` · 26/11/2026 12:11:23 · 7 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **7 échec(s)**
- Passe : `20261126-110429-complet-partiel` · version ?v=1
- Échecs : **7**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5), tient dans l’écran (16), films des épinglages (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261126-102309-rapide | rapide | toutes | toutes | 14 | 12 | 1 | échecs |
| 20261126-102914-rapide-cible | rapide | /coaching,/constellations,/formations,/rendez-vous,/404 | toutes | 16 | 15 | 1 | échecs |
| 20261126-104300-standard | standard | toutes | toutes | 2 | 10 | 1 | échecs |
| 20261126-110305-standard-cible-partiel | standard | /,/constellations | fichiers, mesures | 1 | 3 | 0 | échecs |
| 20261126-110404-standard-cible-partiel | standard | /constellations | mesures | 0 | 1 | 0 | complet |
| **20261126-110429-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 7 | 3 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(4) « Un premier échange de quelques minutes : 0479 21 5 » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div > p.texte-doux:nth-of-type(4) « 0479 21 53 83 » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/coaching` — section#debut > div:nth-of-type(1) > p.texte-doux:nth-of-type(4) « Tarif et durée précisés au premier échange » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/rendez-vous` — section#debut > div.rdv-intro:nth-of-type(1) > p.info:nth-of-type(3) « 0479 21 53 83 » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### texte coupé (2)

- **texte coupé** — `/rendez-vous` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Coordonnées » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **texte coupé** — `/rendez-vous` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__nom:nth-of-type(2) « Récapitulatif » — le contenu dépasse de son cadre _(1000×560 normal, 1000×560 sansWebgl)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/rendez-vous` — section#debut > div.rdv-intro:nth-of-type(1) > p.actions:nth-of-type(4) > a.bouton « Appeler Mariève » _(1000×560 normal, 1000×560 sansJs, 1280×720 sansJs, 1000×560 sansWebgl)_

## À regarder

### section sans visuel (3)

- **section sans visuel** — `/` — section#besoin « PAR OÙ COMMENCER De quoi avez-vous besoin aujourd' » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 320×568 sansJs, +9)_
- **section sans visuel** — `/constellations` — section#situations « POUR QUELLES SITUATIONS ? Quand quelque chose se r » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/rendez-vous` — section#debut « Parlons‑en. 0479 21 53 83 Appeler Mariève Votre de » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 844×390 normal, 320×568 sansJs, 375×667 sansJs, 320×568 sansWebgl, +3)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /coaching : aucune section épinglée ou plein écran.
- Tient dans l'écran /formations : aucune section épinglée ou plein écran.
- Tient dans l'écran /rendez-vous : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/coaching,/rendez-vous --seulement=fichiers,mesures
```
