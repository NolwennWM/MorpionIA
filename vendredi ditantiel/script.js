// JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Exercice 1
    const paragraphs1 = document.querySelectorAll('main:first-of-type p'); // Sélectionne les paragraphes du premier <main>
  
    // Crée un observateur pour les paragraphes de l'exercice 1
    const observer1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const paragraph = entry.target;
          paragraph.style.display = 'block'; // Rend le paragraphe visible
          paragraph.style.opacity = 1; // Animation d'apparition
          observer1.unobserve(paragraph); // Désactive la détection du paragraphe
        }
      });
    });
  
    // Initialise l'observation pour les paragraphes de l'exercice 1
    paragraphs1.forEach(paragraph => {
      paragraph.style.display = 'none'; // Rend les paragraphes invisibles
      observer1.observe(paragraph); // Commence à observer le paragraphe
    });
  
    // Exercice 2
    const paragraphs2 = document.querySelectorAll('main:last-of-type p'); // Sélectionne les paragraphes du deuxième <main>
  
    // Crée un observateur pour les paragraphes de l'exercice 2
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const paragraph = entry.target;
          paragraph.style.display = 'block'; // Rend le paragraphe visible
          paragraph.style.opacity = 1; // Animation d'apparition
          observer2.unobserve(paragraph); // Désactive la détection du paragraphe
        }
      });
    });
  
    // Initialise l'observation pour les paragraphes de l'exercice 2
    paragraphs2.forEach(paragraph => {
      paragraph.style.display = 'none'; // Rend les paragraphes invisibles
      observer2.observe(paragraph); // Commence à observer le paragraphe
    });
  });
  
