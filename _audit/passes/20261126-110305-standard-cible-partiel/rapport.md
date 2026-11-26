# Rapport d’audit

Projet : `guida-maquette` · 26/11/2026 12:03:52 · 1 min · 2 page(s) · audit standard ciblé sur /,/constellations (étapes : fichiers, mesures)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261126-110305-standard-cible-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **3**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (22), balayage (2)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261126-102309-rapide | rapide | toutes | toutes | 14 | 12 | 1 | échecs |
| 20261126-102914-rapide-cible | rapide | /coaching,/constellations,/formations,/rendez-vous,/404 | toutes | 16 | 15 | 1 | échecs |
| 20261126-104300-standard | standard | toutes | toutes | 2 | 10 | 1 | échecs |
| **20261126-110305-standard-cible-partiel** (celle-ci) | standard | /,/constellations | fichiers, mesures | 1 | 3 | 0 | échecs |

## Échecs

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/constellations` — .see__etape:nth-child(4) > .see__n — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `rendez-vous.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (2)

- **section sans visuel** — `/` — section#besoin « PAR OÙ COMMENCER De quoi avez-vous besoin aujourd' » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/constellations` — section#situations « POUR QUELLES SITUATIONS ? Quand quelque chose se r » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 77 min de travail pour 115 min de budget, 18 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /constellations.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/constellations --seulement=fichiers,mesures
```
