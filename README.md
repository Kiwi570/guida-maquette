# Coaching Guida : maquette

Maquette de présentation du nouveau site de **Coaching Guida** (Mariève Gérard, Héron), direction « Le cercle ».
En ligne : https://guida-maquette.vercel.app (adresse à mettre dans le module Wix « Intégrer un site »).

## Pages

| Page | Adresse | Contenu |
|---|---|---|
| Accueil | `/` | Portrait dans le cercle du logo, « De quoi avez-vous besoin aujourd'hui ? », accompagnements, qui suis-je et parcours, approche, citation en plein écran, écoles et entreprises, appel final |
| Coaching | `/coaching` | Trois cercles (professionnel, de vie, scolaire), un volet par coaching avec thèmes et encadrés |
| Constellations familiales | `/constellations` | La salle dans une arche, de quoi il s'agit, situations, les quatre étapes en schéma épinglé |
| Formations et ateliers | `/formations` | Bandeau de la grange, six ateliers filtrables, onze formations, IFAPME, devis |
| Prendre rendez-vous | `/rendez-vous` | Appel direct, formulaire en quatre étapes (simulé), coordonnées et plan de Héron |
| 404 | toute adresse inconnue | Le poteau indicateur |

## Construire

- Textes : `donnees/textes/fr.json` ; contenus répétés : `donnees/*.json` (situations, accompagnements, parcours, coaching, constellations, ateliers, formations).
- Pages : `source/pages/*.mjs`, gabarits communs : `source/gabarits/`. Générer : `node outils/generer.mjs` (ne jamais modifier les `.html` à la main).
- Images : `plan-images.json`, puis le pipeline de la bibliothèque des maquettes (`produire.mjs`, `partage.mjs`).
- Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/`).

## À fournir par la cliente (à compléter)

- **Mentions légales** : éditeur (nom, adresse, numéro d'entreprise ou de TVA BE0830350385 à confirmer), directrice de la publication, hébergeur (Vercel Inc., adresse à vérifier au moment de la mise en ligne).
- **Politique de confidentialité** en français (le site actuel n'en a qu'une en anglais), liée depuis le formulaire et le pied de page.
- **Tarifs et durée des séances** : absents du site actuel ; la maquette affiche « Tarif et durée précisés au premier échange ».
- **Horaires** : absents ; la maquette affiche « Horaires et tarifs précisés au premier échange ».
- **Témoignages** : aucun sur le site actuel, aucun n'a été ajouté.
- **Dates des ateliers** : annoncées sur les réseaux sociaux ; un agenda peut être ajouté si la cliente les fournit.
- **Diplômes** : la description d'une page du site actuel parle de « coachs diplômés de l'Université de Mons » ; non repris, à confirmer.
- **Photos** : quelques vraies photos d'accompagnement (sans visage d'élève) remplaceraient avantageusement les illustrations générées.
- **Constellations familiales** : le site actuel parle de « thérapie brève » et d'« approche thérapeutique ». En Belgique, l'exercice de la psychothérapie (y compris d'orientation systémique et familiale) est réservé aux professionnels agréés (loi du 10 juillet 2016). La maquette parle d'« accompagnement » et précise qu'il ne remplace pas un suivi médical ou psychologique : à faire valider par la cliente.
- **Crédits des illustrations générées** : 10 illustrations créées avec Grok (marquées « Illustration générée » sur le site) : bureau devant la campagne, chemin dans les champs, mains d'élève qui surlignent, table d'atelier, bottes sur un seuil, bureau d'étude, bureau au lever du soleil, figurines en bois, bureau rangé, poteau indicateur.

## Retiré ou remplacé faute d'information

- Prix, durées des séances, horaires (accueil, coaching, rendez-vous) : remplacés par des phrases vraies (« précisés au premier échange »).
- Durées des ateliers « Méthode de travail », « Gestion de réunion », « Bilan d'orientation » : « Durée selon la demande ».
- Accès (parking, transports) : non fournis ; seul un plan schématique situe Héron.

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), formulaire simulé (brancher un vrai envoi), mentions « à compléter » du pied de page et du formulaire, phrases d'attente à remplacer par les vraies informations.
- Garder : la mention « Illustration générée » sur les images créées par IA.
