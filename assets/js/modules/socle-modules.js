/* Pont entre les modules de la bibliothèque et le socle du projet : les modules demandent pret([...]) ;
   ici GSAP, ScrollTrigger et SplitText sont déjà chargés par la page, le défilement et les mesures sont ceux du socle. */
import { rafraichir, aller } from '../socle/index.js?v=2';

export async function pret() {
  const gsap = window.gsap || null;
  return {
    gsap,
    ScrollTrigger: window.ScrollTrigger || null,
    SplitText: window.SplitText || null,
    calme: false,
    rafraichir,
    lenis: { scrollTo: (y) => aller(typeof y === 'number' ? y : y) },
  };
}
