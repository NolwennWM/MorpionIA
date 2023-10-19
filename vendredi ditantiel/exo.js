
document.addEventListener('DOMContentLoaded', () => {
   
    const paragraphs = document.querySelectorAll('main p');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const paragraph = entry.target;
          paragraph.style.opacity = 1;
          paragraph.style.transform = 'translatex(0)'; 
          observer.unobserve(paragraph); 
        }
      });
    });
  
    paragraphs.forEach(paragraph => {
      observer.observe(paragraph);
    });
  



    
    const main = document.querySelector('main');
    const lastParagraph = paragraphs[paragraphs.length - 1];
    
    const distanceToViewport = 200;
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          for (let i = 0; i < 10; i++) {
            const newParagraph = document.createElement('p');
        newParagraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${i + 1}`;
            newParagraph.style.opacity = 0;
            newParagraph.style.transform = 'translatex(100px)';
            main.appendChild(newParagraph);
            observer.observe(newParagraph);
          }
  
          
          observer2.unobserve(entry.target);
        }
      });
    });
  
    
    observer2.observe(lastParagraph);
  });
  
  
  
  
  
  
  
  
  
  